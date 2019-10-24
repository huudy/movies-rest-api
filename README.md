## **MovieRestAPI**

**STEPS**

1. `git clone https://github.com/huudy/movies-rest-api.git`
2. `cd movies-rest-api`
3. `npm i`

4. CREATE A FOLDER STRUCTURE LIKE THIS :<br />
   
   ![structure](https://user-images.githubusercontent.com/15052640/67496579-e4696200-f67c-11e9-8a4c-c4aba48bfb0c.png)
   content of three files:
   - **dev.env:**
   PORT=3000
   MONGODB_URI=mongodb://127.0.0.1:27017/movie-rest
   OMDB_API_KEY=*x*x*x*x

   - **test.env:**
   PORT=3000
   MONGODB_URI=mongodb://127.0.0.1:27017/movie-rest-test
   OMDB_API_KEY=*x*x*x*x


   - **dc.env:**
   PORT=3000
   MONGODB_URI=mongodb://mongo:27017/movie-rest-test
   OMDB_API_KEY=*x*x*x*x
   
   You can get the OMDB_API_KEY from here => https://www.omdbapi.com/
   
5. RUN APP:
   `npm run dev` (make sure you have mongo db installed locally that is up and running otherwise you will get a connection error )

6. RUN TESTS:
   `npm run test`

7. RUN DOCKER:
   `docker-compose up --build` (make sure you have docker and docker-compose installed if not please follow the link https://docs.docker.com/compose/install/ )

- **URL**

  /movies
  /movies/:id
  /comments
  /comments/:id

- **Method:**

  `GET` | `POST` | `DELETE`

* **Data Params**

   `POST`
   /movies
  `{ title: 'your_title'}`
  
  `POST`
  /comments
  `{ author: 'author_name', text:'comment_text'}`

* **Success Response:**

  - **Code:** 201 <br />
    **Content:** `{"Title":"Batman","Plot":"The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.","Message":"Movie Batman was successfully saved to the DB"}`

* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  - **Code:** 500 INTERNAL ERROR <br />
    **Content:** `{ error : "Please report to a support team!" }`

* **Sample Call:**

<\_\_>

* **Live Demo:**

