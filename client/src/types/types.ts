export interface AppState {
  isSigninSignup: boolean;
}

export interface UserState {
  user:{
    name: string;
    email: string;
    picture: string | null;
  } 
}


