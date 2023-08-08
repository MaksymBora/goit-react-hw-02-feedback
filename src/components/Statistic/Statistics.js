import PropTypes from 'prop-types';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total()}</p>
      <p>Positive Feedback Percentage: {positivePercentage()} %</p>
    </div>
  );
}

StaticRange.PropTypes = {
  good: PropTypes.object,
  neutral: PropTypes.object,
  bad: PropTypes.object,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};
