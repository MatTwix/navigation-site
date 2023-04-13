import React from 'react';
import {Route, Routes} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import '../../../templates/assets/css/style.css'
import ClassesPage from "./pages/ClassesPage";
import ClassPage from "./pages/ClassPage";
import TeachersPage from "./pages/TeachersPage";
import SubjectsPage from "./pages/SubjectsPage";
import SubjectPage from "./pages/SubjectPage"
import {Provider} from "react-redux";
import {store} from "./redux/store/configureStore";

const App = () => {
    return (
        <Provider store={store}>
            <Routes>
                <Route path={'/'} element={<Layout />}>
                    <Route index element={<HomePage />}/>
                    <Route path={'/classes'} element={<ClassesPage />}/>
                    <Route path={'/classes/:id'} element={<ClassPage />}/>
                    <Route path={'/teachers'} element={<TeachersPage />}/>
                    <Route path={'/subjects'} element={<SubjectsPage />}/>
                    <Route path={'/subjects/:id'} element={<SubjectPage />}/>
                    <Route path={'*'} element={<NotFoundPage />}/>
                </Route>
            </Routes>
        </Provider>
    );
};

export default App;
