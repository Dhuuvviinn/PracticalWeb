import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'
import DataPack from './DataPack'
import { ListItems } from '../Data/Data'
const DatalListpage = ({search}) => {
  const [searchItem,setSearchItem] = useState("")
console.log(search)
  // filter List
  const filterData = ListItems.filter((val)=>{
     if (searchItem == "") {
      return val
     }else if (val.title.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())) {
      return val
     }
  })

  return (
  <Box sx={{textAlign:"center"}}>
  <TextField label="Search" onChange={(event)=>{setSearchItem(event.target.value)}}/>
  <Box sx={{alignItems:'center',justifyContent:"center",padding:"2rem",display:"grid",gridGap:"5rem",gridTemplateColumns:{xs:"repeat(auto-fit, 200px)",sm:"repeat(auto-fit, 250px)",lg:"repeat(auto-fit, 3s00px)"}}}>
  {
    filterData.map((value)=>(
      <DataPack dataPass = {value} key={value.id}/> 
    ))
  }
  
  </Box>
 
  </Box>
  )
}

export default DatalListpage
