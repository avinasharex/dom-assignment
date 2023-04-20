let keyDown = document.getElementById("key-down")
let keyUp = document.getElementById("key-up")

keyDown.addEventListener("keydown", function(){
    alert("Keydown Listener Trigered")
})

keyUp.addEventListener("keyup", function(){
    alert("Keyup Listener Trigered")
})