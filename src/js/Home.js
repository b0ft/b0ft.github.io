import React from 'react';
import '../css/main.css'

function Home() {
  return (
      <div className="home">
          <span className="home__hello-world">Hello World!</span>
          <span className="home__name">I'm <span className="home__first-name">Aldy</span> Syachranie</span>
          <span className="home__aka">as known as</span>
          <span className="home__boft">Boft/b0ft</span>
          <span className="home__job">Web Developer | Front-End Developer</span>
      </div>
  );
}

export default Home;
