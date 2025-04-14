import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function EmergencyDemo() {
  const [text, setText] = useState("");
  const [keywords, setKeywords] = useState({ location: "", victim: "" });
  const [summary, setSummary] = useState("");
  const [manual, setManual] = useState("");

  useEffect(() => {
    // 자동 흐름 시작
    setTimeout(() => setText("전 남자친구가 방망이로 계속 두드려요"), 500);
    setTimeout(() => setKeywords({ location: "신고자 주거지 또는 인근", victim: "신고자 본인" }), 1500);
    setTimeout(() => setSummary("신고자가 전 남자친구로부터 위협을 받고 있으며, 물리적 폭력 가능성이 높은 상황임."), 2500);
    setTimeout(() => setManual("즉시 출동하여 가해자 격리 조치, 피해자 안전 확인 및 긴급 보호소 연계 여부 검토."), 3500);
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Segoe UI, sans-serif', background: '#f9fafb', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>📞 112 신고 처리 흐름 시각화</h1>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', overflowX: 'auto', paddingBottom: '2rem' }}>
        <StageBox delay={0} title="1. STT 처리">
          <p>음성 인식 완료</p>
        </StageBox>

        <StageBox delay={1} title="2. 문장 출력" trigger={text !== ""}>
          <p>{text}</p>
        </StageBox>

        <StageBox delay={2} title="3. 키워드 추출" trigger={keywords.location !== ""}>
          <p><strong>위치:</strong> {keywords.location}</p>
          <p><strong>피해자:</strong> {keywords.victim}</p>
        </StageBox>

        <StageBox delay={3} title="4. 요약" trigger={summary !== ""}>
          <p>{summary}</p>
        </StageBox>

        <StageBox delay={4} title="5. 대응 매뉴얼" trigger={manual !== ""}>
          <p>{manual}</p>
          <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="문서 예시" style={{ width: '100%', maxWidth: '200px', marginTop: '1rem' }} />
        </StageBox>
      </div>
    </div>
  );
}

function StageBox({ title, children, trigger = true, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={trigger ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: delay }}
      style={{ minWidth: '220px', background: '#fff', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', flexShrink: 0 }}
    >
      <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#2563eb', marginBottom: '1rem' }}>{title}</h3>
      {children}
    </motion.div>
  );
}
