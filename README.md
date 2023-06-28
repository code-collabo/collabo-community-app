# Collabo Web App
**Goal**: Collabo Web App is to help create more awareness and visiblity for the Code Collabo Community, projects and programs within it.

Work is ongoing in the following areas:
- UI/UX design
- Client development
- API development

#
**Progress:** Follow the development progress through the [Q2 Project Board](https://github.com/orgs/code-collabo/projects/1/views/6).
#

# Server and API

## Connection option 1: Running the development server (mongoDB Atlas)
#### Step 1
change directory into the server folder

#### Step 2
Install dependencies:
````
npm install
````

#### Step 3
- Ensure you have internet connection
- Have a monogDB atlas cluster set up in the cloud
- Get your atlas mongoDB uri string

#### Step 4
- Rename the `.env.example` file to `.env`
- Change `PORT_ATLAS` environment variable to your preferred port number in the .env file
- Add your atlas mongoDB uri string to the `MONGODB_ATLAS_URI` environment variable in the .env file

#### Step 5
Start the automated development server and choose ATLAS connection:
````
npm run dev
````

#### Step 5 (alternative)
You can also use the (manual) development server alternative for connection to mongoDB atlas:
````
npm run dev:atlas
````

## Connection option 2: Running the development server (mongoDB local)
#### Step 1
change directory into the server folder

#### Step 2
Install dependencies:
````
npm install
````

#### Step 3
- Have mongoDB installed and running on your computer
- Get your local mongoDB uri string

#### Step 4
- Rename the `.env.example` file to `.env`
- Change `PORT_LOCAL` environment variable to your preferred port number in the .env file
- Add your local mongoDB uri string to the `MONGODB_LOCAL_URI` environment variable in the .env file

#### Step 5
Start the automated development server and choose LOCAL connection:
````
npm run dev
````

#### Step 6 (alternative)
You can also use the (manual) development server alternative for connection to local mongoDB:
````
npm run dev:local
````

## Automated development server and commands
- `npm run dev` is the command that starts the automated development server. It prompts you to choose your preferred connection setup type the first time you use it, and saves the chosen connection setup type for every other time you come back to use it. It also automatically installs or set up the db and server files for the chosen connection setup type.
- `npm run dev:restore` resets the automated development server back to first time usage condition i.e. it removes your previously saved connection setup type and the development server will now assume that you are a first timer. After using this command, you will now have the option to set your preferred connection type again the next time you start the server with the `npm run dev` command.
- `npm run dev:change` is useful for when you are not a first time user and want to change your connection set up type without restoring the automated development server to first time usage condition. It will prompt you to choose your connection setup type, but it will not install the db and server files for the chosen connection setup type.

#

<br/>
<br/>

## API DESIGN (Basic Authentication Setup and Test)

<br/>

## User Authentication Summary

|METHOD /endpoint|Description|Request body|
|--|--|:--:|
|POST users/auth/signup|Create/register a new user (requires super-admin privilege)|firstname, lastname, username, img, email, password|
|POST users/auth/signin|authenticate and signs in an existing user|email, password|
|GET /users|Get all users in the database (requires super-admin and moderator privileges)|No Request Body|
|GET /users/super-admin|Gets the super-admin info (requires super-admin privilege)|No Request Body|
|GET /users/:userId|Gets a user info in the database by id (requires super-admin and moderator privileges)|No Request Body|
|PATCH /users/super-admin|updates the super-admin info (requires super-admin privilege) - roles and username properties cannot be updated|firstname, lastname, img, email, password|
|PATCH /users/:userId|updates a user info in the database by id (requires super-admin and moderator privileges) - roles and username properties cannot be updated|firstname, lastname, img, email, password|
|PATCH /users/:userId|updates a user role property info in the database by the user id (requires super-admin privilege) - only roles properties can be updated by super-admin for any user|roles|
|DELETE /users/:userId|Delete a user from the database by ID (requires super-admin priviledge)|No request body|

<br/>

## Super Admin default value

<details>
<summary>super-admin default value (automatically created)</summary>
<br/>
<pre>
{
  firstname: "Super",
  lastname: "Admin",
  username: "super-admin",
  email: "superadmin@codecollabo.com",
  password: "12345",
  roles: ["super-admin"],
}
</pre>
</details>

<br/>

## User Authentication API call requests and responses

<details>
<summary>POST /users/auth/signup</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
{
  "firstname": "string",
  "lastname": "string",
  "username": "string",
  "email": "string",
  "password": "string",
  "img": "string" (not required)
}
</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "message": "string",
    "user": {
        "_id": "string",
        "firstname": "string",
        "lastname": "string",
        "username": "string",
        "email": "string",
        "roles": [
            "moderator"
        ],
        "img": "string",
        "createdAt": "string - date",
        "updatedAt": "string - date",
        "requests": "string"
    }
}
</pre>
</details>




<details>
<summary>POST /users/auth/signin</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
{
    "email": "string (required)", 
    "password": "string (required)"
}
</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "message": "string",
    "user": {
        "token": "string(JWT-carries info about the user's {_id, username, roles})",
        "requests": "string"
    }
}
</pre>
</details>



<details>
<summary>GET /users</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
No request body
</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "count": number,
    "users": [
        {
            "_id": "string",
            "firstname": "string",
            "lastname": "string",
            "username": "string",
            "email": "string",
            "roles": [
                "moderator"
            ],
            "createdAt": "string - date",
            "updatedAt": "string - date",
            "requests": "string"
        },
        // etc.
    ]
}
</pre>
</details>



<details>
<summary>GET /users/super-admin</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
No request body
</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "_id": "string",
    "firstname": "string",
    "lastname": "string",
    "username": "super-admin",
    "email": "string",
    "roles": [
        "super-admin"
    ],
    "createdAt": "string - date",
    "updatedAt": "string - date",
    "requests": "string"
}
</pre>
</details>


<details>
<summary>GET /users/:userId</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
No request body
</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "_id": "string",
    "firstname": "string",
    "lastname": "string",
    "username": "string",
    "email": "string",
    "roles": [
        "moderator"
    ],
    "createdAt": "string - date",
    "updatedAt": "string - date",
    "requests": "string"
}
</pre>
</details>


<details>
<summary>PATCH /users/super-admin</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
{
  "firstname": "string",
  "lastname": "string",
  "username": "string",
  "email": "string",
  "password": "string",
  "img": "string"
}
NOTE: any property can be ommited or updated
</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "message": "string",
    "user": {
        "_id": "string",
        "firstname": "string",
        "lastname": "string",
        "username": "super-admin",
        "email": "string",
        "roles": [
            "super-admin"
        ],
        "img": "string",
        "createdAt": "string - date",
        "updatedAt": "string - date",
        "requests": "string"
    }
}
</pre>
</details>


<details>
<summary>PATCH /users/:userId</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
{
  "firstname": "string",
  "lastname": "string",
  "username": "string",
  "email": "string",
  "password": "string",
  "img": "string"
}
NOTE: any property can be ommited or updated
</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "message": "string",
    "user": {
        "_id": "string",
        "firstname": "string",
        "lastname": "string",
        "username": "string",
        "email": "string",
        "roles": [
            "moderator"
        ],
        "img": "string",
        "createdAt": "string - date",
        "updatedAt": "string - date",
        "requests": "string"
    }
}
</pre>
</details>


<details>
<summary>PATCH /users/:userId</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
{
  "roles": ["moderator", .... etc.]
}
NOTE: only moderator role is allowed for now
</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "message": "string",
    "user": {
        "_id": "string",
        "firstname": "string",
        "lastname": "string",
        "username": "string",
        "email": "string",
        "roles": [
            "moderator"
        ],
        "img": "string",
        "createdAt": "string - date",
        "updatedAt": "string - date",
        "requests": "string"
    }
}
</pre>
</details>


<details>
<summary>DELETE /users/:userId</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
No request body
</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "message": "string",
}
</pre>
</details>

</br>
<br/>

## Project Access Summary


|METHOD /endpoint|Description|Request body|
|--|--|:--:|
|POST /projects|Create/add a new project to the database (requires authentication and super-admin privilege)|title, url, img, children, issues, interest, skills (all are required)|
|GET /projects|Get all project items in the database (you can also filter by interest and(or) by skills). (requires no authentication or authorization)| No Request Body |
|GET /projects/:projectId|Get a project item from the database by its ID (requires no authentication or authorization)|No request body|
|PATCH /projects/:projectId|Update a project item stored in the database by its ID (requires authentication with super-admin and moderator privileges)|title, url, img, children, issues, interest, skills (all are not necessarily required)|
|DELETE /projects/:projectId|Delete a project item from the database by its ID (requires authentication and super-admin privilege)|No request body|
|DELETE /projects|Delete all projects in the database (requires authentication and super-admin privilege)|No request body|

<br/>

## Filter Data

<details>
<summary>Filter Data Options (By interest or By skills)</summary>
<br/>
<pre>
{
  "interests":[
    "Coding",
    "UI/UX Design",
    "Technical Writing"
  ],
  "skillset":[
    "Github",
    "Gitbook",
    "Figma",
    "Javascript",
    "Typescript",
    "React(Nextjs)",
    "MongoDB",
    "Nodejs",
    "Angular"
  ]
}
</pre>
</details>

<br/>

## API call requests and responses

<details>
<summary>POST /projects</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
  {
    "title": "string",
    "url": "string",
    "issue": "string",
    "img": "string",
    "interest": ["string", ...],
    "skills": ["string", ...],
    "children": [
        {
          "title": "string",
          "url": "string",
          "interest": ["string", ...],
          "skills": ["string", ...]
        },
        // etc.
    ]
  }

NOTE: all properties are required.

NOTE: 'children' array can be empty or not.

NOTE: values of interest and skills must match values 
of that of the interest an skillSet filterData.

</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "message": "string",
    "project": {
        "_id": "string",
        "title": "string",
        "url": "string",
        "issue": "string",
        "img": "string",
        "interest": [
            "string",
            // etc.
        ],
        "skills": [
            "string",
            // etc.
        ],
        "children": [
            {
                "_id": "string",
                "title": "string",
                "url": "string",
                "interest": [
                    "string",
                    // etc.
                ],
                "skills": [
                    "string",
                    // etc
                ]
            },
            // etc.
        ],
        "createdBy": "string - username",
        "createdAt": "string - date",
        "updatedBy": "string - username",
        "updatedAt": "string - date",
        "requests": "string"
    }
}
</pre>
</details>



<details>
<summary>GET /projects   or   GET /projects?interest=Coding,UI/UX Design, ...&skills=Github,Javascript, ...</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
No request body
</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "count": number,
    "projects": [
        {
            "_id": "string",
            "title": "string",
            "url": "string",
            "issue": "string",
            "img": "string",
            "interest": [
                "string",
                ...
            ],
            "skills": [
                "String",
                ...
            ],
            "children": {
                "count": number,
                "list": [
                    {
                        "_id": "string",
                        "title": "string",
                        "url": "string",
                        "interest": [
                            "string",
                            ...
                        ],
                        "skills": [
                            "string",
                            ...
                        ]
                    },

                    // etc.
                ]
            },
            "createdBy": "string - username",
            "createdAt": "string - date",
            "updatedBy": "string - username",
            "updatedAt": "string - date",
            "requests": "string"
            "requests": "string"
        },
        
        // etc.
    ]
}

</pre>
</details>




<details>
<summary>GET /projects/:projectId</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
No request body
</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "_id": "string",
    "title": "string",
    "url": "string",
    "issue": "string",
    "img": "string",
    "interest": [
        "string",
        ...
    ],
    "skills": [
        "string",
        ...
    ],
    "children": [
        {
            "_id": "string",
            "title": "string",
            "url": "string",
            "interest": [
                "string",
                ...
            ],
            "skills": [
                "string",
                ...
            ]
        },
        
        // etc.
    ],
    "createdBy": "string - username",
    "createdAt": "string - date",
    "updatedBy": "string - username",
    "updatedAt": "string - date",
    "requests": "string"
    "requests": "string"
}

</pre>
</details>



<details>
<summary>PATCH /projects/:projectId</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
{
    "title": "string",
    "url": "string",
    "issue": "string",
    "img": "string",
    "interest": ["string", ...],
    "skills": ["string", ...],
    "children": [
        {
          "title": "string",
          "url": "string",
          "interest": ["string", ...],
          "skills": ["string", ...]
        },
        // etc.
    ]
  }

NOTE: all properties are not required during update.
you can choose to update all or any preferred property.

NOTE: values of interest and skills must match values 
of that of the interest an skillSet filterData.

</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "message": "string",
    "project": {
        "_id": "string",
        "title": "string",
        "url": "string",
        "issue": "string",
        "img": "string",
        "interest": [
            "string",
            ...
        ],
        "skills": [
            "string",
            ...
        ],
        "children": [
            "title": "string",
            "url": "string",
            "interest": [
                "string",
                ...
            ],
            "skills": [
                "string",
                ...
            ],
        ],
        "createdBy": "string - username",
        "createdAt": "string - date",
        "updatedBy": "string - username",
        "updatedAt": "string - date",
        "requests": "string"
        "requests": "string"
    }
}
</pre>
</details>



<details>
<summary>DELETE /projects/:projectId</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
No request body
</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "message": "string",
}
</pre>
</details>


<details>
<summary>DELETE /projects</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
No request body
</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "message": "string"
}
</pre>
</details>
