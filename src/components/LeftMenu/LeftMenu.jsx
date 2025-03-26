import { LeftContainer } from "./LeftMenu-styles"
import {  ListItem, ListItemButton, } from "@mui/material"
import { LeftList, LeftListItem } from "./LeftMenu-styles"
import { Link as RouterLink, useNavigate } from "react-router-dom"
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import EditNoteIcon from '@mui/icons-material/EditNote';
import MedicationIcon from '@mui/icons-material/Medication';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import LogoutIcon from '@mui/icons-material/Logout';

export const LeftMenu = () => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);

    return (
        <>
            <LeftContainer>
                <LeftList>
                    <ListItem>
                        <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>
                        <ListItemButton component={RouterLink} to='/'>Персональні дані</ListItemButton>
                    </ListItem>
                    <ListItem>
                        <AccessTimeIcon></AccessTimeIcon>
                        <ListItemButton  component={RouterLink} to='/shedule'>Розклад</ListItemButton>
                    </ListItem>

                    <ListItem>
                        <AccessibilityIcon></AccessibilityIcon>
                        <ListItemButton component={RouterLink} to='/doctorvisits'>Прийоми лікаря</ListItemButton>
                    </ListItem>

                    <ListItem>
                        <MedicationIcon></MedicationIcon>
                        <ListItemButton component={RouterLink} to='/medicine'>Прийоми ліків</ListItemButton>
                    </ListItem>

                    <ListItem>
                        <EditNoteIcon></EditNoteIcon>
                        <ListItemButton component={RouterLink} to='/recipes'>Рецепти</ListItemButton>
                    </ListItem>

                    <ListItem>
                        <QueryStatsIcon></QueryStatsIcon>
                        <ListItemButton component={RouterLink} to='/diagnostics'>Результати діагностик</ListItemButton>
                    </ListItem>

                    <ListItem>
                        <LogoutIcon></LogoutIcon>
                        <ListItemButton onClick={auth.logout}>Вихід</ListItemButton>
                    </ListItem>
                </LeftList>
            </LeftContainer>
        </>
    )
}