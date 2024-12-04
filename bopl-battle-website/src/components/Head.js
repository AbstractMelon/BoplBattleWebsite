import React from 'react';

function Head() {
  return (
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Bopl Battle Website</title>
      <meta
        name="description"
        content="Bopl Battle - Bopl battle is a multiplayer couch/online game where you battle your friends with unique and wild abilities. There are many choices such as a shrink ray, creating black holes, stopping time and attaching a rocket engine to the stage to send it flying. Choose a combination that synergizes well to win the round."
      />
      <meta
        name="keywords"
        content="Bopl Battle, multiplayer game, online game, battles, competition, indie game, zapray games, bopl battle, bopl, bopl website"
      />
      <meta name="robots" content="index, follow" />
      <link rel="icon" type="image/x-icon" href="favicon.ico" />
      <link rel="stylesheet" href="style.css" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-HSBKWPV6D1"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-HSBKWPV6D1');
        `}
      </script>
    </head>
  );
}

export default Head;
