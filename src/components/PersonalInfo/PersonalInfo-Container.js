import { PersonalInfo } from "./PersonalInfo"
import { HeaderContainer } from "../Header/HeaderContainer"
import { useHttp } from "../../hooks/http.hook"
import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import { MainBlock, MainBlockImg } from "../GeneralStyles"
import { Changelnfo } from "./ChangeInfo"

import { LeftMenuContainer } from "../LeftMenu/LeftMenuContainer"
import { ChangePassword } from "./ChangePassword"

export const PersonalInfoContainer = () => {
    const { request } = useHttp();
    const [user, setUser] = useState();
    const [birthday, setBirthday] = useState();
    const [edit, setEdit] = useState(false);
    const auth = useContext(AuthContext);
    const [show_pass, setShow_pass] = useState(false);

    const getInfoHandler = async event => {
        try {
            await request(`/api/user/${auth.userId}`, 'GET', null, { Authorization: `Bearer ${auth.token}` }).then(res => {
                console.log(res.user.birthday);
                const dateOnly = (res.user.birthday).split('T')[0];
                setBirthday(dateOnly);
                setUser(res.user);
            });
        }
        catch (e) { }
    }

    useEffect(() => {
        getInfoHandler();
    }, [])

    const logoutHandler = () => {
        auth.logout();
    }

    const changeShowInfoHandler = event => {
        console.log("Info");
        setEdit(!edit);
    }

    const changeShowPasswordHandler = event => {
        console.log(!show_pass)
        console.log("Pass");
        setShow_pass(!show_pass);
    }



    useEffect(() => {
        console.log("edit изменился:", edit);
      }, [edit]);

    return (
        <>
            <HeaderContainer></HeaderContainer>
            <MainBlockImg>
                    {user !== undefined && !show_pass && !edit && <PersonalInfo user={user} birthday={birthday} auth={auth} birthday_origin={birthday} logoutHandler={logoutHandler} changeShowInfoHandler={changeShowInfoHandler} changeInfoHandler={changeShowInfoHandler} getInfoHandler={getInfoHandler} changeShowPasswordHandler={changeShowPasswordHandler}></PersonalInfo>}
                    {user !== undefined && !show_pass && edit === true && <Changelnfo user={user} birthday_origin={birthday} auth={auth} changeShowInfoHandler={changeShowInfoHandler} getInfoHandler={getInfoHandler}></Changelnfo>}
                    {user !== undefined && show_pass && !edit && <ChangePassword user={user} auth={auth} changeShowPasswordHandler={changeShowPasswordHandler} getInfoHandler={getInfoHandler}></ChangePassword>}

            </MainBlockImg>
        </>
    )
}