import { useEffect, useState } from "react";
import { Select, MenuItem, FormControl, Box } from "@mui/material";

import { Cell, TriangleCell, RhombusCell } from "./House-styles";
import { FlexColumn, FlexRow } from "../GeneralStyles";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export const Roof = ({ technicalReq, roof, updateRoof }) => {

    const relationshipIcons = {
        "++": "++",
        "+": "+",
        "-": "-",
        "--": "--",
        "": ""
    };

    const [connections, setConnections] = useState(roof);

    const handleChange = (i, j, event) => {
        const newValue = event.target.value;
        const roofId = roof[i][j].id;
        const newMatrix = [...connections];
        newMatrix[i][j] = { ...connections[i][j], connection: newValue };
        setConnections(newMatrix);
        updateRoof(roofId, newValue);
    };

    return (
        <>
            {connections.length > 0 && connections.map((floor, i) => {
                const cells = connections[i].map((cell, j) => (

                    <RhombusCell key={cell.id} sx={{ marginBottom: '-12.5px' }}>
                        <FormControl fullWidth sx={{ boxSizing: "border-box",}}>
                            <Select
                                IconComponent={() => null}
                                value={cell.connection}
                                onChange={(event) => handleChange(i, j, event)}
                                sx={{
                                    textAlign: "center",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "38px",
                                    width: "38px",
                                    padding: 0,
                                    boxSizing: "border-box",
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
                                {["++", "+", "-", "--", ""].map(option => (
                                    <MenuItem key={option} value={option} sx={{
                                        textAlign: "center",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "38px",
                                        width: "38px",
                                        boxSizing: "border-box",
                                    }}>
                                        <span>
                                            <Box sx={{
                                                fontSize: 24, textAlign: "center",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                height: "38px",
                                                width: "38px",
                                                boxSizing: "border-box",
                                            }}>
                                                {relationshipIcons[option]}
                                            </Box>
                                        </span>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </RhombusCell>
                ));
                return (
                    <>

                        <FlexRow sx={{ gap: '1.1rem', marginBottom: '0px' }}>{cells}</FlexRow>

                    </>
                )
            })}
        </>
    );
};