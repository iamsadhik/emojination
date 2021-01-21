import React, { useState } from "react";
import "./styles.css";
var EmojisDictionary = {
  "🚣 ": "Person Rowing Boa",
  "🏕️": "Camping",
  "🏞️": "National Park",
  "🏝️": "Desert Island",
  "🌇": "Sunset",
  "🚅": "Bullet Train"
};
var emojiweknow = Object.keys(EmojisDictionary);

export default function App() {
  var [emoji, setemoji] = useState();
  function inputHandler(event) {
    var userInput = event.target.value;
    var meaning = EmojisDictionary[userInput];
    setemoji(meaning);
  }
  function clickHandler(emoji) {
    var meaning = EmojisDictionary[emoji];

    if (meaning === undefined) {
      meaning = "We don't have this in our DB";
    }

    setemoji(meaning);
  }
  return (
    <div className="App">
      <h1>get to know about Emojio's</h1>
      <input onChange={inputHandler} placeholder="enter the emoji here"></input>
      <h2>{emoji}</h2>
      <h3>emoji's we know:</h3>
      <div>
        {emojiweknow.map(function (emoji) {
          return (
            <span
              key={emoji}
              style={{
                padding: "0.5rem",
                fontSize: "1.5rem",
                cursor: "pointer"
              }}
              onClick={() => clickHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
