import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { useHttp } from "../../hooks/http.hook";
import { HeaderContainer } from "../Header/HeaderContainer";
import { MainBlockImg } from "../GeneralStyles";
import { NewHouse } from "./NewHouse";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const NewHouseContainer = () => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const { error, request } = useHttp();

    const [display, setDisplay] = useState('none');
    const [name, setName] = useState("");
    const [needs, setNeeds] = useState([{ name: '', rating: '' }]);
    const [requirements, setRequirements] = useState([{ name: '' }]);

    const newHouseHandler = async event => {
        try {
            event.preventDefault();
            const formData = new FormData();
            console.log(needs);
            formData.append("userId", auth.userId);
            formData.append("projectName", name);
            formData.append("needs", JSON.stringify(needs));
            formData.append("requirements", JSON.stringify(requirements));
            await request(`/api/newproject/create`, 'POST', formData, { Authorization: `Bearer ${auth.token}` }).then(res => {
                console.log(res)
                navigate(`/house/${res.houseId}`);
            });
        }
        catch (e) {
            console.log(error)
        }
    }

    const handleAddNeeds = () => {
        setNeeds([...needs, { name: '', rating: '' }]);
    };

    const handleAddRequirements = () => {
        setRequirements([...requirements, { name: '' }]);
    };

    const handleRemoveNeeds = () => {
        if (needs.length > 1) {
            const updatedNeeds = [...needs];
            updatedNeeds.pop();
            setNeeds(updatedNeeds);
        }
    };

    const handleNameNeeds = (index, value) => {
        const updatedNeeds = [...needs];
        updatedNeeds[index].name = value;
        setNeeds(updatedNeeds);
    };

    const handleRankingsNeeds = (index, value) => {
        const updatedNeeds = [...needs];
        updatedNeeds[index].rating = value;
        setNeeds(updatedNeeds);
    };

    const handleRemoveRequirements = () => {
        if (requirements.length > 1) {
            const updatedRequirements = [...requirements];
            updatedRequirements.pop();
            setRequirements(updatedRequirements);
        }
    };

    const handleRequirementsName = (index, value) => {
        const updatedRequirements = [...requirements];
        updatedRequirements[index].name = value;
        setRequirements(updatedRequirements);
    };

    return (
        <>
            <HeaderContainer></HeaderContainer>
            <MainBlockImg>
                <NewHouse
                    newHouseHandler={newHouseHandler}
                    name={name}
                    setName={setName}
                    display={display}
                    error={error}
                    needs={needs}
                    handleAddNeeds={handleAddNeeds}
                    handleRemoveNeeds={handleRemoveNeeds}
                    handleNameNeeds={handleNameNeeds}
                    handleRankingsNeeds={handleRankingsNeeds}
                    requirements={requirements}
                    handleAddRequirements={handleAddRequirements}
                    handleRemoveRequirements={handleRemoveRequirements}
                    handleRequirementsName={handleRequirementsName}
                ></NewHouse>
            </MainBlockImg>
        </>
    )
}