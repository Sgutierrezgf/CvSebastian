import React, { useState, useEffect } from 'react';
import './index.scss';
import '../../styles/dark-theme.scss';
import '../../styles/light-theme.scss';

const DarkModeToggle = () => {
  const [checked, setChecked] = useState(localStorage.getItem('theme') === 'dark');
  useEffect(() => {
    document
      .getElementsByTagName('HTML')[0]
      .setAttribute('data-theme', localStorage.getItem('theme'));
  }, []);

  const toggleThemeChange = () => {
    ;
    if (checked === false) {
      localStorage.setItem('theme', 'dark');
      document
        .getElementsByTagName('HTML')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
      setChecked(true);
    } else {
      localStorage.setItem('theme', 'light');
      document
        .getElementsByTagName('HTML')[0]
        .setAttribute('data-theme', localStorage.getItem('theme'));
      setChecked(false);
    }
  };

  return (
    <label className='switch'>
      <input
        type='checkbox'
        defaultChecked={checked}
        onChange={() => toggleThemeChange()}
      />
      <span className='slider round' />
    </label>
  );
};

export default DarkModeToggle;
