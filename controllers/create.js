import Movie from '../schemas/movie.js'

const createMovie = async (req,res,next)=>{
    try{
        // tomaremos los valores de cada llave del body del request 
        console.log("Creando Pelicula")
        const {title, director, genre, releaseYear} = req.body;

        //crear una nueva peli en nuestra base de datos usando el esquema de pelicula
        const createdMovie = new Movie({
            title,
            director,
            genre,
            releaseYear
        });

        //esperar hasta que save termine de insertar la pelicula nueva
        const result = await createdMovie.save();
        res.json(result)
    }
    catch(error){
        next(error);
    }
    finally{
        console.log("Creada!")
    }
}

export {createMovie}