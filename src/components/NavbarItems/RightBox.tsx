import { MdOutlineVideoCall } from "react-icons/md";
import { Box, IconButton, Avatar  } from '@mui/material'
import { IoMdNotificationsOutline  } from "react-icons/io";

const RightBox = () => {
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} minWidth={150}>
    <IconButton color='inherit'
      sx={{
        // height: '35px',
        // width: '35px',
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.2)', // измените цвет фона при наведении
          },
      }}
    >
      <MdOutlineVideoCall fontSize={25}/>
    </IconButton>
    <IconButton color='inherit'
      sx={{
        // height: '35px',
        // width: '35px',
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.2)', // измените цвет фона при наведении
          },
      }}
    >
      <IoMdNotificationsOutline fontSize={25}/>
    </IconButton>
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{height: '28px', width: '28px', ml: 1}}/>
</Box>
  )
}

export default RightBox