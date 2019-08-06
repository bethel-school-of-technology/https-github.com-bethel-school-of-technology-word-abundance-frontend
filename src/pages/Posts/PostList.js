import React from 'react';

const PostList = () => {
    return (
        <div className='project-list'>

            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className='card-title'>Post Title</span>
                    <p> Posted by Olivia</p>
                    <p className='grey-text'>6th August 2019</p>
                </div>
            </div>
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className='card-title'>Post Title</span>
                    <p> Posted by Olivia</p>
                    <p className='grey-text'>7th August 2019</p>
                </div>
            </div>
        </div>
    )
}
export default PostList;