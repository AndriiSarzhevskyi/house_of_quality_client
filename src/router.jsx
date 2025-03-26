import { Routes, Route, Navigate} from 'react-router-dom';
import { MainContainer } from './components/Main/MainContainer';
import { RegistrationContainer } from './components/Registration/RegistrationContainer';
import { Entrancecontainer } from './components/Entrance/EntranceContainer';
import { PersonalInfoContainer } from './components/PersonalInfo/PersonalInfo-Container';

import { HouseContainer } from './components/House/House-container';
import { NewHouseContainer } from './components/NewHouse/NewHouse-container';
import { MyProjects } from './components/MyProjects/MyProjects';
import { MyProjectsContainer } from './components/MyProjects/MyProjects-container';
import { UserManualContainer } from './components/UserManual/UserManual-container.js';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated === true) {
    return (
      <Routes>
        <Route path="/" element={<PersonalInfoContainer />}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path='/house/:id' element={<HouseContainer />}></Route>
        <Route path='/newhouse' element={<NewHouseContainer />}></Route>
        <Route path='/myprojects' element={<MyProjectsContainer />}></Route>
        <Route path='/usermanual' element={<UserManualContainer />}></Route>
      </Routes>
    )
  }
  else {
    return (
      <Routes>
        <Route path="/" element={<Entrancecontainer />}></Route>
        <Route path='/registration' element={<RegistrationContainer />}></Route>
        <Route path='/entrance' element={<Entrancecontainer />}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    )
  }
}