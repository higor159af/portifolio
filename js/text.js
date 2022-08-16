
const el = document.querySelector("#text");
const text = "Sou Higor Alves Fonseca! Adoro programar, além de tocar violão, tirar fotos e aprender coisas novas! Sinta-se à vontade para entrar em contato ou dar uma olhada nos meus trabalhos anteriores abaixo.";
const interval = 150;

function showText(el, text, interval){
    const char = text.split("").reverse();

    const typer = setInterval(() => {

        if(!char.length){
            return clearInterval(typer)
        }

        const next = char.pop()

        el.innerHTML += next

    }, interval)
}

showText(el, text, interval);

