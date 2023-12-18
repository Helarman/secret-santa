import NotificationClient from "./NotificationsClient";

import getNotifications from "../actions/getNotifications";
import getCurrentUser from "../actions/getCurrentUser";

const Notification = async () => {

  const currentUser = await getCurrentUser();
  const userId = currentUser?.id 
  const notifications = await getNotifications(userId as any);

  return (
    <>
      <NotificationClient notifications={notifications}/>
    </>
  )
}

export default Notification;
