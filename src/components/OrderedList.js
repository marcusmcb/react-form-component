import React from 'react'
import './OrderedList.css'

const OrderedList = () => {
  let orderedList = []
  let orderedListItem = ''

  const setListDisplay = (orderedListItem) => {
    let listDisplay = document.getElementById('ordered-list-display')
    let listElement = document.createElement('li')
    listElement.appendChild(document.createTextNode(orderedListItem))
    listDisplay.appendChild(listElement)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (orderedListItem === '') {
        event.currentTargetValue = ''
      } else {
        orderedList.push(orderedListItem)
        console.log('ORDERED LIST: ', orderedList)
        setListDisplay(orderedListItem)
        orderedListItem = ''
        event.currentTarget.value = ''
      }
    } else if (event.key === 'Backspace') {
      orderedListItem = orderedListItem.slice(0, -1)
    } else {
      orderedListItem += event.key
      console.log(orderedListItem)
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
      <div>
        <ul id='ordered-list-display'></ul>
      </div>
    </div>
  )
}

export default OrderedList
