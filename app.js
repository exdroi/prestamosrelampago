customElements.define('barra-html',
    class extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            fetch(this.getAttribute("src"))
                .then(r => r.text())
                .then(t => {
                    let parser = new DOMParser();
                    let html = parser.parseFromString(t, "text/html");
                    this.innerHTML = html.body.innerHTML;
                }).catch(e => console.error(e));

        }
    });

document.addEventListener("mousemove",parallax);
function parallax(e){
    document.querySelectorAll(".cerdo").forEach(function (move){
    var moving_value=move.getAttribute("data-value");
    var x=(e.clientX*moving_value)/250;
    var y=(e.clientY*moving_value)/250;

    move.style.transform="translateX(" + x + "px) translateY(" + y + "px)";
    });
}

function cambiarmapa(v){
    let w;
    switch (v){
        case 1:
            w="https://maps.app.goo.gl/QZnBGHVNQWwwgdCH7"
            v="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29566.853173320815!2d-100.94521077148802!3d22.131440767329764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842aa39668e8bff7%3A0x6064410b857d2e00!2zUHLDqXN0YW1vcyBSZWzDoW1wYWdv!5e0!3m2!1ses-419!2smx!4v1713637278525!5m2!1ses-419!2smx";
            break;
        case 2:
            w="https://maps.app.goo.gl/egsT8NNKW1htd2JTA"
            v="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29562.155685751168!2d-101.01646152568362!3d22.153812700000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842aa1ff98e16341%3A0xcee56db55fa96c99!2sRelampago!5e0!3m2!1ses-419!2smx!4v1713637314224!5m2!1ses-419!2smx";
            break;
        case 3:
            w="https://maps.app.goo.gl/CKPeRmkJ2r2fbgWB7";
            v="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7388.8046889284915!2d-100.9532546041785!3d22.186810869073284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842aa1bc160761ed%3A0x35c2ec51b2e77a57!2sPlaza%20Citadina!5e0!3m2!1ses-419!2smx!4v1713637351617!5m2!1ses-419!2smx";
            break;
    }
    document.getElementById("frame").src=v;
    document.getElementById("salida").href=w;
}