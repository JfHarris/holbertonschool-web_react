import * as notificationInfo from '../../dist/notifications.json';
import { schema } from 'normalizr';
import { normalize } from 'normalizr';

const user = new schema.Entity("users");

const message = new schema.Entity(
  "messages",
  {},
  {
    idAttribute: "guid",
  }
);

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const normalizedInfo = normalize(notificationInfo.default, [notification]);

export { normalizedInfo };

export function getAllNotificationsByUser(userId) {
  const notifications = normalizedInfo.entities.notifications;
  const messages = normalizedInfo.entities.messages;
  const notificationsUser = [];
  for (const property in notifications) {
    if (notifications[property].author = userId) {
      notificationsUser.push(messages[notifications[property].context]);
    }
  }
  return notificationsUser
}