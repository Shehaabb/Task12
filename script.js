function Minus(counter){
    if(counter===1)
    {
        let number=parseInt(document.getElementById("number1").textContent);
        if(number>1)
        {
            number-=1;
        }
        document.getElementById("number1").innerHTML = number;
    }
    else if(counter===2)
    {
        let number=parseInt(document.getElementById("number2").textContent);
        if(number>1)
        {
            number-=1;
        }
        document.getElementById("number2").innerHTML = number;
    }
    else
    {
    let number=parseInt(document.getElementById("number3").textContent);
    if(number>1)
    {
        number-=1;
    }
    document.getElementById("number3").innerHTML = number;
    }
}

function Plus(counter){
    if(counter===1)
    {
        let number=parseInt(document.getElementById("number1").textContent);
        if(number<9)
        {
            number+=1;
            document.getElementById("number1").innerHTML = number;
        }
    }
    else if(counter===2)
    {
        let number=parseInt(document.getElementById("number2").textContent);
        if(number<9)
        {
            number+=1;
            document.getElementById("number2").innerHTML = number;
        }
    }
else{
    let number=parseInt(document.getElementById("number3").textContent);
    if(number<9)
    {
        number+=1;
        document.getElementById("number3").innerHTML = number;
    }
}
}


const allItems = document.querySelector(".items")
const items = [
    {
        counter:1,
        img: "1.png",
        color: "Red",
        currentPrice: "120$",
        previousPrice:"150$"
    },
    {
        counter:2,
        img: "2.png",
        color: "Black",
        currentPrice: "130$",
        previousPrice:"180$"
    },
    {
        counter:3,
        img: "3.png",
        color: "Blue",
        currentPrice: "160$",
        previousPrice:"200$"    },
]
items.forEach(item => {
    allItems.innerHTML += `
    <div class="item">
        <div class="image">
        <img src="./${item.img}" alt="${item.color}-Tshirt">
        </div>
        <div class="item-header">
            <h2>${item.color} T-Shirt</h2>
        </div>
        <div class="current-price">
            <h2>${item.currentPrice}</h2>
        </div>
        <div class="previous-price">
            <p>${item.previousPrice}</p>
        </div>
        <div class="buttons">
            <div class="minus">
                <a onclick="Minus(${item.counter})">-</a>
            </div>
            <div class="counter">
                <a id="number${item.counter}">1</a>
            </div>
            <div class="plus">
                <a onclick="Plus(${item.counter})">+</a>
            </div>
        </div>
        <div class="x">
            <img src="./Dell@2x.png" alt="">
        </div>
    </div>
    `
})