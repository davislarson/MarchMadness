import Teams from './CollegeBasketballTeams.json';

function Header() {
  return (
    <header>
      <h1>Welcome to the March Madness Teams sites</h1>
    </header>
  );
}

function Card({ team }: { team: any }) {
  return (
    <div className="card">
      <p>
        <span className="bold">Name:</span> {team.school}
      </p>
      <p>
        <span className="bold">Mascot Name:</span> {team.name}
      </p>
      <p>
        <span className="bold">Location:</span> {team.city}, {team.state}
      </p>
    </div>
  );
}

function TeamList() {
  return (
    <div>
      <h2>College Basketball Teams:</h2>
      {Teams.teams.map((team) => {
        return <Card team={team} />;
      })}
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <TeamList />
    </>
  );
}

export default App;
