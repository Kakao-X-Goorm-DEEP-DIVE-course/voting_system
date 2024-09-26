import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateVotePage() {
  const [content, setContent] = useState("");
  const [subject_1, setSubject1] = useState("");
  const [subject_2, setSubject2] = useState("");
  const navigate = useNavigate();

  const handleCreatePost = () => {
    // 모든 필드가 입력되었는지 확인
    if (content && subject_1 && subject_2) {
      // JSON 데이터 준비
      const postData = {
        content: content,
        subject_1: subject_1,
        subject_2: subject_2,
      };

      // POST 요청 보내기
      fetch('http://localhost:8000/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })
        .then((response) => {
          // 응답 코드가 201이면 리다이렉트
          if (response.status === 201) {
            console.log('Post created successfully');
            navigate('/'); 
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .catch((error) => {
          console.error('There was a problem with the post request:', error);
        });
    } else {
      alert("모든 필드를 입력하세요.");
    }
  };

  return (
    <div>
      <h2>새로운 투표 등록</h2>
      <input
        type="text"
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="text"
        placeholder="첫 번째 선택지"
        value={subject_1}
        onChange={(e) => setSubject1(e.target.value)}
      />
      <input
        type="text"
        placeholder="두 번째 선택지"
        value={subject_2}
        onChange={(e) => setSubject2(e.target.value)}
      />
      <button onClick={handleCreatePost}>등록하기</button>
    </div>
  );
}

export default CreateVotePage;