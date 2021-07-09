const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.calculatorKeys')
const display = document.querySelector('.calulatorDisplay')

keys.addEventListener('click', e => {
    if (e.target.matches('button')){
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayNum = display.textContent
    

    if(!action){
        console.log("numberkey")
    }

    if(displayNum === '0') {
        display.textContent = keyContent
    } else {
        display.textContent = displayNum + keyContent
    }
    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
    ) {
        console.log('operator key!')
    }
    if (action === 'decimal'){
        console.log(' decimal key')
    }
    if (action === "clear") {
        console.log("clear")
      }
      if (action === "calculate") {
        console.log("equal key!")
      }
      if (!action) {
        if (displayNum === "0") {
          display.textContent = keyContent
        }
      }
      if (!action) {
        if (displayNum === "0") {
          display.textContent = keyContent
        } else {
          display.textContent = displayNum + keyContent
        }
        if (action === "decimal") {
            display.textContent = displayNum + "."
        }
    }
})


