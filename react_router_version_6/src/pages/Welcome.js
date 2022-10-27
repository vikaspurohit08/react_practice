import { Routes, Route, Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome Page</h1>
      <Link to="new-user">New User</Link>
      <Routes>
        <Route path="new-user" element={<h3>Hi, new user</h3>} />
      </Routes>
    </section>
  );
};

export default Welcome;
