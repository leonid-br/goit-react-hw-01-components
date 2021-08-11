import PropTypes from 'prop-types';
import style from './Transaction.module.css';

const Transaction = ({ type, amount, currency, id }) => {
  return (
    <tr className={style.head} key={id}>
      <td className={style.title}>{type}</td>
      <td className={style.title}>{amount}</td>
      <td className={style.title}>{currency}</td>
    </tr>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transaction;
