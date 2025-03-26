import { useEffect } from "react";
import { Typography } from "@mui/material";
import { MainContainer } from "./House-styles";
import { FlexRow, FlexColumn } from "../GeneralStyles";
import { CustomerReq, Cell, TechnicalrReq } from "./House-styles";
import { Customer } from "./Customer.jsx";
import { TechnicalImprovement } from "./TechnicalImprovement.jsx";
import { Roof } from "./Roof.jsx";
import { TriangleCell } from "./House-styles";
import { Description } from "./Description.jsx";
import { Charts } from "./Charts.jsx";
import { ConcurentsForm } from "./ConcurentsForm.jsx";
import { Competitive } from "./Competitive.jsx";

export const House = ({ house, project, customerReq, technicalReq, matrix, roof, updateRelationship, updateImprovement, importance,
    setImportance, updateRoof, concurents, setConcurents, handleAddConcurents, handleRemoveConcurents, handleConcurentsName, handleNewConcurents,
    competitive, updateCompetitive }) => {

    useEffect(() => {
        if (matrix) {
            importanceRating();
        }
    }, [matrix]);

    if (!house || !customerReq.length || !technicalReq.length) {
        return <Typography variant="h6">Завантаження...</Typography>;
    }

    const importanceRating = () => {
        const cell = [];
        if (customerReq.length > 0) {

            for (let i = 0; i < matrix.length; i++) {
                let res = 0;
                for (let j = 0; j < matrix[i].length; j++) {

                    res += parseInt(customerReq[j].priority) * parseInt(matrix[j][i].relationship)
                }
                cell.push(res);
            }
            setImportance(cell);
        }
    }


    const technical = technicalReq.map((techItem) => (
        <FlexColumn key={techItem.id}>
            <TechnicalrReq>{techItem.name}</TechnicalrReq>
        </FlexColumn>
    ));


    return (
        <MainContainer maxWidth="xl">

            <Typography variant="h5" color="#eb1841" sx={{ textAlign: "center", marginBottom: '20px' }}>{project.name}</Typography>

            <FlexColumn sx={{ marginLeft: `${463 - competitive.length * 57}px`, marginBottom: '-9px' }}>
                <Roof roof={roof} technicalReq={technicalReq} updateRoof={updateRoof} ></Roof>
            </FlexColumn>
            <FlexRow sx={{ marginLeft: `${462.5 - competitive.length * 57}px`, justifyContent: 'center' }}>
                {technicalReq.map((req) => (
                    <TriangleCell key={req.id}></TriangleCell>
                ))}
            </FlexRow>
            <FlexRow sx={{ marginLeft: `${462 - competitive.length * 57}px` }}>
                <TechnicalImprovement technicalReq={technicalReq} updateImprovement={updateImprovement}></TechnicalImprovement>
            </FlexRow>
            <FlexRow sx={{ marginLeft: `${462 - competitive.length * 57}px` }}>{technical}</FlexRow>
            <FlexRow sx={{ alignContent: 'center', justifyContent: 'space-around' }}>
                <FlexColumn>
                    <Customer customerReq={customerReq} matrix={matrix} updateRelationship={updateRelationship}></Customer>
                </FlexColumn>

                {competitive.length > 0 &&
                    <Competitive competitive={competitive} updateCompetitive={updateCompetitive}></Competitive>
                }

            </FlexRow>
            <FlexRow sx={{ marginLeft: `${348 - competitive.length * 57}px` }}>
                <CustomerReq sx={{ width: '114px' }}>Рейтинг важливості</CustomerReq>
                {importance.map(imp => (
                    <Cell>
                        {imp}
                    </Cell>
                ))}
            </FlexRow>
            <Description></Description>

            <ConcurentsForm concurents={concurents}
                setConcurents={setConcurents}
                handleNewConcurents={handleNewConcurents}
                handleAddConcurents={handleAddConcurents}
                handleRemoveConcurents={handleRemoveConcurents}
                handleConcurentsName={handleConcurentsName}
            ></ConcurentsForm>


            <Charts technicalReq={technicalReq} customerReq={customerReq} importance={importance} competitive={competitive}></Charts>
        </MainContainer >
    );
};
