interface IBoardInfo {
    name: string;
    id: number;
    memberWrite: boolean;
}
interface IPostSimpleInfo {
    title: string;
    content: string;
    id: number;
}
interface IPostInfo {
    title: string;
    content: string;
    created: string;
    owner: string;
    id: number;
    board: number;
    images: Array<{image: string}>;
    comments: Array<{content: string, owner: {username: string, picture:string}, created_at: string}>;
}
interface IMembersInfo {
    name : string;
    isAdmin : boolean;
}

interface ISchedules {
    title : string;
    content : string;
    datetime : string;
    created: string;
}

interface ICircleContext {
    isLoading : boolean;
    isCircle: boolean;
    circleChosen : ICircleInfo | undefined;
    circleNotices: Array<IPostSimpleInfo>;
    circleGallery: Array<string>;
    circleFeeds: Array<IPostSimpleInfo>;
    circleBoards: Array<IBoardInfo>;
    circleMembers : Array<IMembersInfo>;
    circleSchedule : Array<ISchedules>;
    circleDate : Array<String>;
    changeToCircle: (arg0: boolean, arg1: number) => void;
    setMainPage:()=> void;
    getCircleMembers : (name : string ) => void;
    addBoard:(name: string) => void;
}