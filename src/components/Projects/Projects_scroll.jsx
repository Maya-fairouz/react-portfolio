import * as React from "react";
import { render } from "react-dom";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import "./styles.scss";

const movies = [
  "/breaking-bad.webp",
  "/the-leftovers.jpg",
  "/game-of-thrones.jpg",
  "/true-detective.jpg",
  "/walking-dead.jpg"
];

const clamp = (value, clampAt = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

export const Project_scroll = () => {
  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)"
  }));

  const bind = useScroll(event => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`
    });
  });

  return (
    <>
      <div className="container" {...bind()}>
        {movies.map(src => (
          <animated.div
            key={src}
            className="card"
            style={{
              ...style,
              backgroundImage: `url(${src})`
            }}
          />
        ))}
      </div>
    </>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
render(<App />, rootElement);
