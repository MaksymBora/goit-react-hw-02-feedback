import PropTypes from 'prop-types';

export function FeedbackOptions({ clickFeedback, options }) {
  return (
    <div>
      {options.map(option => (
        <button key={option} onClick={() => clickFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

StaticRange.PropTypes = {
  clickFeedback: PropTypes.func,
  contentBtn: PropTypes.array,
};
