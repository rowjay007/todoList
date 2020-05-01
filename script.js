
// let deleteShop = document.querySelectorAll(".delete");

// deleteShop.forEach(del => {
//     del.onclick = function(){
//         let div = this.parentElement;
//         div.style.display = "none";
//     }
// });



    const CONTENT = document.querySelector("#content ul");



    //delete shopping
CONTENT.addEventListener("click", e => {
    if(e.target.className === "delete"){
        const li = e.target.parentElement;
        CONTENT.removeChild(li);
    }
});


//add items

const ADDFORM = document.forms["add-item"];
ADDFORM.addEventListener("submit", e => {
e.preventDefault();
const value = ADDFORM.querySelector("input[type='text']").value;


//create elements

const li = document.createElement("li");
const SHOPNAME = document.createElement("span");
const DELETEBTN = document.createElement("span");

//add content
DELETEBTN.textContent = "delete";
SHOPNAME.textContent = value;

//add classes

SHOPNAME.classList.add("name");
DELETEBTN.classList.add("delete");

//append content

li.appendChild(SHOPNAME);
li.appendChild(DELETEBTN);
CONTENT.appendChild(li);

});

 //shop filter
const searchShop = document.forms["search-items"].querySelector("input");
searchShop.addEventListener("keyup", e => {
        const TERM = e.target.value.toLowerCase();
        const SHOPPER = CONTENT.getElementsByTagName("li");
        Array.from(SHOPPER).forEach(shop => {
            const item = shop.firstElementChild.textContent;
            if (item.toLowerCase().indexOf(TERM) != -1) {
                shop.style.display = "flex";
            } else {
                shop.style.display = "none";
            }

        })
    });
