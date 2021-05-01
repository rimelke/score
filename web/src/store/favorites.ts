import { ITrack } from "../components/Track";

const INITIAL_STATE = {
  data: [],
  count: 0,
};

interface State {
  data: ITrack[];
  count: number;
}

function removeTrack(state: State, action: any) {
  const data = state.data.filter((track) => track.id !== action.id);
  return { ...state, data, count: data.length };
}

function favorites(state: State = INITIAL_STATE, action: any) {
  switch (action.type) {
    case "ADD_TRACK":
      return state.data.map((track) => track.id).includes(action.track.id)
        ? state
        : {
            ...state,
            data: [...state.data, action.track],
            count: state.count + 1,
          };
    case "REMOVE_TRACK":
      return removeTrack(state, action);
    default:
      return state;
  }
}

export default favorites;
