
self.addEventListener('push', function(e) {
  var options = {
    body: 'This notification was generated from a push!',
    icon: 'images/o2.png',
    vibrate: [100, 50, 100],
    data:{
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions:[
      {action: 'explore', title: 'Explore this new world',
        icon: 'images/wp.png'},
        {action: 'close', title: 'Close',
        icon: 'images/o2.png'},
    ]
  };
  e.waitUntil(
    self.registration.showNotification('Hello World!', options)
  );
})
