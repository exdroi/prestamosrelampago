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


/*cerdito mover*/



function mostrar(){
    let check = document.querySelector('.box').checked;
    if (check==true){
        document.getElementById("nav").classList.add('mostrar');
    }else{
        document.getElementById("nav").classList.remove('mostrar');
    }
}


//chatbot
window.__be = window.__be || {};
window.__be.id = "6657b8d8c1c40c000770e554";
(function() {
    var be = document.createElement('script'); be.type = 'text/javascript'; be.async = true;
    be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(be, s);
})();
