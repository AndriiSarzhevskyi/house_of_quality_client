import { Container, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

export const InfoContainer = styled(Container)(({ theme }) => ({
    // backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "120px",
    // marginBottom: "40px",
    // minHeight: `calc(100vh - 60px)`,
    paddingTop: "20px",
    paddingBottom: "20px",
    justifyItems: 'center',
    gap: '0rem',
    height: '70%',
    // border: "1px solid",
    borderRadius: "10px",
    position: "relative",
    border: "2px solid transparent",
    boxShadow: "0px 0px 30px rgba(216,44,71,255), inset 0 0 1px black",
    maxWidth: '70%'
    // justifyContent: "space-around",
    // width: "90%"
}))

export const InfoType = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    fontWeight: 'bold',
    color: "white"
}))

export const InfoText = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
}))

export const RedBtn = styled(Button)(({ theme }) => ({
    marginTop: "10px",
}))

// export const ContentBlock = styled('div')(({ theme }) => ({
//     display: 'flex',
//     justifyContent: 'flex-start',
//     flexDirection: 'row',
//     //flexWrap: 'wrap',
//     alignItems: 'center',
//     justifyItems: 'center',
//     // gap: '1rem',
// }))

