import activities from "../data/activities.json";
import ActivityCard from "./ActivityCard";

function Activities({onSelect}) {
  return (
    <section id="activities" className="activities">
        <h2>Things to do in Amposta</h2>
        <div className="activities-list">
          {activities.map(activity => <ActivityCard key={activity.id} activity={activity} onSelect={onSelect} />)}
        </div>
    </section>
  );
}

export default Activities;