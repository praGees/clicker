document.addEventListener('DOMContentLoaded',() =>{

    console.log('DOM został pomyślnie wczytany');

    const btn = document.querySelector('.btn-primary');
    const btnReset = document.querySelector('.restart');
    const btnAccept = document.querySelector('.accept');
    const btnSubmit = document.querySelector('.submit');

    const click = document.querySelector('.counter');
    const pSeconds = document.querySelector('.second');
    const pPerSeconds = document.querySelector('.click_per_second')

    const input = document.getElementById('input');
    const loginDiv = document.querySelector('.login_div');
    const container = document.querySelector('.container');
    const header = document.querySelector('h1');
    const usernameDiv = document.querySelector('h2');
    const loginName = document.querySelector('.login_input');
    const takeSeconds = document.getElementById('take_seconds');

    let counter = 1;
    let i = -3;
    btn.disabled = true;
    btnAccept.disabled = true;
    header.style.display = 'none';
    container.style.display = 'none';
    usernameDiv.style.display = 'none';
    loginDiv.style.display = 'flex';
    document.forms["nick_login"].reset();

    let startTime = Date.now();

     // counter of clicks
    btn.addEventListener('click', function(){

        const valInput = input.value;
        function clicksPerSecond() {
            return counter / ((new Date()) - startTime) * 1000;
            }
            click.innerText = 'Ilość kliknięć: ' + counter++;
        const time = setInterval(() => {
            // clicks per seconds
            pPerSeconds.innerHTML = "Kliknieć na sekunde: " + clicksPerSecond().toFixed(8)*2;
            if (i >= valInput) {
                clearInterval(time);
                btn.disabled = true;
                btnAccept.disabled = true;
                input.disabled = true;
            }
        }, 1000);
            
    });

    // time setting
    btnAccept.addEventListener('click', function(){
        const valInput = input.value;
        console.log(valInput);
        pSeconds.innerHTML = "Czas: ", i + ' / '+valInput+'s';
        btn.disabled = true;
        btnAccept.disabled = true;

        const time = setInterval(() => {
            if (i<0) {
                i++;
                btn.disabled = true;
                pSeconds.textContent = "Czas: " + i + 's ' + '/ ' +valInput+'s';
            }else if(i >= valInput){
                clearInterval(time);
                i++;
            }else{
                i++;
                btn.disabled = false;
                pSeconds.textContent = "Czas: " + i + 's ' + '/ ' +valInput+'s'
            
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

     // reset game
    btnReset.addEventListener('click', function(){
        // i=0;
        // input.value = 0;
        // counter = 0;
        // document.getElementById('take_seconds').reset();
        // btnAccept.disabled = false;
        // btn.disabled = false;
        // input.disabled = false;
        // pSeconds.innerText = 'Czas: ';
        // pPerSeconds.value = 'Kliknięć na sekunde: ';
        // click.innerText = 'Ilość kliknięć: ';

        // const val = input.value;
        // if(document.getElementById("input").value.length == 0){
        //     btn.disabled = true;
        //     btnAccept.disabled = true;
        // }
        loginDiv.style.display = 'flex';

        location.reload();

    });

    // login panel

    btnSubmit.addEventListener('click',function(){
        header.style.display = 'flex';
        container.style.display = 'flex';
        usernameDiv.style.display = 'flex';
        loginDiv.style.display = 'none';
        usernameDiv.innerHTML = 'Witaj, ' + loginName.value;
    });

// testyyyyyy


});
