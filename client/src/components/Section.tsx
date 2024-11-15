import { Box } from '@mui/material'
import Grid from '@mui/material/Grid2'
import Card from './Card'
import {v4 as uuidv4} from 'uuid'

const Section = () => {

  return (
    <Box flexGrow={1} pl={'20px'} pr={'20px'} pt={'50px'}>

      <Box flexGrow={1} position={'sticky'} justifyContent={'flex-end'}
        height={'56px'} display={'flex'} alignItems={'center'} top={'50px'}
        bgcolor={'#000000'} zIndex={1}
      >
        <Box height={'32px'} borderRadius={"8px"} bgcolor={'#f1f1f1'} color={'#000'} pl={'12px'} pr={'12px'}
          display={'flex'} alignItems={'center'} fontWeight={600} mr={'14px'} fontSize={'14px'} lineHeight={'20px'}
          
        >
          Все
        </Box>
        <Box height={'32px'} borderRadius={"8px"} bgcolor={'rgba(255, 255, 255, 0.15)'} color={'#fff'} pl={'12px'} pr={'12px'}
          display={'flex'} alignItems={'center'} fontWeight={600} mr={'14px'} fontSize={'14px'} lineHeight={'20px'}
        >
          Сейчас в эфире
        </Box>
        <Box height={'32px'} borderRadius={"8px"} bgcolor={'rgba(255, 255, 255, 0.15)'} color={'#fff'} pl={'12px'} pr={'12px'}
          display={'flex'} alignItems={'center'} fontWeight={600} mr={'14px'} fontSize={'14px'} lineHeight={'20px'}
        >
          Новости
        </Box>
        <Box height={'32px'} borderRadius={"8px"} bgcolor={'rgba(255, 255, 255, 0.15)'} color={'#fff'} pl={'12px'} pr={'12px'}
          display={'flex'} alignItems={'center'} fontWeight={600} mr={'14px'} fontSize={'14px'} lineHeight={'20px'}
        >
          Музыка
        </Box>
        <Box height={'32px'} borderRadius={"8px"} bgcolor={'rgba(255, 255, 255, 0.15)'} color={'#fff'} pl={'12px'} pr={'12px'}
          display={'flex'} alignItems={'center'} fontWeight={600} mr={'14px'} fontSize={'14px'} lineHeight={'20px'}
        >
          Джемы
        </Box>
        <Box height={'32px'} borderRadius={"8px"} bgcolor={'rgba(255, 255, 255, 0.15)'} color={'#fff'} pl={'12px'} pr={'12px'}
          display={'flex'} alignItems={'center'} fontWeight={600} mr={'14px'} fontSize={'14px'} lineHeight={'20px'}
        >
          Подкасты
        </Box>
        <Box height={'32px'} borderRadius={"8px"} bgcolor={'rgba(255, 255, 255, 0.15)'} color={'#fff'} pl={'12px'} pr={'12px'}
          display={'flex'} alignItems={'center'} fontWeight={600} mr={'14px'} fontSize={'14px'}
        >
          Подкасты
        </Box>
        <Box height={'32px'} borderRadius={"8px"} bgcolor={'rgba(255, 255, 255, 0.15)'} color={'#fff'} pl={'12px'} pr={'12px'}
          display={'flex'} alignItems={'center'} fontWeight={600} mr={'14px'} fontSize={'14px'} lineHeight={'20px'}
        >
          Видеоигры
        </Box>
        <Box height={'32px'} borderRadius={"8px"} bgcolor={'rgba(255, 255, 255, 0.15)'} color={'#fff'} pl={'12px'} pr={'12px'}
          display={'flex'} alignItems={'center'} fontWeight={600} mr={'14px'} fontSize={'14px'} lineHeight={'20px'}
        >
          Анимация
        </Box>
        <Box height={'32px'} borderRadius={"8px"} bgcolor={'rgba(255, 255, 255, 0.15)'} color={'#fff'} pl={'12px'} pr={'12px'}
          display={'flex'} alignItems={'center'} fontWeight={600} mr={'14px'} fontSize={'14px'} lineHeight={'20px'}
        >
          Недавно опубликованное
        </Box>
        <Box height={'32px'} borderRadius={"8px"} bgcolor={'rgba(255, 255, 255, 0.15)'} color={'#fff'} pl={'12px'} pr={'12px'}
          display={'flex'} alignItems={'center'} fontWeight={600} mr={'14px'} fontSize={'14px'} lineHeight={'20px'}
        >
          Просмотрено
        </Box>
      </Box>
      <Box flexGrow={1} pt={'24px'} pl={'245px'}>
        <Grid container spacing={2.8}>
          {[1,2,3,4,5,6,7,8,9,10,11,12,13].map(() => (
            <Grid size={4} key={uuidv4()}>
              <Card/>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Section