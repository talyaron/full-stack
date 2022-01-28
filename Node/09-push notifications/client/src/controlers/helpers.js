// export function urlBase64ToUint8Array(base64String) {
//   const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
//   const base64 = (base64String + padding)
//     .replace(/\-/g, "+")
//     .replace(/_/g, "/");

//   const rawData = window.atob(base64);
//   const outputArray = new Uint8Array(rawData.length);

//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// }

// const publicVapidKey =
//   "BL1gIHBN3kYTGItGf9US4wdDSZLYnLpfMePTTWCHVu2Sc4VTDVC-zAcuvzLyZjU6vkf43uIe5Oa4ZiYwBSCGvX8";

// export async function send() {
//   //register service worker
//   const register = await navigator.serviceWorker.register("/service-worker.js", {
//     scope: "/",
//   });

//   //register push
//   const subscription = await register.pushManager.subscribe({
//     userVisibleOnly: true,

//     //public vapid key
//     applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
//   });

//   //Send push notification
//   await fetch("/subscribe", {
//     method: "POST",
//     body: JSON.stringify(subscription),
//     headers: {
//       "content-type": "application/json",
//     },
//   });
// }
