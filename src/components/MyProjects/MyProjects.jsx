import { SubmitBtn } from "../Registration/Registration-styles"
import { FlexRow } from "../GeneralStyles"
import { Typography, Grid } from "@mui/material"
import { InfoContainer } from "../PersonalInfo/PersonalInfo-styles"
import { InfoText } from "../PersonalInfo/PersonalInfo-styles"
import { useState, useEffect } from "react"
import { Link as RouterLink, useNavigate } from "react-router-dom"

export const MyProjects = ({ project }) => {
    const [created, setCreated] = useState();
    useEffect(() => {
        const date = new Date(project.created_at);
        setCreated(date.toLocaleDateString() + " " + date.toLocaleTimeString());
    }, [project])
    return (
        <>

            <Grid
                container
                spacing={3}
                alignItems="center"
                sx={{ marginTop: '20px', color: 'white'}}
            >
                <Grid item xs={4} sx={{ textAlign: 'center' }}>
                    <InfoText>{project.name}</InfoText>
                </Grid>
                <Grid item xs={4} sx={{ textAlign: 'center'}}>
                    <InfoText>{created}</InfoText>
                </Grid>
                <Grid item xs={4} sx={{ textAlign: 'center'}}>
                    <SubmitBtn component={RouterLink} to={`/house/${project.Houses[0].id}`} variant="contained" color="primary" size="medium" sx={{ m: 1, width: '15ch' }}>
                        Переглянути
                    </SubmitBtn>
                </Grid>
            </Grid>
        </>
    )
}