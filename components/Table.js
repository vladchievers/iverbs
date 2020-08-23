import { useState } from "react";

import Copy from "../assets/svg/copy.svg";

const Table = ({ verbs }) => {
  const [copied, setCopied] = useState("");
  const handleCopy = (e) => {
    navigator.clipboard.writeText(e.target.id);

    setCopied(e.target.id);

    setTimeout(() => {
        setCopied('')
    }, 500)
  };
  if (!!!verbs.length) return <div className="empty">Not found verbs...</div>;
  return (
    <div className="table">
      {verbs.map((el) => (
        <div key={el["Base"]} className="tableRow">
          <div onClick={handleCopy} id={el["Base"]} className={`tableCell ${copied === el["Base"] ? 'copied' : ''}`}>
            <span>{el["Base"]}</span> <Copy />
          </div>
          <div
            onClick={handleCopy}
            id={el["Past-simple"]}
            className={`tableCell ${copied === el["Past-simple"] ? 'copied' : ''}`}
          >
            <span>{el["Past-simple"]}</span> <Copy />
          </div>
          <div
            onClick={handleCopy}
            id={el["Past-Participle"]}
            className={`tableCell ${copied === el["Past-Participle"] ? 'copied' : ''}`}
          >
            <span>{el["Past-Participle"]}</span> <Copy />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
