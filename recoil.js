import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import {
  RecoilRoot,
  atom,
  useRecoilState
} from "https://cdn.skypack.dev/recoil@0.1.2";

const nameState = atom({
  key: "nameState",
  default: "Initial state"
});

const App = () => {
  const [name, setName] = useRecoilState(nameState);

  return (
    <input
      type="text"
      value={name}
      onChange={(event) => setName(event.target.value)}
    />
  );
};

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById("root")
);
