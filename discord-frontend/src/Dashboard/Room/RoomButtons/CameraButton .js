import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';


const CameraButton = ({ localstream }) => {
    const [cameraEnabled, setCameraEnabled] = useState(true);

    const handleToggleCamera = () => {
        localstream.getVideoTracks()[0].enabled = !cameraEnabled;
        setCameraEnabled(!cameraEnabled);
    };

    return (
        <IconButton onClick={handleToggleCamera} style={{ color: 'white'}}>
            {cameraEnabled ? <VideocamIcon /> : <VideocamOffIcon />}
        </IconButton>
    );
};

export default CameraButton;