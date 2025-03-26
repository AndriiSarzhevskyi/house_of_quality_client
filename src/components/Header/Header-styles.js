import { styled, alpha } from "@mui/system";
import { Link, AppBar, Container, Typography, Button, Menu, MenuItem, List, ListItem } from "@mui/material";
import InputBase from '@mui/material/InputBase';

export const Root = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    height: "100px"
}))

export const CustomAppBar = styled(AppBar)(({ theme }) => ({
    flexGrow: "1",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: 'rgba(8,4,4, 0.5)',
    backgroundImage: 'none',
    backdropFilter: "blur(20px)",
    height: '40px',
    width: "100vw"
}))

export const Logo = styled(Typography)(({ theme }) => ({
    color: "blue",
}))

export const HeaderContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 auto",
    width: "95%",
    maxWidth: "1920px"
}))


export const Login = styled(Typography)(({ theme }) => ({
    border: "1px solid",
    padding: "2px",
    borderRadius: "10px",
    borderColor: "white"
}))

export const HeaderLink = styled(Link)(({ theme }) => ({
    '&:hover': {
        color: '#2172f3',
    },
    textDecoration: 'none',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
}))

export const HeaderDropDownBtn = styled(Button)(({ theme }) => ({
    '&:hover': {
        color: '#fe8732',
    },
    height: '100%',
    paddingRight: "4px",
    paddingLeft: "4px",
    textDecoration: 'none',
    backgroundColor: 'none',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textTransform: 'none',
}));

export const DropMenu = styled(Menu)(({ theme }) => ({
    "& .MuiMenu-paper": {
        backgroundColor: "rgba(40, 40, 40, 1)",
        backdropFilter: "blur(50px)",
    },
    top: "-5px"
}))

export const NewTenderBtn = styled(Button)(({ theme }) => ({
    color: "white",
    height: "80%",
    borderColor: "white",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "2px",
    paddingBottom: "2px",
    textTransform: 'none',
    marginRight: "20px",
    '&:hover': {
        color: '#fe8732',
        borderColor: '#fe8732'
    },
}))

export const GreenSpan = styled("span")(({ theme }) => ({
    color: "#76bf41",

}))

export const OrangeSpan = styled("span")(({ theme }) => ({
    color: "#fe8732",

}))

export const RedSpan = styled("span")(({ theme }) => ({
    color: "#eb1841",

}))

export const LeftList = styled(List)(({theme}) => ({
    fontSize: '19px',
    width: '360px',
    height: '100%',
}))

export const LeftListItem = styled(ListItem)(({theme}) => ({
    width: '100%',
    height: '50px',
    transition: 'color 0.3s ease-in-out',
    '&:hover': {
        color: '#eb1841',
        
    },
}))