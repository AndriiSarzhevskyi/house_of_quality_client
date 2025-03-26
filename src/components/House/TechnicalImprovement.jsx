import { useState } from "react";
import { Select, MenuItem, FormControl, Box } from "@mui/material";

import { Cell } from "./House-styles";

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export const TechnicalImprovement = ({ technicalReq, updateImprovement }) => {
    
  

    const relationshipIcons = {
        "Improve": <ArrowUpwardIcon fontSize="large" />,
        "Worsen": <ArrowDownwardIcon fontSize="large" />,
        "": " "
    };

    const [improvements, setImprovements] = useState(technicalReq);

    const handleChange = (i, event) => {
        const newValue = event.target.value;
        const technicalReqId = technicalReq[i].id;
        const newMatrix = [...improvements];
        newMatrix[i] = { ...improvements[i],  improvement: newValue};
        setImprovements(newMatrix);
        updateImprovement(technicalReqId, newValue);
    };


    return ( 
        <>
            {improvements.map((req, i) => (
                <Cell key={improvements[i].id}>
                    <FormControl fullWidth>
                        <Select
                            IconComponent={() => null}
                            value={improvements[i].improvement}
                            onChange={(event) => handleChange(i, event)}
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
                            {["Improve", "Worsen", ""].map(option => (
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
            ))}




        </>
    );
};