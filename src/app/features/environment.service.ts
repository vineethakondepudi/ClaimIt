import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  production: false,
  apiBaseUrl: 'http://172.17.12.38:8081/api',
  constructor() { }
}
