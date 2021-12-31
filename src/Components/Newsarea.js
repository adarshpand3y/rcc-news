import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import InfiniteScroll from "react-infinite-scroll-component";

const Newsarea = (props) => {

    const [totalResults, setTotalResults] = useState(1);
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);

    const updateNews = async () => {
        props.setProgress(0);
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=fb006d7d5f3841b28dc197c4bc9e3ceb&page=${page}&pageSize=12`;
        const data = await fetch(url);
        const parsedData = await data.json();
        props.setProgress(50);
        props.setProgress(70);
        setTotalResults(parsedData.totalResults);
        setArticles(parsedData.articles);
        props.setProgress(100);
    }

    useEffect((props) => {
        updateNews();
    }, []);

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=fb006d7d5f3841b28dc197c4bc9e3ceb&page=${page+1}&pageSize=12`;
        setPage(page + 1);
        const data = await fetch(url);
        const parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
    }

    return (
        <>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length < totalResults}
                loader={<div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary my-4" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
                endMessage={
                    <>
                        <h5 className={`text-center text-${props.theme === 'light' ? 'dark' : 'light'}`}>That's all the news we have for now!</h5>
                        <h5 className={`text-center text-${props.theme === 'light' ? 'dark' : 'light'}`}>Thank you for using the React Function Based Components News App.</h5>
                        <h6 className={`text-center text-${props.theme === 'light' ? 'dark' : 'light'}`}>Created with ❤️ by <a href="https://github.com/adarshpand3y" target="_blank" rel="noreferrer">Adarsh Pandey</a>.</h6>
                        <h6 className={`text-center text-${props.theme === 'light' ? 'dark' : 'light'} mb-3`}><a href="https://github.com/adarshpand3y/rcc-news" target="_blank" rel="noreferrer">Github Repository</a> of this app.</h6>
                    </>
                }
            >
                <div className="container my-3">
                    <h2 className={`text-center text-${props.theme === 'light' ? 'dark' : 'light'}`} style={{marginTop: "80px"}}>React Function Based Componenets News App</h2>
                    <h2 className={`text-center text-${props.theme === 'light' ? 'dark' : 'light'}`}>Top {props.category[0].toUpperCase() + props.category.slice(1)} Headlines</h2>
                    <div className={props.displayAsList ? "" : "row"}>
                        {articles.map((element) => {
                            return <Newsitem title={element.title}
                                bgColor={props.theme === 'light' ? "#fff" : "#181818"}
                                fgColor={props.theme === 'light' ? "black" : "white"}
                                description={element.description}
                                key={element.url + Math.random()}
                                urlToImage={element.urlToImage}
                                url={element.url}
                                source={element.source}
                                date={element.publishedAt}
                                displayAsList={props.displayAsList} />
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

export default Newsarea;