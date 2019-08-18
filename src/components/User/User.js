import React from "react";
import { connect } from "react-redux";

import { get_userinfo } from "../../store/actions/actions";
import styles from "./User.module.scss";
import UserControl from "./UserControl/UserControl";
import UserInfo from "./UserInfo/UserInfo";
import UserMedia from "./UserMedia/UserMedia";
import UserRepos from "./UserRepos/UserRepos";
import Spinner from "../Spinner/Spinner";

// const User = ({ match, userInfo, loading, onLoad }) => {
//   useEffect(() => onLoad(match.params.login));
//   return (
//     <div className={styles.container}>
//       <UserControl hireable={userInfo.hireable} />
//       <UserInfo {...userInfo} />
//       <UserMedia {...userInfo} />
//       <UserRepos {...userInfo} />
//     </div>
//   );
// };

class User extends React.Component {
  componentDidMount() {
    this.props.onLoad(this.props.match.params.login);
  }
  render() {
    const { userInfo, loading } = this.props;
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className={styles.container}>
          <UserControl hireable={userInfo.hireable} />
          <UserInfo {...userInfo} />
          <UserMedia {...userInfo} />
          <UserRepos {...userInfo} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.userInfo,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: login => dispatch(get_userinfo(login))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
