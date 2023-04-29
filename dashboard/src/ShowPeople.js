import { useContext } from 'react';
import { UserContext } from './UserContext';

function ShowPeople({ toggleHandler }) {
  let { state } = useContext(UserContext);
  const friends = state.people.houses.reduce((acc, cv) => {
    return acc.concat(cv.people);
  }, []);

  return (
    <div className="flex">
      {friends.map((people, index) => (
        <div className="people" key={index}>
          <h4>{people.name}</h4>
          <p>{people.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ShowPeople;