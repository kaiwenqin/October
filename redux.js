import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import redux from "https://cdn.skypack.dev/redux@4.0.5";
import reactRedux, {
  Provider,
  useDispatch,
  useSelector
} from "https://cdn.skypack.dev/react-redux@7.2.2";
import ReduxjsToolkit, {
  createSlice,
  configureStore
} from "https://cdn.skypack.dev/@reduxjs/toolkit@1.4.0";

const nameSlice = createSlice({
  name: "name",
  initialState: "Initial state",
  reducers: {
    updateName: (state, action) => {
      const { name } = action.payload;
      return name;
    }
  }
});

const {
  actions: { updateName },
  reducer: nameReducer
} = nameSlice;

const nameSelector = (state) => state.name;

const store = configureStore({
  reducer: { name: nameReducer }
});

const App = () => {
  const dispatch = useDispatch();
  const name = useSelector(nameSelector);
  const onSetName = (name) => dispatch(updateName({ name }));

  return (
    <input
      type="text"
      value={name}
      onChange={(event) => onSetName(event.target.value)}
    />
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
