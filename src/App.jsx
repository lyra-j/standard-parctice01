import { useState } from "react";
import "./App.css";
import MedalForm from "./components/MedalForm";
import MedalList from "./components/MedalList";

function App() {
  // localStorage load
  const countryList = JSON.parse(localStorage.getItem("countryList"))
  // 전체 메달 리스트 관리 state || {}
  const [medals, setMedals] = useState(()=>(countryList? countryList : []));

  //기존데이터 -> 정렬 -> 화면에출력
  const [sortType, setSortType] = useState("gold");

  // sort logic (gold || total)
  const getSortedMedals = () => {
    if (sortType === "gold") {
      const sortedMedals = medals.sort((a, b) => b.goldM - a.goldM);
      return sortedMedals;
    }

    if (sortType === "total") {
      const sortedMedals = medals.sort(
        (a, b) =>
          b.goldM + b.silverM + b.bronzeM - (a.goldM + a.silverM + a.bronzeM)
      );
      return sortedMedals;
    }
  };

  const sortedMedals = getSortedMedals();

  return (
    <main className='main-container'>
      <h1>올림픽 메달 트래커 - 스탠다드반</h1>
      {/* 정렬 옵션 선택 */}
      <div className='sort-wrapper'>
        <label htmlFor="goldChk">
          금메달 순
          <input
            type="radio"
            id="goldChk"
            checked={sortType === "gold"}
            value={"gold"}
            onChange={(e) => setSortType(e.target.value)}
          />
        </label>
        <label htmlFor="totalChk">
          총 메달 순
          <input
            type="radio"
            id="totalChk"
            checked={sortType === "total"}
            value={"total"}
            onChange={(e) => setSortType(e.target.value)}
          />
        </label>
      </div>

      {/* 입력폼 */}
      <MedalForm medals={medals} setMedals={setMedals} />

      {/* (R)메달 리스트 보드 */}
      <MedalList medals={sortedMedals} setMedals={setMedals} />
    </main>
  );
}

export default App;
