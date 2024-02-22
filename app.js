const  express = require ("express")
const  app = express()
const  swaggerJsDoc = require ("swagger-jsdoc")
const swaggerUI = require ("swagger-ui-express")

//bodyparser
var bodyParser = require ("body-parser")
app.use(bodyParser.urlencoded( { extended: false }))
app.use(bodyParser.json());

app.use(express.json())

const swaggerOptions = {
    swaggerDefinition: {
     
      info: {
        title: 'Library API',
        version: '1.0.0',
      }
    },
    apis: ['app.js'], // files containing annotations as above
  };
 
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))

/** 
* @swagger
* /books:
*   get:     
*     description: Get all books         
*     responses:
*       200:
*         description: Successful operation
*
*/

const books = [

  { 
    "id": "001",
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "imageLink": "https://unsplash.com/photos/9DaOYUYnOls",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  },
  {
    "id": "002",
    "author": "Hans Christian Andersen",
    "country": "Denmark",
    "imageLink": "https://unsplash.com/photos/CXYPfveiuis",
    "language": "Danish",
    "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    "pages": 784,
    "title": "Fairy tales",
    "year": 1836
  },
  {
    "id": "003",
    "author": "Dante Alighieri",
    "country": "Italy",
    "imageLink": "https://unsplash.com/photos/9zsHNt5OpqE",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    "pages": 928,
    "title": "The Divine Comedy",
    "year": 1315
  }

]

app.get ("/books", (req, res) => {
    res.send ([
   
        { 
          "id": "001",
          "author": "Chinua Achebe",
          "country": "Nigeria",
          "imageLink": "https://unsplash.com/photos/9DaOYUYnOls",
          "language": "English",
          "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
          "pages": 209,
          "title": "Things Fall Apart",
          "year": 1958
        },
        {
          "id": "002",
          "author": "Hans Christian Andersen",
          "country": "Denmark",
          "imageLink": "https://unsplash.com/photos/CXYPfveiuis",
          "language": "Danish",
          "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
          "pages": 784,
          "title": "Fairy tales",
          "year": 1836
        },
        {
          "id": "003",
          "author": "Dante Alighieri",
          "country": "Italy",
          "imageLink": "https://unsplash.com/photos/9zsHNt5OpqE",
          "language": "Italian",
          "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
          "pages": 928,
          "title": "The Divine Comedy",
          "year": 1315
        }
    ])

});



app.post('/book/:id', (req, res) => {
  const id = req.body.id;
  res.send ({id});

})

/** 
* @swagger
* /book:
*   post:     
*     description: Get one book 
*     parameters:
*     - name: title
*       description: Book 
*       in: body
*       required: true
*       type: string                 
*     responses:
*       200:
*         description: Successful operation by book 
*/

app.post('/book', (req, res) => {
  const book = req.body;
  res.send ({book});

})

/** 
* @swagger
* /books/{id}:
*   get:     
*     description: Get one book by id
*     parameters:
*     - name: title
*       description: Book id
*       in: body
*       required: true
*       type: string                 
*     responses:
*       200:
*         description: Successful operation by book id
*/

app.get('/books/:bookId', (req, res) => {
  req.params; // { userId: '002' }
  res.json(req.params);
});

/**  
* @swagger
* /books/{id}:
*   delete:
*     description: Remove the book by id
*     parameters:
*     - name: title
*       description: book id
*       in: body
*       type: string
*       required: true
*       description: The book id
*
*     responses:
*       200:
*         description: The book was deleted
*       
*/



app.delete("/books/:id", (req, res) => {
  console.log("req params", req.params.id)
  myArray = myArray.filter(({ id }) => id !== req.params.id);
})

app.listen (4000, () => {
    console.log ("running on port  4000")
});
