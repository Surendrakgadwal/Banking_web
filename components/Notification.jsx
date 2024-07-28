import React from 'react'

const Notification = ({style,message}) => {
    return <div className={`notification ${style}`}>{message}</div>

}

export default Notification
