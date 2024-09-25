import React from 'react';
import VoteItem from './VoteItem';

function VoteList({ posts, onVote, onDelete, onUpdate }) {
  return (
    <div>
      {posts.map(post => (
        <VoteItem key={post.id} post={post} onVote={onVote} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  );
}

export default VoteList;
