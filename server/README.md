# HOW TO USE THE SERVER
#### ensure you are in the web-app/server directory.
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
Start the automated dev server and choose ATLAS connection:
````
npm run dev
````

#### Step 4 (alternative)
You can also use the (manual) dev server alternative for connection to mongoDB atlas:
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
Start the automated dev server and choose LOCAL connection:
````
npm run dev
````

#### Step 4 (alternative)
You can also use the (manual) dev server alternative for connection to local mongoDB:
````
npm run dev:local
````

## API design

|METHOD /endpoint|Description|Request body|
|--|--|:--:|
|GET /project|Get all project items in the database| No Request Body |
|POST /project|Create/add a new project item to the database|title, url, numOfChild|
|GET /project/:projectId|Get a project item stored in the database by its ID|No Request Body|
|DELETE /project/:projectId|Delete a project item from the database by its ID|No request body|

## API call requests and responses

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
            "numOfChild": string,
            "request": {
                "type": "GET",
                "url": "string"
            }
        },
        // etc.
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
    "numOfChild": number
}
NOTE: all three params are required.
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
        "numOfChild": number,
        "request": {
            "type": "POST",
            "url": "string"
        }
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
    "numOfChild": number,
    "request": {
        "type": "GET",
        "url": "string"
    }
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
    "request": {
        "type": "DELETE",
        "url": "string",
        "body": {
            "title": "string",
            "url": "string",
            "numOfChild": "number"
        }
    }
}
</pre>
</details>
