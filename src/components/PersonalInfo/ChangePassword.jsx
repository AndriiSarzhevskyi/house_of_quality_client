import { Container } from "@mui/material"
import { InfoContainer, RedBtn } from "./PersonalInfo-styles"
import { useState } from "react"
import { FlexRow } from "../GeneralStyles"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Form, SubmitBtn } from '../Registration/Registration-styles';
import { TextField, Typography, FormControl, Input, InputAdornment, IconButton, InputLabel, Select, MenuItem, Alert } from '@mui/material';
import { useHttp } from '../../hooks/http.hook';

export const ChangePassword = ({ user, auth, getInfoHandler, changeShowPasswordHandler }) => {
    const { request, error, setError } = useHttp();

    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [display, setDisplay] = useState('none');
    const [displaypass, setDisplaypass] = useState('none');



    const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
    const handleMouseDownPassword = (event: MouseEvent) => {
        event.preventDefault();
    };

    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [passwordError1, setPasswordError1] = useState('');
    const [passwordError2, setPasswordError2] = useState('');

    const handlePasswordChange1 = (event) => {
        const newPassword = event.target.value;
        setPassword1(newPassword);

        if (newPassword.length < 8) {
            setPasswordError1('Пароль повинен містити мінімум 8 символів.');
        }
        else if (newPassword.length > 20) {
            setPasswordError1('Завеликий пароль');
        } else if (!/[a-z]/.test(newPassword) || !/[A-Z]/.test(newPassword)) {
            setPasswordError1('Пароль повинен містити хочаб 1 велику та 1 маленьку латинські літери.');
        }
        else if (/\s/.test(newPassword)) {
            setPasswordError1('Пароль повинен не містити пропусків.');
        }
        else {
            setPasswordError1('');
        }
    };

    const handlePasswordChange2 = (event) => {
        const newPassword = event.target.value;
        setPassword2(newPassword);

        if (newPassword.length < 8) {
            setPasswordError2('Пароль повинен містити мінімум 8 символів.');
        }
        else if (newPassword.length > 20) {
            setPasswordError2('Завеликий пароль');
        } else if (!/[a-z]/.test(newPassword) || !/[A-Z]/.test(newPassword)) {
            setPasswordError2('Пароль повинен містити хочаб 1 велику та 1 маленьку латинські літери.');
        }
        else if (/\s/.test(newPassword)) {
            setPasswordError2('Пароль повинен не містити пропусків.');
        }
        else {
            setPasswordError2('');
        }
    };


    const changePassHandler = async event => {
        event.preventDefault();
        try {
            if (password1 == password2) {
                setPasswordError1('');
                setPasswordError2('');
                const formData = new FormData();
                formData.append("password1", password1);
                formData.append("password2", password2);
                await request(`/api/user/pass${auth.userId}`, "post", formData, { Authorization: `Bearer ${auth.token}` }).then(res => {
                    setDisplaypass("none");
                    changeShowPasswordHandler();
                });
            }
            else {
                setPasswordError1('Паролі не співпадають');
                setPasswordError2('Паролі не співпадають');
            }
        }
        catch (e) {
            setDisplaypass("flex");
        }

    }

    return (
        <Container maxWidth='sm' sx={{ marginTop: "120px", display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
            <Form sx={{}} onSubmit={changePassHandler}>
                <Typography variant="h5" color="#eb1841" sx={{ textAlign: "center", marginBottom: '20px' }}>Змінити пароль</Typography>
                <Alert severity="error" sx={{ display: displaypass, m: 1, width: '30ch' }} variant='outlined'>{error}</Alert>
                <FormControl sx={{ m: 1, width: '30ch' }} variant="standard" margin="dense" required>
                    <InputLabel htmlFor="standard-adornment-password">Новий пароль</InputLabel>
                    <Input
                        id="password1"
                        type={showPassword1 ? 'text' : 'password'}
                        value={password1}
                        onChange={handlePasswordChange1}
                        inputProps={{ inputProps: { pattern: "^[a-zA-Z0-9]+$", title: "assaas" } }}


                        error={!!passwordError1}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword1}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword1 ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    {passwordError1 && <p style={{ color: 'red' }}>{passwordError1}</p>}
                </FormControl>
                <FormControl sx={{ m: 1, width: '30ch' }} variant="standard" margin="dense" required>
                    <InputLabel htmlFor="standard-adornment-password">Повторити пароль</InputLabel>
                    <Input
                        id="password2"
                        type={showPassword2 ? 'text' : 'password'}
                        value={password2}
                        onChange={handlePasswordChange2}
                        inputProps={{ inputProps: { pattern: "^[a-zA-Z0-9]+$", title: "assaas" } }}


                        error={!!passwordError2}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword2}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword2 ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    {passwordError2 && <p style={{ color: 'red' }}>{passwordError2}</p>}
                </FormControl>
                <FlexRow sx={{ justifyContent: "space-around" }}>
                    <SubmitBtn variant="contained" color="primary" type='submit' sx={{ m: 1, width: '16ch' }}>
                        Зберегти
                    </SubmitBtn>
                    <RedBtn variant="contained" color="error" sx={{ m: 1, width: '16ch' }} onClick={changeShowPasswordHandler}>
                        Відмінити
                    </RedBtn>
                </FlexRow>
            </Form>

        </Container>

    )
}