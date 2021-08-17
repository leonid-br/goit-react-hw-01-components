import PropTypes from 'prop-types';
import style from './Profile.module.css';
import defaultImg from './defaultImg.jpg';

const Profile = ({ url = defaultImg, name, tag, location, stats }) => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img
          src={url}
          alt="Аватар пользователя"
          width={300}
          className={style.avatar}
        />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.item}>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{stats.followers}</span>
        </li>
        <li className={style.item}>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{stats.views}</span>
        </li>
        <li className={style.item}>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
