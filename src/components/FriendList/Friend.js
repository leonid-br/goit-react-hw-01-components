import PropTypes from 'prop-types';

const Friend = ({ isOnline, avatar, name, id }) => {
  return (
    <li className="item" key={id}>
      {isOnline ? (
        <span className="status online"></span>
      ) : (
        <span className="status offline"></span>
      )}
      <img clasNames="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

Friend.protoTypes = {
    isOnline:PropTypes.bool.isRequired, 
    avatar:PropTypes.string.isRequired, 
    name:PropTypes.string.isRequired, 
    id:PropTypes.string.isRequired,
}

export default Friend;

