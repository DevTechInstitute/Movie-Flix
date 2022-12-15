import { SearchOutlined, Visibility, VisibilityOff } from '@mui/icons-material'
import { AppBar, Box, Button, FormControl, IconButton, InputAdornment, InputLabel, Link, List, ListItem, OutlinedInput, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <Box>
                    <Typography variant='h1' component='h1' color='#E50914'>MovieFlix</Typography>
                </Box>

                <Box sx={{ flex: 1 }}></Box>

                <Box>
                    <List sx={{ display: 'flex' }} >
                        <ListItem>
                            <Link>Home</Link>
                        </ListItem>

                        <ListItem>
                            <Link>Movies</Link>
                        </ListItem>

                        <ListItem>
                            <Link>
                                Series
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link>Account</Link>
                        </ListItem>
                    </List>
                </Box>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Buscar</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type='text'
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="end"
                                >
                                    <SearchOutlined/>
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Buscar"
                    />
                </FormControl>
            </Toolbar>
        </AppBar>
    )
}
