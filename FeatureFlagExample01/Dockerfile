FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["FeatureFlagExample01/FeatureFlagExample01.csproj", "FeatureFlagExample01/"]
RUN dotnet restore "FeatureFlagExample01/FeatureFlagExample01.csproj"
COPY . .
WORKDIR "/src/FeatureFlagExample01"
RUN dotnet build "FeatureFlagExample01.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "FeatureFlagExample01.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "FeatureFlagExample01.dll"]
