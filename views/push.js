var push = require('web-push')

var vapidKeys =
{
  publicKey: 'BAGmFlhznV_rfE2jC1X7gmSxecW9ewd4icNrtIYuPSgcbjHolEw6mLm0sflMgjhXFlKodaxUhy30CeVnBykwpD8',
  privateKey: '4uDq3n6wETZ92CWFTFXctn7njCJhuLFyPyY9xXGpR2g'
}

push.setVapidDetails('mailto:test@test.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/fl2w7hoakhg:APA91bEn_GZ9I9Afzen7bWMoNhGoVRUoHBMghY4gn1t8oEj2TaJXre6qUJv_e6nM0V1DAW9j13VjSLCbPGzqo80rExT2WlpTQEMQqcGe43QuYni7A7JIRj7t88VjNe2_WnGZd3Iq5P9R","expirationTime":null,"keys":{"p256dh":"BMJHJ4Bv9dPmF_Dnv3ggzC1obbtWPnjCYLRVtRSOklW39piJu2zRP1RBlZArD9nTm2ImZ1an64Z5JoMaZaKKyyU","auth":"crvny71w7jAIUr1bi7TEkg"}}
push.sendNotification(sub, 'tst')
