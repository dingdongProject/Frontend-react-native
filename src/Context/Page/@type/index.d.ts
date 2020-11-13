type IPageInfo = {
    Circlename : string;
    
}

interface IPageContext {
    isLoading : boolean;
    PageInfo : IPageInfo | undefined;
    // PageList : IPageInfo | undefined;
    pagetracer : (Circlename : string) => void;
    protopage : () => void;
    
}