import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import GradeIcon from '@mui/icons-material/Grade';
import Typography from '@mui/material/Typography';
import useLikes from '../lib/useLikes'

const Menu = () => {
    const { likes } = useLikes()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Discover animals
                    </Typography>
                    <Badge badgeContent={likes.length} color="primary">
                        <GradeIcon color="inherit" />
                    </Badge>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Menu