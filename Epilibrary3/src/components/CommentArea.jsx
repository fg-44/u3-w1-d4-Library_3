import React, { UseEffect } from 'react';
import { useState } from 'react';

const CommentArea = ({ book }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(`/comment/fetch/${book.id}`);
      const comments = await response.json();
      setComments(comments);
    };

    fetchComments();
  }, [book, setComments]);

  return (
    <div>
      <h3>Comments for this Book</h3>
      {comments.length === 0 ? (
        <p>There are no comments for this book yet.</p>
      ) : (
        <CommentsList comments={comments} />
      )}
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>{comment.text}</li>
      ))}
    </ul>
  )
}

export default CommentArea;
