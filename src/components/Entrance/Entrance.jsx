
import { TextField, Typography, FormControl, Input, InputAdornment, IconButton, InputLabel, Select, MenuItem, Card, Alert, Link } from '@mui/material';
import { HeaderContainer } from './Entrane-styles';
import { Link as RouterLink, useNavigate } from "react-router-dom"
import { useHttp } from '../../hooks/http.hook';
import { MainBlock, MainBlockImg } from '../GeneralStyles';
import { useState, useEffect } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Form, SubmitBtn, FormContainer } from './Entrane-styles';
import { AuthContext } from '../../context/auth.context';
import { useContext } from 'react';
import { TriangleBlock, TriangleText } from './Entrane-styles';

export const Entrance = () => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const { request, error } = useHttp();
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [display, setDisplay] = useState('none');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: MouseEvent) => {
        event.preventDefault();
    };

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

    const entranceHandler = async event => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        if (!passwordError) {
            try {
                await request('/api/entrance/auth', 'POST', formData).then(res => {
                    setDisplay('none');
                    console.log(res.status);
                    auth.login(res.token, res.userId, res.name, res.status);
                    navigate("/");
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
                <Form onSubmit={entranceHandler}>
                    <Typography variant='h5' color="#eb1841">Авторизація</Typography>
                    <Alert severity="error" sx={{ display: display, m: 1, width: '30ch' }} variant='outlined'>{error}</Alert>

                    <TextField
                        label="Електронна пошта"
                        sx={{ m: 1, width: '30ch', marginTop: '30px', marginBottom: '20px' }}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="standard"
                        margin="dense"
                        required
                    />
                    <FormControl sx={{ m: 1, width: '30ch', marginTop: '10px', marginBottom: '30px' }} variant="standard" margin="dense" required>
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
                        Увійти
                    </SubmitBtn>
                    <Typography variant='h6' color="white" sx={{ marginTop: '20px' }}>Або</Typography>
                    <Typography variant='h7' sx={{ fontSize: '20px', marginTop: '20px', marginBottom: '20px', color: '#2172f3' }}><Link component={RouterLink} sx={{ color: '#2172f3', textDecorationColor: '#2172f3' }} to="/registration">Зареєструватися</Link></Typography>
                </Form>

            </FormContainer>

        </MainBlockImg >
    )
}
