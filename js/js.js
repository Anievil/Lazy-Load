const options = {
    rootMargin: '25px',
    threshold: 1.0
};



const image = (data, num) =>{
    const pic = document.createElement('img');
    pic.setAttribute('src', `${data[num].img}`);
    pic.setAttribute('class', 'pic');
    targetElements[num].append(pic);
    console.log(num)
}

const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0.9){
            console.log('entry', entry)
            entry.target.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
            // entry.target.innerText = '';
            let e =  entry.target;
            num++;
            if(e){
                console.log()
                fetch('../js/json/images.json')
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        if(num == 0){
                            console.log('ok')
                        }
                        list(data, num);
                    }); 
                
            } 
            entry.target.innerText = '';
            io.unobserve(entry.target);
        }
    })
}, options);

var num = -1;
const targetElements = document.querySelectorAll(".backing-sheet");
for(let element of targetElements){
    io.observe(element);
}



function list(data, num){
    image(data, num);
    
}

async function f(){
    const lists = await list;
    console.log(lists);
}
