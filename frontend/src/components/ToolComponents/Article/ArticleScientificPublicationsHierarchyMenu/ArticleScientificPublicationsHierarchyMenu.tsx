import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export const ArticleScientificPublicationsHierarchyMenu = () => {

    const hierarchy = {
        'Докембрий': {
            'Архей': {}
        }
    }

    return (
        <Accordion className='scientific_publicationsMenu'>
            {
                Object.keys(hierarchy).map((mainLayer, indexI, mainNest) => (
                    <AccordionItem key={indexI}>
                        {({open}) => (
                            <>
                                <AccordionHeader className='mainLayerButton'>
                                    <h3>{mainLayer}</h3>
                                    {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                </AccordionHeader>

                                <AccordionBody className='mainLayerBody'>
                                    {
                                        Object.keys(hierarchy[mainLayer]).map((secondLayer, indexJ, secondNest) => (
                                            <AccordionItem key={indexJ}>
                                                {({open}) => (
                                                    <>
                                                        <AccordionHeader className='secondLayerButton'>
                                                            <h3>{secondLayer}</h3>
                                                            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                                        </AccordionHeader>

                                                        <AccordionBody className='secondLayerBody'>
                                                            {
                                                                Object.keys(hierarchy[mainLayer][secondLayer]).map((thirdLayer, indexK, thirdNest) => (
                                                                    <AccordionItem key={indexK}>
                                                                        {({open}) => (
                                                                            <>
                                                                                <AccordionHeader className='thirdLayerButton'>
                                                                                    <h3>{thirdLayer}</h3>
                                                                                    {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                                                                </AccordionHeader>

                                                                                <AccordionBody className='thirdLayerBody'>
                                                                                    {
                                                                                        Object.keys(hierarchy[mainLayer][secondLayer][thirdLayer]).map((fourthLayer, indexM, fourthNest) => (
                                                                                            <AccordionItem key={indexM}>
                                                                                                {({open}) => (
                                                                                                    <>
                                                                                                        <AccordionHeader className='fourthLayerButton'>
                                                                                                            <h3>{fourthLayer}</h3>
                                                                                                            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                                                                                        </AccordionHeader>

                                                                                                        <AccordionBody className='fourthLayerBody'>
                                                                                                            {
                                                                                                                Object.keys(hierarchy[mainLayer][secondLayer][thirdLayer][fourthLayer]).map((value, ind) => (
                                                                                                                    <span>{value}</span>
                                                                                                                ))
                                                                                                            }
                                                                                                        </AccordionBody>
                                                                                                    </>
                                                                                                )}
                                                                                            </AccordionItem>
                                                                                        ))
                                                                                    }
                                                                                </AccordionBody>
                                                                            </>
                                                                        )}
                                                                    </AccordionItem>
                                                                ))
                                                            }
                                                        </AccordionBody>
                                                    </>
                                                )}
                                            </AccordionItem>
                                        )
                                    )}
                                </AccordionBody>
                            </>
                        )}
                    </AccordionItem>
                )
            )}
            {/*<AccordionItem>*/}
            {/*    {*/}
            {/*        ({open}) => {*/}
            {/*            return (*/}
            {/*                <>*/}
            {/*                    <AccordionHeader className='scientific_publicationsMenu--mainLayerButton'>*/}
            {/*                        <h3 className='scientific_publicationsMenu--mainButton--title'>*/}
            {/*                            {mainLayer}*/}
            {/*                        </h3>*/}
            {/*                        {open ? <ExpandLessIcon/> : <ExpandMoreIcon/>}*/}
            {/*                    </AccordionHeader>*/}

            {/*                    <AccordionBody>*/}
            {/*                        <div className="scientific_publicationsMenu__mainLayerBody">*/}
            {/*                            {*/}
            {/*                                secondLayerList.map((secondLayer, index) => {*/}
            {/*                                    return (*/}
            {/*                                        <AccordionItem key={index}>*/}
            {/*                                            {*/}
            {/*                                                ({open}) => {*/}
            {/*                                                    return (*/}
            {/*                                                        <>*/}
            {/*                                                            <AccordionHeader*/}
            {/*                                                                className='scientific_publicationsMenu__mainLayerBody--secondLayerButton'>*/}
            {/*                                                                <h3 className='scientific_publicationsMenu__mainLayerBody--secondLayerButton--title'>*/}
            {/*                                                                    {secondLayer}*/}
            {/*                                                                </h3>*/}
            {/*                                                                {open ? <ExpandLessIcon/> : <ExpandMoreIcon/>}*/}
            {/*                                                            </AccordionHeader>*/}

            {/*                                                            <AccordionBody>*/}
            {/*                                                                <div className='scientific_publicationsMenu__mainLayerBody--secondLayerBody'>*/}
            {/*                                                                    Lorem ipsum dolor sit amet.*/}
            {/*                                                                </div>*/}
            {/*                                                            </AccordionBody>*/}
            {/*                                                        </>*/}
            {/*                                                    )*/}
            {/*                                                }*/}
            {/*                                            }*/}
            {/*                                        </AccordionItem>*/}
            {/*                                    )*/}
            {/*                                })*/}
            {/*                            }*/}
            {/*                        </div>*/}
            {/*                    </AccordionBody>*/}
            {/*                </>*/}
            {/*            )*/}
            {/*        }*/}
            {/*    }*/}
            {/*</AccordionItem>*/}
        </Accordion>
    )
}