import { SearchOutlined } from '@mui/icons-material'
import { AppBar, Box, Button, IconButton, Link, List, ListItem, Toolbar, Typography } from '@mui/material'
import React from 'react'

export const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <Box>
                    <Typography variant='h1' component='h1' color='#E50914'>MovieFlix</Typography>
                </Box>

                <Box sx={{ flex:1 }}></Box>

                <Box>
                    <List sx={{ display:'flex' }} >
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
                        <IconButton>
                            <SearchOutlined/>
                        </IconButton>
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
