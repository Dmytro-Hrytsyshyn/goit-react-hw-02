import styles from "./Options.module.css";

function Options({ updateFeedback, totalFeedback, resetBtn }) {
  return (
    <div className={styles.buttons}>
      <button
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      {totalFeedback === 0 ? null : <button onClick={resetBtn}>Reset</button>}
    </div>
  );
}

export default Options;
