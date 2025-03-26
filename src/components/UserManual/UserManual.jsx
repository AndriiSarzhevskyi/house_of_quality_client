import { MainContainer } from "../House/House-styles"
import { Typography, CardMedia } from "@mui/material"
import { FlexColumn, FlexRow } from "../GeneralStyles"
import { Cell, CustomerReq } from "../House/House-styles"
import { InfoText } from "../PersonalInfo/PersonalInfo-styles"
import { Number, ParagraphHeader, ParagraphText, Paragraph, RedLine } from "./UserManual-styles"
import { RadioButtonChecked, RadioButtonUnchecked, ChangeHistory } from "@mui/icons-material";

export const UserManual = ({ }) => {
    return (
        <>
            <MainContainer maxWidth="md" sx={{ marginTop: '120px' }}>
                <Typography variant="h4" color="#eb1841" sx={{ textAlign: "center", marginBottom: '20px' }}>Як побудувати будинок якості?</Typography>

                <Paragraph sx={{ marginTop: '50px' }}>
                    <FlexColumn sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
                        <Number>0</Number>
                        <RedLine></RedLine>
                    </FlexColumn>
                    <FlexColumn sx={{ alignContent: 'baseline', flexWrap: 'wrap', alignItems: 'baseline' }}>
                        <ParagraphHeader>Що таке «Будинок якості?</ParagraphHeader>
                        <ParagraphText>«Будинок якості» (QFD) — це інструмент аналізу голосу споживача. Завдяки різним факторам, зокрема дослідженню конкурентів та оцінці важливості кожної потреби споживача, можна визначити, які характеристики продукту мають пріоритет.</ParagraphText>
                    </FlexColumn>
                </Paragraph>

                <Paragraph sx={{ marginTop: '5px' }}>
                    <FlexColumn sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
                        <Number>1</Number>
                        <RedLine></RedLine>
                    </FlexColumn>
                    <FlexColumn sx={{ alignContent: 'baseline', flexWrap: 'wrap', alignItems: 'baseline' }}>
                        <ParagraphHeader>Визначення вимог користувача</ParagraphHeader>
                        <ParagraphText>З лівого боку «Будинку якості» потрібно додати найважливіші потреби клієнтів на основі вашого дослідження. Для цього в розділі "Новий проєкт" необхідно заповнити відповідну форму. Поруч із переліченими потребами клієнтів оцініть, наскільки важливою є кожна вимога за шкалою від 1 до 10. Далі система автоматично розрахує відсоток вагомості кожної вимоги.</ParagraphText>
                        <CardMedia
                            component='img'
                            height='220'
                            image={'/files/customer.png'}
                            sx={{ objectFit: 'contain', width: '400px', height: '200px' }}
                        />
                    </FlexColumn>
                </Paragraph>

                <Paragraph sx={{ marginTop: '5px' }}>
                    <FlexColumn sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
                        <Number>2</Number>
                        <RedLine></RedLine>
                    </FlexColumn>
                    <FlexColumn sx={{ alignContent: 'baseline', flexWrap: 'wrap', alignItems: 'baseline' }}>
                        <ParagraphHeader>Визначення технічних вимог</ParagraphHeader>
                        <ParagraphText>Горизонтально над матрицею взаємозв’язків потрібно додати технічні вимоги до продукту. </ParagraphText>
                        <CardMedia
                            component='img'
                            height='220'
                            image={'/files/technical.png'}
                            sx={{ objectFit: 'contain', width: '200px', height: '300px' }}
                        />
                    </FlexColumn>
                </Paragraph>

                <Paragraph sx={{ marginTop: '5px' }}>
                    <FlexColumn sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
                        <Number>3</Number>
                        <RedLine></RedLine>
                    </FlexColumn>
                    <FlexColumn sx={{ alignContent: 'baseline', flexWrap: 'wrap', alignItems: 'baseline' }}>
                        <ParagraphHeader>Оцініть взаємозв'язок між потребами клієнтів і технічними вимогами</ParagraphHeader>
                        <ParagraphText>У матриці взаємозв’язків потрібно визначити, наскільки сильно кожен із технічних параметрів впливає на потребу клієнта. Використовуйте такі символи:</ParagraphText>
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
                        <ParagraphText sx={{ marginTop: '5px' }}>Після цього система автоматично розрахує рейтинг важливості технічних вимог.</ParagraphText>
                    </FlexColumn>
                </Paragraph>


                <Paragraph sx={{ marginTop: '5px' }}>
                    <FlexColumn sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
                        <Number>4</Number>
                        <RedLine></RedLine>
                    </FlexColumn>
                    <FlexColumn sx={{ alignContent: 'baseline', flexWrap: 'wrap', alignItems: 'baseline' }}>
                        <ParagraphHeader>Заповніть матрицю кореляцій</ParagraphHeader>
                        <ParagraphText>Матриця кореляцій визначить, як технічні вимоги допомагають або заважають одна одній. Для цього оберіть тип зв'язку:</ParagraphText>
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

                        <ParagraphText sx={{ marginTop: '5px' }}>Над кожною технічною вимогою потрібно позначити, чи краще, щоб характеристика була нижчою (стрілка вниз) або вищою (стрілка вгору). </ParagraphText>

                        <CardMedia
                            component='img'
                            height='220'
                            image={'/files/roof.png'}
                            sx={{ objectFit: 'contain', width: '200px', height: '200px' }}
                        />
                    </FlexColumn>
                </Paragraph>

                <Paragraph sx={{ marginTop: '5px' }}>
                    <FlexColumn sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
                        <Number>5</Number>
                        <RedLine></RedLine>
                    </FlexColumn>
                    <FlexColumn sx={{ alignContent: 'baseline', flexWrap: 'wrap', alignItems: 'baseline' }}>
                        <ParagraphHeader>Додайте дослідження конкурентів</ParagraphHeader>
                        <ParagraphText>Нарешті, оцінка конкурентів показує, як компанії наразі задовольняють кожну з потреб ваших клієнтів, щоб ви могли визначити, що було проігноровано, і як ви можете отримати перевагу над конкурентами. Матриця кореляцій та дослідження конкурентів не впливають на рейтинги важливості, але надають додаткову інформацію, яка допомагає визначити, які потреби клієнтів та вимоги до дизайну мають найбільше значення.
                            Для того, щоб додати конкурентів, необхідно заповнити форму на сторінці "Будинку якості" та обрати оцінку за шкалою від 1 до 5, натиснувши на відповідну клітинку.
                        </ParagraphText>
                    </FlexColumn>
                </Paragraph>

                <Paragraph sx={{ marginTop: '5px' }}>
                    <FlexColumn sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
                        <Number>6</Number>
                        <RedLine></RedLine>
                    </FlexColumn>
                    <FlexColumn sx={{ alignContent: 'baseline', flexWrap: 'wrap', alignItems: 'baseline' }}>
                        <ParagraphHeader>Ось і все!</ParagraphHeader>

                        <CardMedia
                            component='img'
                            height='220'
                            image={'/files/house.png'}
                            sx={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                        />
                    </FlexColumn>
                </Paragraph>

            </MainContainer>
        </>
    )
}