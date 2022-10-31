import { Routes, Route, useNavigate } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";

import { ErrorBoundary } from "react-error-boundary";

import "./App.css";

import Header from "./Users/Header";
import useFetch from "./useFetch";

const Home = lazy(() => import("./Users/Home"));
const StudentHome = lazy(() => import("./Student/StudentHome"));
const UsersHome = lazy(() => import("./Users/UsersHome"));
const Users = lazy(() => import("./Users/Users"));
const UserDetails = lazy(() => import("./Users/UserDetails"));

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={() => resetErrorBoundary}>Reset App</button>
    </div>
  );
};

const App = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const { isLoading, error, fetchRequest } = useFetch();

  useEffect(() => {
    const getData = (data) => {
      setData(data);
    };

    fetchRequest(
      {
        url: "https://randomuser.me/api/1.4/?results=50",
      },
      getData
    );
  }, [fetchRequest]);

  return (
    <div className="app">
      <Header />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => navigate("/")}
      >
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/books/*" element={<StudentHome />} />

            <Route path="/users" element={<UsersHome />}>
              <Route
                path=""
                element={<Users users={data} isLoading={isLoading} />}
              />
              {}
              <Route path=":id" element={<UserDetails users={data} />} />
              {}
            </Route>

            <Route path="*" element={<div className="error"> Error 404 Page</div>} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};
export default App;