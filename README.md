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

## API design

|METHOD /endpoint|Description|Request body|
|--|--|:--:|
|GET /projects|Get all project items in the database| No Request Body |
|POST /projects|Create/add a new project item to the database|title, url, children, issues (all are required)|
|DELETE /projects/:projectId|Delete a project item from the database by its ID|No request body|
|PATCH /projects/:projectId|Update a project item stored in the database by its ID|title, url, children, issues (all are not necessarily required)|

## API call requests and responses

<details>
<summary>GET /projects</summary>
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
            "isStandAlone": boolean,
            "children": {
                "count": number,
                "list": [
                  {
                    "title": "string",
                    "url": "string",
                  },
                  // etc ...
                ]
            },
            "issues": {
                "url": "string"
            },
            "requests": "string"
        },
        // etc ...
    ]
}

NOTE: 'isStandAlone' property is true when 'children' array is empty 
and false when 'children' array is not empty.
</pre>
</details>



<details>
<summary>POST /projects</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
{
    "title": "string",
    "url": "string",
    "children": [
        {
            "title": "string",
            "url": "string"
        },
        // etc ...
    ],
    "issues": {
        "url": "string"
    }
}

NOTE: all properties are required.

NOTE: 'children' array can be empty or not.

NOTE: 'isStandAlone' property is automatically updated 
on the backend based on the 'children' property
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
        "isStandAlone": boolean,
        "children": [
            {
                "title": "string",
                "url": "string"
            },
            // etc ...
        ],
        "issues": {
            "url": "string"
        },
        "requests": "string"
    }
}

NOTE: you will notice that 'isStandAlone' property is automatically
updated on the backend based on the 'children' property

NOTE: 'isStandAlone' is true when 'children' array is empty 
and false when 'children' array is not empty.
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
    "requests": {
        "GET": {
            "method": "GET",
            "description": "Get all projects",
            "url": "string"
        },
        "POST": {
            "method": "POST",
            "description": "Create a new project",
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
                    "string"
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




<details>
<summary>PATCH /projects/:projectId</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
{
    "title": "string",
    "url": "string",
    "children": [
        {
            "title": "string",
            "url": "string"
        },
        // etc ...
    ],
    "issues": {
        "url": "string"
    }
}

NOTE: all properties are not required during update.
you can choose to update all or any preferred property.

NOTE: 'isStandAlone' property is automatically updated 
on the backend based on the 'children' property
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
        "isStandAlone": boolean,
        "children": [
            {
                "title": "string",
                "url": "string"
            },
            // etc ...
        ],
        "issues": {
            "url": "string"
        },
        "requests": "string"
    }
}

NOTE: you will notice that 'isStandAlone' property is automatically
updated on the backend based on the 'children' property

NOTE: 'isStandAlone' is true when 'children' array is empty 
and false when 'children' array is not empty.
</pre>
</details>