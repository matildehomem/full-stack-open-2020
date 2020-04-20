import React from 'react'

const Notification = ({ notification }) => {
    if (!notification) return null
    
   else{
    console.log(notification);

     return (
       <div className="success">
        {notification}
      </div>
    )
  }
  }

  export default Notification