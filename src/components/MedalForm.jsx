import React, { useState } from "react";

const MedalForm = ({ medals, setMedals }) => {
  // 입력 값 state
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  // resetForm
  const resetForm = () => {
    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  // (C)submit logic
  const handleSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지

    //새로 받은 값을 저장할 obj
    const newMdals = {
      nation: country,
      goldM: +gold,
      silverM: +silver,
      bronzeM: +bronze,
    };

    // 중복 방지: 기존데이터에서 국가명기준 확인
    if (
      medals.find((medal) => {
        return medal.nation === country;
      })
    ) {
      alert("해당 국가는 이미 존재합니다. 업데이트 해주세요!");
      return;
    }

    setMedals([...medals, newMdals]);
    resetForm();
  };

  // (U)handleUpdate logic
  const handleUpdate = () => {
    //기존데이터에서 일치하는 나라명이 있는지 확인
    const existingMedal = medals.find((medal) => {
      return medal.nation === country;
    });

    //기존데이터에 없는 경우, 국가 등록 안내
    if (!existingMedal) {
      alert("존재하지 않는 나라입니다. 먼저 나라를 추가해주세요");
      return;
    }

    //기존 데이터에 존재하는 경우 업데이트
    const updateMedals = medals.map((medal) => {
      return medal.nation === country
        ? { ...medal, goldM: +gold, silverM: +silver, bronzeM: +bronze }
        : medal;
    });

    setMedals(updateMedals);
    resetForm();
    alert("업데이트 되었습니다.");
  };

  return (
    <form onSubmit={handleSubmit} className="medal-form">
      <label htmlFor="nation">
        나라 이름
        <input
          type="text"
          id="nation"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="나라이름 입력"
          required
        />
      </label>
      <label htmlFor="goldM">
        🥇금메달
        <input
          type="number"
          id="goldM"
          value={gold}
          onChange={(e) => setGold(+e.target.value)}
          placeholder="금메달 개수"
          required
          min="0"
          max="99"
        />
      </label>
      <label htmlFor="silverM">
        🥈은메달
        <input
          type="number"
          id="silverM"
          value={silver}
          onChange={(e) => setSilver(+e.target.value)}
          placeholder="은메달 개수"
          required
          min="0"
          max="99"
        />
      </label>
      <label htmlFor="bronzeM">
        🥉동메달
        <input
          type="number"
          id="bronzeM"
          value={bronze}
          onChange={(e) => setBronze(+e.target.value)}
          placeholder="동메달 개수"
          required
          min="0"
          max="99"
        />
      </label>
      <button type="submit">추가 하기</button>
      <button type="button" onClick={handleUpdate}>
        업데이트
      </button>
    </form>
  );
};

export default MedalForm;
