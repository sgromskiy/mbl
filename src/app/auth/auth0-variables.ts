interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'wzT5q8wr55Hy5xRVWM07UJ33NR6IKV2u',
  domain: 'mbl.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};


// 
// https://mybooklib-7af0.restdb.io/auth/userinfo
// Authorization : Bearer idToken