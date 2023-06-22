export interface Project {
  _id: string;
  title: string;
  url: string;
  issue: string;
  img: string;
  interest: string[];
  skills: string[];
  children: {
        _id: string;
        title: string;
        url: string;
        interest: string[];
        skills: string[];
      }[];
    }


  export interface ChildProject {
    title: string;
    url: string;
    interest: string[];
    skills: string[];
  }
  




//   _id: string;
//   title: string;
//   url: string;
//   issue: string;
//   img: string;
//   interest: string[];
//   skills: string[];
//   children: {
//     _id: string;
//     title: string;
//     url: string;
//     interest: string[];
//     skills: string[];
//   }[];
// }