import { Header } from "./Header"
import { useState, useEffect, useContext, useRef } from 'react';
import { AuthContext } from '../../context/auth.context';
import { Link as RouterLink, useNavigate } from "react-router-dom"

export const HeaderContainer = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const openU = Boolean(anchorEl);
    const auth = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    

    const handleClickU = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseU = () => {
        setAnchorEl(null);
    };

    useEffect(() => {

    }, [auth.userName])

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const clickUserHandler = event => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <Header
            handleClickU={handleClickU}
            handleCloseU={handleCloseU}
            handleDrawerOpen={handleDrawerOpen}
            handleDrawerClose={handleDrawerClose}
            clickUserHandler={clickUserHandler}
            handleClose={handleClose}
          
            open={open}
            anchorEl={anchorEl}
            openU={openU}
          
        >

        </Header>
    )
}