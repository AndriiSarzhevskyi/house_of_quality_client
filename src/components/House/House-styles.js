import { Button, Container } from "@mui/material";
import { styled } from "@mui/system";

export const MainContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "80px",
    marginBottom: "40px",
    justifyContent: "space-around",

}))

export const Cell = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    width: "57px",
    height: "57px",
    color: 'white',
    border: '1px solid #eb1841',
    boxSizing: "border-box",
}))

export const TriangleCell = styled("div")(() => ({
    width: "0",
    height: "0",
    borderLeft: "28.8px solid transparent",
    borderRight: "28.8px solid transparent",
    borderBottom: "30px solid #eb1841",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    color: "white"
}));

export const RhombusCell = styled("div")(() => ({
    boxSizing: "border-box",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: 'white',
    border: '1px solid #eb1841',
    transform: "rotate(45deg)",
    position: "relative",
    "& span": {
        transform: "rotate(-45deg)",  
        display: "inline-block",      
        whiteSpace: "nowrap",        
    }
}));



export const CustomerReq = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    textAlign: 'left',
    paddingLeft: '3px',
    flexWrap: 'wrap',
    width: "350px",
    height: "57px",
    color: 'white',
    border: '1px solid #eb1841',
    boxSizing: "border-box",
}))

export const TechnicalrReq = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    writingMode: "vertical-rl", transform: "rotate(180deg)",
    textOrientation: 've',
    justifyContent: "center",
    width: "57px",
    height: "250px",
    color: 'white',
    border: '1px solid #eb1841',
    boxSizing: "border-box",
}))