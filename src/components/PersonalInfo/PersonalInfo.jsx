import { MainBlock } from "../GeneralStyles"
import { Container } from "@mui/material"
import { InfoContainer, InfoType, InfoText, RedBtn, ContentBlock } from "./PersonalInfo-styles"
import { Typography, Grid } from "@mui/material"
import { useState } from "react"
import { SubmitBtn } from "../Entrance/Entrane-styles"
import { FlexRow } from "../GeneralStyles"
import { LeftMenuContainer } from "../LeftMenu/LeftMenuContainer"
export const PersonalInfo = ({ user, birthday, logoutHandler, changeShowInfoHandler, changeInfoHandler, changeShowPasswordHandler }) => {

    return (<>
        <InfoContainer maxWidth='md'>
            <Typography variant="h5" color="#eb1841" sx={{ textAlign: "center" }}>Персональні дані</Typography>

            <Grid container spacing={3} sx={{ color: 'white', border: '1px solid #eb1841', width: '600px', marginTop: '20px', marginLeft: '0px', alignSelf:'center', justifyContent: 'center' }}>
                <Grid item xs={6} sx={{ borderTop: '1px solid #eb1841', borderRight: '1px solid #eb1841' }}>
                    <InfoType >Прізвище:</InfoType>
                </Grid>
                <Grid item xs={6} sx={{ borderTop: '1px solid #eb1841' }}>
                    <InfoText>{user.surname}</InfoText>
                </Grid>

                <Grid item xs={6} sx={{ borderRight: '1px solid #eb1841' }}>
                    <InfoType>Ім'я:</InfoType>
                </Grid>
                <Grid item xs={6}>
                    <InfoText>{user.name}</InfoText>
                </Grid>

                <Grid item xs={6} sx={{ borderRight: '1px solid #eb1841' }}>
                    <InfoType>По батькові:</InfoType>
                </Grid>
                <Grid item xs={6}>
                    <InfoText>{user.patronimic}</InfoText>
                </Grid>
                <Grid item xs={6} sx={{ borderRight: '1px solid #eb1841' }}>
                    <InfoType>Дата народження:</InfoType>
                </Grid>

                <Grid item xs={6}>
                    <InfoText>{birthday}</InfoText>
                </Grid>
                <Grid item xs={6} sx={{ borderTop: '1px solid #eb1841', borderRight: '1px solid #eb1841' }}>
                    <InfoType>Компанія:</InfoType>
                </Grid>
                <Grid item xs={6} sx={{ borderTop: '1px solid #eb1841' }}>
                    <InfoText>{user.company}</InfoText>
                </Grid>
                <Grid item xs={6} sx={{ borderRight: '1px solid #eb1841' }}>
                    <InfoType>Посада:</InfoType>
                </Grid>
                <Grid item xs={6}>
                    <InfoText>{user.position}</InfoText>
                </Grid>
                <Grid item xs={6} sx={{ borderTop: '1px solid #eb1841', borderRight: '1px solid #eb1841' }}>
                    <InfoType>Електрона пошта:</InfoType>
                </Grid>
                <Grid item xs={6} sx={{ borderTop: '1px solid #eb1841' }}>
                    <InfoText>{user.email}</InfoText>
                </Grid>
            </Grid>
            <FlexRow sx={{ alignSelf: 'center', margin: 'auto', justifySelf: 'center', justifyContent: 'center', marginTop: "20px", width: '100%', gap: '1rem' }} >
                <SubmitBtn variant="contained" color="primary" size='large' sx={{ m: 1, width: '30ch' }} onClick={changeInfoHandler}>
                    Редагувати
                </SubmitBtn>
                <SubmitBtn variant="contained" color="primary" size='large' sx={{ m: 1, width: '30ch' }} onClick={changeShowPasswordHandler}>
                    Змінити пароль
                </SubmitBtn>
            </FlexRow>
        </InfoContainer>
    </>
    )
}