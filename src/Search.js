import React, { useState, useEffect } from "react";
export function Search(props) {
//   var ret = [];
  var ret = props.array.filter(x=> x.toLowerCase().includes(props.search.toLowerCase()) )
//   props.array
//       .then((x) => {
//       x.toLowerCase();
//     })
//     .then((x) => {
//       if (x.indexOf(props.search.toLowerCase()) !== -1) {
//         ret.push(x);
//       }
//     });
    return(
        <div>{ret}</div>
    )
}
