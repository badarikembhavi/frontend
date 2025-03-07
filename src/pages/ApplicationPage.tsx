import {Box, Button} from '@mui/material'
import MainCard from '../components/MainCard'
import Application from './Application'
import { Link } from 'react-router-dom'


const ApplicationPage = () => {

    return (
        <>
        <MainCard
        title = 'Application' 
        secondary = {
            <>
            <Box display='flex' flexDirection='row' alignItems='center'>
                <Button color='primary' variant='contained' component={Link} to='/dashboard'>Create</Button>
            </Box>
            </>
        }
        >
            <Application/>
        </MainCard>
        </>
    )
}
export default ApplicationPage