interface IUserInfo {
    username : string;
    email : string;
    picture : string;

}

interface ITokenInfo {
    token : string;
}


interface IUserContext {
    isLoading : boolean;
    userInfo : IUserInfo | undefined;
    tokenInfo : ITokenInfo | undefined;
    login : (username : string, password : string) => void;
    signup : (email: string,username : string, password : string) => void;
    logout: () => void;
    withdraw: (username : string, password : string) => void;
}