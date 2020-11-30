interface IBoardInfo {
    name: string;
    id: number;
    memberWrite: boolean;
}
interface IPostInfo {
    title: string;
    content: string;
    created: string;
    owner: {username:string, picture:string};
    id: number;
    board: number;
    images: Array<{image: string}>;
    comments: Array<{content: string, owner: {username: string, picture:string}, created_at: string}>;
}
interface IMembersInfo {
    name : string;
    isAdmin : boolean;
}

interface circleSchedules {
    title : string;
    content : string;
    datetime : string;
}

interface ISchedules {
    circle : string;
    scheduleList : Array<{title : string, content : string , datetime : string}>;  
}

interface ICircleContext {
    isCircleLoading : boolean;
    isCircle: boolean;
    circleChosen : ICircleInfo | undefined;
    circleNotices: Array<IPostInfo>;
    circleGallery: {image: string};
    circleFeeds: Array<IPostInfo>;
    circleBoards: Array<IBoardInfo>;
    circleMembers : Array<IMembersInfo>;
    circleSchedule : Array<circleSchedules>;
    ISchedule : Array<ISchedules>;
    changeToCircle: (arg0: boolean, arg1: number) => void;
    setMainPage:()=> void;
    getCircleMembers : (name : string ) => void;
    addBoard:(name: string) => void;
    getSchedule : () => void;
}