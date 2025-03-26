
import { TextField, Typography, FormControl, Input, InputAdornment, IconButton, InputLabel, Select, MenuItem, Card, Alert } from '@mui/material';
import { HeaderContainer } from './Registration-styles';
import { Link as RouterLink, useNavigate } from "react-router-dom"
import { useHttp } from '../../hooks/http.hook';
import { MainBlock, MainBlockImg, LightningStripe, FlexRow } from '../GeneralStyles';
import { useState, useEffect } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Form, SubmitBtn, FormContainer } from './Registration-styles';
// import { Form, SubmitBtn, FormContainer } from '../Entrance/Entrane-styles';

export const Registration = () => {
    const navigate = useNavigate();
    const { request, error } = useHttp();

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    const formattedDate = currentDate.toISOString().split('T')[0];

    const [firstname, setFirstName] = useState("");
    const [birthday, setBirthday] = useState(formattedDate);
    const [surname, setSurname] = useState("");
    const [patronimic, setPatronimic] = useState("");
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [display, setDisplay] = useState('none');
    const [post, setPost] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setPost(event.target.value);
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: MouseEvent) => {
        event.preventDefault();
    };

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);

        if (newPassword.length < 8) {
            setPasswordError('Пароль повинен містити мінімум 8 символів.');
        }
        else if (newPassword.length > 20) {
            setPasswordError('Завеликий пароль');
        } else if (!/[a-z]/.test(newPassword) || !/[A-Z]/.test(newPassword)) {
            setPasswordError('Пароль повинен містити хочаб 1 велику та 1 маленьку латинські літери.');
        }
        else if (/\s/.test(newPassword)) {
            setPasswordError('Пароль повинен не містити пропусків.');
        }
        else {
            setPasswordError('');
        }
    };

    const registrationHandler = async event => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("first_name", firstname);
        formData.append("surname", surname);
        formData.append("patronimic", patronimic);
        formData.append("company", company);
        formData.append("position", position);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("birthday", birthday);
        if (!passwordError) {
            try {
                await request('/api/registration/create', 'POST', formData).then(res => {
                    setDisplay('none');
                    navigate("/entrance");
                });
            }
            catch (e) {
                setDisplay('flex');
            }
        }
    }

    return (
        <MainBlockImg>
            <FormContainer maxWidth='sm' >

                
                <Form onSubmit={registrationHandler}>
                <Typography variant='h5' color="#eb1841">Реєстрація</Typography>
                    <Alert severity="error" sx={{ display: display, m: 1, width: '30ch' }} variant='outlined'>{error}</Alert>
                    
                        <TextField
                            label="Прізвище"
                            sx={{ m: 1, width: '30ch'}}
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            variant="standard"
                            margin="dense"
                            InputProps={{ inputProps: { minLength: 2, maxLength: 25 } }}
                            required
                        />
                        <TextField
                            label="Ім'я"
                            sx={{ m: 1, width: '30ch' }}
                            value={firstname}
                            onChange={(e) => setFirstName(e.target.value)}
                            variant="standard"
                            margin="dense"
                            InputProps={{ inputProps: { minLength: 2, maxLength: 25 } }}
                            required
                        />
                   
                   
                        <TextField
                            label="По батькові"
                            sx={{ m: 1, width: '30ch' }}
                            value={patronimic}
                            onChange={(e) => setPatronimic(e.target.value)}
                            variant="standard"
                            margin="dense"
                            InputProps={{ inputProps: { minLength: 2, maxLength: 25 } }}
                            required
                        />
                        <TextField
                            label="Дата народження"
                            sx={{ m: 1, width: '30ch' }}
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                            variant="standard"
                            margin="dense"
                            type="date"
                            required
                        />
                    
                    
                        <TextField
                            label="Підприємство"
                            sx={{ m: 1, width: '30ch' }}
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            variant="standard"
                            type='text'
                            margin="dense"
                            InputProps={{
                                // inputProps: {
                                //     step: "any", // Разрешает ввод дробных чисел
                                //     minLength: 2,
                                //     maxLength: 50,
                                //     min: 120
                                // }
                            }}
                            required
                        />
                        <TextField
                            label="Посада"
                            sx={{ m: 1, width: '30ch' }}
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            variant="standard"
                            type='text'
                            margin="dense"
                            InputProps={{
                                // inputProps: {
                                //     step: "any", // Разрешает ввод дробных чисел
                                //     minLength: 2,
                                //     maxLength: 25,
                                //     min: 10
                                // }
                            }}
                            required
                        />

                   
                        <TextField
                            label="Электронна пошта"
                            sx={{ m: 1, width: '30ch' }}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            variant="standard"
                            margin="dense"
                            required
                        />
                        <FormControl sx={{ m: 1, width: '30ch' }} variant="standard" margin="dense" required>
                            <InputLabel htmlFor="standard-adornment-password">Пароль</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={handlePasswordChange}
                                inputProps={{ inputProps: { pattern: "^[a-zA-Z0-9]+$", title: "assaas" } }}


                                error={!!passwordError}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                        </FormControl>
                   

                    <SubmitBtn variant="contained" color="primary" type='submit' size='large' sx={{ m: 1, width: '30ch' }}>
                        Зареєструватися
                    </SubmitBtn>
                </Form>

            </FormContainer>

        </MainBlockImg >
    )
}
