 import React, { useState } from "react";
import "./styles.css";
//database
const emojiDictionary = {
  "😀": "Happy Face",
  "❤️": "Love",
  "🎈": "Balloon",
  "🥰": "In Love Face",
  "😉": "Wink Face",
  "😂": " Face with Tears of Joy",
  "😋": "Face Savouring Delicious Food",
  "😎": "Cool",
   "🤔": "Thinking Face",
  "🤐": "Face with a Zipper Mouth",
  "🤕": "Injured",
  "😲": "Shocked Face",
  "😰 ": "Nervous or anxious face with sweat",
  "😞": "Sad or disappointed Face",
  "😡": "Red Angry Face",
  "😖": "holding back tears",
  "😥": "Sad or disappointed but Relieved Face",
  "🧐": "observation or encouraging a closer look at some content",
  "🤧": "Sneezing Face",
  "🤤": "Drooling Face"
};
//convert object to array
const emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiClickHandler(emoji) {
    //processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); //set output
  }
  function inputChangeHandler(event) {
    //processing
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput]; //input
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning); //set output
  }

  return (
    <div className="App">
      <h1>inside outtt</h1>
      <input onChange={inputChangeHandler} />
      {/* output */}
      <h2>
        Meaning <em style={{ color: "#651fff" }}>{meaning}</em>
      </h2>
      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} id="emoji">
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
