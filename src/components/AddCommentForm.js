import React, { useState } from 'react';

const AddCommentForm = () => {
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');
    return (
    <div id="add-comment-form">
        <h3>Add a comment</h3>
        <label>
            Name:
            <input type="text"/>
            <textarea rows="4" columns="50"/>
        </label>
        <button>Add comment</button>
    </div>
)}

export default AddCommentForm;