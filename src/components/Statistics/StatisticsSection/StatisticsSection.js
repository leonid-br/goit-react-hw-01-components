import PropTypes from 'prop-types';
import style from './StatisticsSection.module.css';


const StatisticsSection = ({ title, children }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}> {title} </h2>}
      {children}
    </section>
  );
};
StatisticsSection.protoType = {
    title: PropTypes.string,
  };
  
  export default StatisticsSection;