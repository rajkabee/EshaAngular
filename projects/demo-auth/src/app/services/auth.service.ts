import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials));
  }

  logout() { 
  }

  isLoggedIn() { 
    return false;
  }
}

