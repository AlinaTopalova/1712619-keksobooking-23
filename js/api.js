// const getData_old = (onSuccess, onError) => {
//   fetch('https://23.javascript.pages.academy/keksobooking/data')
//     .then((response) => {
//       if (response.ok) {
//         return response;
//       }
//       onError();
//     })
//     .then((response) => response.json())
//     .then((ads) => onSuccess(ads))
//     .catch(() => onError());
// };

const getData = () => (
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(response.status);
    })
    .then((response) => response.json())
);


// const sendData = (onSuccess, onError, body) => {
//   fetch(
//     'https://23.javascript.pages.academy/keksobooking1',
//     {
//       method: 'POST',
//       body,
//     },
//   ).then((response) => {
//     if(response.ok) {
//       onSuccess();
//     } else {
//       onError();
//     }
//   })
//     .catch(() => {
//       onError();
//     });
// };

const sendData = (form) => (
  fetch('https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: new FormData(form),
    },
  ).then((response) => {
    if (response.ok) {
      return response;
    }
    throw new Error(response.status);
  })
);

export {getData, sendData};
