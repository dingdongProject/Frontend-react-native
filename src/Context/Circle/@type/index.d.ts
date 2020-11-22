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
}
interface IMembersInfo {
    name : string;
    isAdmin : boolean;
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
    changeToCircle: (arg0: boolean, arg1: number) => void;
    setMainPage:()=> void;
    getCircleMembers : (name : string ) => void;
}