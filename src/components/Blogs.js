import React from 'react';

  function Blogs(props) {
    const roll = props.roll;
    console.clear();
    if (roll) {
      console.log('found it');
    } else {
      console.log('try finding it');
    }
  

  return <h1>Blog</h1>;
};
export default Blogs;
