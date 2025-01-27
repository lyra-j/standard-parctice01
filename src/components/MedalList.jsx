import React from "react";
import MedalItem from "./MedalItem";

const MedalList = ({ medals, setMedals }) => {
  // (D)handleDelete logic
  const handleDelete = (country) => {
    const deleteMedals = medals.filter((medal) => {
      return medal.nation !== country;
    });

    setMedals(deleteMedals);
  };

  return (
    <ul className='medal-list'>
      {medals.map((medal) => (
        <MedalItem
          key={medal.nation}
          medal={medal}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default MedalList;
