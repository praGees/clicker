document.addEventListener('DOMContentLoaded',() =>{
    const btn = document.querySelector('.btn-primary');
    const click = document.querySelector('.counter');
    const btnReset = document.querySelector('.restart');
    const pSeconds = document.querySelector('.second');
    const input = document.getElementById('input');
    const btnAccept = document.querySelector('.accept');
    const pPerSeconds = document.querySelector('.click_per_second')
    const loginDiv = document.querySelector('.login_div');
    const loginLink = document.querySelector('.logowanie')
    const container = document.querySelector('.container');
    const header = document.querySelector('h1');

    let counter = 0;
    let startTime = Date.now();
    let i = 0;
    btn.disabled = true;
    btnAccept.disabled = true;

    // login panel
    loginLink.addEventListener('click', function(){
            container.style.display = 'none';
            loginDiv.style.display = 'flex';
            header.innerText = 'Panel logowania';
    });


     // counter of clicks
    btn.addEventListener('click', function(){
        btn.innerText = 'Klikaj';
        click.innerText = 'Ilość kliknięć: '+ counter;

        // clicks per second
        counter++;
        let timePassed = (Date.now()-startTime)/1000;
        let clickPerSecond = counter/timePassed;
        pPerSeconds.innerHTML = "Kliknieć na sekunde: " + clickPerSecond.toFixed(4);
    });

    
     // reset game
    btnReset.addEventListener('click', function(){
        location.reload(true);

    });

    // time setting
    btnAccept.addEventListener('click', () =>{
        const valInput = input.value;
        console.log(valInput);
        pSeconds.innerHTML = "Czas: " + i + 's ' + '/ '+input.value+'s';
        btn.disabled = false;
                    
        const time = setInterval(() => {
            i++;
            pSeconds.innerHTML = "Czas: " + i + 's ' + '/ ' +input.value+'s';
            if (i >= input.value) {
                clearInterval(time);
                btn.disabled = true;
                btnAccept.disabled = true;
        }
    }, 1000);
        });

        // validation of entered data

        input.addEventListener('input', function(){
            const val = input.value;
            const reg = /^[0-9]{1,}$/g;
            if (!reg.test(val)) {
                input.classList.add("field-error");
                pSeconds.innerHTML = 'Błędne dane! Tylko Liczby!';
                btnAccept.disabled = true;
                btn.disabled = true;

        // if input is empty
            } else if(document.getElementById("input").value.length == 0){
            btn.disabled = true;
            btnAccept.disabled = true;
            }else {
                btnAccept.disabled = false;
                 parseInt(input.value,10)
                input.classList.remove("field-error");
            }
        });

        // mniejsce na testowe funkcje


});
