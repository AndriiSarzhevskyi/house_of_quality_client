import { Button, Container } from "@mui/material";
import { styled } from "@mui/system";

export const FormContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "80px",
    marginBottom: "40px",

    justifyContent: "space-around",
    position: "relative",
}))

export const Form = styled("form")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: '500px',
    paddingTop: "20px",
    paddingBottom: "20px",
    borderRadius: "10px",
    position: "relative",
    border: "2px solid transparent",
    boxShadow: "0px 0px 30px rgba(216,44,71,255), inset 0 0 1px black",
  
    
    '&::before': {
       animationDelay: '-4s !important' 
    },

}))

export const SubmitBtn = styled(Button)(({ theme }) => ({
    marginTop: "10px",
    backgroundColor: "#eb1841",
    '&:hover': {
        backgroundColor: "#ff033e"
    },

}))
