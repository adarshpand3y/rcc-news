import React, { Component } from 'react'

export default class Newsitem extends Component {
    render() {
        const {title, description, urlToImage, url} = this.props;
        return (
            <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="card" style={{width: '100%'}}>
                    <img src={urlToImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{title.length<45?title:(title.slice(0, 45)+"...")}</h5>
                    <p className="card-text">{description === null?"No Description Available":(description.length<80?description:(description.slice(0, 80)+"..."))}</p>
                    <a href={url} target="_blank" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
