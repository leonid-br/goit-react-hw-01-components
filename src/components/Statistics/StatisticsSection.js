import PropTypes from 'prop-types';

const StatisticsSection = ({ title, children }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title"> {title} </h2>}
      {children}
    </section>
  );
};
StatisticsSection.protoType = {
    title: PropTypes.string,
  };
  
  export default StatisticsSection;