const mongoose = require('mongoose')
const movie = require('../models/movie')
const comment = require('../models/comment')

const movieOneId = new mongoose.Types.ObjectId()
const movieOne = {
    _id: movieOneId,
    Title: 'Toy Story',
    Year: '1995',
    Rated: 'G',
    Released: '22 Nov 1995',
    Runtime: '81 min',
    Genre: 'Animation, Adventure, Comedy, Family, Fantasy',
    Director: 'John Lasseter',
    Writer: 'John Lasseter (original story by), Pete Docter (original story by), Andrew Stanton (original story by), Joe Ranft (original story by), Joss Whedon (screenplay by), Andrew Stanton (screenplay by), Joel Cohen (screenplay by), Alec Sokolow (screenplay by)',
    Actors: 'Tom Hanks, Tim Allen, Don Rickles, Jim Varney',
    Plot: 'A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy\'s room.',
    Language: 'English',
    Country: 'USA',
    Awards: 'Nominated for 3 Oscars. Another 23 wins & 17 nominations.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg',
    Ratings: [{
            Source: 'Internet Movie Database',
            Value: '8.3/10'
        },
        {
            Source: 'Rotten Tomatoes',
            Value: '100%'
        },
        {
            Source: 'Metacritic',
            Value: '95/100'
        }
    ],
    Metascore: '95',
    imdbRating: '8.3',
    imdbVotes: '815,304',
    imdbID: 'tt0114709',
    Type: 'movie',
    DVD: '20 Mar 2001',
    BoxOffice: 'N/A',
    Production: 'Buena Vista',
    Website: 'N/A'
}

const movieTwoId = new mongoose.Types.ObjectId()
const movieTwo = {
    _id: movieTwoId,
    Title: 'Up',
    Year: '2009',
    Rated: 'PG',
    Released: '29 May 2009',
    Runtime: '96 min',
    Genre: 'Animation, Adventure, Comedy, Family',
    Director: 'Pete Docter, Bob Peterson(co-director)',
    Writer: 'Pete Docter (story by), Bob Peterson (story by), Tom McCarthy (story by), Bob Peterson (screenplay by), Pete Docter (screenplay by)',
    Actors: 'Edward Asner, Christopher Plummer, Jordan Nagai, Bob Peterson',
    Plot: 'Seventy-eight year old Carl Fredricksen travels to Paradise Falls in his home equipped with balloons, inadvertently taking a young stowaway.',
    Language: 'English',
    Country: 'USA',
    Awards: 'Won 2 Oscars. Another 74 wins & 81 nominations.',
    Poster: 'https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_SX300.jpg',
    Ratings: [{
            Source: 'Internet Movie Database',
            Value: '8.2/10'
        },
        {
            Source: 'Rotten Tomatoes',
            Value: '98%'
        },
        {
            Source: 'Metacritic',
            Value: '88/100'
        }
    ],
    Metascore: '88',
    imdbRating: '8.2',
    imdbVotes: '862,973',
    imdbID: 'tt1049413',
    Type: 'movie',
    DVD: '10 Nov 2009',
    BoxOffice: '$292,979,556',
    Production: 'Walt Disney Pictures',
    Website: 'N/A'
}

const commentOne = {
    _id: new mongoose.Types.ObjectId(),
    author: 'Frank',
    text: 'Blab abla  lba lab lab al bablblab al bal',
    createdAt: new Date()
}

const commentTwo = {
    _id: new mongoose.Types.ObjectId(),
    author: 'Frank2',
    text: 'Blab abla  lba lab lab al bablblab al bal',
    createdAt: new Date()
}

const commentThree = {
    _id: new mongoose.Types.ObjectId(),
    author: 'Frank3',
    text: 'Blab abla  lba lab lab al bablblab al bal',
    createdAt: new Date()
}

const setupDatabase = async () => {
    await movie.deleteMany()
    await comment.deleteMany()
    await new movie(movieOne).save()
    await new movie(movieTwo).save()
    await new comment(commentOne).save()
    await new comment(commentTwo).save()
    await new comment(commentThree).save()
}

module.exports = {
    movieOneId,
    movieOne,
    movieTwoId,
    movieTwo,
    commentOne,
    commentTwo,
    commentThree,
    setupDatabase
}