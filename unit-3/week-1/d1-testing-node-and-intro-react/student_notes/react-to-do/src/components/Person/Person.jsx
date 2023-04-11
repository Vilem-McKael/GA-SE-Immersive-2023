import React from 'react'

export default function Person(props) {
  return (
    <div>
        <p>{props.name}</p>
        <p>{props.height}</p>
        <p>{props.hand}</p>
    </div>
  )
}
