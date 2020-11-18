interface IBoardInfo {
    name: string;
    id: number;
    writePerm: boolean;
}
interface IPostSimpleInfo {
    title: string;
    content: string;
}

interface ICircleContext {
    isCircle: boolean;
    circleInfo : ICircleInfo | undefined;
    circleNotices: Array<IPostSimpleInfo>;
    circleGallery: Array<string>;
    circleFeeds: Array<IPostSimpleInfo>;
    circleBoards: Array<IBoardInfo>;
    changeIsCircle: (arg0: boolean) => void;
}