export declare module Login {
  type PostRequest = {
    email: string
    password: string
  }

  type PostResponse = {
    "access_token": string
    "token_type": string
  }
}
