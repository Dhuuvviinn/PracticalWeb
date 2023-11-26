import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const DataPack = ({dataPass}) => {
  return (
    <Link to={`/dataDetail/${dataPass.id}`} style={{textDecoration:"none"}}>
    <Box sx={{width:"100%",boxShadow:"0 1px 5px 2px black",display:"flex",borderRadius:"10px"}}>
    <Box sx={{width:"100%",padding:"1rem"}}>
    <img src={dataPass.img} alt="" style={{width:"100%",height:"18rem"}} />
    <Typography variant='h5' >{dataPass.title}</Typography>
    <Typography variant='h5' >Price:{dataPass.price}</Typography>
    </Box>
    </Box>
    </Link>
  )
}

export default DataPack
