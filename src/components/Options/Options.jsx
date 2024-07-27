import { FaSmile, FaMeh, FaFrown } from 'react-icons/fa';
import s from "./Options.module.css";

export default function Options({
  updateFeedback,
  resetFeedback,
  initFeedback,
  total,
}) {
  return (
    <div className={s.container}>
      <button onClick={() => updateFeedback("good")}>
        <FaSmile style={{ marginRight: '8px' }} /> Good
      </button>
      <button onClick={() => updateFeedback("neutral")}>
        <FaMeh style={{ marginRight: '8px' }} /> Neutral
      </button>
      <button onClick={() => updateFeedback("bad")}>
        <FaFrown style={{ marginRight: '8px' }} /> Bad
      </button>
      {total > 0 && (
        <button onClick={() => resetFeedback(initFeedback)}>
          Reset
        </button>
      )}
    </div>
  );
}