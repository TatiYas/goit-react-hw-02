import "../Options/Options.module.css";
import s from "./Options.module.css"

export default function Options({
  updateFeedback,
  resetFeedback,
  initFeedback,
  total,
}) {
  return (
    <div className={s.container} >
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {total > 0 && (
        <button onClick={() => resetFeedback(initFeedback)}>Reset</button>
      )}
    </div>
  );
}