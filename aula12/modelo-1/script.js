function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        document.body.style.background = '#c8e1dd'
        //BOM DIA!
        img.scr = 'manha.png'
    }else if (hora >=12 && hora < 18){
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#f1d7bc'
    } else {
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#032236'
    }
}

//noite 032236
//tarde f1d7bc
//manha c8e1dd