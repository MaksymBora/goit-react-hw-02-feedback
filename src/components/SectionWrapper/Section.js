import PropTypes from 'prop-types';

export function Section({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

StaticRange.PropTypes = {
  title: PropTypes.string,
};
