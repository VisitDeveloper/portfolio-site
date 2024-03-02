export interface ListSearchItem {
    type: string;
    status: boolean;
    id: number;
}

export interface DataCardProject {
    id?: number;
    title?: string;
    desc?: string;
    type?: string;
    image?: string;
    duration?:string;
    flag?:Array<string>;
    link?:string;
    descriptionLong?: string;
  }