var push = require('web-push')

var vapidKeys =
{
  publicKey: 'BAGmFlhznV_rfE2jC1X7gmSxecW9ewd4icNrtIYuPSgcbjHolEw6mLm0sflMgjhXFlKodaxUhy30CeVnBykwpD8',
  privateKey: '4uDq3n6wETZ92CWFTFXctn7njCJhuLFyPyY9xXGpR2g'
}

push.setVapidDetails('mailto:test@test.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fbSSjNtdKfo:APA91bG6bPBArhwGp-d82fMQ57B4bxLalM5fySp-1i892khabKUC_0XCg90eYuhbg5eZEJ2BqKEjLhsxVNoXvPxE7dwI10C1VokI62amOsbcS0LlcgTCo2VUBqWr-t0_BjZGMtZtIFBD","expirationTime":null,"keys":{"p256dh":"BIY_X60I9ki2HMag_A1niWu5PXmIyI9_-IHgud4lKQbqmaJjiVyASir9pjVSYd2ri8cMOENbnvwYl1CGgzvo4XA","auth":"MGc95Pjxq6M1ruXy6RFrXQ"}}

push.sendNotification(sub, 'tst')
