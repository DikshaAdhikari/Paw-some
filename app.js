const text = document.getElementById('text');
const subhead = "Showing You Random Images.";
text.style.color='#f4ebc1';
let i = 0;
setInterval(() => {
    text.innerText = subhead.slice(0, i);
    i++;
}, 200)

const fox = document.getElementById('fox');
const dog = document.getElementById('dog');
const fox_btn = document.getElementById('btn-fox');
const dog_btn = document.getElementById('btn-dog');

fox_btn.addEventListener('click',()=>{
    fetch("https://randomfox.ca/floof/")
        .then(res => res.json())
        .then(data => {
            fox.innerHTML =`<img src="${data.image}"/>`
        })
});

dog_btn.addEventListener('click',()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            dog.innerHTML =`<img src="${data.message}"/>`
        })
});
