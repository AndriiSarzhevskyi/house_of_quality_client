import { Container, List, ListItem, ListItemButton } from "@mui/material";
import { styled } from "@mui/system";

export const LeftContainer = styled(Container)(({ theme }) => ({
    marginTop: "60px",
    minHeight: `calc(100vh - 60px)`,
    height: '100%',
    width: '360px',
    backgroundColor: 'white',
    left: 0,
    marginLeft: 0,
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
    display: 'flex',
    flexDirection: 'column'
}))

export const LeftList = styled(List)(({theme}) => ({
    fontSize: '19px',
    width: '100%',
    height: '100%',
}))

export const LeftListItem = styled(ListItem)(({theme}) => ({
    width: '100%',
    height: '30px',
}))