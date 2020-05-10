import React, { FunctionComponent, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { createStyles, makeStyles, useTheme, createMuiTheme, Theme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import AudioVisualiser from './AudioVisualizer';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import MicOffOutlinedIcon from '@material-ui/icons/MicOffOutlined';
import Button from '@material-ui/core/Button';
import Sidebar from './components/Sidebar';
import { useMediaStream } from './contexts/MediaStreamContext';
/*
// @ts-ignore */
import { useSpeechRecognition } from "react-speech-kit";
import './App.css';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark'
  },
});

const App: FunctionComponent = () => {
  const { stream, start, stop } = useMediaStream();
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const speechKit = useSpeechRecognition({
    /*
     // @ts-ignore */
    onResult: result => {
      setValue(result);
      setOpen(true);
    }
  });
  const toggleMic = () => {
    if(stream) {
      stop();
      speechKit.stop();
      setOpen(false);
    } else {
      start();
      speechKit.listen();
    }
  };

  return (
    <div className="App">
    <ThemeProvider theme={dark ? darkTheme : createMuiTheme({})}>
        <Sidebar name="VoiceControl" setDark={setDark} dark={dark}>
        <Button onClick={toggleMic} variant="contained" color="secondary">
             {stream ? <MicNoneOutlinedIcon /> : <MicOffOutlinedIcon />}
        </Button>
        <AudioVisualiser dark={dark} />
        <Snackbar open={open} autoHideDuration={4000}>
          <Alert severity="success">
            Sending: {value}
          </Alert>
      </Snackbar>
      </Sidebar>
      </ThemeProvider>
    </div>
  );
};

export default App;
