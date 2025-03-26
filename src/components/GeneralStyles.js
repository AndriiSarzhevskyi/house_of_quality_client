import { styled } from "@mui/system";
import Img from "../img/sarah-dorweiler-x2Tmfd1-SgA-unsplash.jpg"
import Img1 from "../img/total-shape-yn8KzjHGtak-unsplash.jpg"
import Img2 from "../img/scott-webb-hDyO6rr3kqk-unsplash.jpg"
import Img3 from "../img/evie-s-bSVGnUCk4tk-unsplash.jpg"
import Img4 from "../img/agata-create-4SbDro9ND5c-unsplash.jpg"
import Img5 from "../img/sarah-dorweiler-x2Tmfd1-SgA-unsp (1).jpg"

export const FlexRow = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
}))

export const FlexColumn = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}))

export const MainBlock = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    position: "relative",
    padding: "0",
    overflow: "hidden",
    backgroundColor: "#F3E8E2"
}))

export const MainBlockImg = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    maxHeight: "100vh",
    width: '100vw',
    position: "relative",
    padding: "0",
    overflowX: "hidden",
    backgroundColor: 'rgba(14,13,26,255)'
}))
