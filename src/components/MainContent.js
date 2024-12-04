import React from 'react';

function MainContent() {
  return (
    <div className="container">
      <div className="notofficial">
        <h1>THIS IS NOT AN OFFICIAL BOPL BATTLE SITE!</h1>
      </div>
      <br />
      <div className="header">
        {/* <h1>Bopl Battle</h1> */}
      </div>
      <div className="head">
        <p>Bopl Battle!</p>
      </div>
      <p>Bopl battle is a multiplayer couch/online game where you battle your friends with unique and wild abilities. There are many choices such as a shrink ray, creating black holes, stopping time and attaching a rocket engine to the stage to send it flying. Choose a combination that synergizes well to win the round.</p>
      <p>Squish and splatter each other in a last slime standing battle!</p>
      <h2>Things you can do in the game:</h2>
      <ul>
        <li>Attach a rocket engine to platforms to send them flying away</li>
        <li>Cover the stage in flammable smoke</li>
        <li>Create a black hole and make it swallow the whole stage</li>
        <li>Use a growth ray to temporarily enlarge anything, including arrows, grenades, other players, even the stage itself</li>
        <li>Stop time and setup a deadly situation for all of your enemies as they are frozen</li>
        <li>Grab the stage and move it around</li>
        <li>Invent your own strategy with a unique ability combination</li>
        <li>Create platform + control platform + attach big sword onto platform</li>
        <li>Flammable smoke + throw grenade + turn into an invincible rock</li>
      </ul>
      <p>The combos get even wilder in the team vs team mode, as you cooperate with someone to really push the game to its limit.</p>
      <br />
      <div className="game">
        <h2>Get Bopl Battle on Steam</h2>
        <div className="steam-container">
          <iframe src="https://store.steampowered.com/widget/1686940/" frameborder="0" width="646" height="190"></iframe>
        </div>
      </div>
      <br />
      <div className="game">
        <h1>Game Trailer</h1>
        <div className="video-container">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/wT1kFMMIP-A?si=sbXugjFJfb0dchUi" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <br />
      <div className="game">
        <h2>Developer's Website</h2>
        <p>For more information about Bopl Battle, visit the <a href="https://zapraygames.com" target="_blank">Developers Website</a></p>
      </div>
      <br />
      <div className="game">
        <a href="https://www.dropbox.com/scl/fi/l6iv94vdvg8kexb7c51gy/boplBattle_presskit_v2.zip?rlkey=n6r0vx39jjpnmd7y0138reh1m&dl=0">Download presskit for Bopl Battle</a>
      </div>
      <br />
      <div className="game">
        <h2>THIS IS NOT AN OFFICIAL BOPL BATTLE SITE!</h2>
      </div>
    </div>
  );
}

export default MainContent;
