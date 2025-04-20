import React, { useState, useEffect } from "react";

// 기본 컴포넌트 정의
function Input({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border rounded px-3 py-2 text-sm"
    />
  );
}

function Button({ onClick, children, className }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
}

function CircleNode({ label, active }) {
  return (
    <div
      className={`w-28 h-28 flex items-center justify-center text-white text-sm font-semibold rounded-full transition-all duration-500 shadow-md
        ${active ? "bg-red-600 scale-110 ring-4 ring-red-300" : "bg-sky-800 opacity-60"}`}
    >
      {label}
    </div>
  );
}

function Arrow({ active }) {
  return (
    <div className={`w-10 h-px mx-2 transition-all duration-500 ${active ? "bg-red-400" : "bg-sky-600"}`} />
  );
}

const steps = [
  {
    label: "Menu",
    description: "사용자의 질문을 분석하고 필요한 카테고리(예: 보고서, 게시물)를 판단합니다."
  },
  {
    label: "컨텐츠",
    description: "질문에 맞는 콘텐츠 유형을 선택하고 적절한 쿼리로 Vector DB에 검색을 수행합니다."
  },
  {
    label: "게시물",
    description: "검색된 문서들에서 핵심 정보를 추출하고 질문과 관련된 내용을 정리합니다."
  },
  {
    label: "공지사항",
    description: "단계별 정보를 통합하여 사용자에게 전달할 최종 응답을 생성합니다."
  }
];

export default function ChainOfThoughtDemo() {
  const [question, setQuestion] = useState("");
  const [currentStep, setCurrentStep] = useState(-1);
  const [running, setRunning] = useState(false);

  const handleDemo = () => {
    setCurrentStep(-1);
    setRunning(true);
    steps.forEach((_, i) => {
      setTimeout(() => {
        setCurrentStep(i);
        if (i === steps.length - 1) setRunning(false);
      }, 1000 * (i + 1));
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Chain of Thought Flow 시각화</h1>

      <Input
        placeholder="예: 최근 스마트축산 기술의 정부 지원 방향은?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <Button onClick={handleDemo} className="mt-2" disabled={running}>
        {running ? "진행 중..." : "Chain 흐름 시작"}
      </Button>

      <div className="flex items-center justify-center mt-10">
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <CircleNode label={step.label} active={idx === currentStep} />
            {idx < steps.length - 1 && <Arrow active={idx < currentStep} />}
          </React.Fragment>
        ))}
      </div>

      {currentStep >= 0 && (
        <div className="text-center mt-6 transition-all duration-500">
          <p className="text-lg font-medium text-gray-800">
            현재 단계: <span className="text-red-600">{steps[currentStep].label}</span>
          </p>
          <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">
            {steps[currentStep].description}
          </p>
        </div>
      )}
    </div>
  );
}

