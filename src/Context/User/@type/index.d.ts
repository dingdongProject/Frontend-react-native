interface IUserInfo {
    username : string;
    password : string;
}


interface IUserContext {
    isLoading : boolean;
    userInfo : IUserInfo | undefined;
    login : (username : string, password : string) => void;
    signup : (username : string, password : string) => void;
    getUserInfo : () => void;
    logout: () => void
}