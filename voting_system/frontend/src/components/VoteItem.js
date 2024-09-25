import React, { useState } from 'react';

function VoteItem({ post, onVote, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [option1, setOption1] = useState(post.options[0]);
  const [option2, setOption2] = useState(post.options[1]);

  const handleSaveEdit = () => {
    onUpdate(post.id, [option1, option2]);
    setIsEditing(false);
  };

  return (
    <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
      {isEditing ? (
        <>
          <input type="text" value={option1} onChange={(e) => setOption1(e.target.value)} />
          <input type="text" value={option2} onChange={(e) => setOption2(e.target.value)} />
          <button onClick={handleSaveEdit}>저장</button>
        </>
      ) : (
        <>
          <h3>{post.options[0]} vs {post.options[1]}</h3>
          <ul>
            {post.options.map((option, index) => (
              <li key={index}>
                {option}: {post.votes[index]}표
                <button onClick={() => onVote(post.id, index)} style={{ marginLeft: '10px' }}>
                  투표
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
      <button onClick={() => setIsEditing(!isEditing)} style={{ marginRight: '10px' }}>
        {isEditing ? '취소' : '수정'}
      </button>
      <button onClick={() => onDelete(post.id)} style={{ backgroundColor: 'red', color: 'white' }}>
        삭제
      </button>
    </div>
  );
}

export default VoteItem;
