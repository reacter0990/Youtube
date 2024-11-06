import { useState } from 'react'
import { Box, IconButton  } from '@mui/material'
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";

const CenterBox = () => {

    const [isFocused, setIsFocused] = useState(false)

  return (
    <Box 
    flexGrow={1} 
    display={'flex'}
    alignItems={'center'} 
    justifyContent={'center'}
  >
     <Box
       height={40} 
       maxHeight={40}
       display={'flex'} 
       alignItems={'center'}>
        <input 
           type="text"
           placeholder="Search"
           onFocus={() => setIsFocused(true)}
           onBlur={() => setIsFocused(false)}
           style={{
              appearance: 'none',
              height: 40,
              maxHeight: 40,
              width: isFocused ? '480px' : '536px',
              paddingLeft: 15,
              outline: 'none',
              boxShadow: 'none',
              backgroundColor: '#000',
              borderTopLeftRadius: 25,
              borderBottomLeftRadius: 25,
              border: '1.27px solid rgba(66, 66, 66, .8)',
              borderColor: isFocused ? '#0091ea' : 'rgba(66, 66, 66, .8)',
           }}
           />
           <button style={{
             width: 68,
             height: 40,
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
             background: 'rgba(255, 255, 255, 0.14)',
             borderTopRightRadius: 25,
             borderBottomRightRadius: 25,
             border: '1.27px solid rgba(66, 66, 66, .8)'
           }}>
            <CiSearch fontSize={25} />
            </button>
            <IconButton color='inherit'
                sx={{
                  ml: 2,
                  background: '#212121',
                  height: '40px',
                  width: '40px',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.2)', // измените цвет фона при наведении
                  },
                }}
            >
               <FaMicrophone fontSize={20}/>
            </IconButton>
     </Box>
  </Box>
  )
}

export default CenterBox