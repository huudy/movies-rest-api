## **MovieRestAPI**

**STEPS**

1. `git clone https://github.com/huudy/movies-rest-api.git`
2. `cd movies-rest-api`
3. `npm i`

4. CREATE A FOLDER STRUCTURE LIKE THIS :<br />
   
   ![structure](https://user-images.githubusercontent.com/15052640/67496579-e4696200-f67c-11e9-8a4c-c4aba48bfb0c.png)<br />
   content of three files:
   - **dev.env:**
  `PORT=3000`
  `MONGODB_URI=mongodb://127.0.0.1:27017/movie-rest`
  `OMDB_API_KEY=*x*x*x*x`

   - **test.env:**
   `PORT=3000`
   `MONGODB_URI=mongodb://127.0.0.1:27017/movie-rest-test`
   `OMDB_API_KEY=*x*x*x*x`


   - **dc.env:**
   `PORT=3000`
   `MONGODB_URI=mongodb://mongo:27017/movie-rest-test`
   `OMDB_API_KEY=*x*x*x*x`
   
   You can get the OMDB_API_KEY from here => https://www.omdbapi.com/
   
5. RUN APP:<br />
   `npm run dev` (make sure you have mongo db installed locally that is up and running otherwise you will get a connection error )

6. RUN TESTS:<br />
   `npm run test`

7. RUN DOCKER:<br />
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

`POST`/movies
  - **Code:** 201 <br />
    **Content:** `{"Title":"Batman","Plot":"The Dark Knight of Gotham City begins his war on crime with his first major enemy being the clownishly homicidal Joker.","Message":"Movie Batman was successfully saved to the DB"}`
 
 `POST`/comments
  - **Code:** 201 <br />
    **Content:** `{"message": "Comment for author: Adam was successfully saved!"}`

* **Error Response:**

  - **Code:** 409 CONFLICT <br />
    **Content:** `{"message":"Movie MOVIE_NAME already exists!"}`

  OR

  - **Code:** 500 INTERNAL ERROR <br />
    **Content:** `{ error : "error" }`

* **Sample Call:**
`curl --header "Content-Type: application/json" -d "{\"title\":\"puss in boots\"}" http://localhost:3000/movies`<br />

`curl --header "Content-Type: application/json" -d "{\"author\":\"Adam\",\"text\":\"First Comment\"}" http://localhost:3000/comments`

* **Live Demo:**
 https://shrouded-reaches-33580.herokuapp.com/
