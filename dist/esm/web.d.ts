import { WebPlugin } from '@capacitor/core';
import type { AppleIdValidRequest, AppleIdValidResponse, SignInWithAppleOptions, SignInWithApplePlugin, SignInWithAppleResponse } from './definitions';
export declare class SignInWithAppleWeb extends WebPlugin implements SignInWithApplePlugin {
    private appleScriptUrl;
    private isAppleScriptLoaded;
    constructor();
    authorize(options?: SignInWithAppleOptions): Promise<SignInWithAppleResponse>;
    isAppleIdValid(_: AppleIdValidRequest): Promise<AppleIdValidResponse>;
    private loadSignInWithAppleJS;
}
