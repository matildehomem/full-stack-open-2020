import React from 'react'

const Notification = ({ notification, classError = false }) => {
 const classStyle = classError ? "error" : "success";

  return (
       <div className={classStyle}>
        {notification}
      </div>
    )
  }

  export default Notification