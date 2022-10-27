import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome Page</h1>
      <Route path="/welcome/new-user">
        <h3>Hi, new user</h3>
      </Route>
    </section>
  );
};

export default Welcome;
