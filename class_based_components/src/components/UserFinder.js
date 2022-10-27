import { Fragment, Component } from "react";
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";
import classes from "./UserFinder.module.css";
import Users from "./Users";

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  componentDidMount() {
    //some http db call
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  render() {
    return (
      // <UsersContext.Consumer>

      // </UsersContext.Consumer> oneway

      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
          <ErrorBoundary>
            <Users users={this.state.filteredUsers} />
          </ErrorBoundary>
        </div>
      </Fragment>
    );
  }
}

export default UserFinder;
