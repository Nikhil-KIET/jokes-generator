let btn=document.getElementById("btn");
let output=document.getElementById("output");
btn.addEventListener('click',async function(){
    loading.style.display='block';
    output.textContent="";
   
    try {
        var limit = 1;
    let res = await fetch('https://api.api-ninjas.com/v1/dadjokes?limit=' + limit, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'BqO7XCSdIvCtJx7HWLDGaw==8dcUlUfENmQ8w3S1',
            'Content-Type': 'application/json'
        }
    });

    res= await res.json();
    console.log(res);
    loading.style.display='none';
    output.textContent=res[0]?.joke;
        
    } catch (error) {
        alert("error failed tofetch!");
        
    }
    

})