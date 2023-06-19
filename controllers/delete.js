import Movie from '../schemas/movie.js'

const deleteMoviebyCode = async (req, res, next) => {
    try {
        const { code } = req.params;

        const deletedMovie = await Movie.findOneAndDelete({ code })

        if (!movie) {
            return res.status(404).json({ message: "Pelicula no encontrada" })
        }

        res.json({ message: "Pelicula borrada con exito" })
    } catch (error) {
        next(error);
    } finally {
        console.log("Borrada!")
    }
}

export { deleteMoviebyCode }