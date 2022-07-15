import {useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Link} from "react-router-dom";
import { useDispatch, } from 'react-redux';

import { upDate } from '../Utils/Store';
import { db } from "../firebase";
import { ref, remove} from "firebase/database";



const Display=(props)=> {
  const [liked,setLiked] = useState(false)
  const dispatch = useDispatch();
  const deleteHandler = (note) => {
    console.log(note.uid)
    remove(ref(db, `/${note.uuid}`));
  };
  
  const editHandler=(note)=>{
    console.log(note);
    dispatch(upDate(note));
  }
  const likeHandler=()=>{
    setLiked(prev=>!prev)
  }
  return (
    <Box sx={{ width: 255}}>
      <Card variant="outlined" sx={{m:2,borderColor:'black'}}>
      <CardContent >
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      {props.blog.title}
      </Typography>
      <Typography variant="body2">
      {props.blog.detail}
      </Typography>
    </CardContent>
      </Card>
    <CardActions>
    <Link to={`/${props.blog.title}`}>
      <Button size="small" onClick={()=>editHandler(props.blog)}>Learn More</Button></Link>
      <IconButton aria-label="delete" size="small" onClick={()=>deleteHandler(props.blog)}>
        <DeleteIcon fontSize="medium"  />
      </IconButton>
      <IconButton onClick={()=>editHandler(props.blog)}>
      <ModeEditIcon fontSize="medium"/>
      </IconButton>
      <IconButton onClick={likeHandler}>
      <FavoriteIcon sx={{color:`${liked?'red':''}`}}/>
      </IconButton>
    </CardActions>
    </Box>
  );
}
export default Display;
