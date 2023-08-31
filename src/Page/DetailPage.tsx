import { useParams } from 'react-router-dom'
import { useGenreStore } from '../Zustand/useGenresStore'
import { MovieDetailPage } from '../Components/MovieDetailPage'

export const DetailPage = () => {
    const { id } = useParams()
    const isMovie = useGenreStore(s => s.isMovie);
    return (
        <>
            {
                isMovie && <MovieDetailPage id={parseInt(id!, 10)} />
            }

            {/* {
                isMovie && <MovieDetailPage id={id} />
            } */}

        </>
    )
}
