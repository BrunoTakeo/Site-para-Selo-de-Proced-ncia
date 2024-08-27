
function Action(id){
    let informacao = document.querySelectorAll('.Infor > div');
    let Mapa = document.querySelectorAll('#Map > iframe');

    console.log('ID:', id);
    console.log('Informação:', document.getElementById(id));
    console.log('Mapa:', document.getElementById(id + '_Map'));

    informacao.forEach(element => {
        element.classList.remove('Ligado');
        element.classList.add('Desligado');
    });
    Mapa.forEach(element => {
        element.classList.remove('Ligado');
        element.classList.add('Desligado');
    });

    let DivId = document.getElementById(id);
    let MapId = document.getElementById(id+'Map');

    if(DivId){
        DivId.classList.remove('Desligado');
        DivId.classList.add('Ligado');
    }
    if(MapId){
        MapId.classList.remove('Desligado');
        MapID.classList.add('Ligado');
    }

}