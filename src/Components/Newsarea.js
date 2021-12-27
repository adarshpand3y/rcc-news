import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class Newsarea extends Component {
    constructor() {
        super();
        this.state = {
            totalResults: 0,
            articles: [],
            page: 1,
            totalNumberOfPages: 0,
            pageSize: 5,
            loading: true
        }
    }

    updateNews = async () => {
        await this.setState({loading: true, articles: []});
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fb006d7d5f3841b28dc197c4bc9e3ceb&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        const data = await fetch(url);
        const parsedData = await data.json();
        await this.setState({ totalResults: parsedData.totalResults, articles: parsedData.articles, loading: false });
    }

    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fb006d7d5f3841b28dc197c4bc9e3ceb&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        const data = await fetch(url);
        const parsedData = await data.json();
        this.setState({ totalResults: parsedData.totalResults, articles: parsedData.articles, totalNumberOfPages: Math.ceil(this.state.totalResults / 20), loading: false });
    }

    handleNextClick = () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();
    }

    handlePrevClick = () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }

    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center">RCC News - Top Headlines</h1>
                {this.state.loading ? <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary my-4" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div> : ""}
                {this.state.articles.map((element) => {
                    return <Newsitem title={element.title}
                        description={element.description}
                        key={element.url}
                        urlToImage={element.urlToImage}
                        url={element.url}
                        source={element.source}
                        date={element.publishedAt} />
                })}
                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button"onClick={this.handlePrevClick} className="btn btn-light">&laquo; Previous</button>
                    <button disabled={this.state.page + 1 >Math.ceil(this.state.totalResults/this.state.pageSize)} type="button"onClick={this.handleNextClick} className="btn btn-light">Next &raquo;</button>
                </div>
            </div>
        )
    }
}
