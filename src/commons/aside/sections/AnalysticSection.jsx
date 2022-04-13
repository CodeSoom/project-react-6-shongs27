export default function AnalysticSection({ activeUsers }) {
  const { realTimeUsers, yesterdayActiveUsers, monthActiveUsers } = activeUsers;
  return (
    <div>
      <h3>한 달 방문자</h3>
      <span>{monthActiveUsers}</span>
      <div className="today">
        <span>현재</span>
        <span>{realTimeUsers}</span>
      </div>
      <div className="yesterday">
        <span>어제</span>
        <span>{yesterdayActiveUsers}</span>
      </div>
    </div>
  );
}
