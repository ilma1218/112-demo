import React, { useState } from 'react';

export default function EmergencyDemo() {
  const [audioFile, setAudioFile] = useState(null);
  const [text, setText] = useState("");
  const [type, setType] = useState("");
  const [keywords, setKeywords] = useState({ location: "", victim: "" });
  const [summary, setSummary] = useState("");
  const [manual, setManual] = useState("");

  const handleSTT = async () => {
    setText("도와주세요. 서울 강남에서 강도를 당했어요. 친구가 다쳤어요.");
  };

  const handleClassification = () => {
    setType("강도 사건");
  };

  const handleKeywordExtraction = () => {
    setKeywords({ location: "서울 강남", victim: "친구" });
  };

  const handleSummarization = () => {
    setSummary("서울 강남에서 발생한 강도 사건. 피해자는 친구로 추정됨.");
  };

  const handleManual = () => {
    setManual("출동 요청 및 응급 구조 요청. 피해자 상태 확인 후 병원 이송 필요.");
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#ffffff', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1e3a8a' }}>📞 112 신고 처리 시연</h1>

        <Section title="1. 음성 파일 업로드 및 STT 처리" onClick={handleSTT} resultLabel="텍스트" result={text}>
          <input type="file" onChange={(e) => setAudioFile(e.target.files[0])} style={{ marginBottom: '1rem' }} />
        </Section>

        <Section title="2. 신고 유형 분류" onClick={handleClassification} resultLabel="유형" result={type} />
        <Section title="3. 키워드 추출" onClick={handleKeywordExtraction}>
          <div><strong>위치:</strong> {keywords.location}</div>
          <div><strong>피해자:</strong> {keywords.victim}</div>
        </Section>

        <Section title="4. 요약" onClick={handleSummarization} resultLabel="요약" result={summary} />
        <Section title="5. 대응 매뉴얼 제시" onClick={handleManual} resultLabel="대응 매뉴얼" result={manual} />
      </div>
    </div>
  );
}

function Section({ title, onClick, resultLabel, result, children }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>{title}</h2>
      {children}
      <button onClick={onClick} style={btnStyle}>실행</button>
      {result !== undefined && result !== "" && (
        <div style={{ marginTop: '0.75rem', backgroundColor: '#f1f5f9', padding: '1rem', borderRadius: '8px' }}>
          <strong>{resultLabel}:</strong> {result}
        </div>
      )}
    </div>
  );
}

const btnStyle = {
  marginTop: '0.5rem',
  padding: '0.5rem 1.2rem',
  backgroundColor: '#2563eb',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '1rem',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
};

