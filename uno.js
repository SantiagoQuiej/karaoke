let contenedor = document.querySelector('#pantalla')
let boton1 = document.querySelector('#boton1')
let boton2 = document.querySelector('#boton2')
let musica = document.querySelector('#selector')
let contador = 0
let musicalocal = [
    Talvez = [
        "Talvez (Paulo Londra) 🎙️",
        "Ey, oh-oh 🎙️",
        "O-O-Ovy On The Drums (ey) 🎙️",
        "¿Qué será, qué será? 🎙️",
        "Eso que huele tan bien (tan bien) 🎙️",
        "Pero en realidad sabe mal 🎙️",
        "Y que me tiene desvelándome 🎙️",
        "Y tal vez, tú me tendrías que avisar 🎙️",
        "Cuando ya no me quieres ver (no me quieres ver) 🎙️",
        "Porque yo acá sigo esperándote 🎙️",
        "Qué mal por mí 🎙️",
        "Que haga frío acá afuera y tú hoy no quieras salir (no quieras salir) 🎙️",
        "Pero tranqui (tranqui, tranqui) 🎙️",
        "Que el frío y la espera siempre fue costumbre pa mí 🎙️",
        "Qué mal por mí 🎙️",
        "Porque tal vez lo nuestro era solo para divertirse 🎙️",
        "Pero este tonto suele confundirse 🎙️",
        "Y es triste que del finde ya no he vuelto a sonreír 🎙️",
        "Tal vez lo nuestro era solo para divertirse (divertirse) 🎙️",
        "Pero este tonto suele confundirse 🎙️",
        "Y es triste que del finde ya no he vuelto a sonreír 🎙️",
        "Parece leyenda, maniquí, le queda bien todas las prendas 🎙️",
        "No es como yo, a ella nada la avergüenza, no tiene paciencia 🎙️",
        "Le sobra experiencia al frente de la audiencia 🎙️",
        "Normal que deleite cuando pueda verle 🎙️",
        "Demasiado inteligente como Einstein 🎙️",
        "Hace lo que sea, no piensa en la gente (no) 🎙️",
        "Una chica que la admiro desde siempre 🎙️",
        "No la contratan pa bailar porque se roba el show 🎙️",
        "No quiere ser modelo porque eso le aburrió 🎙️",
        "No puede ser locutora porque con su voz enamoró 🎙️",
        "Tendría que ser ladrona, porque te roba hasta el corazón 🎙️",
        "Entonces, ¿ahora cómo olvido de tu nombre? 🎙️",
        "Hago mil preguntas y no respondes 🎙️",
        "Tienes una receta secreta y juro que me altera 🎙️",
        "Entonces, ¿ahora cómo olvido de tu nombre? 🎙️",
        "Hago mil preguntas y no respondes 🎙️",
        "Tienes una receta secreta y juro que me altera 🎙️",
        "Porque tal vez lo nuestro era solo para divertirse 🎙️",
        "Pero este tonto suele confundirse 🎙️",
        "Y es triste que del finde ya no he vuelto a sonreír 🎙️",
        "Tal vez lo nuestro era solo para divertirse 🎙️",
        "Pero este tonto suele confundirse 🎙️",
        "Y es triste que del finde ya no he vuelto a sonreír, ey 🎙️",
        "Sí me contesta, un milagro 🎙️",
        "Y si me mira, ¿qué hago? 🎙️",
        "Seguro me quedo pensando en lo lindo 🎙️",
        "Que sería tenerte un ratito a mi lado 🎙️",
        "Solo mira, demasiado flow en esa piba 🎙️",
        "No anda con un combo porque opaca a las amigas 🎙️",
        "Asesina, me hace mal, mal, si la veo 🎙️",
        "Llamo al 911, porque sí sé 🎙️",
        "Que verla me duele y no me hace bien 🎙️",
        "Y si me habla, seguro me mata 🎙️",
        "Alguien traiga un médico rápido 🎙️",
        "Que ahora mis pálpitos empiezan a acelerar 🎙️",
        "Porque tal vez lo nuestro era solo para divertirse 🎙️",
        "Pero este tonto suele confundirse 🎙️",
        "Y es triste que del finde ya no he vuelto a sonreír 🎙️",
        "Tal vez lo nuestro era solo para divertirse 🎙️",
        "Pero este tonto suele confundirse 🎙️",
        "Y es triste que del finde ya no he vuelto a sonreír, ey, ¡shiuf! 🎙️",
        "Ovy On The Drums, On The Drums, On The Drums 🎙️",
        "Paulo Londra 🎙️",
        "Big Ligas, Los Mayores 🎙️",
        "The Kristoman 🎙️",
        "Leones Con Flow (O-O-Ovy On The Drums) 🎙️",
        "Sencillo, je 🎙️",
        "¿Qué me queda 'ónde? ¿hacer tango?, ey 🎙️",
        "Cansado' de hacer todos los géneros 🎙️",
        "Vamo' a inventar algo nuevo ya 🎙️"
    ],
    Reik = [
        "Noviembre sin ti (Reik)🎶",
        "La tarde se aleja, el cielo está gris 🎶",
        "La noche aparece sin ti 🎶",
        "Callado en la playa 🎶",
        "Te lloro en silencio otra vez 🎶",
        "Me ahoga esta pena, no puedo vivir 🎶",
        "Las olas no me hablan de ti 🎶",
        "Sentado en la arena 🎶",
        "Escribo tu nombre otra vez 🎶",
        "Porque te extraño desde aquel noviembre 🎶",
        "Cuando soñamos juntos a querernos siempre 🎶",
        "Me duele, este frío noviembre 🎶",
        "Cuando las hojas caen a morir por siempre 🎶",
        "Noviembre sin ti es sentir que la lluvia 🎶",
        "Me dice llorando que todo acabó 🎶",
        "Noviembre sin ti es pedirle a la luna 🎶",
        "Que brille en la noche de mi corazón, otra vez 🎶",
        "Otra vez(otra vez) 🎶",
        "Quisiera decirte que quiero volver 🎶",
        "Tu nombre va escrito en mi piel 🎶",
        "Ya es de madrugada 🎶",
        "Te sigo esperando otra vez 🎶",
        "Porque te extraño desde aquel noviembre 🎶",
        "Cuando soñamos juntos a querernos siempre 🎶",
        "Me duele, este frío noviembre 🎶",
        "Cuando las hojas caen a morir por siempre 🎶",
        "Noviembre sin ti es sentir que la lluvia 🎶",
        "Me dice llorando que todo acabó 🎶",
        "Noviembre sin ti es pedirle a la luna 🎶",
        "Que brille en la noche de mi corazón, otra vez 🎶",
        "Otra vez(otra vez) 🎶",
        "Noviembre sin ti es sentir que la lluvia 🎶",
        "Me dice llorando que todo acabó 🎶",
        "Noviembre sin ti es pedirle a la luna 🎶",
        "Que brille en la noche de mi corazón, otra vez 🎶",
    ],
    VicenteFernandes = [
        "Millon de primaveras (Vicente Fernades)",
        "Te molesta si te hablo de mi amor",
        "Y me pides \"por favor, olvida el tema\"",
        "Y que cambie la letra de mis canciones",
        "Y tu nombre quite ya de aquel poema",
        "Te molesta, aguanta, por favor",
        "Te lo juro, estoy a punto de olvidarte",
        "Solo falta un millón de primaveras",
        "Unos cuantos siglos solo he de adorarte",
        "Solo falta un millón de primaveras",
        "Después de eso, ya no vuelvo a molestarte",
        "Oh, no",
        "No volveré a cantarte",
        "Si te molesta",
        "Si te molesta",
        "Te molesta el perro que ladró",
        "De alegría, anunciando tu llegada",
        "Y me dices que ese perro está loco",
        "Que le ladra a la persona equivocada",
        "Yo te digo, por favor, aguanta un poco",
        "Ten paciencia, no le des otra pedrada",
        "Oh, no",
        "No volverá a ladrarte",
        "Si te molesta",
        "Si te molesta",
        "Solo falta un millón de primaveras",
        "Unos cuantos siglos solo he de adorarte",
        "Solo falta un millón de primaveras",
        "Después de eso, ya no vuelvo a molestarte",
        "Oh, no",
        "No volveré a cantarte",
        "Si te molesta",
        "Si te molesta",
        "Si te molesta",
        "Si te molesta"
    ]
]
let musicactual = []
let arreglo = 0
boton1.addEventListener('click', () => {
    contenedor.style = 'background-color:cyan; color:black; height:200px; border-radius:9px;'
    if (musicactual[contador] == undefined) {
        contenedor.style = 'background-color:green; color:white; height:200px; border-radius:9px;'
        contenedor.innerHTML = "🎉 Felicidades eres todo un artista 🎉"
    }
    else {
        contenedor.innerHTML = musicactual[contador]
        contador += 1
    }

})

boton2.addEventListener('click', () => {
    contador = 0
    contenedor.innerHTML = ''
    contenedor.style = 'background-color:cyan; color:black; height:200px; border-radius:9px;'
    contenedor.textContent = "Reinicio Completo"
})


musica.addEventListener('change', () => {
    contenedor.textContent = "Musica nueva"
    if (musica.value == "Talvez") {
        arreglo = 0
        musicactual = musicalocal[arreglo]
        contador = 0
    }
    else if (musica.value == "Reik") {
        arreglo = 1
        musicactual = musicalocal[arreglo]
        contador = 0
    }
    else if (musica.value == "Vicente") {
        arreglo = 2
        musicactual = musicalocal[arreglo]
        contador = 0
    }

})