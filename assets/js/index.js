//selectors
let btns = document.querySelectorAll('li')
let container = document.querySelector('.container');


//All images Array
let fdata =[
    {name:'App', serial:'1', image:'11'},
    {name:'Web',serial:'1', image:'12'},
    {name:'App',serial:'2', image:'13'},
    {name:'App',serial:'3', image:'14'},
    {name:'Web',serial:'2', image:'15'},
    {name:'Card',serial:'1', image:'16'},
    {name:'Card',serial:'2', image:'17'},
    {name:'Web',serial:'3', image:'18'},
    {name:'Card',serial:'3', image:'19'}
    
]
// to display  All data without click the All button
//and display All images 
let data =fdata   
display() 


//app images array   
let app_array = data.filter(function (el) {
    return el.name == 'App'
}
);

//web image arry
let web_array = data.filter(function (el) {
    return el.name == 'Web'
}
);

//card images array
let card_array = data.filter(function (el) {
    return el.name == 'Card'
}
);






for (let index = 0; index < btns.length; index++) {
    btns[index].addEventListener('click', function(e){
        removeActive()
        e.target.classList.add('active')
        if(e.target.getAttribute('filter')=='all'){
            data = fdata
        }else if(e.target.getAttribute('filter')=='app'){
            data = app_array
        }else if(e.target.getAttribute('filter')=='card'){
            data = card_array
        }else if(e.target.getAttribute('filter')=='web'){
            data = web_array
        }
        display()
            
            
    })}

    //display data function
    function display() {
        let box = ''
    for (let index = 0; index < data.length; index++) {
        let image = data[index].image
        let name = data[index].name
        let serial = data[index].serial
        let img_src = './assets/images/' + image + '.JPG'
        box += `<div class="img_box">
        <img class="img" src="${img_src}" alt="pic">
        <div class="portfolio-info">
        <h4>${name}${serial} </h4>
        <p>${name}</p>
        </div>
    </div>`
        
    }
    container.innerHTML = box
        
    }  
    
//remove active from btns function
function removeActive(){
    btns.forEach(function(btn){
        btn.classList.remove('active')
    })
}
