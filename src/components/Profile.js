import React from 'react'
import PropTypes from 'prop-types'
import { getUserByUsername } from '../functions/getRequest';

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      loading: false,
    }
  }

  componentWillMount() {
    var username = this.props.location.pathname.substr(this.props.location.pathname.lastIndexOf('/') + 1);
    getUserByUsername(this.context.token, username, (data) => {
      this.setState({ user: data });
      this.setState({ loading: true });
    })
  }

  render() {
    console.log("user")
    if(!this.state.loading){return null}
    return (
      <div id="ProfilePage" className="card mb-4">
        <div className="card">
          <img className="cover-photo" alt="coverPicture" src={this.context.apiurl + this.state.user.coverPic} />
          <img className="rounded-avatar" alt="avatar" src={this.context.apiurl + this.state.user.profilePic} />
          <div className="info-user p-sm-3">
            <p>{this.state.user.firstName} {this.state.user.lastName}<br />
              @{this.state.user.username}<br /><br />
              {this.state.user.bio}<br />
            </p>
          </div>
        </div>
      </div>
    )
  }
}

Profile.contextTypes = {
  token: PropTypes.string,
  apiurl: PropTypes.string,
};

export default Profile