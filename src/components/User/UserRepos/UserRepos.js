import React, { Fragment } from "react";
import { connect } from "react-redux";
import { get_repos } from "../../../store/actions/actions";
import Repo from "./Repo/Repo";

// const UserRepos = ({ repos_url, onLoad, repos }) => {
//   useEffect(() => onLoad(repos_url));
//   return (
//     <Fragment>
//       {repos.map(repo => (
//         <Repo key={repo.name} {...repo}></Repo>
//       ))}
//     </Fragment>
//   );
// };

class UserRepos extends React.Component {
  componentDidMount() {
    this.props.onLoad(this.props.repos_url);
  }
  render() {
    return (
      <Fragment>
        {this.props.repos.map(repo => (
          <Repo key={repo.name} {...repo}></Repo>
        ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    repos: state.userRepos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: url => dispatch(get_repos(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserRepos);
