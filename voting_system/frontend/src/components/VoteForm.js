import React, { useState } from 'react';

function VoteForm({ addPost }) {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");

  const handleAddPost = () => {
    if (question && option1 && option2) {
      addPost(question, [option1, option2]);
      setQuestion("");
      setOption1("");
      setOption2("");
    } else {
      alert("모든 필드를 입력하세요.");
    }
  };

  return (
    <div>
      <h2>새로운 투표 등록</h2>
      <input
        type="text"
        placeholder="질문을 입력하세요"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <input
        type="text"
        placeholder="첫 번째 선택"
        value={option1}
        onChange={(e) => setOption1(e.target.value)}
      />
      <input
        type="text"
        placeholder="두 번째 선택"
        value={option2}
        onChange={(e) => setOption2(e.target.value)}
      />
      <button onClick={handleAddPost}>투표 등록</button>
    </div>
  );
}

export default VoteForm;
