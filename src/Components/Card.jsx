import React from 'react'
import "./photoGallery.css";

export const Card = ({ title, url, photographer, link}) => {

    return (
        <div>
            <div className="card carta-box">
                <div className="carta">    
                    <div className="cara">
                    <img src= {url} alt= {title} width={300} height="400px" />
                    </div>
                    <div className="cara detras" id="detras">
                        <h5 className="title">{ title }</h5>
                        <p className="text">The author is <span id="author">{photographer}</span> </p>
                        <p className="text">Click <a href= {link} target="_blank">here</a> if you want to check all the pictures by the author</p>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Card