function MyActivities({selected, onRemove}) {
    return (
      <div className="SelectedActivities">
        <h2>Your selected activities</h2>
        {selected.length === 0 ? 
        (<p>No activities selected yet!</p>) :
        (<ul>
            {selected.map(activity => <li key={activity.id}>{activity.name} 
              <button onClick={() => onRemove(activity)}> Remove </button> </li> )}
        </ul>)}
      </div>
    );
  }
  
  export default MyActivities;