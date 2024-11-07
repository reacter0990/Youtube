import {
    Box
} from '@mui/material'

import Menu from '../components/Menu'
import Section from '../components/Section'

const Home = () => {
    return (
       <Box display={'flex'}>
         <Menu/>
         <Section/>
       </Box>
    )
}

export default Home