export interface AppState {
  isSigninSignup: boolean;
}

export interface UserState {
  user:{
    email: string;
    token: string;
  } 
}


