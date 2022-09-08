

// const scroller = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// })

const transporter = document.getElementById('transporter');
const shipper = document.getElementById('shipper');
const row = document.getElementById('row');
transporter.classList.add('tab__active');
row.innerHTML = `
<div class="col-lg-6 product__info__img">
<img class="our__product__img" src="./assets/img/product__phone.png" alt="">
</div>
<div class="col-lg-6 product__info__main">

    <div class="product__info__main__content">
        <h2>Connecting to Transporters made easy by our Transporter App</h2>
        <p>Find loads for your trucks. Track your trucks using our GPS tracking service
            instead
            of calling individual truckers. Book loads with fair prices and utililize your
            trucks efficiently. Increase your business and earn more.
        </p>
        <button class="download__button">Download Our App</button>
    </div>

</div>`;

transporter.addEventListener('click', () => {
    console.log('transporter')
    transporter.classList.add('tab__active');
    shipper.classList.remove('tab__active');
    row.innerHTML = `
    <div class="col-lg-6 product__info__img">
    <img class="our__product__img" src="./assets/img/product__phone.png" alt="">
    </div>
    <div class="col-lg-6 product__info__main">

        <div class="product__info__main__content">
            <h2>Connecting to Transporters made easy by our Transporter App</h2>
            <p>Find loads for your trucks. Track your trucks using our GPS tracking service
                instead
                of calling individual truckers. Book loads with fair prices and utililize your
                trucks efficiently. Increase your business and earn more.
            </p>
            <button class="download__button">Download Our App</button>
        </div>

    </div>`;
})

shipper.addEventListener('click', () => {
    console.log('shipper');
    transporter.classList.remove('tab__active');
    shipper.classList.add('tab__active');
    row.innerHTML = `
    <div class="col-lg-6 product__info__img">
    <img class="our__product__img" src="./assets/img/loads-1.png" alt="">
    </div>
    <div class="col-lg-6 product__info__main">

        <div class="product__info__main__content">
            <h2>Connecting to Shipper made easy by our Shipper App</h2>
            <p>Find loads for your trucks. Track your trucks using our GPS tracking service
                instead
                of calling individual truckers. Book loads with fair prices and utililize your
                trucks efficiently. Increase your business and earn more.
            </p>
            <button class="download__button">Download Our App</button>
        </div>

    </div>`;
})


const navbarBtn = document.getElementById('navbarBtn');
const firstBar = document.getElementById('firstBar');
const secondBar = document.getElementById('secondBar');
const phoneNavbar = document.getElementById('phoneNavbar');

let open = false;
navbarBtn.addEventListener('click', ()=>{
    
    if(!open){
        firstBar.classList.remove('first__bar');
        firstBar.classList.add('menu__open__first');
        secondBar.classList.remove('second__bar');
        secondBar.classList.add('menu__open__second');
        navbarBtn.classList.toggle('menu__show')
        open = true;
    }else{
        firstBar.classList.remove('menu__open__first');
        firstBar.classList.add('first__bar');
        secondBar.classList.remove('menu__open__second');
        secondBar.classList.add('second__bar');
        open = false;

    }
    phoneNavbar.classList.toggle('menu__show')
})