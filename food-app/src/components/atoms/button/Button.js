import React from 'react';

const Button = (props) => {

const { label, onclick, color, type, ...rest } = props;
  return (
    <div>
        <button className='btn'
        onclick = {onclick}
        type = {type}
        {...rest}
        >
          {label}
        </button>
    </div>
  )
}

export default Button;