import {combineReducers, createStore} from "redux";
import {classesReducer} from "../reducers/Classes/ClassesReducer";
import { subjectsReduser } from "../reducers/Subjects/SubjectsReducer";
import {teachersReducer} from "../reducers/Teachers/TeachersReducer";

const reducer = combineReducers({
    classes: classesReducer,
    teachers: teachersReducer,
    subjects: subjectsReduser
})

export const store = createStore(reducer);
