import * as notificationInfo from '../../notifications.json';

export function getAllNotificationsByUser(userId) {
  return notificationInfo.default.filter((item) => item.author.id === 
  userId).map(({ context }) => context)
}
