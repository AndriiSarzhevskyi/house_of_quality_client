
import { InfoText } from "../PersonalInfo/PersonalInfo-styles"
import { FlexColumn, FlexRow } from "../GeneralStyles"
import { RadioButtonChecked, RadioButtonUnchecked, ChangeHistory } from "@mui/icons-material";
import { Cell, CustomerReq } from "./House-styles";

export const Description = ({ }) => {

    return (
        <>
            <FlexRow sx={{ marginTop: "50px", color: 'white', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '2rem'}}>
                <FlexColumn sx={{alignSelf: 'baseline', marginTop: '30px', width: '370px'}}>
                    <InfoText sx={{ fontSize: '17px' }}>Де взаємозв'язок між потребами користувача та тахнічними вимогами оцінюється як:</InfoText>
                    <FlexRow sx={{ alignSelf: 'baseline', marginTop: '10px' }}>
                        <Cell>
                            <RadioButtonChecked></RadioButtonChecked>
                        </Cell>
                        <CustomerReq sx={{ width: '150px', justifyContent: 'center' }}>Сильний</CustomerReq>
                        <Cell>9</Cell>
                    </FlexRow>
                    <FlexRow sx={{ alignSelf: 'baseline' }}>
                        <Cell>
                            <RadioButtonUnchecked></RadioButtonUnchecked>
                        </Cell>
                        <CustomerReq sx={{ width: '150px', justifyContent: 'center' }}>Середній</CustomerReq>
                        <Cell>3</Cell>
                    </FlexRow>
                    <FlexRow sx={{ alignSelf: 'baseline' }}>
                        <Cell>
                            <ChangeHistory></ChangeHistory>
                        </Cell>
                        <CustomerReq sx={{ width: '150px', justifyContent: 'center' }}>Слабкий</CustomerReq>
                        <Cell>1</Cell>
                    </FlexRow>
                    <FlexRow sx={{ alignSelf: 'baseline' }}>
                        <Cell>

                        </Cell>
                        <CustomerReq sx={{ width: '150px', justifyContent: 'center' }}>Не призначений</CustomerReq>
                        <Cell>0</Cell>
                    </FlexRow>
                </FlexColumn>
                <FlexColumn sx={{marginTop: '30px', width: '370px'}}>
                    <InfoText sx={{ fontSize: '17px', textAlign: 'left', alignSelf: 'baseline' }}>Кореляційна матриця відносин між технічними вимогами:</InfoText>
                    <FlexRow sx={{ alignSelf: 'baseline', marginTop: '10px' }}>
                        <Cell>
                            ++
                        </Cell>
                        <CustomerReq sx={{ width: '150px', justifyContent: 'center' }}>Дуже позитивні</CustomerReq>

                    </FlexRow>
                    <FlexRow sx={{ alignSelf: 'baseline' }}>
                        <Cell>
                            +
                        </Cell>
                        <CustomerReq sx={{ width: '150px', justifyContent: 'center' }}>Позитивні</CustomerReq>

                    </FlexRow>
                    <FlexRow sx={{ alignSelf: 'baseline' }}>
                        <Cell>
                            -
                        </Cell>
                        <CustomerReq sx={{ width: '150px', justifyContent: 'center' }}>Негативні</CustomerReq>

                    </FlexRow>
                    <FlexRow sx={{ alignSelf: 'baseline' }}>
                        <Cell>
                            --
                        </Cell>
                        <CustomerReq sx={{ width: '150px', justifyContent: 'center' }}>Дуже негативні</CustomerReq>
                    </FlexRow>
                    <FlexRow sx={{ alignSelf: 'baseline' }}>
                        <Cell>

                        </Cell>
                        <CustomerReq sx={{ width: '150px', justifyContent: 'center' }}>Не корелюють</CustomerReq>
                    </FlexRow>
                </FlexColumn>
            </FlexRow>
        </>
    )

}