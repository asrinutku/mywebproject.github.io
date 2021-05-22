
function fetchData(){
    
    fetch('https://jsonplaceholder.typicode.com/todos').then(res =>{
        if(!res.ok){
            throw Error("ERROR");
        }
        return res.json();
    })
    
    .then(data=>{
        const html = data.map(user =>{
            return  `
            <div class="user">
                <p>UserId: ${user.userId}</p>
                <p>Id: ${user.id}</p>
                <p>Title: ${user.title}</p>
                <p>Completed: ${user.completed}</p>
                <br>
            </div>
            `
        }).join("");

      
        document.querySelector('#app').insertAdjacentHTML("afterbegin",html);
    })
    
    .catch(err=>{
        console.log(err);
    })
}

fetchData();
