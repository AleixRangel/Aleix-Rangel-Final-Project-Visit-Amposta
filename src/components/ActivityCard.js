function ActivityCard({activity, onSelect}) {
  const CardStyle = {
      backgroundImage: `url(${activity.image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white'
  }  
  
  return (
      <div className="ActivityCard" style={CardStyle}>
        <h3>{activity.name}</h3>
        <p><b>Type: </b> {activity.type} </p>
        <p><b>Duration: </b> {activity.duration} </p>
        <button onClick={()=>onSelect(activity)}>Select Activity</button>
      </div>
    );
  }
  
  export default ActivityCard;