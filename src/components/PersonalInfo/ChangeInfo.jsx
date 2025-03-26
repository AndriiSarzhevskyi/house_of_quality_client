import { Container } from "@mui/material"
import { InfoContainer, RedBtn } from "./PersonalInfo-styles"
import { useState } from "react"
import { FlexRow } from "../GeneralStyles"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Form, SubmitBtn } from '../Registration/Registration-styles';
import { TextField, Typography, FormControl, Input, InputAdornment, IconButton, InputLabel, Select, MenuItem, Alert } from '@mui/material';
import { useHttp } from '../../hooks/http.hook';

export const Changelnfo = ({ user, birthday_origin, auth, changeShowInfoHandler, getInfoHandler }) => {
    const { request, error, setError } = useHttp();
    const [firstname, setFirstName] = useState(user.name);
    const [birthday, setBirthday] = useState(birthday_origin);
    const [surname, setSurname] = useState(user.surname);
    const [patronimic, setPatronimic] = useState(user.patronimic);
    const [company, setCompany] = useState(user.company);
    const [position, setPosition] = useState(user.position);
    const [email, setEmail] = useState(user.email);
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

    const changeInfoHandler = async event => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append("first_name", firstname);
            formData.append("surname", surname);
            formData.append("patronimic", patronimic);
            formData.append("company", company);
            formData.append("position", position);
            formData.append("email", email);
            formData.append("birthday", birthday);
            await request(`/api/user/update${auth.userId}`, "post", formData, { Authorization: `Bearer ${auth.token}` }).then(res => {
                auth.changeName(res.user.first_name);
                setDisplay("none");
                getInfoHandler();
                changeShowInfoHandler();
            });
        }
        catch (e) {
            setDisplay('flex');
        }
    }

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
        <>
            
            <Container maxWidth='sm' sx={{ marginTop: "120px", display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
                <Form sx={{}} onSubmit={changeInfoHandler}>
                    <Typography variant="h5" color="#eb1841" sx={{ textAlign: "center", marginBottom: '20px' }}>Редагування персональних даних</Typography>
                    <Alert severity="error" sx={{ display: display, m: 1, width: '30ch' }} variant='outlined'>{error}</Alert>

                    <TextField
                        label="Прізвище"
                        sx={{ m: 1, width: '30ch' }}
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
                        label="Компанія"
                        sx={{ m: 1, width: '30ch' }}
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        variant="standard"
                        type='text'
                        margin="dense"
                       
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
                        label="Электронна пошта"
                        sx={{ m: 1, width: '30ch' }}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="standard"
                        margin="dense"
                        required
                    />
                    <FlexRow sx={{ justifyContent: "space-around", marginTop: '20px' }}>
                        <SubmitBtn variant="contained" color="primary" type='submit' sx={{ m: 1, width: '16ch' }}>
                            Зберегти
                        </SubmitBtn>
                        <RedBtn variant="contained" color="error" sx={{ m: 1, width: '16ch' }} onClick={changeShowInfoHandler}>
                            Відмінити
                        </RedBtn>
                    </FlexRow>
                </Form>
            </Container>
            </>
        // </InfoContainer>
    )
}