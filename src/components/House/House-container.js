import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { useHttp } from "../../hooks/http.hook";
import { House } from "./House";
import { MainBlockImg } from "../GeneralStyles";
import { HeaderContainer } from "../Header/HeaderContainer";

export const HouseContainer = () => {
    const auth = useContext(AuthContext);
    const { request, error } = useHttp();

    const [technicalReq, setTechnicalReq] = useState([]);
    const [customerReq, setCustomerReq] = useState([]);
    const [matrix, setMatrix] = useState([]);
    const [roof, setRoof] = useState([]);
    const [house, setHouse] = useState(null);
    const [project, setProject] = useState(null);
    const [importance, setImportance] = useState([]);

    const [concurents, setConcurents] = useState([{ name: '' }]);
    const [competitive , setCompetitive ] = useState([]);

    useEffect(() => {
        getHouseHandler();

    }, []);

    useEffect(()=> {
        console.log("Rebuilding competitiveData with:", competitive);
    }, [competitive])


    const handleAddConcurents = () => {
        setConcurents([...concurents, { name: '' }]);
    };

    const handleRemoveConcurents = () => {
        if (concurents.length > 1) {
            const updatedConcurents = [...concurents];
            updatedConcurents.pop();
            setConcurents(updatedConcurents);
        }
    };

    const handleConcurentsName = (index, value) => {
        const updatedConcurents = [...concurents];
        updatedConcurents[index].name = value;
        setConcurents(updatedConcurents);
    };

    const getHouseHandler = async () => {
        try {
            const pathArray = window.location.pathname.split('/');
            const id = pathArray.pop();
            const formData = new FormData();
            formData.append("userId", auth.userId);
            const res = await request(`/api/house/${id}`, "POST", formData, { Authorization: `Bearer ${auth.token}` });

            setHouse(res.house);
            setTechnicalReq(res.technicalReq);
            setCustomerReq(res.customerReq);
            setMatrix(res.matrixRows);
            setRoof(res.floors);
            setProject(res.project);
            setCompetitive(res.competitive);
            console.log(res);

        } catch (e) {
            console.log(e, error);
        }
    };

    const updateRelationship = async (celllId, value) => {
        try {
            const pathArray = window.location.pathname.split('/');
            const id = pathArray.pop();
            const formData = new FormData();
            formData.append("cellId", celllId);
            formData.append("value", value);
            formData.append("houseId", id);
            formData.append("userId", auth.userId);
            await request('/api/cells/update', "POST", formData, { Authorization: `Bearer ${auth.token}` }).then(res => {
                setMatrix(res.matrixRows);
                console.log(res);
            })

        }
        catch (e) {
            console.log(e, error);
        }
    }

    const updateImprovement = async (technicalReqId, value) => {
        try {
            const pathArray = window.location.pathname.split('/');
            const id = pathArray.pop();
            const formData = new FormData();
            formData.append("tecnicalReqId", technicalReqId);
            formData.append("value", value);
            formData.append("houseId", id);
            formData.append("userId", auth.userId);
            await request('/api/cells/improvement', "POST", formData, { Authorization: `Bearer ${auth.token}` }).then(res => {

                console.log(res);
            })

        }
        catch (e) {
            console.log(e, error);
        }
    }

    const updateRoof = async (roofId, value) => {
        try {
            const pathArray = window.location.pathname.split('/');
            const id = pathArray.pop();
            const formData = new FormData();
            formData.append("roofId", roofId);
            formData.append("value", value);
            formData.append("houseId", id);
            formData.append("userId", auth.userId);
            await request('/api/cells/roofconnection', "POST", formData, { Authorization: `Bearer ${auth.token}` }).then(res => {
                console.log(res);

            })

        }
        catch (e) {
            console.log(e, error);
        }
    }

    const handleNewConcurents = async event => {
        
        try {
            event.preventDefault();
            const pathArray = window.location.pathname.split('/');
            const id = pathArray.pop();
            const formData = new FormData();
            formData.append("userId", auth.userId);
            formData.append("houseId", id);
            formData.append("concurents", JSON.stringify(concurents));
           
            await request(`/api/concurents/create`, 'POST', formData, { Authorization: `Bearer ${auth.token}` }).then(res => {
                console.log(res);
                setCompetitive(res.competitive);
                setConcurents([{ name: ''}]);
                
            });
        }
        catch (e) {
            console.log(e, error);
        }
    }

    const updateCompetitive = async (cellId, value) => {
        try {
            const pathArray = window.location.pathname.split('/');
            const id = pathArray.pop();
            const formData = new FormData();
            formData.append("competitiveId", cellId);
            formData.append("value", value);
            formData.append("houseId", id);
            formData.append("userId", auth.userId);
            await request('/api/cells/competitive', "POST", formData, { Authorization: `Bearer ${auth.token}` }).then(res => {
                console.log(res);
                setCompetitive(res.competitive);
            })

        }
        catch (e) {
            console.log(e, error);
        }
    }

    return (
        <>
            <HeaderContainer />
            <MainBlockImg>
                {house && customerReq.length > 0 && technicalReq.length > 0 && matrix.length > 0 && (
                    <House
                        house={house}
                        project={project}
                        customerReq={customerReq}
                        technicalReq={technicalReq}
                        matrix={matrix}
                        roof={roof}
                        updateRelationship={updateRelationship}
                        updateImprovement={updateImprovement}
                        importance={importance}
                        setImportance={setImportance}
                        updateRoof={updateRoof}
                        concurents={concurents}
                        setConcurents={setConcurents}
                        handleAddConcurents={handleAddConcurents}
                        handleRemoveConcurents={handleRemoveConcurents}
                        handleConcurentsName={handleConcurentsName}
                        handleNewConcurents={handleNewConcurents}
                        competitive={competitive}
                        updateCompetitive={updateCompetitive}
                    />
                )}
            </MainBlockImg>
        </>
    );
};
