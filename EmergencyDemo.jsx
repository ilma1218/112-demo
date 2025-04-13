import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function EmergencyDemo() {
  const [audioFile, setAudioFile] = useState(null);
  const [text, setText] = useState("");
  const [type, setType] = useState("");
  const [keywords, setKeywords] = useState({ location: "", victim: "" });
  const [summary, setSummary] = useState("");
  const [manual, setManual] = useState("");

  const handleSTT = async () => {
    setText("전 남자친구가 방망이로 계속 두드려요");
    setType("");
    setKeywords({ location: "", victim: "" });
    setSummary("");
    setManual("");
  };

  const handleClassification = () => {
    setType("데이트 폭력");
  };

  const handleKeywordExtraction = () => {
    setKeywords({ location: "신고자 주거지 또는 인근", victim: "신고자 본인" });
  };

  const handleSummarization = () => {
    setSummary("신고자가 전 남자친구로부터 위협을 받고 있으며, 물리적 폭력 가능성이 높은 상황임.");
  };

  const handleManual = () => {
    setManual("즉시 출동하여 가해자 격리 조치, 피해자 안전 확인 및 긴급 보호소 연계 여부 검토.");
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Segoe UI, sans-serif', background: '#f0f4ff', minHeight: '100vh', position: 'relative' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem', borderRadius: '16px', position: 'relative' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: '2rem', color: '#1e3a8a', textAlign: 'center' }}>📞 112 신고 처리 시연</h1>

        <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative' }}>
          <AnimatedBox title="신고문장 (STT 처리)" onClick={handleSTT}>
            <input type="file" onChange={(e) => setAudioFile(e.target.files[0])} style={{ marginBottom: '1rem' }} />
            {text && <p><strong>텍스트:</strong> {text}</p>}
          </AnimatedBox>

          <svg width="100%" height="120" style={{ position: 'absolute', top: '100%', left: 0 }}>
            <line x1="50%" y1="0" x2="20%" y2="120" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="50%" y1="0" x2="40%" y2="120" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="50%" y1="0" x2="60%" y2="120" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="50%" y1="0" x2="80%" y2="120" stroke="#cbd5e1" strokeWidth="2" />
          </svg>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
          <AnimatedBox title="유형 분류" onClick={handleClassification}>
            {type && <div><strong>유형:</strong> {type}</div>}
          </AnimatedBox>

          <AnimatedBox title="키워드 추출" onClick={handleKeywordExtraction}>
            {(keywords.location || keywords.victim) && (
              <div>
                <p><strong>위치:</strong> {keywords.location}</p>
                <p><strong>피해자:</strong> {keywords.victim}</p>
              </div>
            )}
          </AnimatedBox>

          <AnimatedBox title="요약" onClick={handleSummarization}>
            {summary && (
              <div>
                <p><strong>요약:</strong> {summary}</p>
              </div>
            )}
          </AnimatedBox>

          <AnimatedBox title="대응 매뉴얼" onClick={handleManual}>
            {manual && (
              <div>
                <p><strong>매뉴얼:</strong> {manual}</p>
                <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="문서 이미지" style={{ marginTop: '1rem', width: '100%', maxWidth: '300px', borderRadius: '4px' }} />
              </div>
            )}
          </AnimatedBox>
        </div>
      </div>
    </div>
  );
}

function AnimatedBox({ title, onClick, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '1.5rem', minWidth: '280px', flex: '1 1 300px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', textAlign: 'left' }}
    >
      <h2 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#1d4ed8', marginBottom: '1rem' }}>{title}</h2>
      {children}
      <button onClick={onClick} style={btnStyle}>실행</button>
    </motion.div>
  );
}

const btnStyle = {
  marginTop: '1rem',
  padding: '0.5rem 1rem',
  backgroundColor: '#2563eb',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '1rem',
  boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
};
