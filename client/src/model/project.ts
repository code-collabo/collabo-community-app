export interface Project {
    _id: string;
    title: string;
    url: string;
    type: string;
    children: {
      count: number;
      list: ChildProject[];
    };
    issues: {
      url: string;
    };
    requests: string;
  }
  
  export interface ChildProject {
    title: string;
    url: string;
  }
  