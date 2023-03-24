
const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabContent = document.querySelectorAll('.tabcontent')

const hideTabContent = () => {
    tabContent.forEach(item => {
        item.style.display = 'none'
    })
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(i)
            }
        })
    }
}


var images = [
    'img/tabs/vegy.jpg', 
    'img/tabs/elite.jpg', 
    'img/tabs/post.jpg', 
    'img/tabs/hamburger.jpg'
];
var num = 0;
function autoSlider() {
    var slider = document.getElementById('slider');
    var text = document.getElementById('num');
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
    text.innerHTML = num;

}
setInterval(autoSlider, 2500);


//scroll 




var images2 = [
    'img/slider/pepper.jpg',
    'img/slider/food-12.jpg',
    'img/slider/olive-oil.jpg',
    'img/slider/paprika.jpg',
];
var num2 = 0;
function autoPrut() {
    var prut = document.getElementById('prut');
    var text = document.getElementById('num2');
    num2++;
    if (num2 >= images2.length) {
        num2 = 0;
    }
    prut.src = images2[num2];
    text.innerHTML = num2;

}
setInterval(autoPrut, 2500);

var ancords = document.querySelectorAll('modal a[href*="#"]');

for(ancords of ancords){
    if(ancords){
        ancords.addEventListener('click', function (e) {
            e.preventDefault();
            ancords = this.getAttribute('href');
            document.querySelector(ancords).scrollIntoView({
                behavior: 'smooth', block: 'start'
            })
        })
    }
};

// modal

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalBtn.onclick = () => closeModal()

modal.onclick = event => event.target === modal ? closeModal() : false
modal.onkeydown = event => event.code === 'Escape' ? closeModal() : false

function openModalScroll () {
    const page = document.documentElement
    if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
        openModal()
        window.removeEventListener('scroll', openModalScroll)
    }
}
function scrollToBottom() {
    var scrollHeight = document.scrollHeight;
    var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition < scrollHeight) {
      window.scrollTo(0, scrollPosition + 20); // Increase 20 to adjust the scrolling speed
      window.requestAnimationFrame(scrollToBottom);
    }
  }
  

modalTimeout = setTimeout(openModal, 10600);

// data


function timer__block() {
    var d = new Date('days');
    var hours = d.getHours('hours');
    var minutes = d.getMinutes('minutes');
    var seconds = d.getSeconds('seconds');
    document.innerHTML = hours+":"+minutes+":"+seconds;
}
setInterval(timer__block, 1000);


const deadline = '2023 02 17' 


function getTimeRemaining(deadline) {
    const time = new Date(deadline) - new Date(),
        days = Math.floor((time / (1000 * 60 * 60 * 24))),
        hours = Math.floor((time / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((time / 1000 / 60) % 60),
        seconds = Math.floor((time / 1000) % 60)

    return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}

function setClock(element, deadline) {
    const elem = document.querySelector(element),
        days = elem.querySelector('#days'),
        hours = elem.querySelector('#hours'),
        minutes = elem.querySelector('#minutes'),
        seconds = elem.querySelector('#seconds')

    setInterval(updateClock, 1000)

    updateClock()

    function updateClock() {
        const time = getTimeRemaining(deadline)
        days.innerHTML = makeZero(time.days)
        hours.innerHTML = makeZero(time.hours)
        minutes.innerHTML = makeZero(time.minutes)
        seconds.innerHTML = makeZero(time.seconds)
    }

    function makeZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num
        }
    }

}

setClock('.timer', deadline)
