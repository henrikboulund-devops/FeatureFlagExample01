pipeline {
    agent any
    triggers {
        pollSCM("* * * * *") //cron("* * * * *") //pollSCM("* * * * *")
    }
    stages
    {
        stage("BUILD")
        {
            steps
            {
                sh "dotnet build FeatureFlagExample01/FeatureFlagExample01.csproj"
                echo "YAY! We are running!"
            }   
        }

        stage("TEST")
        {
            steps
            {
                script
                {
                    if (env.BRANCH_NAME == 'master')
                    {
                        echo 'I only execute on the master branch'
                    }
                    else
                    {
                        echo 'I execute elsewhere'
                    }
                
                }  
            }  
        }

        stage("DEPLOY")
        {
            steps
            {
                echo 'Deployment started.'
            }
        }
    }
}
