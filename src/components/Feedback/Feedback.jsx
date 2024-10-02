import styles from "./Feedback.module.css";

function Feedback({ feedback, totalFeedback, positiveFeedback }) {
  return (
    <ul className={styles.feedback_list}>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
}

export default Feedback;
