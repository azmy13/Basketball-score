let homeEl1 = document.getElementById("scorehome")
let homeEl2 = document.getElementById("scorehome")
let homeEl3 = document.getElementById("scorehome")

let scorehome = 0

function home_1(){
    scorehome += 1
    homeEl1.textContent = scorehome
}

function home_2(){
    scorehome += 2
    homeEl2.textContent = scorehome
}

function home_3(){
    scorehome += 3
    homeEl3.textContent = scorehome
}


let guestEl1 = document.getElementById("scoreguest")
let guestEl2 = document.getElementById("scoreguest")
let guestEl3 = document.getElementById("scoreguest")

let scoreguest = 0

function guest_1(){
    scoreguest += 1
    guestEl1.textContent = scoreguest
}

function guest_2(){
    scoreguest += 2
    guestEl2.textContent = scoreguest
}

function guest_3(){
    scoreguest += 3
    guestEl3.textContent = scoreguest
}