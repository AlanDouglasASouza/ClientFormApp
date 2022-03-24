
$("#phone").mask("(00) 0000-0000");
$('#cnpj').mask('00.000.000/0000-00');

    function readImage () {
        if (this.files && this.files[0]) {
            var file = new FileReader();
            file.onload = function(e) {
                document.getElementById("btPhoto").style = `background-image: url(${e.target.result})`;
            };       
            file.readAsDataURL(this.files[0]);
        }
    }

    document.getElementById("photo").addEventListener("change", readImage, false);    

    // Testando o baguiu
   
    window.onload = () => {
    var form = document.getElementById('formu');
    const inputs = document.getElementsByClassName("verification")
    const cnpj = document.getElementById('cnpj');
    const Email = document.getElementById('email');

    form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        if (verificCnpj(cnpj) == false){
            return alert('CNPJ Invalido');
        }
        if (vereficEmail(Email) == false){
            return alert('Email Invalido');
        }
        if(verificationNull(inputs)){
           alert('Preencha tudo');
           return;
        } else {
                
        var myFormData = new FormData(form);
        fetch('http://localhost:8080/registerCompany', {
            method: 'POST',
            body: myFormData
        }).then((response) => {
            console.log(response)
            location.reload();
            alert('Cadastro realizado com sucesso!!')                
        }).catch((err) => {
            console.error(`Erro ao fazer o Post: ${err}`)
        });
    }});
}

const verificationNull = (ver, err) => {
    var result = false;

    for (const verif of ver ){
        if (verif.value === ''){
            verif.style = 'border-color: red';
            //verif.style = '::-webkit-input-placeholder {color: red}';   
            verif.placeholder = '***Campo Obrigatorio***';                  
            result = true;           
        }
    }
    return result;
}

const verificCnpj = (numCnpj) => {
    if (!validateCnpj(numCnpj.value)){
        numCnpj.value = '';
        numCnpj.placeholder = 'CNPJ Inválido!';
        numCnpj.style = 'border-color: red'
        numCnpj.className = 'errado';
        return false;
    }
return true;
}

const vereficEmail = (mail) => {
    if (!validateEmail(mail.value)){
        mail.value = '';
        mail.placeholder = 'E-mail Inválido!';
        mail.style = 'border-color: red'
        mail.className = 'errado';
        return false;
    }
return true;
}

const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }