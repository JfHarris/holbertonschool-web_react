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

  shouldComponentUpdate(newProps) {
    return (
      newProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
        <div className={css(styles.menuItem)} id='menuItem'>
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.Notifications)} id='Notifications'>
            <button
              style={{
                background: "transparent",
                border: "none",
                position: "absolute",
                right: 20,
              }}
              aria-label="close"
            >
              <img src={closeIcon} alt="close-icon"
              className={css(styles.NotificationsButtonImg)}/>
            </button>
            <p className={css(styles.NotificationsP)}>
              Here is the list of notifications
            </p>
            <ul>
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

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right'
  },

  Notifications: {
    padding: '10px',
    border: '2px dashed red',
    marginBottom: '20px',
    float: 'right',
  },

  NotificationsButtonImg: {
    width: '10px',
  },

  NotificationsP: {
    marginTop: '20px',
    margin: '0',
  },
});

export default Notifications;
