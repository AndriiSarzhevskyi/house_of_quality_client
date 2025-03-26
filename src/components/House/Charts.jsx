import { InfoText } from "../PersonalInfo/PersonalInfo-styles";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { useState, useEffect } from "react";
import { FlexColumn } from "../GeneralStyles";
import { axisClasses } from '@mui/x-charts/ChartsAxis';

export const Charts = ({ technicalReq, customerReq, importance, competitive }) => {
    const [customerData, setCustomerData] = useState([]);
    const [technicalData, setTechnicalData] = useState([]);
    const [competitiveData, setCompetitiveData] = useState([]);

    const colors = [
        "#eb1841", "#2172f3", "#D84315", "#607D8B", "#6A1B9A",
        "#FF4C4C", "#FF4081", "#FF9800", "#FFD700", "#4CAF50",
        "#00BCD4", "#3F51B5", "#9C27B0", "#E91E63"
    ];

    useEffect(() => {
        if (customerReq.length > 0) {
            const dataArray = customerReq.map((item, index) => ({
                id: item.id,
                value: item.percentage,
                label: item.name,
                color: colors[index % colors.length],
            }));
            setCustomerData(dataArray);
        }
    }, [customerReq]);

    useEffect(() => {
        if (technicalReq.length > 0 && importance.length > 0) {
            const dataArray = technicalReq.map((item, index) => ({
                id: index,
                value: importance[index],
                label: item.name,
                color: colors[index % colors.length],
            }));
            setTechnicalData(dataArray);
        }
    }, [technicalReq, importance]);

    useEffect(() => {
        if (customerReq.length > 0 && competitive.length > 0) {
            const dataArray = customerReq.map((criterion) => {
                const dataObject = { month: criterion.name };
                competitive.forEach((competitor) => {
                    const rating = competitor.Competitive?.find(c => c.customerRequirementId === criterion.id)?.assessment || 0;
                    dataObject[competitor.name] = rating;
                });
                return dataObject;
            });
            setCompetitiveData(dataArray);
        }
    }, [competitive]);

    const chartSetting = {
        yAxis: [{ label: 'Оцінка' }],
        width: 650,
        height: 400,
        sx: {
            [`.${axisClasses.left} .${axisClasses.label}`]: {
                transform: 'translate(-10px, 0)',
            },
        },
    };

    return (
        <FlexColumn sx={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: '80px' }}>
            <InfoText sx={{ color: "white", marginBottom: '30px', fontSize: '17px' }}>
                Розподіл клієнтських вимог за рейтингом
            </InfoText>
            <PieChart
                series={[{ data: customerData }]}
                width={650}
                height={200}
            />

            <InfoText sx={{ color: "white", marginBottom: '10px', marginTop: '50px', fontSize: '17px' }}>
                Рейтинг важливості технічних вимог
            </InfoText>
            <BarChart
                xAxis={[{ scaleType: "band", data: technicalData.map((item) => item.label) }]}
                series={[
                    {
                        data: technicalData.map((item) => item.value),

                        color: technicalData.map((item) => item.color),
                    },
                ]}
                width={650}
                height={300}
            />

            <InfoText sx={{ color: "white", marginBottom: '10px', marginTop: '50px', fontSize: '17px' }}>
                Порівняльний аналіз за критеріями
            </InfoText>
            <BarChart
                dataset={competitiveData}
                xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                series={competitive.map((competitor, index) => ({
                    dataKey: competitor.name,
                    label: competitor.name,
                    color: colors[index % colors.length],
                }))}
                {...chartSetting}
            />
        </FlexColumn>
    );
};
