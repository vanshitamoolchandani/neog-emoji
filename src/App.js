import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😂": "Face with Tears of Joy",
  "😭": "Loudly Crying Face",
  "🥺": "Pleading Face",
  "🤣": "Rolling on the Floor Laughing",
  "❤️": "Red Heart",
  "✨": "Sparkles",
  "😍": "Smiling Face with Heart-Eyes",
  "🙏": "Folded Hands",
  "😊": "Smiling Face with Smiling Eyes",
  "🥰": "Smiling Face with Hearts",
  "👍": "Thumbs Up",
  "💕": "Two Hearts",
  "🤔": "Thinking Face",
  "😲": "Astonished Face",
  "😘": "Face Blowing A Kiss",
  "😒": "Unamused Face",
  "😩": "Weary Face",
  "😏": "Smirking Face",
  "😁": "Beaming Face With Smiling Eyes",
  "😳": "Flushed Face",
  "🙈": "See No Evil Monkey",
  "😔": "Pensive Face",
  "😑": "Expressionless Face",
  "😋": "Face Savoring Food ",
  "😞": "Disappointed Face"
};
var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function getEmojiHandler(event) {
    // processing
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Emoji Not Found! Try Again.";
    }
    setMeaning(meaning); // react call to show output
  }

  function clickEmojiHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div style={{ backgroundColor: "#f9fac3" }} className="App">
      <h1>WELCOME TO EMOJI WORLD</h1>

      <input
        style={{ height: "3rem", width: "80%", borderRadius: "1rem" }}
        onChange={getEmojiHandler}
      ></input>
      <div style={{ height: "5mm" }}></div>

      <h2>Meaning: {meaning}</h2>

      {emojisWeKnow.map((emoji) => {
        return (
          <span
            style={{ fontSize: "2.5rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
            onClick={() => clickEmojiHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
      <div style={{ height: "25mm" }}></div>

      <footer className="footer heading-alignc">
        <div>
          <h2 className="heading-alignc">Social Network</h2>
          <ul className="footer list-nobullets">
            <li className="list-inline">
              <a
                className="link"
                href="https://www.linkedin.com/in/vanshita-moolchandani/"
              >
                Linkedin
              </a>
            </li>
            <li className="list-inline">
              <a
                className="link"
                href="https://www.instagram.com/vanshitamoolchandani/"
              >
                Instagram
              </a>
            </li>
            <li className="list-inline">
              <a
                className="link"
                href="https://github.com/vanshitamoolchandani"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
