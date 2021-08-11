import PropTypes from 'prop-types';
import Friend from './Friend';
import style from './FriendList.module.css'

const FriendsList = ({friends}) => {
  return (
    <ul className={style.friendList}>
      {friends.map(friend => (
        <Friend
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
          id={friend.id}
        />
      ))}
    </ul>
  );
};

FriendsList.protoType = {
    friends:PropTypes.array.isRequired, 
}

export default FriendsList