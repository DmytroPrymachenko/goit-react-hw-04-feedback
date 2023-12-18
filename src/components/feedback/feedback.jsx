import { useState } from 'react';
import { NotFeedbackGiven, Statisticsh2 } from './feedback_Staled';
import Statistic from './statistic';

import { Buttons } from './button';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerClick = e => {
    const { name } = e.currentTarget;

    switch (name) {
      case 'good':
        setGood(prev => prev + 1);

        break;
      case 'neutral':
        setNeutral(prev => prev + 1);

        break;
      case 'bad':
        setBad(prev => prev + 1);

        break;
      default:
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() > 0) {
      const result = (good / countTotalFeedback()) * 100;
      return result.toFixed(0) + '%';
    }
  };

  const totalFeedback = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();
  const options = ['Good', 'Neutral', 'Bad'];

  return (
    <div>
      <Buttons options={options} onLeaveFeedback={handlerClick} />
      <Statisticsh2>Statistics</Statisticsh2>
      {totalFeedback <= 0 ? (
        <NotFeedbackGiven>Not feedback given</NotFeedbackGiven>
      ) : (
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
};
