import { MainBlockImg } from "../GeneralStyles"
import { HeaderContainer } from "../Header/HeaderContainer"
import { useEffect, useContext, useState } from "react"
import { AuthContext } from "../../context/auth.context"
import { useHttp } from "../../hooks/http.hook"
import { MyProjects } from "./MyProjects"
import { Typography, Grid } from "@mui/material"
import { InfoContainer } from "../PersonalInfo/PersonalInfo-styles"
import { FlexRow } from "../GeneralStyles"


export const MyProjectsContainer = () => {
    const auth = useContext(AuthContext);
    const { request, error } = useHttp();

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjectsHandler();
    }, [])

    const getProjectsHandler = async () => {

        try {
            await request(`/api/myprojects/${auth.userId}`, "GET", null, { Authorization: `Bearer ${auth.token}` }).then(res => {
                setProjects(res.projects);
                console.log(res);
            })
        }
        catch (e) {
            console.log(e, error);
        }
    }

    return (
        <>
            <HeaderContainer></HeaderContainer>
            <MainBlockImg>
                <InfoContainer msxWidth='md'>
                    <Typography variant="h5" color="#eb1841" sx={{ textAlign: "center" }}>Мої проєкти</Typography>
                    {projects.length > 0 &&
                        <Grid container spacing={3} sx ={{marginTop: '20px'}}>
                            <Grid item xs={4} sx={{ color: '#eb1841' }}>
                                <Typography variant="h6" color="#eb1841" sx={{ textAlign: "center" }}>Назва</Typography>
                            </Grid>
                            <Grid item xs={4} sx={{ color: '#eb1841' }}>
                                <Typography variant="h6" color="#eb1841" sx={{ textAlign: "center" }}>Дата та час створення</Typography>
                            </Grid>
                            <Grid item xs={4} sx={{ color: '#eb1841' }}>
                                <Typography variant="h6" color="#eb1841" sx={{ textAlign: "center" }}>Дії</Typography>
                            </Grid>
                        </Grid>
                    }

                    {projects.length > 0 && projects.map(project => (
                        <MyProjects project={project} key={project.id}></MyProjects>
                    ))}
                    {projects.length <= 0 &&
                        <Typography variant="h5" color="white" sx={{ textAlign: "center", marginTop: '25px' }}>Проєкти відсутні</Typography>
                    }
                </InfoContainer>

            </MainBlockImg>
        </>
    )
}