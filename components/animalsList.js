import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AnimalCard from './animalCard'
import { useEffect, useState, Suspense } from 'react';
import useLikes from '../lib/useLikes'
import useFetchAnimals from '../lib/useFetchAnimals';


const AnimalList = () => {

    const [animals, setAnimals] = useState([])
    const { likes, setLikes } = useLikes()

    const { animalsData, isLoading } = useFetchAnimals(10);

    useEffect(() => {
        if (!isLoading) {
            setAnimals(animalsData)
        }
    }, [animalsData, isLoading])

    const addLike = (id) => {
        setLikes((oldLikes) => {
            const existLike = oldLikes.find(like => like.id === id)
            if (!existLike) {
                return [...oldLikes, { id, like: true }]
            }
            return oldLikes
        });
    };

    const removeItemAtIndex = (arr, index) => {
        return [...arr.slice(0, index), ...arr.slice(index + 1)];
    };

    const removeLike = (id) => {
        const index = likes.findIndex((likeItem) => likeItem.id === id);
        const newLikes = removeItemAtIndex(likes, index);
        setLikes(newLikes);
    }

    return (
        <>
            <Suspense fallback={<Typography gutterBottom variant="h2">
                Loading ...
            </Typography>}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={4}>
                        {animals.map(animal =>
                            <Grid key={animal.id} item xs={3} >
                                <AnimalCard animal={animal} likes={likes} addLike={addLike} removeLike={removeLike} />
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </Suspense>
        </>
    )

}

export default AnimalList;