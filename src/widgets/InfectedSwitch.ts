
import { styled } from '@mui/material/styles';
import Switch  from '@mui/material/Switch';


const InfectedSwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url(
                    'data:image/svg+xml;utf8,
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="white" d="M483.55 227.55H462c-50.68 0-76.07-61.27-40.23-97.11L437 115.19A28.44 28.44 0 0 0 396.8 75l-15.24 15.22c-35.84 35.83-97.11 10.45-97.11-40.23V28.44a28.45 28.45 0 0 0-56.9 0V50c0 50.68-61.27 76.06-97.11 40.23L115.2 75A28.44 28.44 0 0 0 75 115.19l15.25 15.25c35.84 35.84 10.45 97.11-40.23 97.11H28.45a28.45 28.45 0 1 0 0 56.89H50c50.68 0 76.07 61.28 40.23 97.12L75 396.8a28.45 28.45 0 0 0 40.2 40.2l15.24-15.25c35.84-35.84 97.11-10.45 97.11 40.23v21.54a28.45 28.45 0 0 0 56.9 0V462c0-50.68 61.27-76.07 97.11-40.23L396.8 437a28.45 28.45 0 0 0 40.2-40.2l-15.25-15.24c-35.84-35.84-10.45-97.12 40.23-97.12h21.54a28.45 28.45 0 1 0 0-56.89ZM224 272a48 48 0 1 1 48-48a48 48 0 0 1-48 48m80 56a24 24 0 1 1 24-24a24 24 0 0 1-24 24"/></svg>'
                    )`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));


export default InfectedSwitch;
