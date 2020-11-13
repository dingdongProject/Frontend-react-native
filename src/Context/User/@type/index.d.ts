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
    tokenInfo : ITokenInfo | undefined | null;
    login : (username : string, password : string) => void;
    signup : (email: string,username : string, password : string) => void;
    logout: () => void;
    userset: () => void;
    withdraw: (username : string, password : string) => void;
}