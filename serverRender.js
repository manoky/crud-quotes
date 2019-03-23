/**
  I can later implement server rendering when necessary
 */

// import axios from 'axios';
// import {renderToString} from 'react-dom/server';
// import React from 'react';
// import App from './src/component/App';

// //gets initial qoute data or all quotes data
// const URL = 'http://localhost:3000';

// const apiUrl = (id) => {
//   if(id) {
//     return `${URL}/api/quotes/${id}`;
//   }
//   return `${URL}/api/quotes`
// };

// const getinitialData = (id, data) => {
//   if(id) {
//     return {
//       currentQuote: data
//     };

//   }
//   return {
//     qoutes: data
//   }
// }


// const serverRender = (id) => (
//   axios.get(apiUrl(id))
//   .then(resp => {
//     const initData = getinitialData(id, resp.data);
//     return {
//       serverMarkup: renderToString(
//         <App initData={initData} />
//       ),
//       initData,
//     }
//   })
//   .catch(err => console.log(err))
// );

// export default serverRender;