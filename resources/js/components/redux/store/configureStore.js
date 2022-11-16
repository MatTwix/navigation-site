import {combineReducers, createStore} from "redux";
import {classesReducer} from "../reducers/Classes/ClassesReducer";
import {teachersReducer} from "../reducers/Teachers/TeachersReducer";

const reducer = combineReducers({
    classes: classesReducer,
    teachers: teachersReducer
})

export const store = createStore(reducer);
