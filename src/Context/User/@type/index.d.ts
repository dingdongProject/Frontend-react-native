interface IUserInfo {
    username : string;
    email : string;
    picture : string;
}
interface ICircleInfo {
    name: string;
    explanation: string;
    picture: string;
    isAdmin: boolean;
}

interface IRequest {
    requester: IUserInfo;
    circle: ICircleInfo;
    isProcessed : string;
    id: number;
}

interface IUserContext {
    isLoading : boolean;
    userInfo : IUserInfo | undefined;
    circleInfo : Array<ICircleInfo>;
    tokenInfo : string | null;
    noticeMain: Array<IPostInfo>;
    newsMain: Array<IPostInfo>;
    requests: Array<IRequest>;
    addCircle : (data: FormData) => void;
    login : (username : string, password : string) => void;
    logout: () => void;
    userset: () => void;
    mainPageSet: () => void;
}