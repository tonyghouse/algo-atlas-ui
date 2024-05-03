export interface QuestionInfo {
    id:string;
    title: string;
    linkUrl: string;
    extLinkUrl:string;
    categories: string[];
    tags: string[];
    comments?: string[];

    marked?:boolean;
  }