/* eslint-disable react-hooks/rules-of-hooks */
import { mount } from 'vue/Main';
import React, { useRef, useEffect } from 'react';

// you should be able to do the same kind of pattern in other frameworks like Angular or Vue.
const remoteApp = () => {
  const ref = useRef(null);

  useEffect(() => {
    console.log(mount);
    mount(ref.current, 'vue');
  }, []);

  return <div ref={ref} />;
};

export default remoteApp;
