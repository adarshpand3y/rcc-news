import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
        const { title, description, urlToImage, url, source, date } = this.props;
        return (
            <>
                <div className="w-100 card my-4" style={{ padding: "10px" }}>
                    <div className="row">
                        <div className="col-4">
                            <img src={urlToImage} style={{ height: "100%", width: "100%", objectFit: "cover" }} className="card-img-top" alt="Img Unavailable" />
                        </div>
                        <div className="col-8">
                            <h3>{title}</h3>
                            <span className="badge rounded-pill bg-primary">{source["name"]}</span>
                            <p className="card-text">{description === null ? "No Description Available" : description}</p>
                            <p className="card-text"><small className="text-muted">{new Date(date).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })} IST</small></p>
                            <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
