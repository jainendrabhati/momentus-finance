// import React from "react";
// const AppWrap = (Component, idName, classNames) => {
//     return (
//       <div id={idName} className={`app__container ${classNames}`}>
        
//         {/* <div className="app__wrapper app__flex"> */}
//           <Component />
  
          
//         {/* </div> */}
     
//       </div>
//     );
//   };
  
//   export default Appwrap;

  import React from 'react'
  
  const Appwrap = (Component,idName,classNames) => function HOC() {
    return (
     
         <div id = {idName} className={`app__container ${classNames}`}>
        
        <div className="app__wrapper app__flex">
          <Component />
  
          
        </div>
     
      
      </div>
    )
  }
  
  export default Appwrap
  