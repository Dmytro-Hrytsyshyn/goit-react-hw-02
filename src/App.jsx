import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const val = localStorage.getItem("feedbackValue");
    return val ? JSON.parse(val) : { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const resetBtn = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    const stringifiedValue = JSON.stringify(feedback);
    localStorage.setItem("feedbackValue", stringifiedValue);
  }, [feedback]);

  return (
    <div className={styles.app_container}>
      <Description />
      <Options
        resetBtn={resetBtn}
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
      />

      {totalFeedback === 0 ? (
        <Notification message="No feedback yet" />
      ) : (
        <Feedback
          positiveFeedback={positiveFeedback}
          feedback={feedback}
          totalFeedback={totalFeedback}
        />
      )}
    </div>
  );
}

export default App;
