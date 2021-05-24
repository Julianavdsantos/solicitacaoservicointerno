function entrar(){
    let log = document.getElementById('email')
    let sn = document.getElementById('pass')
    if (log.value.length == 0 || sn.value.length == 0){

        window.alert('E.mail ou senha incorretos')
    } else {
        window.alert('Bem vindo!')
    }
}