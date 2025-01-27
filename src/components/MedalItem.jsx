import React from "react";

const MedalItem = ({ medal, handleDelete }) => {
  return (
    <li>
      <span>{medal.nation}</span>
      <span>{medal.goldM}</span>
      <span>{medal.silverM}</span>
      <span>{medal.bronzeM}</span>
      <button type="button" onClick={() => handleDelete(medal.nation)}>
        삭제
      </button>
    </li>
  );
};

export default MedalItem;
