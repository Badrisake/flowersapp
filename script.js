const menuItems=[
    {
        id:1,
        item:"car Item1",
        oneliner:"car",
        img:"images/car1.jpg",
        hotel:"Mahendra Thar",
        desc:"one:This car is very beautiful and it is look like so amazing"

    },
    {
        id:2,
        item:"car Item2",
        oneliner:"car",
        img:"images/car2.jpg",
        hotel:"Nissan",
        desc:"two:this is the nissan car this is in white colour and it is look like so beautiful"

    },
    {
        id:3,
        item:"car Item3",
        oneliner:"car",
        img:"images/car3.jpg",
        hotel:"Mahindra",
        desc:"Three:this is the royal look like car"

    },
    {
        id:4,
        item:"Car Item4",
        oneliner:"Car",
        img:"images/car4.jpg",
        hotel:"benz",
        desc:"four:This is also awesome car but it is so"

    },
    {
        id:5,
        item:"Car item5",
        oneliner:"car",
        img:"images/car5.jpg",
        hotel:"kia",
        desc:"five:this is the kia car"

    },

    {
        id:6,
        item:"Car Item6",
        oneliner:"car",
        img:"images/car6.jpg",
        hotel:"Audi",
        desc:"Six:this the audi car "

    },

    {
        id:7,
        item:"Car Item7",
        oneliner:"car",
        img:"images/car7.jpg",
        hotel:"rebucion",
        desc:"Seven:this the rebucon car this fast and quckily moveing car "

    },



]
const item=document.getElementById('item');
const oneliner=document.getElementById('oneliner');
const img=document.getElementById('img');
const hotel=document.getElementById('hotel');
const desc=document.getElementById('desc');
const prev=document.getElementById('prev');
const random=document.getElementById('random');
const next=document.getElementById('next');

let currentMenu=0;
window.addEventListener('DOMContentLoaded',()=>{
    allMenu(currentMenu);
});
const allMenu=()=>{
    let menu=menuItems[currentMenu]
    item.textContent=menu.item;
    oneliner.textContent=menu.oneliner;
    img.src=menu.img;
    hotel.textContent=menu.hotel;
    desc.textContent=menu.desc; 
}
//random
random.addEventListener('click',()=>{
    currentMenu=Math.floor(Math.random()*menuItems.length)
    // console.log(currentMenu)
    allMenu(currentMenu);

})
//previous btn
prev.addEventListener('click',()=>{
    currentMenu--;
    if(currentMenu<0){
        currentMenu=menuItems.length-1; 
    }
    allMenu(currentMenu)
} )
//next btn
next.addEventListener('click' ,()=>{
    currentMenu++;
    if(currentMenu>menuItems.length-1){
        currentMenu=0;
    }
    allMenu(currentMenu);
})

