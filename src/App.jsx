import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(
    () => {
      const val = localStorage.getItem("feedbackValue");
      const parsedVal = JSON.parse(val) ?? 0;
      return parsedVal;
    },
    {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );

  const updateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const resetBtn = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    const stringifiedValue = JSON.stringify(feedback);
    localStorage.setItem("feedbackValue", stringifiedValue);
  });

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
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      )}
    </div>
  );
}

export default App;
