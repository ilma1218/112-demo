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
    setText("도와주세요. 서울 강남에서 강도를 당했어요. 친구가 다쳤어요.");
    setType("");
    setKeywords({ location: "", victim: "" });
    setSummary("");
    setManual("");
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
    <div style={{ padding: '2rem', fontFamily: 'Segoe UI, sans-serif', background: 'radial-gradient(circle, #eef2ff 0%, #dbeafe 100%)', minHeight: '100vh', position: 'relative' }}>
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <line x1="50%" y1="200" x2="20%" y2="400" stroke="#c7d2fe" strokeWidth="2" />
        <line x1="50%" y1="200" x2="40%" y2="600" stroke="#c7d2fe" strokeWidth="2" />
        <line x1="50%" y1="200" x2="60%" y2="600" stroke="#c7d2fe" strokeWidth="2" />
        <line x1="50%" y1="200" x2="80%" y2="400" stroke="#c7d2fe" strokeWidth="2" />
      </svg>
      <div style={{ maxWidth: '1100px', margin: '0 auto', backgroundColor: '#ffffffdd', padding: '2rem', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)', zIndex: 1, position: 'relative' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', color: '#1e3a8a', textAlign: 'center' }}>📞 112 신고 처리 시연</h1>

        <motion.div layout style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          <AnimatedBox title="1. STT 처리" onClick={handleSTT}>
            <input type="file" onChange={(e) => setAudioFile(e.target.files[0])} style={{ marginBottom: '1rem' }} />
            {text && <p><strong>텍스트:</strong> {text}</p>}
          </AnimatedBox>

          <AnimatedBox title="2. 유형 분류" onClick={handleClassification}>
            {type && <div className="resultBox"><strong>유형:</strong> {type}</div>}
          </AnimatedBox>

          <AnimatedBox title="3. 키워드 추출" onClick={handleKeywordExtraction}>
            {(keywords.location || keywords.victim) && (
              <div className="resultBox">
                <p><strong>위치:</strong> {keywords.location}</p>
                <p><strong>피해자:</strong> {keywords.victim}</p>
              </div>
            )}
          </AnimatedBox>

          <AnimatedBox title="4. 요약" onClick={handleSummarization}>
            {summary && (
              <div className="resultBox">
                <p><strong>요약:</strong> {summary}</p>
                <img src="https://via.placeholder.com/400x200.png?text=요약+시각화" alt="요약 이미지" style={{ marginTop: '1rem', borderRadius: '8px' }} />
              </div>
            )}
          </AnimatedBox>

          <AnimatedBox title="5. 대응 매뉴얼" onClick={handleManual}>
            {manual && (
              <div className="resultBox">
                <p><strong>매뉴얼:</strong> {manual}</p>
                <img src="https://via.placeholder.com/400x200.png?text=대응+매뉴얼+예시" alt="매뉴얼 이미지" style={{ marginTop: '1rem', borderRadius: '8px' }} />
              </div>
            )}
          </AnimatedBox>
        </motion.div>
      </div>
    </div>
  );
}

function AnimatedBox({ title, onClick, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '1.5rem', width: '420px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', position: 'relative' }}
    >
      <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1d4ed8', marginBottom: '1rem' }}>{title}</h2>
      {children}
      <button onClick={onClick} style={btnStyle}>실행</button>
    </motion.div>
  );
}

const btnStyle = {
  marginTop: '1rem',
  padding: '0.6rem 1.2rem',
  backgroundColor: '#2563eb',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '1rem',
  boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
};

