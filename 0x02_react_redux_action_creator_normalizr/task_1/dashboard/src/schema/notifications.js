import * as notificationInfo from '../../notifications.json';
import { schema } from 'normalizr';
import { normalize } from 'normalizr';

export function getAllNotificationsByUser(userId) {
  return notificationInfo.default.filter((item) => item.author.id === 
  userId).map(({ context }) => context);
}

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
