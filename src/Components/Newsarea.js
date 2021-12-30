import React, { Component } from 'react'
import Newsitem from './Newsitem'
import InfiniteScroll from "react-infinite-scroll-component";

export default class Newsarea extends Component {
    constructor() {
        super();
        this.state = {
            totalResults: 1,
            articles: [],
            page: 1,
            totalNumberOfPages: 0,
            pageSize: 12,
            loading: true
        }
    }

    async componentDidMount() {
        this.props.setProgress(0);
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=fb006d7d5f3841b28dc197c4bc9e3ceb&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        const data = await fetch(url);
        this.props.setProgress(50);
        const parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({ totalResults: parsedData.totalResults, articles: parsedData.articles, totalNumberOfPages: Math.ceil(parsedData.totalResults / this.state.pageSize), loading: false });
        this.props.setProgress(100);
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=fb006d7d5f3841b28dc197c4bc9e3ceb&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        const data = await fetch(url);
        const parsedData = await data.json();
        this.setState({ articles: this.state.articles.concat(parsedData.articles) });
    }

    render() {
        return (
            <>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={<div className="d-flex justify-content-center">
                        <div className="spinner-border text-primary my-4" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>}
                    endMessage={
                        <>
                            <h5 className={`text-center text-${this.props.theme === 'light' ? 'dark' : 'light'}`}>That's all the news we have for now!</h5>
                            <h5 className={`text-center text-${this.props.theme === 'light' ? 'dark' : 'light'}`}>Thank you for using the React Class Based Components News App.</h5>
                            <h6 className={`text-center text-${this.props.theme === 'light' ? 'dark' : 'light'}`}>Created with ❤️ by <a href="https://github.com/adarshpand3y" target="_blank" rel="noreferrer">Adarsh Pandey</a>.</h6>
                            <h6 className={`text-center text-${this.props.theme === 'light' ? 'dark' : 'light'} mb-3`}><a href="https://github.com/adarshpand3y/rcc-news" target="_blank" rel="noreferrer">Github Repository</a> of this app.</h6>
                        </>
                      }
                >
                    <div className="container my-3">
                        <h2 className={`text-center text-${this.props.theme === 'light' ? 'dark' : 'light'}`}>React Class Based Componenets News App</h2>
                        <h2 className={`text-center text-${this.props.theme === 'light' ? 'dark' : 'light'}`}>Top {this.props.category[0].toUpperCase()+this.props.category.slice(1)} Headlines</h2>
                        <div className={this.props.displayAsList ? "" : "row"}>
                            {this.state.articles.map((element) => {
                                return <Newsitem title={element.title}
                                    bgColor={this.props.theme === 'light' ? "#fff" : "#181818"}
                                    fgColor={this.props.theme === 'light' ? "black" : "white"}
                                    description={element.description}
                                    key={element.url}
                                    urlToImage={element.urlToImage}
                                    url={element.url}
                                    source={element.source}
                                    date={element.publishedAt}
                                    displayAsList={this.props.displayAsList} />
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}
