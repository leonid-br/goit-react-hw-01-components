import PropTypes from 'prop-types';
import Transaction from './Transaction';
import style from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={style.transactionHistory}>
      <thead className={style.head}>
        <tr className={style.title}>
          <th className={style.text}>Type</th>
          <th className={style.text}>Amount</th>
          <th className={style.text}>Currency</th>
        </tr>
      </thead>

      <tbody className={style.body}>
        {items.map(item => (
          <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.protoType = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
