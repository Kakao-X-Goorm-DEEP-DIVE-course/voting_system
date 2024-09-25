import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateVotePage({ addPost }) {
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const navigate = useNavigate();

  const handleCreatePost = () => {
    if (option1 && option2) {
      addPost([option1, option2]);
      navigate('/');
    } else {
      alert("옵션을 모두 입력하세요.");
    }
  };

  return (
    <div>
      <h2>새로운 투표 등록</h2>
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
      <button onClick={handleCreatePost}>등록하기</button>
    </div>
  );
}

export default CreateVotePage;
