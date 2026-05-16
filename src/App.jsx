import { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [buttonIsVisible, setButtonVisibility] = useState(true);
const hearts = [];

// КОНТУР
for (let i = 0; i < 100; i++) {
  const t = (i / 100) * Math.PI * 2;

  const x = 20 * Math.pow(Math.sin(t), 3);

  const y =
    30 * Math.cos(t) -
    20 * Math.cos(2 * t) -
    5 * Math.cos(3 * t) -
    Math.cos(4 * t);

  hearts.push({
    left: `${45 + x * 1.3}%`,
    top: `${45 - y * 0.8}%`,
    size: 24,
    opacity: 1,
  });
}

// ЗАПОЛНЕНИЕ
for (let i = 0; i <80; i++) {
  const t = Math.random() * Math.PI * 2;

  // коэффициент заполнения
  const scale = Math.random();

  const spread = 10;

  const randomX = (Math.random() - 0.5) * spread;
  const randomY = (Math.random() - 0.5) * spread;

  const x =
    scale *
      (15 * Math.pow(Math.sin(t), 3)) +
    randomX;

  const y =
    scale *
      (
        8 * Math.cos(t) -
        15 * Math.cos(2 * t) -
        10 * Math.cos(3 * t) -
        Math.cos(4 * t)
      ) +
    randomY;

  hearts.push({
    left: `${45 + x * 1.4}%`,
    top: `${45 - y * 1.4}%`,
    size: 14 + Math.random() * 8,
    opacity: 0.7,
  });
}

  return (
    <>
      {buttonIsVisible ? (
        <button
          className="startButton"
          onClick={() => setButtonVisibility(false)}
        >
          ♡
        </button>
      ) : (
        hearts.map((heart, i) => (
          <p
            className="loveText"
            key={i}
            style={{
              left: heart.left,
              top: heart.top,
              animationDuration: `${10 + Math.random() * 100}s`,
              fontSize: `${20 + Math.random()}px`,
            }}
          >
            Я тебя люблю
          </p>
        ))
      )}
    </>
  );
}

export default App;
