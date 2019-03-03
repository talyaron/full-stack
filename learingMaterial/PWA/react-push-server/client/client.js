const publickKey = 'BMqsH2Mx6jZGIlhh1nC9hI-ivxzWQLa3_5M00Bssuf0bAqEb53ROH1__x-CQvL-1aS3UXP3TjpN1vA7HWPsKLtI';

//check for service worker

if ('serviceWorker' in navigator) {
    send().catch(err => { console.dir(err) });
}

function pushNotificationSend() {
    console.log('button send')
    if ('serviceWorker' in navigator) {
        send().catch(err => { console.dir(err) });
    }
}

//register serviceWorker, Register push, Send push
async function send() {
    console.log('start send function')

    const register = await navigator.serviceWorker.register('/sw.js', { scope: '/' });
    console.log('SW registerd')

    //Register push

    console.log('Registrating a push')
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlB64ToUint8Array(publickKey)
    })

    console.log('Push registerd');

    console.log('sending push...')

    await fetch('/subscribe', {
        method: 'POST',
        body: JSON.stringify(subscription),
        headers: {
            'content-type': 'application/json'
        }
    });
    console.log('Push sent')

}


function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}