import { TextField, Typography, FormControl, Input, InputAdornment, IconButton, InputLabel, Select, MenuItem, Card, Alert } from '@mui/material';
import { Link as RouterLink, useNavigate } from "react-router-dom"
import { useHttp } from '../../hooks/http.hook';
import { LightningStripe, FlexRow } from '../GeneralStyles';
import { useState, useEffect } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Form, SubmitBtn, FormContainer } from '../Registration/Registration-styles';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

export const NewHouse = ({ newHouseHandler, name, setName, display, error,
    handleAddNeeds, handleRemoveNeeds, handleNameNeeds, handleRankingsNeeds, needs,
    requirements, handleAddRequirements, handleRemoveRequirements, handleRequirementsName }) => {
    return (
        <>
            <FormContainer maxWidth='md' >


                <Form onSubmit={newHouseHandler} sx={{ border: "1px solid #eb1841" }}>
                    <Typography variant='h5' color="#eb1841">Новий проєкт</Typography>
                    <Alert severity="error" sx={{ display: display, m: 1, width: '30ch' }} variant='outlined'>{error}</Alert>

                    <TextField
                        label="Назва проєкту"
                        sx={{ m: 1, width: '42ch' }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        variant="standard"
                        margin="dense"
                        InputProps={{ inputProps: { minLength: 2, maxLength: 25 } }}
                        required
                    />

                    <Typography variant='h6' color="#eb1841" sx={{ marginTop: '20px' }}>Вимоги замовника</Typography>
                    {needs.map((need, index) => (
                        <FlexRow>
                            <TextField
                                key={index}
                                label={`Вимога замовника ${index + 1}`}
                                sx={{ m: 1, width: '30ch' }}
                                value={need.name}
                                onChange={(e) => handleNameNeeds(index, e.target.value)}
                                type="text"
                                variant="standard"
                                margin="dense"
                                InputProps={{ inputProps: { minLength: 2, maxLength: 200 } }}
                                required
                            />
                            <TextField
                                key={index}
                                label={`Рейтинг ${index + 1}`}
                                sx={{ m: 1, width: '10ch' }}
                                value={need.rating}
                                onChange={(e) => handleRankingsNeeds(index, e.target.value)}
                                type="number"
                                variant="standard"
                                margin="dense"
                                InputProps={{ inputProps: { min: 1, max: 10 } }}
                                required
                            />
                        </FlexRow>
                    ))}
                    <FlexRow>
                        <IconButton color='success' variant="outlined" onClick={handleAddNeeds}>
                            <AddOutlinedIcon sx={{}}></AddOutlinedIcon>

                        </IconButton>
                        <IconButton color="error" variant="outlined" onClick={handleRemoveNeeds}>
                            <RemoveOutlinedIcon sx={{}}></RemoveOutlinedIcon>
                        </IconButton>
                    </FlexRow>

                    <Typography variant='h6' color="#eb1841" sx={{ marginTop: '20px' }}>Технічні вимоги</Typography>
                    {requirements.map((requirement, index) => (
                        <FlexRow>
                            <TextField
                                key={index}
                                label={`Технічна вимога ${index + 1}`}
                                sx={{ m: 1, width: '42ch' }}
                                value={requirement.name}
                                onChange={(e) => handleRequirementsName(index, e.target.value)}
                                type="text"
                                variant="standard"
                                margin="dense"
                                InputProps={{ inputProps: { minLength: 2, maxLength: 200 } }}
                                required
                            />

                        </FlexRow>
                    ))}
                    <FlexRow>
                        <IconButton color='success' variant="outlined" onClick={handleAddRequirements}>
                            <AddOutlinedIcon sx={{}}></AddOutlinedIcon>

                        </IconButton>
                        <IconButton color="error" variant="outlined" onClick={handleRemoveRequirements}>
                            <RemoveOutlinedIcon sx={{}}></RemoveOutlinedIcon>
                        </IconButton>
                    </FlexRow>
                    <SubmitBtn variant="contained" color="primary" type='submit' size='large' sx={{ m: 1, width: '30ch', marginTop: '20px' }}>
                        Створити проєкт
                    </SubmitBtn>
                </Form>
            </FormContainer>
        </>
    )
}