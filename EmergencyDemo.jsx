import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

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

function Card({ children }) {
  return (
    <div className="border rounded-xl shadow-sm bg-white">
      {children}
    </div>
  );
}

function CardContent({ children, className }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export default function ChainOfThoughtDemo() {
  const [question, setQuestion] = useState("");
  const [steps, setSteps] = useState([]);

  const handleDemo = () => {
    const simulatedSteps = [
      {
        title: "Step 1. 질문 분석",
        text: "사용자는 '스마트축산 기술에 대한 최근 정부지원 동향'을 알고자 함. 시간 순 정책 변화가 핵심."
      },
      {
        title: "Step 2. 문서 정보 요약",
        text: "2021년 보고서: 인프라 확충 / 2022년: 데이터 기반 가축관리 / 2023년: AI 자동제어 시스템"
      },
      {
        title: "Step 3. 정보 비교 및 통합",
        text: "지원 초점이 인프라 → 데이터 → AI로 진화하고 있음. 기술 고도화 흐름으로 해석 가능."
      },
      {
        title: "Step 4. 자연어 응답 생성",
        text: "최근 3년간 스마트축산 기술 정부지원은 인프라 중심에서 AI 자동제어 기술 중심으로 고도화되고 있습니다."
      }
    ];

    setSteps(simulatedSteps);
  };

  const chartData = {
    labels: ["2021", "2022", "2023"],
    datasets: [
      {
        label: "정부 지원 트렌드",
        data: [1, 2, 3],
        fill: false,
        borderColor: "#3b82f6",
        tension: 0.3
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "정부 지원 트렌드 (2021–2023)" }
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => {
            switch (value) {
              case 1: return "인프라";
              case 2: return "데이터";
              case 3: return "AI 자동제어";
              default: return value;
            }
          },
          stepSize: 1,
          min: 1,
          max: 3
        }
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">Chain of Thought 기반 통합검색 데모</h1>

      <Input
        placeholder="예: 최근 스마트축산 기술의 정부 지원 방향은?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <Button onClick={handleDemo} className="mt-2">질문 분석 시작</Button>

      {steps.length > 0 && (
        <div className="space-y-4 mt-6">
          <Card>
            <CardContent>
              <Line data={chartData} options={chartOptions} />
            </CardContent>
          </Card>
          {steps.map((step, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h2 className="font-semibold text-lg mb-1">{step.title}</h2>
                <p>{step.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

