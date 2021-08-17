import Profile from './components/Profile/Profile';
import user from './data/user.json';

import StatisticList from './components/Statistics/StatisticsList/StatisticsList';
import StatisticsSection from './components/Statistics/StatisticsSection/StatisticsSection';
import statisticalData from './data/statistical-data.json';

import FriendList from './components/FriendList/FriendList/FriendList';
import friends from './data/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

export default function App() {
  const { avatar, name, tag, location, stats } = user;
  return (
    <div className="container">
      <Profile
        url={avatar}
        name={name}
        tag={tag}
        location={location}
        stats={stats}
      />

      <StatisticsSection title="Upload stats">
        <StatisticList stats={statisticalData} />
      </StatisticsSection>

      <StatisticsSection>
        <StatisticList stats={statisticalData} />
      </StatisticsSection>

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}
