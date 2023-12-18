import React, { Component } from 'react';
import { Button, ButtonDiv, FeedbackTitle } from './feedback_Staled';

export const Buttons = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <FeedbackTitle>Please leave feedback</FeedbackTitle>
      <ButtonDiv>
        {options.map(el => (
          <Button
            key={crypto.randomUUID()}
            onClick={onLeaveFeedback}
            name={el.toLowerCase()}
          >
            {el}
          </Button>
        ))}
      </ButtonDiv>
    </div>
  );
};
