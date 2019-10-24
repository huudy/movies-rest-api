## **MovieRestAPI**

**STEPS**

1. git clone https://github.com/huudy/movies-rest-api.git
2. cd movies-rest-api
3. npm i

4. CREATE A FOLDER STRUCTURE LIKE THIS :
   ![Screenshot from 2019-10-23 21-29-06](https://user-images.githubusercontent.com/15052640/67427693-e380f380-f5dc-11e9-8887-8c28c2ecc42a.png)
   content of two files:
   dev.env
   PORT=3000
   MONGODB_URI=mongodb://127.0.0.1:27017/movie-rest
   OMDB_API_KEY=*x*x*x*x

   test.env
   PORT=3000
   MONGODB_URI=mongodb://127.0.0.1:27017/movie-rest-test
   OMDB_API_KEY=*x*x*x*x

5. RUN APP:
   npm run dev (make sure you have mongo db installed locally that is up and running otherwise you will get a connection error )

6. RUN TESTS:
   npm run test

7. RUN DOCKER:
   docker-compose up --build (make sure you have docker and docker-compose installed if not please follow the link https://docs.docker.com/compose/install/ )

REMEMBER:
change dev.env MONGODB_URI:
MONGODB_URI=mongodb://127.0.0.1:27017/movie-rest

- **URL**

  /movies
  /movies/:id
  /comments
  /comments/:id

- **Method:**

  `GET` | `POST` | `DELETE`

* **Data Params**

  { title: 'your_title'}

* **Success Response:**

  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  - **Code:** 200 <br />
    **Content:** `{ title : Superman, message:'Movie Superman saved sucessfully', plot:'' }`

* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  - **Code:** 500 INTERNAL ERROR <br />
    **Content:** `{ error : "Please report to a support team!" }`

* **Sample Call:**

<\_\_>

- **Notes:**

  <_This is where all uncertainties, commentary, discussion etc. can go. I recommend timestamping and identifying oneself when leaving comments here._>

sudo docker run [...] --env-file ./my_env.list [...]
