export interface SignInWithApplePlugin {
  authorize(options?: SignInWithAppleOptions): Promise<SignInWithAppleResponse>;
  isAppleIdValid(request?: AppleIdValidRequest): Promise<AppleIdValidResponse>;
}

export interface AppleIdValidRequest {
  appleId: string;
}

export interface AppleIdValidResponse {
  valid: boolean;
}

export interface SignInWithAppleOptions {
  clientId: string;
  redirectURI: string;
  scopes?: string;
  state?: string;
  nonce?: string;
}

export interface SignInWithAppleResponse {
  response: {
    user: string | null;
    email: string | null;
    givenName: string | null;
    familyName: string | null;
    identityToken: string;
    authorizationCode: string;
  };
}
