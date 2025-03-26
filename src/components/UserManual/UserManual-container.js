import { HeaderContainer } from "../Header/HeaderContainer.js"
import { MainBlockImg } from "../GeneralStyles"
import { UserManual } from "./UserManual"

export const UserManualContainer = () => {
    return(
        <>
            <HeaderContainer></HeaderContainer>
            <MainBlockImg>
                <UserManual></UserManual>
            </MainBlockImg>
        </>
    )
}