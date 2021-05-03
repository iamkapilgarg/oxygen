var push = require ('web-push')

var vapidKeys =
{
  publicKey: 'BAGmFlhznV_rfE2jC1X7gmSxecW9ewd4icNrtIYuPSgcbjHolEw6mLm0sflMgjhXFlKodaxUhy30CeVnBykwpD8',
  privateKey: '4uDq3n6wETZ92CWFTFXctn7njCJhuLFyPyY9xXGpR2g'
}

push.setVapidDetails('mailto:test@test.com', vapidKeys.publicKey, vapidKeys.privateKey )

let sub = {}

push.showNotification(sub, 'tst')
