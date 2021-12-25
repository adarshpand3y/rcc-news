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
            loading: true
        }
    }

    async componentDidMount() {
        const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=fb006d7d5f3841b28dc197c4bc9e3ceb";
        const data = await fetch(url);
        const parsedData = await data.json();
        this.setState({ totalResults: parsedData.totalResults, articles: parsedData.articles, totalNumberOfPages: Math.ceil(this.state.totalResults/20), loading: false});
    }

    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center">RCC News - Top Headlines</h2>
                {this.state.loading ? <div className="d-flex justify-content-center">
                    <div className="spinner-border text-primary my-4" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>:""}
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <Newsitem title={element.title}
                        description={element.description}
                        key={element.url}
                        urlToImage={element.urlToImage}
                        url={element.url} />
                    })}
                </div>
            </div>
        )
    }
}
