import React from 'react'

const Loading = () => {
    return (
        <div className='text-center'>
            
            <div className="spinner-grow text-light" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>

            <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
            
            </div>
            <div className="spinner-grow text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>

            <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading
