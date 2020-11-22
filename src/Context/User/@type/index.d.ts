interface IUserInfo {
    username : string;
    email : string;
    picture : string;
}
interface ICircleInfo {
    name: string;
    explanation: string;
    picture: string;
}

interface IUserContext {
    isLoading : boolean;
    userInfo : IUserInfo | undefined;
    circleInfo : Array<ICircleInfo>;
    tokenInfo : string | null;
    addCircle : (data: FormData) => void;
    login : (username : string, password : string) => void;
    logout: () => void;
    userset: () => void;
}