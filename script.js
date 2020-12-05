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
 

     // zliczanie kliknięć
    btn.addEventListener('click', function(){

        counter++;
        btn.innerText = 'Klikaj';
        click.innerText = 'Ilość kliknięć: '+ counter;

        // kliki na sekunde
        let timePassed = (Date.now()-startTime)/1000;
        let clickPerSecond = counter/timePassed;
        pPerSeconds.innerHTML = "Kliknieć na sekunde: " + clickPerSecond.toFixed(1);
    });
    
     // resetowanie gry 
        btnReset.addEventListener('click', function(){
            location.reload(true);

    });
    
        // ustawianie czasu
        let i = -1;
        btnAccept.addEventListener('click', () =>{
 
            const time = setInterval(() => {
                i++;
                pSeconds.innerHTML = "Czas: " + i + 's ' + '/ '+input.value+'s';
                if (i >= input.value) {
                    clearInterval(time);
                    btn.disabled = true;
                    btnAccept.disabled = true;
            }
        }, 1000);
        });

        // jeśli wprowadzone są niepoprawne dane

        input.addEventListener('input', function(){
            const val = input.value;
            const reg = /^[0-9]{1,}$/g;
            if (!reg.test(val)) {
                input.classList.add("field-error");
                pSeconds.innerHTML = 'Błędne dane! Tylko Liczby!';
                btnAccept.disabled = true;
                btn.disabled = true;

            } else {
                btnAccept.disabled = false;
                btn.disabled = false;
                 parseInt(input.value,10)
                input.classList.remove("field-error");
            }
        });

        // jeśli input jest pusty
        if(document.getElementById("input").value.length == 0){
        btn.disabled = true;
        btnAccept.disabled = true;
        }
});
