import { sleep } from 'k6';
import http from 'k6/http';

export default function () {
  http.get('http://test-api.k6.io/public/crocodiles');
  sleep(3);
}
