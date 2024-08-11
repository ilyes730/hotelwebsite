var  list = document.querySelector(".list ul")
var menu = document.querySelector(".menu")
var closes = document.querySelector(".close")
var page = document.querySelector(".page")
var img = document.querySelector(".card-image img")
var btn1 = document.querySelector(".check #img1")
var btn2 = document.querySelector(".check #img2")
var btn3 = document.querySelector(".check #img3")
var card = document.querySelector(".testimonials .card")
var card1 = document.getElementById("card1")
var card2 = document.getElementById("card2")
var card3 = document.getElementById("card3")




menu.addEventListener('click',function(){
    list.classList.toggle('show')
    page.style  = 'display:none'
})

closes.addEventListener('click',function(){
    list.classList.toggle('show')
    page.style  = 'display:block'
})





function changeImage(image) {
    image.src = './Assets/Imgs/radio_button_checked_40dp_5F6368_FILL0_wght400_GRAD0_opsz40.png';
}

btn1.addEventListener('click', function() {
    changeImage(btn1);
    btn2.src = './Assets/Imgs/radio_button_unchecked_40dp_666666_FILL0_wght400_GRAD0_opsz40.png'; 
    btn3.src = './Assets/Imgs/radio_button_unchecked_40dp_666666_FILL0_wght400_GRAD0_opsz40.png'; 
     card1.style = 'display:flex'
     card2.style = 'display:none'
     card3.style = 'display:none' 
});

btn2.addEventListener('click', function() {
    changeImage(btn2);
    btn1.src = './Assets/Imgs/radio_button_unchecked_40dp_666666_FILL0_wght400_GRAD0_opsz40.png'; 
    btn3.src = './Assets/Imgs/radio_button_unchecked_40dp_666666_FILL0_wght400_GRAD0_opsz40.png';
    card1.style = 'display:none'
    card2.style = 'display:flex'
    card3.style = 'display:none'
});

btn3.addEventListener('click', function() {
    changeImage(btn3);
    btn2.src = './Assets/Imgs/radio_button_unchecked_40dp_666666_FILL0_wght400_GRAD0_opsz40.png'; 
    btn1.src = './Assets/Imgs/radio_button_unchecked_40dp_666666_FILL0_wght400_GRAD0_opsz40.png'; 
    card2.style = 'display:none'
    card1.style = 'display:none'
    card3.style = 'display:flex'
});



/*
const header = document.querySelector('.calendar h3');
const dates = document.querySelector('.dates');
const navs = document.querySelectorAll('#prev,#next');
*/

/*
const months = [
    "Junuary",
    "Februry",
    "March",
    "April",
    "May",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];



let date = new Date();
let day  = date.getDay(); 
let month = date.getMonth();
let year = date.getFullYear();

   

function renderCalendar() {



    const start = new Date(year, month, 1).getDay();
    const endDate = new Date(year, month +1, 0).getDate();
    const end = new Date(year, month, endDate).getDay();
    const endDatePrev = new Date(year, month, 0).getDate();

    let datesHtml = "";

    for(let i = start; i > 0; i--){
        datesHtml += `<li class="inactive">${endDatePrev - i + 1}</li>`;
    }
    

    dates.innerHTML = datesHtml;
    header.textContent = `${months[month]} ${year}`;

}

renderCalendar();



*/

/*


let currentDate = new Date();

const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDay = new Date(currentYear,currentMonth,0);
    const lastDay = new Date(currentYear,currentMonth + 1,0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();

    const monthYearString = currentDate.toLocaleString('default', {month: 'long', year: 'numeric'});
    monthYearElement.textContent = monthYearString;

    let datesHTML = '';

    for(let i = firstDayIndex; i > 0; i--){
        const prevDate = new Date(currentYear, currentMonth, 0 - i + 1);
        datesHTML += `<li class="inactive">${prevDate.getDate()}</li>`; 
    }
    
    for(let i = 1; i <= totalDays; i++){
        const date = new Date(currentYear, currentMonth, i);
        const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : ''; 
        datesHTML += `<li class="inactive ${activeClass}">${i}</li>`;
    }

    for(let i = 1; i <= 7 - lastDayIndex; i++){
         const nextDate = new Date(currentYear ,currentMonth + 1 , i);
         datesHTML += `<li class="inactive">${nextDate.getDate() }</li>`;
    }
    
    dates.innerHTML = datesHTML;
}   

navs.addEventListener('click',() => {
    currentDate.setMonth(currentDate.getMonth() - 1);
})

updateCalendar();

*/


/*

document.addEventListener('DOMContentLoaded',function(){
    const monthYear= document.querySelector('.calendar h3')

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    let currentDate = new Date();
    let today = new Date();

    function renderCalendar(Date){
        const year = 
    }
})

*/let daysTag = document.querySelector(".days");
let currentDate = document.querySelector(".calendar h3");
let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");

let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let getCalendar = () => {
    let lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay();
    let lastDayofMonth = new Date(currentYear, currentMonth, lastDateofMonth).getDay();
    let lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate();

    let liTag = "";

    // Getting all last dates of the previous month
    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    // Getting all dates of the current month
    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday =
            i === date.getDate() &&
            currentMonth === new Date().getMonth() &&
            currentYear === new Date().getFullYear()
                ? "active"
                : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    // Getting first days of the next month
    for (let i = 1; i <= 6 - lastDayofMonth; i++) {
        liTag += `<li class="inactive">${i}</li>`;
    }

    currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
    daysTag.innerHTML = liTag;
};

getCalendar();

prevBtn.addEventListener("click", () => {
    currentMonth = currentMonth - 1;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear -= 1;
    }
    getCalendar();
});

nextBtn.addEventListener("click", () => {
    currentMonth = currentMonth + 1;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear += 1;
    }
    getCalendar();
});

//*19:04     https://www.youtube.com/watch?v=8DngZ_BnwVE   