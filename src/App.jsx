import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import  AllCard  from "./cards/AllCard";
import  NewCard  from "./cards/NewCard";
import { history } from '_helpers';
import { Nav, PrivateRoute } from '_components';
import { Home } from 'home';
import { Login } from 'login';
// import Login2 from './newlogin/index';

export { App };

function App() {
    // init custom history object to allow navigation from 
    // anywhere in the react app (inside or outside components)
    history.navigate = useNavigate();
    history.location = useLocation();

    return (
        <div className="app-container bg-light">
            <Nav />
            <div className="container pt-4 pb-4">
                <Routes>
                <Route
                        path="/"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    {/* <Route path="/login" element={<Login2 />} /> */}
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/newcard" element={<NewCard/>} />
                    <Route path="/card" element={<AllCard/>} />
                </Routes>
            </div>
        </div>
    );
}
