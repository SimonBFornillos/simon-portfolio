import React from 'react';
import "./Projects.scss";

function IconLink(props) {
   const { link, title, icon } = props;
   return (
      <a href={link} target="_blank" rel="noopener noreferrer">
         <i className={icon}></i> {title}
      </a>
   );
}

export default IconLink;
