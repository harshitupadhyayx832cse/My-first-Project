function updator(ele){
  let screen =  document.getElementById("screen")
  screen.innerHTML = screen.innerHTML + ele
}

function calculate(){
   let screen = document.getElementById("screen")
   let answer = eval(screen.innerHTML)
   screen.innerHTML = answer
}

function cancel(){
    let screen = document.getElementById("screen")
    let exp = screen.innerHTML
    screen.innerHTML = exp.slice(0,exp.length-1)
}