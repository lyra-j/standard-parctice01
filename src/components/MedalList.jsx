import React from "react";
import MedalItem from "./MedalItem";

const MedalList = ({ medals, setMedals }) => {
  // (D)handleDelete logic
  const handleDelete = (country) => {
    const deleteMedals = medals.filter((medal) => {
      return medal.nation !== country;
    });

    setMedals(deleteMedals);
    localStorage.setItem("countryList", JSON.stringify(deleteMedals))
    alert(`${country} 삭제되었습니다.`)
  };

  return (
    <ul className='medal-list'>
      {medals.length <= 0 ? (<p>아직 정보가 없습니다. 정보를 등록해 주세요.</p>) : (medals.map((medal) => (
        <MedalItem
          key={medal.nation}
          medal={medal}
          handleDelete={handleDelete}
        />)
      ))}
    </ul>
  );
};

export default MedalList;
