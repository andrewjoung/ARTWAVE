// import React from 'react'
// import {Dropdown} from "semantic-ui-react";

// const style = {
//   color: 'white',
//   display: "flex",
//   justifyContent: "center",

// }

// const style2 = {
//   marginBottom: "0px",
//   marginTop: "0px",
//   backgroundColor: "#B33434"
// }

// const style3 = {
//   color:'black'
// }

// const shareFriends = [
//   {key: "John", text: "John", value: "John"},
//   {key: "Joe", text: "Joe", value: "Joe"},
//   {key: "Jason", text: "Jason", value: "Jason"},
//   {key: "Frank", text: "Frank", value: "Frank"},
//   {key: "Jane", text: "Jane", value: "Jane"}
// ]

// export default function ListDisplay(props) {
//   let modalId = `a${props.id}`;
//   let modalIdRef = `#a${props.id}`




//   return (
//     <div style={style} className="row mt-2 mb-2 align-items-center">
//       {/* <img className="col-md-3" style={style2} src={props.image} alt="work of art artwork"></img> */}
//       <div className="col-md-6">
//         <p style={{textAlign: "left"}}>{props.name}</p>
//       </div>

//       <div className="col-md-3">
//         <p style={style}>{props.author}</p>
//       </div>

//       <div className="col-md-2">
//         <button style={style2} type="button" className="btn btn-md" data-toggle="modal" data-target={modalIdRef}>View Media</button>
//       </div>

//       {/* Modal HTML */}
//       <div style={style3} className="modal fade" id={modalId} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
//         aria-hidden="true">
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">

//             <div className="modal-header">
//               <img src={props.image} alt="work of art artwork"></img>
//               {/* <h5 style={style3} className="modal-title" id="exampleModalLabel"></h5> */}
//               <button type="button" className="close text-center" data-dismiss="modal" aria-label="Close">
//                 <span aria-hidden="true">{props.name}</span>
//               </button>
//             </div>

//             <div className="modal-body">
//               {props.synopsis}
//             </div>

//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//               {/* TODO: Make this a datalist of current friends */}
//               {/* <button type="button" className="btn btn-primary">Recommend to friend</button> */}
//               <Dropdown
//                 placeholder="Select Friend"
//                 fluid
//                 search
//                 selection
//                 options={shareFriends}
//               />
//             </div>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }
