import { Button, Container } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { alpha, margin, positions, shadows, styled } from "@mui/system";

export const FormContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "150px",
    marginBottom: "40px",

    justifyContent: "space-around",
    position: "relative",
}))

export const TriangleText = styled("div")(({ theme }) => ({
    position: "absolute",
    top: "60px",
    color: "white",
    fontWeight: "bold",
    fontSize: "14px",
    zIndex: '1'
}));

export const Form = styled("form")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "400px",
    height: "405px",
    paddingTop: "20px",
    paddingBottom: "20px",
    borderRadius: "10px",
    position: "relative",
    border: "2px solid transparent",
    boxShadow: "0px 0px 30px rgba(216,44,71,255), inset 0 0 1px black",
  
    
    '&::before': {
       animationDelay: '-4s !important' 
    },
    
}));

export const SubmitBtn = styled(Button)(({ theme }) => ({
    marginTop: "10px",
    backgroundColor: "#eb1841",
    '&:hover': {
        backgroundColor: "#ff033e"
    },

}))
