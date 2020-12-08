document.addEventListener('DOMContentLoaded',() =>{

    console.log('DOM został pomyślnie wczytany');

    const btn = document.querySelector('.btn-primary');
    const btnReset = document.querySelector('.restart');
    const btnAccept = document.querySelector('.accept');
    const btnReturn = document.querySelector('.return')

    const click = document.querySelector('.counter');
    const pSeconds = document.querySelector('.second');
    const pPerSeconds = document.querySelector('.click_per_second')

    const input = document.getElementById('input');
    const loginDiv = document.querySelector('.login_div');
    const loginLink = document.querySelector('.logowanie')
    const container = document.querySelector('.container');
    const header = document.querySelector('h1');
    const header2 = document.querySelector('h2');

    const loginInput = document.getElementById('log_in').value;
    const passwordInput = document.getElementById('passwd').value;
    const submitBtn = document.getElementById('submit_btn');

    let counter = 1;
    let x = 3;
    let i = 0;
    btn.disabled = true;
    btnAccept.disabled = true;
    header2.style.visibility = true;

    let startTime = Date.now();

     // counter of clicks
    btn.addEventListener('click', function(){

        click.innerText = 'Ilość kliknięć: ' + counter++;
        const valInput = input.value;
        const time = setInterval(() => {
            // clicks per seconds
            let timePassed = (Date.now()-startTime)/1000
            let clickPerSecond = counter/timePassed;
            pPerSeconds.innerHTML = "Kliknieć na sekunde: " + clickPerSecond.toFixed(6);
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
        pSeconds.innerHTML = "Czas: 0s" + ' / '+valInput+'s';
        btn.disabled = false;
        btnAccept.disabled = true;

        const time = setInterval(() => {
            i++;

            pSeconds.textContent = "Czas: " + i + 's ' + '/ ' +valInput+'s';
            if (i >= valInput) {
                clearInterval(time);
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
        location.reload(true);

    });

    // login panel

    loginLink.addEventListener('click', function(){
        container.style.display = 'none';
        loginDiv.style.display = 'flex';
        header.innerText = 'Panel logowania';
        header2.innerHTML = '<img src="circle.png" alt="" class="circle">';
        header2.style.display = 'flex';


        // clearing the form
        // function submitForm() {
        //     var inpt = document.getElementById('form_login');
        //     inpt.reset(); 
        //     return false; 
        //  }
});
    btnReturn.addEventListener('click',function(){
        container.style.display = 'flex';
        loginDiv.style.display = 'none';
        header.innerHTML = 'Klikanie na czas! Sprawdź sie!';
        header2.style.display = 'none';

    })

});

