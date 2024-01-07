let food = {
    plainBurger: {
        name: 'GAMBURGER',
        price: 10000,
        amount: 0,
        kcall: 500,
        get calcSum(){
            return this.price * this.amount
        },
        get caclKcall(){
            return this.kcall * this.amount
        }

    },
    freshBurger: {
        name: 'GAMBURGER FRESH',
        price: 15000,
        amount: 0,
        kcall: 650,
        get calcSum(){
            return this.price * this.amount
        },
        get caclKcall(){
            return this.kcall * this.amount
        }

    },
    freshCombo: {
        name: 'GAMBURGER COMBO',
        price: 20000,
        amount: 0,
        kcall: 700,
        get calcSum(){
            return this.price * this.amount
        },
        get caclKcall(){
            return this.kcall * this.amount
        }

    },

}

let btn = [...document.querySelectorAll('.main__product-btn')]
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click',function(){
        prapere(this)
    })
}

function prapere (item){
    let parent = item.closest('.main__product')
    let parentId = parent.getAttribute('id')
    let num = parent.querySelector('.main__product-num')
    let price = parent.querySelector('.main__product-price span')
    let kcall = parent.querySelector('.main__product-kcall span')
    let sym = item.getAttribute('data-symbol')
    let count = food[parentId].amount
    console.log(count);

    if(sym == '+'){
        count++
    }else if(sym == '-' && count > 0){
        count--
    }

    food[parentId].amount = count
    num.innerHTML = count

    price.innerHTML = food[parentId].calcSum

    food[parentId].amount = count
    num.innerHTML = count
    price.innerHTML = food[parentId].calcSum
    kcall.innerHTML = food[parentId].caclKcall
} 

let receipt = document.querySelector('.receipt')
let receiptWindow = receipt.querySelector('.receipt__window')
let receiptWindowOut = receipt.querySelector('.receipt__window-out')
let receiptWindowBtn = receipt.querySelector('.receipt__window-btn')
let addCart = document.querySelector('.addCart')

addCart.addEventListener('click', () => {
    receipt.style.display = "block"
    setTimeout(() => {
        receipt.style.opacity = "1"
        receiptWindow.style.transition = ".5s"
    }, 100);

    let menu = "Your Cart \n\n"

    let totalPrice = 0;
    let totalKcall = 0;

    receiptWindow.style.top = "25%"
    
    for (const key in food) {
       if (food[key].amount) {
          menu = menu + `${food[key].name} ${food[key].amount}x ${food[key].price} = ${food[key].calcSum} \n`
          totalPrice = totalPrice + food[key].calcSum
          totalKcall = totalKcall + food[key].caclKcall
       }
    }
    receiptWindowOut.innerHTML = `${menu} \nTotal Price: ${totalPrice}sum \nTotal kcall: ${totalKcall} calores`
})

receiptWindow.addEventListener('click', () => {
    location = "https://payme.uz/home/main"

    if (e.target) {
        receipt.style.opacity = "0"
        receiptWindow.style.top = "-100%"
        setTimeout(() => {
            receipt.style.display = "none"
        }, 200);
    }
})

let Timerextra =  document.querySelector('.header__timer-extra')
let Info = document.querySelector("#info")
let Info2 = document.querySelector("#info2")
let Info3 = document.querySelector("#info3")
let view = document.querySelector('.view')
let viewclosebtn = document.querySelector('.view__close')
let viewBurger = document.querySelector('.BurgerImg')
let imgburger = viewBurger.querySelector('.imgburger')
let imgcamburger = viewBurger.querySelector('.imgcamburger')
let imgcambo = viewBurger.querySelector('.imgcambo')

let stop;
let start;



function aftotimer (){
    stop = setTimeout(() => {
        aftotimer()
        Timerextra.innerHTML++
          
          if (Timerextra.innerHTML >= 50) {
               clearInterval(stop)
               timerstart()
          }
          
    }, 10);
}
aftotimer()

function timerstart() {
     setTimeout(() => {
        timerstart()
        Timerextra.innerHTML++
        if (Timerextra.innerHTML == 100) {
            Timerextra.innerHTML = 0
            aftotimer()
          }
     }, 500);
}




Info.addEventListener('click', () => {
    imgburger.style.display = "none"
    imgcambo.style.display = "none"
    imgcamburger.style.display = "block"
    imgcamburger.style.width = "500px"
    imgcamburger.style.height = "400px"
    view.classList.add('active')

})
Info2.addEventListener('click', () => {
    imgcambo.style.display = "none"
    imgcamburger.style.display = "none"
    imgburger.style.display = "block"
    imgburger.style.width = "500px"
    imgburger.style.height = "400px"
    view.classList.add('active')
})
Info3.addEventListener('click', () => {
    imgburger.style.display = "none"
    imgcamburger.style.display = "none"
    imgcambo.style.display = "block"
    imgcambo.style.width = "500px"
    imgcambo.style.height = "400px"
    view.classList.add('active')
})
viewclosebtn.addEventListener('click', () => {
    view.classList.remove('active')
})
