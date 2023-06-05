# Collabo Web App
**Goal**: Collabo Web App is to help create more awareness and visiblity for the Code Collabo Community, projects and programs within it.

Work is ongoing in the following areas:
- UI/UX design
- Client development
- API development

#
**Progress:** Follow the development progress through the [Q2 Project Board](https://github.com/orgs/code-collabo/projects/1/views/6).

<br/>
<br/>
<br/>

# Server API

## Connection option 1: Running the development server (mongoDB Atlas)
#### Step 1
Install dependencies:
````
npm install
````

#### Step 2
- Ensure you have internet connection
- Have a monogDB atlas cluster set up in the cloud
- Get your atlas mongoDB uri string

#### Step 3
- Rename the `.env.example` file to `.env`
- Change `PORT_ATLAS` environment variable to your preferred port number in the .env file
- Add your atlas mongoDB uri string to the `MONGODB_ATLAS_URI` environment variable in the .env file

#### Step 4
Start the automated development server and choose ATLAS connection:
````
npm run dev
````

#### Step 4 (alternative)
You can also use the (manual) development server alternative for connection to mongoDB atlas:
````
npm run dev:atlas
````

## Connection option 2: Running the development server (mongoDB local)
#### Step 1
Install dependencies:
````
npm install
````

#### Step 2
- Have mongoDB installed and running on your computer
- Get your local mongoDB uri string

#### Step 3
- Rename the `.env.example` file to `.env`
- Change `PORT_LOCAL` environment variable to your preferred port number in the .env file
- Add your local mongoDB uri string to the `MONGODB_LOCAL_URI` environment variable in the .env file

#### Step 4
Start the automated development server and choose LOCAL connection:
````
npm run dev
````

#### Step 4 (alternative)
You can also use the (manual) development server alternative for connection to local mongoDB:
````
npm run dev:local
````

## Automated development server and commands
- `npm run dev` is the command that starts the automated development server. It prompts you to choose your preferred connection setup type the first time you use it, and saves the chosen connection setup type for every other time you come back to use it. It also automatically installs or set up the db and server files for the chosen connection setup type.
- `npm run dev:restore` resets the automated development server back to first time usage condition i.e. it removes your previously saved connection setup type and the development server will now assume that you are a first timer. After using this command, you will now have the option to set your preferred connection type again the next time you start the server with the `npm run dev` command.
- `npm run dev:change` is useful for when you are not a first time user and want to change your connection set up type without restoring the automated development server to first time usage condition. It will prompt you to choose your connection setup type, but it will not install the db and server files for the chosen connection setup type.

## Testing with the demo setup
A demo setup (i.e. collection, endpoints etc) already exists to help you get started with using the node-mongo API boilerplate templates. Running the demo setup will help you understand how to create your own collection endpoints etc. The API design and API call requests and responses sections below will help you understand how the demo setup works.

<br/>
<br/>

## API DESIGN (Basic Authentication Setup and Test)

<br/>

## User Authentication Summary

|METHOD /endpoint|Description|Request body|
|--|--|:--:|
|POST users/register|Create/register a new user|name, email, password|
|POST users/login|login an existing user (registration required)|email, password|
|GET /users|Get all users in the database |No Request Body|
|DELETE /users/:userId|Delete a user from the database by ID|No request body|

## User Authentication API call requests and responses

<details>
<summary>POST /users/register</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
{
    "name": "string (required)",
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
        "_id": "string",
        "name": "string",
        "email": "email",
        "token": "string (JWT)",
        "createdAt": "string",
        "updatedAt": "string",
        "requests": "string"
    }
}
</pre>
</details>




<details>
<summary>POST /users/login</summary>
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
        "_id": "string",
        "name": "string",
        "email": "email",
        "token": "string (JWT)",
        "createdAt": "string",
        "updatedAt": "string",
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
            "name": "string",
            "email": "string",
            "createdAt": "string",
            "updatedAt": "string",
            "requests": "string"
        },
        // etc.
    ]
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
    "requests": {
        "GET": {
            "method": "string",
            "description": "string",
            "url": "string"
        },
        "POST": {
            "method": "string",
            "description": "string",
            "url": "http://localhost:8070/users/register",
            "body": {
                "name": "string (required)",
                "email": "string (required)", 
                "password": "string (required)"
            }
        }
    }
}
</pre>
</details>

</br>

## Project Access Summary

|METHOD /endpoint|Description|Request body|
|--|--|:--:|
|GET /project|Get all project items created by the user (login required)| No Request Body |
|POST /project|Creating a new project by a user (login required)|title, url, numOfChild|
|GET /project/:projectId|Get a project item by ID by the user (login required)|No Request Body|
|DELETE /project/:projectId|Delete a project item from the users project collection (login required)|No request body|

## Projects Access API call requests and responses

<details>
<summary>GET /project</summary>
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
            "type": "string",
            "children": {
                "count": number,
                "list": [
                    {
                        "title": "string",
                        "url": "string"
                    },
                    // etc.
                ]
            },
            "issues": {
                "url": "string"
            },
            "createdBy": "string",
            "requests": "string"
        }
    ]
}
</pre>
</details>



<details>
<summary>POST /project</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
{
    "title": "string",
    "url": "string",
    "type": "string ("parent" or "stand-alone")",
    "children": [
        {
            "title":"string",
            "url":"string"
        },
        // etc.
    ],
    "issues": {
        "url": "string"
    }
}
</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "message": "string",
    "newProject": {
        "_id": "string",
        "title": "string",
        "url": "string",
        "type": "string",
        "children": [

        ],
        "issues": {
            "url": "string"
        },
        "createdBy": "string (user id)",
        "requests": "string"
    }
}
</pre>
</details>



<details>
<summary>GET /project/:projectId</summary>
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
    "type": "string",
    "children": {
        "count": number,
        "list": [

        ]
    },
    "issues": {
        "url": "string"
    },
    "createdBy": "string (user id)",
    "requests": "string"
}
</pre>
</details>


<details>
<summary>DELETE /project/:projectId</summary>
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
    "requests": {
        "GET": {
            "method": "string",
            "description": "string",
            "url": "string"
        },
        "POST": {
            "method": "string",
            "description": "string",
            "url": "string",
            "body": {
                "title": "string",
                "url": "string",
                "type": "string",
                "children": [
                    {
                        "title": "string",
                        "url": "string"
                    },
                    "Note: add as many objects (having title and url properties) as you like in this children array"
                ],
                "issues": {
                    "url": "string"
                }
            }
        }
    }
}
</pre>
</details>

</br>
</br>
</br>

## Documentation
See the links to the official documentation of the node-mongo project and community building it below:
- [Node Mongo documentation](https://code-collabo.gitbook.io/node-mongo-v2.0.0)
- [Code Collabo documentation](https://code-collabo.gitbook.io/community-doc-v1.0.0)

