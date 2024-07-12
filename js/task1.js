const arrayBoxes = document.querySelectorAll("input")

arrayBoxes.forEach((boxes) => {
  boxes.checked = false
  boxes.addEventListener("click", (event) => {
    const isChecked = boxes.checked
    const checkBoxID = boxes.id
    localStorage.setItem(`boxCheck${checkBoxID}`, isChecked)
  })
})
arrayBoxes.forEach((boxCheck) => {
  const checkBoxID = boxCheck.id
  const boxChecked = localStorage.getItem(`boxCheck${checkBoxID}`)
  if(boxChecked === "true") {
    boxCheck.checked = true
  } else {
    boxCheck.checked = false
  }
})