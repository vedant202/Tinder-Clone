import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';

import StartIcon from '@mui/icons-material/Start';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton'; 

import "./SwipeButtons.css";

function SwipeButtons() {
  return (
    <div className='SwipeButton'>
        <IconButton className='SwipeButton__repeat'>
            <ReplayIcon fontSize='large'></ReplayIcon>
        </IconButton>    
        <IconButton className='SwipeButton__left'>
            <CloseIcon fontSize='large'></CloseIcon>
        </IconButton>    
        <IconButton className='SwipeButton__star'>
            <StartIcon fontSize='large'></StartIcon>
        </IconButton>    
        <IconButton className='SwipeButton__right'>
            <FavoriteIcon fontSize='large'></FavoriteIcon>
        </IconButton>    
        <IconButton className='SwipeButton__lightning'>
            <FlashOnIcon fontSize='large'></FlashOnIcon>
        </IconButton>    
    </div>
  )
}

export default SwipeButtons