import PropTypes from 'prop-types';
import styles from './Friend.module.css';

const Friend = ({ isOnline, avatar, name, id }) => {
  return (
    <li className={styles.item} key={id}>
      {isOnline ? (
        <span
          className={styles.status}
          style={{ backgroundColor: 'green' }}
        ></span>
      ) : (
        <span
          className={styles.status}
          style={{ backgroundColor: 'red' }}
        ></span>
      )}
      <img clasNames={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

Friend.protoTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Friend;
