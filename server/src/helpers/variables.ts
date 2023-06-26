export const port: string | number = process.env.PORT_ATLAS || 3000;
export const res: { [key: string]: unknown } = {};
export const items = {
  project: 'project',
  user: 'user',
}

export const filterData = {
  interests:[
    "Coding",
    "UI/UX Design",
    "Technical Writing"
  ],
  skillset:[
    "Github",
    "Gitbook",
    "Figma",
    "Javascript",
    "Typescript",
    "React(Nextjs)",
    "MongoDB",
    "Nodejs",
    "Angular"
  ],
  roles:[
    "admin",
    "moderator"
  ]
}

export const adminData = {
  firstname: "Admin",
  lastname: "Admin",
  username: "admin",
  email: "admin@codecollabo.com",
  password: "admin",
  roles: ["admin"],
}