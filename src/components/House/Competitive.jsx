import { useState } from "react";
import { Select, MenuItem, FormControl, Box } from "@mui/material";
import { FlexRow, FlexColumn } from "../GeneralStyles";
import { CustomerReq, Cell, TechnicalrReq } from "./House-styles";
import { RadioButtonChecked, RadioButtonUnchecked, ChangeHistory } from "@mui/icons-material";

export const Competitive = ({ competitive: initialCompetitive, updateCompetitive }) => {
    const [concurents, setConcurents] = useState(initialCompetitive);

    const handleChange = (i, j, event) => {
        const newValue = event.target.value;
        const cellId = concurents[i].Competitive[j].id;

        const newMatrix = [...concurents];
        newMatrix[i].Competitive[j] = { ...concurents[i].Competitive[j], assessment: newValue };
        setConcurents(newMatrix);
        updateCompetitive(cellId, newValue);
    };

    const relationshipIcons = {
        5: "5",
        4: "4",
        3: "3",
        2: "2",
        1: "1",
        0: "0"
    };

    return (
        <>
            <FlexColumn sx={{ marginTop: '-158px', width: `${58*concurents.length}px` }}>
                <CustomerReq sx={{width: '98%', padding: '0', textAlign: 'center', justifyContent: 'center', fontSize: concurents.length <=1  ? '10px' : '16px'}}>Конкурентні оцінки</CustomerReq>
                <FlexRow sx={{justifyContent: 'center'}}>
                    {concurents.map((concurent, i) => {
                        const cells = concurents[i].Competitive.map((cell, j) => (
                            <Cell key={cell.id}>
                                <FormControl fullWidth>
                                    <Select
                                        IconComponent={() => null}
                                        value={cell.assessment}
                                        onChange={(event) => handleChange(i, j, event)}
                                        sx={{
                                            textAlign: "center",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            height: "55px",
                                            width: "55px",
                                            padding: 0,
                                            "& .MuiSelect-select": {
                                                padding: "0px !important",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            },
                                            "& .MuiOutlinedInput-input": {
                                                padding: "0px !important"
                                            }
                                        }}
                                    >
                                        {[5, 4, 3, 2, 1, 0].map(option => (
                                            <MenuItem key={option} value={option} sx={{
                                                textAlign: "center",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                height: "55px",
                                                width: "55px",
                                            }}>
                                                <Box sx={{
                                                    fontSize: 24, textAlign: "center",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    height: "55px",
                                                    width: "55px",
                                                }}>
                                                    {relationshipIcons[option]}
                                                </Box>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Cell>
                        ));

                        return (
                            <FlexColumn key={concurent.id} sx={{alignItems: 'center'}}>
                                <TechnicalrReq sx={{ height: '100px'}}>{concurent.name}</TechnicalrReq>
                                {cells}

                            </FlexColumn>
                        );
                    })}
                </FlexRow>
            </FlexColumn>
        </>
    );
};