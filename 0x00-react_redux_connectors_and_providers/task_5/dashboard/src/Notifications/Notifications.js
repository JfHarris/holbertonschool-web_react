import React from "react";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import { css } from 'aphrodite';
import { StyleSheet } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import { Component } from 'react';
import { fetchNotifications } from "../actions/notificationActionCreators";
import { connect } from "react-redux";

export class Notifications extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead,
    } = this.props;

    const menuPStyle = css(
      displayDrawer ? styles.menuItemPNoShow : styles.menuItemPShow
    );

    return (
      <>
        <div
          className={css(styles.menuItem)}
          id="menuItem"
          onClick={handleDisplayDrawer}
        >
          <p className={menuPStyle}>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.Notifications)} id="Notifications">
            <button
              style={{
                background: "transparent",
                border: "none",
                position: "absolute",
                right: 20,
              }}
              aria-label="close"
              onClick={handleHideDrawer}
              id="closeNotifications"
            >
              <img
                src={closeIcon}
                alt="close-icon"
                className={css(styles.NotificationsButtonImg)}
              />
            </button>
            <p className={css(styles.NotificationsP)}>
              Here is the list of notifications
            </p>
            <ul className={css(styles.notificationsUL)}>
              {!listNotifications && (
                <NotificationItem type="noNotifications"
                value="No new notification for now"
          />
              )}
              {listNotifications &&
              Object.values(listNotifications).map((notification) => (
                <NotificationItem
                  key={notification.id}
                  id={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={markNotificationAsRead}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
  fetchNotifications: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const opacityKey = {
  from: {
    opacity: 0.5,
  },

  to: {
    opacity: 1,
  },
};

const transformYKey = {
  "0%": {
    transform: "translateY(0)",
  },

  "50%": {
    transform: "translateY(-5px)",
  },

  "75%": {
    transform: "translateY(5px)",
  },

  "100%": {
    transform: "translateY(0)",
  },
};

const borderKey = {
  "0%": {
    border: `3px dashed blue`,
  },

  "100%": {
    border: `3px dashed red`,
  },
};

const styles = StyleSheet.create({
  menuItem: {
    float: "right",
    backgroundColor: "#fff8f8",
    ":hover": {
      cursor: "pointer",
      animationName: [opacityKey, transformYKey],
      animationDuration: "1s, 0.5s",
      animationIterationCount: 3,
    },
  },

  menuItemPNoShow: {
    marginRight: "8px",
    display: "none",
  },

  menuItemPShow: {
    marginRight: "8px",
  },

  Notifications: {
    //float: "right",
    padding: "10px",
    marginBottom: "20px",
    animationName: [borderKey],
    animationDuration: "0.8s",
    animationIterationCount: 1,
    animationFillMode: "forwards",
    ":hover": {
      border: `3px dashed blue`,
    },
    [screenSize.small]: {
      float: "none",
      border: "none",
      listStyle: "none",
      padding: 0,
      fontSize: "20px",
      ":hover": {
        border: "none",
      },
      position: "absolute",
      background: "white",
      height: "110vh",
      width: "100vw",
    },
  },

  NotificationsButtonImg: {
    width: "10px",
  },

  NotificationsP: {
    margin: 0,
    marginTop: "15px",
  },

  notificationsUL: {
    [screenSize.small]: {
      padding: 0,
    },
  },
});

const mapStateToProps = (state) => {
  return {
    listNotifications: state.notifications.get("messages"),
  };
}

const mapDispatchToProps = {
  fetchNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
