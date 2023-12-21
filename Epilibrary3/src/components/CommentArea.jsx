import React, { useState } from 'react';

const CommentArea = ({ comment }) => {
  return (
    <div className="comment-area">
      <p key={comment.id}>ID:{comment.id}</p>
      <p>Text: {comment.text}</p>
      <p>Author: {comment.author}</p>
      <p>Date: {comment.date}</p>
    </div>
  );
};

export default CommentArea;
