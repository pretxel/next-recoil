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
            const animalDT = animalsData.map((animal,index) => { return{id: index, img: animal}});
            setAnimals(animalDT)
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
                    <Grid container spacing={{ xs: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} alignItems="center" justify="center" style={{ minHeight: "100vh" }}>
                        {animals.map(animal =>

                            <Grid item key={animal.id} xs={4} sm={4} md={4} lg={3} >
                                {/* <h1>xs</h1> */}
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