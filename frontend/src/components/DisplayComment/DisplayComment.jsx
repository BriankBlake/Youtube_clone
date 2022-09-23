import React, { useState } from 'react';

const DisplayComment = (props) => {
    return (
        <div className='displayComment-container'>
            <table className='comment-table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Video</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                   {props.comments.map((comment) => {
                    return (
                        <tr>
                            <td>{comment.title}</td>
                            <td>{comment.video}</td>
                            <td>{comment.release_date}</td>
                        </tr>
                    )
                   })} 
                </tbody>
            </table>
        </div>
    );
}
export default DisplayComment;