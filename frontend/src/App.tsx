import data from './CollegeBasketballTeams.json';
import './App.css';

function Welcome() {
  return (
    <header>
      <h1>Colleges in NCAA Basketball</h1>
    </header>
  );
}

function TeamCard({
  school,
  mascot,
  city,
  state,
}: {
  school: string;
  mascot: string;
  city: string;
  state: string;
}) {
  return (
    <div className="team-card">
      <h3>{school}</h3>
      <p>Masoct: {mascot}</p>
      <p>
        Location: {city}, {state}
      </p>
    </div>
  );
}

function TeamList() {
  if (data && Array.isArray(data.teams)) {
    return (
      <div>
        {data.teams.map((singleTeamCard) => (
          <TeamCard
            key={singleTeamCard.tid}
            school={singleTeamCard.school}
            mascot={singleTeamCard.name}
            city={singleTeamCard.city}
            state={singleTeamCard.state}
          />
        ))}
      </div>
    );
  }

  return <p>No data available or data format is incorrect.</p>;
}

function App() {
  return (
    <>
      <Welcome />
      <TeamList />
    </>
  );
}

export default App;
