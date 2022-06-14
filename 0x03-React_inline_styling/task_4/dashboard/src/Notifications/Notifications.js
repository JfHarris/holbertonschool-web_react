import React, { Component } from "react";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet } from 'aphrodite';
import { css } from 'aphrodite';
import closeIcon from "../assets/close-icon.png";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    const menuPStyle = css(
      displayDrawer ? styles.menuItemPNoShow : styles.menuItemPShow
    );

    return (
      <>
        <div className={css(styles.menuItem)} id="menuItem">
          <p className={menuPStyle}>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)} id="Notifications">
            <button
              style={{
                background: "transparent",
                border: "none",
                position: "absolute",
                right: 20,
              }}
              aria-label="close"
            >
              <img
                src={closeIcon}
                alt="close-icon"
                className={css(styles.notificationsButtonImg)}
              />
            </button>
            <p className={css(styles.notificationsP)}>
              Here is the list of notifications
            </p>
            <ul className={css(styles.notificationsUL)}>
              {listNotifications.length === 0 && (
                <NotificationItem value="No new notification for now" />
              )}

              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  id={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={this.markAsRead}
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
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
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

const transformKey = {
  "0%": {
    transform: "translateY(0)",
  },
  "100%": {
    transform: "translateY(0)",
  },
  "50%": {
    transform: "translateY(-5px)",
  },
  "75%": {
    transform: "translateY(5px)",
  },
};

const borderKey = {
  "0%": {
    border: "3px dashed deepSkyBlue",
  },
  "100%": {
    border: "3px dashed red"
  },
};

const styles = StyleSheet.create({
  menuItem: {
    float: "right",
    backgroundColor: "#fff8f8",
    ":hover": {
      animtionDuration: "1s, 0.5s",
      cursor: "pointer",
      animationName: "opacityKey, translateKey",
      animationIterationCount: 3,
    },
  },

  menuItemPNoShow: {
    marginRight: "8px",
    [screenSize.small]: {
      display: "none",
    },
  },

  menuItemPShow: {
    marginRight: "8px",
  },

  Notifications: {
    float: "right",
    border: `3px solid red`,
    padding: "10px",
    marginBottom: "20px",
    animationName: [borderKey],
    animtionDuration: "0.8s",
    animationIterationCount: 1,
    animationFillMode: "forwards",
    ":hover": {
      border: "3px dashed deepBlueSky",
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
    marginTop: '15px',
    margin: 0,
  },

  notificationsUL: {
    [screenSize.small]: {
      padding: 0,
    },
  },
});

export default Notifications;
