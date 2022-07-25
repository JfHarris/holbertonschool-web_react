import React from "react";
import { Component } from "react";
import Notifications from "./Notifications";
import { fetchNotifications, markAsAread,
  setNotificationFilter } from "../actions/notificationActionCreators";
import PropTypes from "prop-types";
import { getUnreadNotificationsByType } from "../selectors/notificationSelector";
import { connect } from "react-redux";

export class NotificationsContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    return <Notifications {...this.props}></Notifications>;
  }
}

NotificationsContainer.defaultProps = {
  displayDrawer: false,
  listNotifications: null,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
  fetchNotifications: () => {},
  setNotificationFilter: () => {},
};

NotificationsContainer.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.object,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
  setNotificationFilter: PropTypes.func,
};

const mapStateToProps = (state) => {
  const unreadNotificationByType = getUnreadNotificationsByType(state);
  return {
    listNotifications: unreadNotificationByType,
  };
}

const mapDispatchToProps = {
  fetchNotifications,
  markNotificationAsRead: markAsAread,
  setNotificationFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
