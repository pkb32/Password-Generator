import React from 'react'

function Button({
    children, 
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) { //eeita children kaha ki buttonText kaha jaha icha kaha, generally children name use hue
  return (
    //dekh `` eeita use hela bcz eeita js, and js ta direct lekhi habani so {} use hela, and abika bgcolor ki text color eeita ta sabu variable so eeithi $ eei dollar sign deiki use heichi
    <button className={`px-4 py-2 ${bgColor} ${textColor} ${className}`} {...props }
    > 
      {children}
    </button>
  );
}

export default Button
