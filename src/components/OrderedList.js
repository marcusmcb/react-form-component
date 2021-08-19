import React from 'react'
import './OrderedList.css'

const OrderedList = () => {

  let inputList = []
  let inputListItem = ''  

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (inputListItem === '') {
        event.currentTargetValue = ''
      } else {
        inputList.push(inputListItem)
        console.log(inputList)
        setListDisplay(inputListItem)
        inputListItem = ''
        event.currentTarget.value = ''
      }
    } else if (event.key === 'Backspace') {
      inputListItem = inputListItem.slice(0, -1)
    } else {
      inputListItem += event.key
    }
  }

  const setListDisplay = (inputListItem) => {
    let listDisplay = document.getElementById('ordered-list-display')
    let listElement = document.createElement('li')
    listElement.appendChild(document.createTextNode(inputListItem))
    listDisplay.appendChild(listElement)
  }

  const clearList = () => {
    let listDisplay = document.getElementById('ordered-list-display')
    listDisplay.innerHTML = '';
    inputList = []
    inputListItem = '' 
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
        <button type='button' className='input-row-element' onClick={clearList}>
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
