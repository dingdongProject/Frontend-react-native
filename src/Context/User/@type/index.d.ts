interface IUserInfo {
    username : string;
    email : string;
    picture : string;
}
interface ICircleInfo {
    name: string;
    explaination: string;
    picture: string;
}

interface ITokenInfo {
    token : string;
}


interface IUserContext {
    isLoading : boolean;
    userInfo : IUserInfo | undefined;
    tokenInfo : ITokenInfo | undefined | null;
    circleInfo : Array<ICircleInfo>;
    login : (username : string, password : string) => void;
    logout: () => void;
    userset: () => void;
    withdraw: (username : string, password : string) => void;
}