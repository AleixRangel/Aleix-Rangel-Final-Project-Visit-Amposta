function Audio() {
  return (
    <section id="ambient" className="audio">
        <div className="audio-intro">
            <p>
                Immerse yourself in the sounds of Amposta and the Ebre Delta.
                This audio captures the peaceful atmosphere of nature,
                the river, and the surrounding landscapes.
                <br /><br />
                Below, a short audio shows some of the most emblematic sounds of Amposta and Delta del Ebre.
            </p>
        </div>
        <div className="promotional-audio">
            <audio controls>
                <source src="/audio/audio1.mp3" type="audio/mpeg" />
            </audio>
        </div>
    </section>
  );
}

export default Audio;