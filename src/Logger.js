import React from "react";
import { Outlet } from "react-router-dom";

function Logger({ log, setLog }) {
  console.log(log);
  const logsToDisplay = log?.map((url) => {
    return (
      <tr key={url.id}>
        <td>{url.id}</td>
        <td>{url.src}</td>
      </tr>
    )
  });
  return (
    <>
      <div className="row-tab">
        <div className="column-tab">
          <table>
            <tbody>
              <tr>
                <th>NASA Photo ID</th>
                <th>Photo Link</th>
              </tr>
              {logsToDisplay}
            </tbody>
          </table>
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default Logger;
// * {
//   box-sizing: border-box;
// }


// </style>
// </head>
// <body>

// <h2>Tables Side by Side</h2>
// <p>How to create side-by-side tables with CSS:</p>

// <div class="row">
//   <div class="column">
//     <table>
//       <tr>
//         <th>First Name</th>
//         <th>Last Name</th>
//         <th>Points</th>
//       </tr>
//       <tr>
//         <td>Jill</td>
//         <td>Smith</td>
//         <td>50</td>
//       </tr>
//       <tr>
//         <td>Eve</td>
//         <td>Jackson</td>
//         <td>94</td>
//       </tr>
//       <tr>
//         <td>Adam</td>
//         <td>Johnson</td>
//         <td>67</td>
//       </tr>
//     </table>
//   </div>
//   <div class="column">
//     <table>
//       <tr>
//         <th>First Name</th>
//         <th>Last Name</th>
//         <th>Points</th>
//       </tr>
//       <tr>
//         <td>Jill</td>
//         <td>Smith</td>
//         <td>50</td>
//       </tr>
//       <tr>
//         <td>Eve</td>
//         <td>Jackson</td>
//         <td>94</td>
//       </tr>
//       <tr>
//         <td>Adam</td>
//         <td>Johnson</td>
//         <td>67</td>
//       </tr>
//     </table>
//   </div>
// </div>

// </body>
// </html>
