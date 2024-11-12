

//  dropdownaddlist

let header_add_watchlist_active = document.getElementById("header_add_watchlist_active");
let header_add_dropdown = document.getElementById("header_add_dropdown");

function dropdownaddlist(){
    header_add_dropdown.classList.toggle("rotate");
    header_add_watchlist_active.classList.toggle("open_menu");
    

}









// search_active


let search_active = document.getElementById("search_active");

function search(){
    search_active.classList.toggle("open_menu");

}

function close_button(){
    search_active.classList.remove("open_menu");

}

















// burgermenu_active



let burgermenu_activee = document.getElementById("burgermenu_active");
let overlayypvehicless = document.getElementById("overlay");
let bodypvehicless = document.getElementById("body");

function burgermenu(){

    burgermenu_activee.classList.add("open-popupp");
    overlayypvehicless.classList.add("open-popupp");
    bodypvehicless.classList.add("open-popupp");
    

}


function close_button_burgermenu(){
    bodypvehicless.classList.remove("open-popupp");

  
}

const openPopupButtonsburgermenu_active =document.querySelectorAll('[data-burgermenu_active-target]')
const closePopupButtonsburgermenu_active =document.querySelectorAll('[data-close-button]')
const overlayvehicles = document.getElementById('overlay')


openPopupButtonsburgermenu_active.forEach(button => {
    button.addEventListener('click', () =>{
        const burgermenu_active = document.querySelector(button.dataset.burgermenu_activeTarget)
        openPopup (burgermenu_active)
    })
})




overlayvehicles.addEventListener('click', () => {
        const burgermenu_active= document.querySelectorAll('.burgermenu_active.open_menu')
        burgermenu_active.forEach(burgermenu_active => {
            closePopup(burgermenu_active)
        })
})

closePopupButtonsburgermenu_active.forEach(button => {
    button.addEventListener('click', () => {
        const burgermenu_active = button.closest('.burgermenu_active')
        closePopup(burgermenu_active)
    })
})


function openPopup (burgermenu_active) {
    if (burgermenu_active ==null) return
    burgermenu_active.classList.add('open_menu')
    overlay.classList.add('open_menu')
}


function closePopup(burgermenu_active) {
    if (burgermenu_active==null) return
    burgermenu_active.classList.remove('open_menu')
    overlay.classList.remove('open_menu')
   
}





















// burgermenu_submenu


let burgermenu_submenu_active1 = document.getElementById("burgermenu_submenu_active1");
let burgermenu_submenu_active2 = document.getElementById("burgermenu_submenu_active2");
let burgermenu_submenu_active3 = document.getElementById("burgermenu_submenu_active3");
let burgermenu_submenu_active4 = document.getElementById("burgermenu_submenu_active4");

let burgermenu_title_icon1 = document.getElementById("burgermenu_title_icon1");
let burgermenu_title_icon2 = document.getElementById("burgermenu_title_icon2");
let burgermenu_title_icon3 = document.getElementById("burgermenu_title_icon3");
let burgermenu_title_icon4 = document.getElementById("burgermenu_title_icon4");


function burgermenu_submenu1(){
    burgermenu_title_icon1.classList.toggle("rotate");
    burgermenu_submenu_active1.classList.toggle("open_menu");
}


function burgermenu_submenu2(){
    burgermenu_title_icon2.classList.toggle("rotate");
    burgermenu_submenu_active2.classList.toggle("open_menu");
}

function burgermenu_submenu3(){
    burgermenu_title_icon3.classList.toggle("rotate");
    burgermenu_submenu_active3.classList.toggle("open_menu");
}

function burgermenu_submenu4(){
    burgermenu_title_icon4.classList.toggle("rotate");
    burgermenu_submenu_active4.classList.toggle("open_menu");
}

















// search__active


let search__active = document.getElementById("search__active");

function search_container(){
    search__active.classList.toggle("open_menu");

}

function close__button(){
    search__active.classList.remove("open_menu");

}





// burgermenu_active



let log_in_activee = document.getElementById("log_in_active");
let overlayylog_in_activee = document.getElementById("overlay");
let bodylog_in_activee = document.getElementById("body");

function log_in(){
    log_in_activee.classList.add("open-popupp");
    overlayylog_in_activee.classList.add("open-popupp");
    bodylog_in_activee.classList.add("open-popupp");
}


function close_button_log_in_active(){
    bodylog_in_activee.classList.remove("open-popupp");

  
}



const openPopupButtonslog_in_active =document.querySelectorAll('[data-log_in_active-target]')
const closePopupButtonslog_in_active =document.querySelectorAll('[data-close-button]')
const overlayylog_in_active = document.getElementById('overlay')


openPopupButtonslog_in_active.forEach(button => {
    button.addEventListener('click', () =>{
        const log_in_active = document.querySelector(button.dataset.log_in_activeTarget)
        openPopup (log_in_active)
    })
})




overlayylog_in_active.addEventListener('click', () => {
        const log_in_active= document.querySelectorAll('.log_in_active.open_menu')
        log_in_active.forEach(log_in_active => {
            closePopup(log_in_active)
        })
})

closePopupButtonslog_in_active.forEach(button => {
    button.addEventListener('click', () => {
        const log_in_active = button.closest('.log_in_active')
        closePopup(log_in_active)
    })
})


function openPopup (log_in_active) {
    if (log_in_active ==null) return
    log_in_active.classList.add('open_menu')
    overlay.classList.add('open_menu')
}


function closePopup(log_in_active) {
    if (log_in_active==null) return
    log_in_active.classList.remove('open_menu')
    overlay.classList.remove('open_menu')
}





















// usd_active



let usd_activee = document.getElementById("usd_active");
let overlayyusd_activee = document.getElementById("overlay");
let bodyusd_activee = document.getElementById("body");

function USD(){

    usd_activee.classList.add("open-popupp");
    overlayyusd_activee.classList.add("open-popupp");
    bodyusd_activee.classList.add("open-popupp");
    

}


function close_button_USD_active(){
    bodyusd_activee.classList.remove("open-popupp");

  
}

const openPopupButtonsusd_active =document.querySelectorAll('[data-usd_active-target]')
const closePopupButtonsusd_active =document.querySelectorAll('[data-close-button]')
const overlayyusd_active = document.getElementById('overlay')


openPopupButtonsusd_active.forEach(button => {
    button.addEventListener('click', () =>{
        const usd_active = document.querySelector(button.dataset.usd_activeTarget)
        openPopup (usd_active)
    })
})




overlayyusd_active.addEventListener('click', () => {
        const usd_active= document.querySelectorAll('.usd_active.open_menu')
        usd_active.forEach(usd_active => {
            closePopup(usd_active)
        })
})

closePopupButtonsusd_active.forEach(button => {
    button.addEventListener('click', () => {
        const usd_active = button.closest('.usd_active')
        closePopup(usd_active)
    })
})


function openPopup (usd_active) {
    if (usd_active ==null) return
    usd_active.classList.add('open_menu')
    overlay.classList.add('open_menu')
}


function closePopup(usd_active) {
    if (usd_active==null) return
    usd_active.classList.remove('open_menu')
    overlay.classList.remove('open_menu')
   
}






//  coin_menu_active

let coin_menu_active = document.getElementById("coin_menu_active");


function coin_menu(){
    coin_menu_active.classList.toggle("open_menu");
    
}






//  main_header_days_active

let main_header_days_active = document.getElementById("main_header_days_active");
let main_header_days_icon = document.getElementById("main_header_days_icon");

function main_header_days(){
    main_header_days_icon.classList.toggle("rotate");
    main_header_days_active.classList.toggle("open_menu");
    

}





//  main_header_market_active

let main_header_market_active = document.getElementById("main_header_market_active");
let main_header_market_icon = document.getElementById("main_header_market_icon");

function main_header_market(){
    main_header_market_icon.classList.toggle("rotate");
    main_header_market_active.classList.toggle("open_menu");
    

}







//  dropdown_news

let dropdown_news = document.getElementById("dropdown_news");


function dropdown_news_active(){
  
    dropdown_news.classList.toggle("open_menu");
    

}
