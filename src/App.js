import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Video from './components/Video';
import Gallery from './components/Gallery';
import Activities from './components/Activities';
import MyActivities from './components/MyActivities';
import Audio from './components/Audio';

function App() {
  const [selectedActivities, setSelectedActivities]= useState([]);
  
  const addActiv = (activity) => {
    const exist = selectedActivities.find(act => act.id === activity.id);
    if(!exist){
      setSelectedActivities([...selectedActivities, activity]);
    }
  }

  const removeActiv = (activity) => {
    setSelectedActivities(
      selectedActivities.filter(act => act.id !== activity.id)
    )
  }
  
  return (
    <div className="App">
      <Header/>
      <Video/>
      <Gallery/>
      <Audio/>
      <Activities onSelect={addActiv }/>
      <MyActivities selected={selectedActivities} onRemove={removeActiv} />
      <Footer/>
    </div>
  );
}

export default App;
