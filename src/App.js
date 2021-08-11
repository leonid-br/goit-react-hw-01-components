import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

import StatisticList from './components/Statistics/StatisticsList';
import StatisticsSection from './components/Statistics/StatisticsSection';
import statisticalData from './components/Statistics/statistical-data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        url={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
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
