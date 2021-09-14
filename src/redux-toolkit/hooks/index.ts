import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, store } from "redux-toolkit/Store";

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
