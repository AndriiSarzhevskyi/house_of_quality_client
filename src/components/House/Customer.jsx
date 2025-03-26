import { useState } from "react";
import { Select, MenuItem, FormControl, Box } from "@mui/material";
import { FlexRow } from "../GeneralStyles";
import { CustomerReq, Cell } from "./House-styles";
import { RadioButtonChecked, RadioButtonUnchecked, ChangeHistory } from "@mui/icons-material";

export const Customer = ({ customerReq, matrix: initialMatrix, updateRelationship }) => {
    const [matrix, setMatrix] = useState(initialMatrix);

    const handleChange = (i, j, event) => {
        const newValue = event.target.value;
        const cellId = matrix[i][j].id;

        const newMatrix = [...matrix];
        newMatrix[i][j] = { ...matrix[i][j], relationship: newValue };
        setMatrix(newMatrix);
        updateRelationship(cellId, newValue);
    };

    const relationshipIcons = {
        9: <RadioButtonChecked fontSize="large" />,
        3: <RadioButtonUnchecked fontSize="large" />,
        1: <ChangeHistory fontSize="large" />,
        0: " "
    };

    return (
        <>
            {customerReq.map((customerItem, i) => {
                const cells = matrix[i].map((cell, j) => (
                    <Cell key={cell.id}>
                        <FormControl fullWidth sx={{ boxSizing: "border-box",}}>
                            <Select
                                IconComponent={() => null}
                                value={cell.relationship}
                                onChange={(event) => handleChange(i, j, event)}
                                sx={{
                                    textAlign: "center",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "55px",
                                    width: "55px",
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
                                {[9, 3, 1, 0].map(option => (
                                    <MenuItem key={option} value={option} sx={{
                                        textAlign: "center",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: "55px",
                                        width: "55px",
                                        boxSizing: "border-box",
                                    }}>
                                        <Box sx={{
                                            fontSize: 24, textAlign: "center",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            height: "55px",
                                            width: "55px",
                                            boxSizing: "border-box",
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
                    <FlexRow key={customerItem.id}>
                        <CustomerReq>{customerItem.name}</CustomerReq>
                        <Cell>{customerItem.priority}</Cell>
                        <Cell>{parseFloat(customerItem.percentage).toFixed(2)}%</Cell>
                        {cells}
                        
                    </FlexRow>
                );
            })}
        </>
    );
};