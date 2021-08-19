import React from 'react'
import './OrderedList.css'

const OrderedList = () => {
  
  // vars to save user input
  let inputList = []
  let inputListItem = ''  

  // function for input handler
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (inputListItem === '') {        
        return
      } else {
        inputList.push(inputListItem)        
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

  // function to build list display
  const setListDisplay = (inputListItem) => {
    let listDisplay = document.getElementById('ordered-list-display')
    let listElement = document.createElement('li')
    listElement.classList.add('fade-in-text')
    listElement.appendChild(document.createTextNode(inputListItem))
    listDisplay.appendChild(listElement)
  }

  // function to sort list display
  const sortList = () => {
    let sortToggle = document.getElementById('sort-button')    
    let listDisplay, i, switching, b, shouldSwitch, dir, switchcount = 0
    listDisplay = document.getElementById('ordered-list-display')
    switching = true
    dir = 'asc'
    while (switching) {
      switching = false
      b = listDisplay.getElementsByTagName('LI')
      for (i = 0; i < b.length - 1; i++) {
        shouldSwitch = false
        if (dir === 'asc') {
          if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
            shouldSwitch = true
            sortToggle.innerHTML = "&#8595;"            
            break
          }
        } else if (dir === 'desc') {
          if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
            shouldSwitch = true
            sortToggle.innerHTML = "&#8593;"            
            break
          }
        }
      }
      if (shouldSwitch) {
        b[i].parentNode.insertBefore(b[i + 1], b[i])
        switching = true
        switchcount++
      } else {
        if (switchcount === 0 && dir === 'asc') {
          dir = 'desc'
          switching = true
        }
      }
    }
  }

  // function to clear input list
  const clearList = () => {
    let listDisplay = document.getElementById('ordered-list-display')
    listDisplay.innerHTML = ''
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
        <button type='button' className='input-row-element' id='sort-button' onClick={sortList}>
          &#8595;
        </button>
        <button type='button' className='input-row-element' id='clear-button' onClick={clearList}>
          bye
        </button>
      </div>
      <div>
        <ul id='ordered-list-display'></ul>
      </div>
    </div>
  )
}

export default OrderedList
