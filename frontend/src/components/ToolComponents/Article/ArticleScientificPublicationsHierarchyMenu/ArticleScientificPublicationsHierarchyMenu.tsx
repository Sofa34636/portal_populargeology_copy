import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import React from "react";
import {useAppSelector} from "../../../../hooks/redux";
import {getKeyByValue} from "../../../../pages/pageRedirect";
import {timeTypes} from "../../../../types/timeline";
import {earthSciPub_Hierarchy} from "../../../../types/scientificPublications";
import Button from "@mui/material/Button";


export const ArticleScientificPublicationsHierarchyMenu = () => {
    const { time: timeState } = useAppSelector((state) => state.timeLineReducer);

    const hierarchy = earthSciPub_Hierarchy[getKeyByValue(timeTypes, timeState)]

    const Layer = (props: { layerName: string, layerNumber: number, children?: JSX.Element | JSX.Element[] }) => {

        return (
            <AccordionItem>
                {({open}) => (
                    <>
                        <AccordionHeader className={`LayerButton Layer${props.layerNumber}`}>
                            <h3>{props.layerName}</h3>
                            {open ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                        </AccordionHeader>

                        <AccordionBody className={`LayerBody Layer${props.layerNumber}`}>
                            <div>
                                <Button className={`LayerDownloadButton Layer${props.layerNumber}`}>
                                    Загрузить публикации
                                </Button>
                            </div>
                            <div>
                                {props.children}
                            </div>
                        </AccordionBody>
                    </>
                )}
            </AccordionItem>
        )
    }

    return (
        Object.keys(hierarchy).length == 0 ? <span>Пусто</span> :
        <Accordion className='scientific_publicationsMenu'>
            {
                Object.keys(hierarchy).map((firstLayer, indexI) => (
                    <Layer layerName={firstLayer} layerNumber={1} key={indexI}>
                        {
                            Object.keys(hierarchy[firstLayer]).map((secondLayer, indexJ) => (
                                <Layer layerName={secondLayer} layerNumber={2} key={indexJ}>
                                    {
                                        Object.keys(hierarchy[firstLayer][secondLayer]).map((thirdLayer, indexK) => (
                                            <Layer layerName={thirdLayer} layerNumber={3} key={indexK}>
                                                {
                                                    Object.keys(hierarchy[firstLayer][secondLayer][thirdLayer]).map((fourthLayer, indexM) => (
                                                        <Layer layerName={fourthLayer} layerNumber={4} key={indexM}>

                                                        </Layer>
                                                    ))
                                                }
                                            </Layer>
                                        ))
                                    }
                                </Layer>
                            ))
                        }
                    </Layer>
                ))
            }
        </Accordion>
    )
}
