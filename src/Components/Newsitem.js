import React, { Component } from 'react'


export default class Newsitem extends Component {

    render() {
        const { title, description, urlToImage, url, source, date, displayAsList, bgColor, fgColor } = this.props;
        return (
            displayAsList ?
                <div className={`w-100 card my-4 border border-secondary rounded`} style={{padding: "10px", backgroundColor: `${bgColor}`, color: `${fgColor}`}}>
                    <div className="row">
                        <div className="col-4">
                            <img src={urlToImage} style={{ height: "100%", width: "100%", objectFit: "cover", border: "1px solid #dfdfdf" }} className="card-img-top" alt="Img Unavailable" />
                        </div>
                        <div className="col-8">
                            <h4>{title}</h4>
                            <span className="badge rounded-pill bg-primary">{source["name"]}</span>
                            <p className="card-text">{description === null ? "No Description Available" : description}</p>
                            <p className="card-text"><small className="text-muted">{new Date(date).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })} IST</small></p>
                            <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div> :
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card border border-secondary rounded my-2" style={{ height: "450px", width: '100%', backgroundColor: `${bgColor}`, color: `${fgColor}` }}>
                        <img src={urlToImage} style={{ height: "250px", objectFit: "cover", overflow: "hidden" }} className="card-img-top" alt="Img Unavailable" />
                        <div className="card-body">
                            <h5 className="card-title">{title.length < 45 ? title : (title.slice(0, 45) + "...")}</h5>
                            <p className="card-text">{description === null ? "No Description Available" : (description.length < 80 ? description : (description.slice(0, 80) + "..."))}</p>
                            <p className="card-text"><small className="text-muted">{new Date(date).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })} IST</small></p>
                            <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
        )
    }
}
