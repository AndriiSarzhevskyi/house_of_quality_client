import { Button, Container } from "@mui/material";
import { styled } from "@mui/system";
import { Typography } from "@mui/material"

export const Number = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    width: "57px",
    height: "57px",
    color: 'white',
    // border: '1px solid #eb1841',
    backgroundColor: "#eb1841",
    borderRadius: '10px',
    boxSizing: "border-box",
    fontSize: "22px",


}))

export const ParagraphHeader = styled(Typography)(({ theme }) => ({
    fontSize: "22px",
    fontWeight: 'bold',
    color: "#eb1841",
    // paddingLeft: '10px',
    minHeight: '57px',
    alignContent: 'end'
}))

export const ParagraphText = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    color: 'white',
    paddingTop: '10px'
}))

export const Paragraph = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    gap: '1rem',
    marginTop: '20px',
    width: '100%',
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: '20px',
    paddingRight: '20px',
    borderRadius: "5px",
    position: "relative",
    border: "2px solid transparent",
    boxShadow: "0px 0px 10px, inset 0 0 1px black",
    
}))

export const RedLine = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    width: '2px',
    height: "calc(100% - 57px)",
    
    borderLeft: "2px solid #eb1841",
   
    
}))