import React from 'react'
import './OrderedList.css'

const OrderedList = () => {
  let orderedList = []
  let orderedListItem = ''

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('WORKED')
      orderedList.push(orderedListItem)
      console.log("ORDERED LIST: ", orderedList)
      orderedListItem = ''
      event.currentTarget.value = ''
    } else if (event.key === 'Backspace') {
      console.log('BACKSPACE')
      orderedListItem = orderedListItem.slice(0, -1)
    } else {
      orderedListItem += event.key
      console.log('Event', event.key)
      console.log('OLI', orderedListItem)
    }
  }

  return (
    <div>
      <div className='input-row'>
        <input
          type='text'
          className='input-row-element'
          id='ordered-list-input'
          onKeyDown={handleKeyDown}
        ></input>
        <button type='button' className='input-row-element'>
          @
        </button>
        <button type='button' className='input-row-element'>
          CL
        </button>
      </div>
    </div>
  )
}

export default OrderedList
