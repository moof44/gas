export interface AuthState {
    user: UserInfo | null;
    isLoggedIn: boolean;
}

export interface UserInfo{
    uid: string,
    displayName: string | null,
    isAnonymous: boolean,
}