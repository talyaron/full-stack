console.log('service worker');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log('Pushed received');
    self.registration.showNotification(data.title, {
        body: "Got a message!!!",
        icon: '/img/logo-192.png'
    })
})