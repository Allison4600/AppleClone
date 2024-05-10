var isSticky = false;

window.addEventListener('scroll', function() {
    const inchSticky = document.getElementById('inch-sticky');
    const inchStickyTop = inchSticky.offsetTop;

    const scrollPosition = document.documentElement.scrollTop;

    const buffer = 10;

    if (scrollPosition >= inchStickyTop - buffer && !isSticky) {
        inchSticky.classList.add('inch-sticky');
        isSticky = true;
    } else if (scrollPosition < inchStickyTop - buffer && isSticky) {
        inchSticky.classList.remove('inch-sticky');
        isSticky = false;
    }
});

function selectButton(buttonId) {
    const buttons = document.querySelectorAll('.inch');
    buttons.forEach(button => {
        button.classList.remove('inch-active');
    });

    const selectedButton = document.getElementById(`button${buttonId}`);
    selectedButton.classList.add('inch-active');
}

function selectTab(tabId) {

    const tabs = document.querySelectorAll('.btn-filter');

    tabs.forEach((button, index) => {

        button.classList.remove('btn-filter-active');

        if (index + 1 === tabId) {
            button.classList.add('btn-filter-active');
        }
    });
}

function toggleMobileMenu() {

    const navListMobile = document.getElementById('nav-list-mobile');
    const mainContent = document.getElementById('main-content');

    navListMobile.style.display = 'block';
    mainContent.style.display = 'none';

}

function clickTimes() {
    const mobile = document.getElementById("nav-list-mobile");
    const mainContent = document.getElementById('main-content');
    mobile.style.display = "none";
    mainContent.style.display = "block";
}

function clickOpen() {
    const expand = document.getElementById('mac-overview-list-expand');
    const close = document.getElementById('mac-overview-list-close');
    const overviewList = document.getElementById('mac-overview-list');
    const mainContent = document.getElementById('main-content');

    overviewList.style.display ='block';
    close.style.display = 'block';
    expand.style.display = 'none';
    mainContent.style.filter = 'blur(20px)'

}

function clickClose() {

    const expand = document.getElementById('mac-overview-list-expand');
    const close = document.getElementById('mac-overview-list-close');
    const overviewList = document.getElementById('mac-overview-list');
    const mainContent = document.getElementById('main-content');

    expand.style.display = "block"
    close.style.display = "none"
    overviewList.style.display = "none";
    mainContent.style.filter = "none"
}

function footerOpen(buttonId) {

    const buttonOpen = document.getElementById(`button-open-${buttonId}`)
    const buttonClose = document.getElementById(`button-close-${buttonId}`)
    const footerList = document.getElementById(`footer-list-${buttonId}`);

    if (footerList.style.display === "none") {
        footerList.style.display = "block";
        footerList.classList.add('footer-list');
        buttonClose.style.display = 'block';
        buttonOpen.style.display = 'none'
    } else {
        footerList.style.display = "none";
        footerList.classList.remove('footer-list');
        buttonClose.style.display = 'none';
        buttonOpen.style.display = 'block'
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide-image");
    const dots = document.getElementsByClassName("dot-image");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


// const productList = document.getElementById('product-list');
//
// axios.get('/api/apples')
//     .then(response => {
//         const apples = response.data;
//         apples.forEach(apple => {
//             const productItem = document.createElement('div');
//             productItem.innerHTML = `
//                 <h2>${apple.productName}</h2>
//                 <p>Price: ${apple.price}</p>
//                 <p>Description: ${apple.content}</p>
//             `;
//             productList.appendChild(productItem);
//         });
//     })
//     .catch(error => console.error('Error fetching apples:', error));
//
//
