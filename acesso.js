
function acesso(){
    let log = document.getElementById('email')
    let sn = document.getElementById('pass')
    
    if (log.value =="juliana" && sn.value =="456"){
        location = "acesso.html"
        
    } else {
        window.alert('senha errada')
    }
}