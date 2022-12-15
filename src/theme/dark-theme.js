import { createTheme } from '@mui/material/styles';
import { red,  } from '@mui/material/colors';


export const darkTheme = createTheme({
  typography: {
    fontFamily: [
      'Poppins'
    ].join(','),
  },

  palette: {
    mode: 'dark',
    primary: {
      main: '#E50914'
    },
    secondary: {
      main: '#3A64D8'
    },
    info:{
      main: '#fefefe'
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
        color: 'main',
        fontWeight:'200'
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          height: 70,
          backdropFilter: '#000'
          
        },
      }
    },

    MuiTypography: {
      defaultProps:{
        color: '#fefefe'
      },
      styleOverrides: {
        h1: {
          fontSize: 30,
          fontWeight: 500
        },
        h2: {
          fontSize: 25,
          fontWeight: 500
        },
        h3: {
          fontSize: 22,
          fontWeight: 500
        },
        subtitle1: {
          fontSize: 18,
          fontWeight: 600
        }
      }
    },


    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'small',
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          backgroundColor:'#E50914',
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 12,
          padding:'.5rem 1rem',
          ":hover": {
            transition: 'all 0.3s ease-in-out'
          }
        }
      }
    },


    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
          borderRadius: '10px',
        }
      }
    }
    
  }
});