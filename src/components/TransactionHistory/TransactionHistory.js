import PropTypes from 'prop-types';
import Transaction from './Transaction';

const TransactionHistory = ({ items }) => {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <Transaction
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
        <Transaction />
      </tbody>
    </table>
  );
};

TransactionHistory.protoType ={
    items:PropTypes.array.isRequired,
}

export default TransactionHistory;