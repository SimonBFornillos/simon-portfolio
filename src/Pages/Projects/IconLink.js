import React from 'react';

function IconLink(props) {
   const { href, title, icon } = props;

   const navigateToLink = () => {
      window.location.href = href;
   };

   return (
      <button onClick={navigateToLink}>
         <i className={icon}></i> {title}
      </button>
   );
}

export default IconLink;
