function Video() {
  return (
    <section id="video-presentation" className="video">
        <div className="introduction">
            <p>
                Situated at the gateway to the Ebre Delta, Amposta offers a unique experience surrounded by nature, 
                the river, and local traditions. Strolling through its streets, enjoying the riverside landscape, 
                or discovering its gastronomy are just some of the activities that make this town a special place.
                <br /><br />
                Below, a video showcases some of the most emblematic corners of Amposta.
            </p>
        </div>
        <div className="promotional-video">
            <video controls autoPlay muted loop>
                <source src="/videos/amposta-video.mp4" type="video/mp4"/>
            </video>
        </div>
    </section>
  );
}

export default Video;