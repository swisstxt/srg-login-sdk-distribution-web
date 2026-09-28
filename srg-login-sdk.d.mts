type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
export declare const PROMPT: { get(): string; };
export declare const UI_LOCALES: { get(): string; };
export declare const LOGIN_HINT: { get(): string; };
export declare const MAX_AGE: { get(): string; };
export declare const PROMPT_NONE: { get(): string; };
export declare const PROMPT_LOGIN: { get(): string; };
export declare const PROMPT_CONSENT: { get(): string; };
export declare const PROMPT_SELECT_ACCOUNT: { get(): string; };
export declare class SrgLoginWeb {
    constructor(clientId: string, redirectUri: string, environment: string, appId: string, appName: string, appVersion: string, businessUnit: string, businessUnitName: string, postLogoutRedirectUri: Nullable<string>, enableLogging: boolean);
    login(scopes: Array<string>, additionalParameters?: any): Promise<void>;
    loginSilently(scopes: Array<string>): Promise<void>;
    handleRedirect(): Promise<LoginResultJs>;
    logoutThisDevice(): Promise<void>;
    logoutLocally(): Promise<void>;
    logout(): Promise<void>;
    isAuthenticated(): Promise<boolean>;
    getAccessToken(): Promise<Nullable<string>>;
    refreshAccessToken(): Promise<Nullable<string>>;
    getUserInfo(): Promise<Nullable<UserInfoJs>>;
    refreshUserInfo(): Promise<Nullable<UserInfoJs>>;
    openProfile(ssoClientUrl: string): Promise<void>;
    observeTokenState(onState: (p0: string) => void): () => void;
}
export declare namespace SrgLoginWeb {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => SrgLoginWeb;
    }
}
export declare class LoginResultJs {
    private constructor();
    get authenticated(): boolean;
    get errorCode(): Nullable<string>;
    get errorMessage(): Nullable<string>;
}
export declare namespace LoginResultJs {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => LoginResultJs;
    }
}
export declare class UserInfoJs {
    private constructor();
    get subject(): string;
    get email(): Nullable<string>;
    get emailVerified(): Nullable<boolean>;
    get name(): Nullable<string>;
    get givenName(): Nullable<string>;
    get familyName(): Nullable<string>;
    get preferredUsername(): Nullable<string>;
    get picture(): Nullable<string>;
}
export declare namespace UserInfoJs {
    /** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
    namespace $metadata$ {
        const constructor: abstract new () => UserInfoJs;
    }
}