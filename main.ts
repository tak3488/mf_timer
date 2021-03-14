// Create new element
const timerStyle: string = 'width:27px;'
const timer: string = `<input style="${timerStyle}" id="timerForm"></input>分後に`
const optionValues = ["出勤","退勤","休憩","戻り"]
let options = ""
for(var i in optionValues)options+=`<option value="${i}">${optionValues[i]}</option>`
const selectStyle: string = 'height: 27px;'
const select: string = `<select style="${selectStyle}" id="selectForm"><option value="0">出勤</option><option value="1">退勤</option><option value="2">休憩</option><option value="3">戻り</option></select>をクリック<br>`
const buttonStyle: string = 'margin-left: 150px; margin-top: 10px; background: steelblue; color: white;'
const button: string = `<button onclick="setTimer()" id="button" style="${buttonStyle}">セット</button>`
const newElementStyle: string = 'display: inline-block; vertical-align: middle; padding-left: 16px;'
const newElement: string = `<div style="${newElementStyle}" id="newElement">${timer}${select}${button}</div>`

// Set new element and add border
const leftElement: HTMLElement = document.getElementById('kt-attendance-card-time-stamp') as HTMLElement
leftElement.insertAdjacentHTML('afterend',newElement)
leftElement.style.borderRight = "1px solid #d4d8dd"

// Main functions
const setTimer = () => {
    const timerForm: HTMLInputElement = document.getElementById('timerForm') as HTMLInputElement
    const time: number = Number(timerForm.value)
    const selectForm: HTMLInputElement = document.getElementById('selectForm') as HTMLInputElement
    const selected: number = Number(selectForm.value)
    const schedule: Date = new Date(Date.now() + time*60*1000)
    const targetElement: Element = document.getElementById('newElement') as Element
    const msg: string = `<p>${schedule.getHours()}:${schedule.getMinutes()}:${schedule.getSeconds()}に"${optionValues[selected]}"をクリックします</p>`
    targetElement.innerHTML = msg
    setTimeout(()=>clickButton(selected), time*60*1000)
}
const clickButton = (selected: number) => {
    const targetButton: HTMLLinkElement = document.getElementsByClassName('attendance-card-time-stamp-button')[selected] as HTMLLinkElement
    targetButton.click()
}