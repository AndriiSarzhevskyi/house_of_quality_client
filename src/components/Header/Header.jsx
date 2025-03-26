
import { Autocomplete, Typography, MenuItem, Button, IconButton, Drawer, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { useHttp } from '../../hooks/http.hook';
import { CustomAppBar, RedSpan } from './Header-styles';
import { HeaderContainer } from './Header-styles';
import { Link as RouterLink, useNavigate } from "react-router-dom"
import { FlexRow } from '../GeneralStyles';
import { HeaderLink, HeaderDropDownBtn, DropMenu, LeftList, LeftListItem } from './Header-styles';
import { AuthContext } from '../../context/auth.context';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useContext } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export const Header = ({ handleClickU, handleCloseU, open, handleDrawerOpen, handleDrawerClose }) => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const { request, error } = useHttp();
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState('');

    const handleSelect = (newValue) => {
        navigate(`/product/${newValue}`)
    };


    return (
        <CustomAppBar position="fixed">
            <HeaderContainer>

                {auth.isAuthenticated === true &&
                    <FlexRow sx={{ width: '100%', alignContent: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon sx={{ width: 32, height: 32 }} />
                        </IconButton>
                        <Typography variant="h6" sx={{ alignSelf: 'center' }}>

                            <HeaderLink component={RouterLink} to="/" color="inherit" underline="none"><RedSpan>House</RedSpan>&nbsp;of&nbsp;<RedSpan>Quality</RedSpan></HeaderLink>
                        </Typography>

                        <Typography sx={{ justifySelf: 'right' }}>
                            <HeaderLink component={RouterLink} to="/" color="inherit" underline="none">
                                <PersonOutlineIcon color='white' sx={{ width: '32px', height: '42px' }}></PersonOutlineIcon>
                                {auth.userName}
                            </HeaderLink>
                        </Typography>



                        <Drawer
                            anchor="left"
                            open={open}
                            onClose={handleDrawerClose}
                            sx={{
                                width: 300,
                                flexShrink: 0,

                            }}
                            PaperProps={{
                                sx: {
                                    backgroundColor: 'rgba(8,4,4, 0.6)',
                                    backgroundImage: 'none', 
                                    backdropFilter: "blur(20px)",
                                }
                            }}
                        >
                            <LeftList>

                                <LeftListItem>
                                    <ListItemText
                                        sx={{ textAlign: 'center', color: '#1976d2', marginBottom: 2 }}
                                        primaryTypographyProps={{ fontSize: 22 }}
                                    >
                                    </ListItemText>
                                </LeftListItem>

                                <LeftListItem sx={{ display: 'flex', alignItems: 'center' }}>

                                    <ListItemButton component={RouterLink} to="/">
                                        <ListItemText primary="Головна" />
                                    </ListItemButton>

                                </LeftListItem>

                                <LeftListItem>
                                    <ListItemButton component={RouterLink} to="/newhouse">
                                        <ListItemText primary="Новий проєкт" />
                                    </ListItemButton>
                                </LeftListItem>

                                <LeftListItem>
                                    <ListItemButton component={RouterLink} to="/myprojects">
                                        <ListItemText primary="Мої проєкти" />
                                    </ListItemButton>
                                </LeftListItem>

                                <LeftListItem>
                                    <ListItemButton component={RouterLink} to="/usermanual">
                                        <ListItemText primary="Як побудувати будинок якості" />
                                    </ListItemButton>
                                </LeftListItem>

                                <LeftListItem>
                                    <ListItemButton onClick={auth.logout}>
                                        <ListItemText primary="Вихід" />
                                    </ListItemButton>
                                </LeftListItem>

                            </LeftList>
                        </Drawer>


                    </FlexRow>
                }

                {!auth.isAuthenticated &&
                    <>
                        <FlexRow sx={{ width: '100%', alignContent: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                            <Typography variant="h6" sx={{ alignSelf: 'center' }}>

                                <HeaderLink component={RouterLink} to="/" color="inherit" underline="none"><RedSpan>House</RedSpan>&nbsp;of&nbsp;<RedSpan>Quality</RedSpan></HeaderLink>
                            </Typography>
                        </FlexRow>
                    </>
                }
            </HeaderContainer>

        </CustomAppBar >
    )
}
