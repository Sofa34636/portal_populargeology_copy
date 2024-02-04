import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import React, {useState} from "react";
import {useAppSelector} from "../../../../hooks/redux";
import {getKeyByValue} from "../../../../pages/pageRedirect";
import {timeTypes} from "../../../../types/timeline";
import {earthSciPub_Hierarchy} from "../../../../types/scientificPublications";
import {fetchArticlesByPeriod} from "../../../../api/fetchArticlesByPeriod"
import Button from "@mui/material/Button";
import {IPeriodArticle} from "../../../../types/IPeriodArticle";


export const ArticleScientificPublicationsHierarchyMenu = () => {

    const [articles, setArticles] = useState<IPeriodArticle[]>([])

    const { time: timeState } = useAppSelector((state) => state.timeLineReducer);

    const hierarchy = earthSciPub_Hierarchy[getKeyByValue(timeTypes, timeState)]

    const handleFetchArticles = (layerName: string) => {
        const response = fetchArticlesByPeriod(layerName).then(resp => setArticles(Object.values(resp.data)))
    }

    const Article = ({title, url, index}: {title: string, url: string, index: number}) => {
        return (
          <div style={{
              display: "flex",
              flexDirection: "row",
              gap: "2rem"}}>
              <h2>{index}</h2>
              <a href={url} target="_blank" rel="noreferrer">{title}</a>
          </div>
        )
    }

    const Layer = (props: { layerName: string, layerNumber: number, children?: JSX.Element | JSX.Element[] }) => {

        return (
            <AccordionItem>
                {({open}) => (
                    <>
                        <AccordionHeader className={`LayerButton Layer${props.layerNumber}`} onClick={() => {
                            if (open) {
                                setArticles([])
                            }
                        }}>
                            <h3>{props.layerName}</h3>
                            {open ?
                                <ExpandLessIcon/>
                                :
                                <ExpandMoreIcon/>
                            }
                        </AccordionHeader>

                        <AccordionBody className={`LayerBody Layer${props.layerNumber}`}>
                            <div id={`layer${props.layerNumber}`} style={{
                                display: "flex",
                                flexDirection: "column",
                                minHeight: articles.length === 0 ? "3rem" : "20rem",
                                gap: "0.5rem",
                                maxHeight: "20rem",
                                overflowY: "auto"}}>
                                {
                                    articles?.map((value, index) => {
                                    return (
                                      <Article title={value.title} url={value.url} index={index + 1} key={index.toString()}/>
                                    )
                                })}
                                <Button
                                    style={{
                                        display: articles.length === 0 ? "flex" : "none",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        height: "100%",
                                    }}
                                    onClick={() => {
                                        handleFetchArticles(props.layerName)
                                    }}
                                    className={`LayerDownloadButton Layer${props.layerNumber}`}>
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
