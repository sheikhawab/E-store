import React from 'react'

const Container = ({className, children}) => {
  return (
    <div className={`max-w-[1200px] mx-auto ${className}`}>
      {/* <h1>awab kese ho</h1> */}
      {children}
    </div>
  )
}

export default Container
