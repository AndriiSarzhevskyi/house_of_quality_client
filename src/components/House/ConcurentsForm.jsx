import { Typography, TextField, FormControl, IconButton } from "@mui/material"
import { Form, SubmitBtn, FormContainer } from '../Registration/Registration-styles';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { FlexRow } from "../GeneralStyles";
import { InfoText } from "../PersonalInfo/PersonalInfo-styles"

export const ConcurentsForm = ({ concurents, setConcurents, handleAddConcurents, handleRemoveConcurents, handleConcurentsName, handleNewConcurents }) => {
    return (

        <>
            <Form onSubmit={handleNewConcurents} sx={{ boxShadow: 'none', border: 'none', marginTop: '40px' }}>
                <InfoText sx={{ fontSize: '17px', color: 'white' }}>Додати конкурентів</InfoText>
                {concurents.map((concurent, index) => (
                    <FlexRow>
                        <TextField
                            key={index}
                            label={`Конкурент ${index + 1}`}
                            sx={{ m: 1, width: '42ch' }}
                            value={concurent.name}
                            onChange={(e) => handleConcurentsName(index, e.target.value)}
                            type="text"
                            variant="standard"
                            margin="dense"
                            InputProps={{ inputProps: { minLength: 2, maxLength: 200 } }}
                            required
                        />

                    </FlexRow>
                ))
                }
                < FlexRow >
                    <IconButton color='success' variant="outlined" onClick={handleAddConcurents}>
                        <AddOutlinedIcon sx={{}}></AddOutlinedIcon>

                    </IconButton>
                    <IconButton color="error" variant="outlined" onClick={handleRemoveConcurents}>
                        <RemoveOutlinedIcon sx={{}}></RemoveOutlinedIcon>
                    </IconButton>
                </FlexRow >
                <SubmitBtn variant="contained" color="primary" type='submit' size='large' sx={{ m: 1, width: '30ch', marginTop: '10px' }}>
                    Додати
                </SubmitBtn>
            </Form>
        </>
    )
}