console.log('service worker');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log('Pushed received');
    self.registration.showNotification(data.title, {
        body: "Got a message!!!",
        icon: '/img/logo-192.png'
    })
})

self.addEventListener('notificationclose', function (e) {
    var notification = e.notification;
    var primaryKey = notification.data.primaryKey;

    console.log('Closed notification: ' + primaryKey);
});
