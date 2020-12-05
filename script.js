document.addEventListener('DOMContentLoaded',() =>{
    const btn = document.querySelector('.btn-primary');
    const click = document.querySelector('.counter');
    const btnReset = document.querySelector('.restart');
    const pSeconds = document.querySelector('.second');
    const input = document.getElementById('input');
    const btnAccept = document.querySelector('.accept');
    const pPerSeconds = document.querySelector('.click_per_second')

    let counter = 0;
    let startTime = Date.now();
 
    input.addEventListener("input", e => {
        e.preventDefault();
        console.log(e.target.value);
        });


        // ustawianie czasu
        let i = -2;
        btnAccept.addEventListener('click', () =>{
            const time = setInterval(() => {
                i++;
                pSeconds.innerHTML = "Czas: " + i + 's ' + '/ '+input.value+'s';
                if (i >= input.value) {
                clearInterval(time);
                btn.disabled = true;
            }
        }, 1000);
        });
        
     // zliczanie kliknięć

    btn.addEventListener('click', function(){
        counter++;
        btn.innerText = 'Klikaj';
        click.innerText = 'Ilość kliknięć: '+ counter;

        // kliki na sekunde
        let timePassed = (Date.now()-startTime)/1000;
        let clickPerSecond = counter/timePassed;
        pPerSeconds.innerText = 'Kliknieć na sekunde: ' + clickPerSecond.toFixed(6);

    });
    
     // resetowanie gry 
    btnReset.addEventListener('click', function(){
        // counter = 0;
        // click.innerText = 'Ilość kliknięć: '+counter;
        // btn.disabled = false;
        // pSeconds.innerHTML = '';
        // input.placeholder = 'podaj czas w sekundach';
        location.reload(true);

    });
    


            
});
