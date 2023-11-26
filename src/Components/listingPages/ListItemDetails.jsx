import { Box, Typography } from '@mui/material'
import React from 'react'
import { ListItems } from '../Data/Data'
import { useParams } from 'react-router-dom'
const ListItemDetails = () => {
  const {id} = useParams()
 const filterForDetail = ListItems.filter((val)=>{
      if (val.id == id) {
        return val
      }
    })
  
 console.log(filterForDetail)
  return (
    <>
    {
      filterForDetail?.map((values)=>(
       <Box sx={{width:"100%"}}>
        <Box sx={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyItems:"center"}}>
         <img src={values.img} alt="" style={{width:"30rem"}}/>
         <Typography variant='h4'>{values.title}</Typography>
         <Typography variant='h4'>{values.price}</Typography>
        </Box>
       </Box>

      ))
    }
    </>
  )
}

export default ListItemDetails
