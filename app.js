const txtAnim = document.querySelector("h1");

new Typewriter(txtAnim, {
    loop : true,
    deleteSpeed: 20
})
.typeString("Enchanté Lecompte Quentin, ")
.pauseFor(500)
.typeString("<br><strong>Développeur Web et Web mobile</strong> !")
.pauseFor(1000)
.deleteAll()
.typeString('<strong>Mes langages sont <em style="color: red">HTML</em> !')
.pauseFor(500)
.deleteChars(6)
.typeString('<em style="color: green">CSS</em> !')
.pauseFor(800)
.deleteChars(5)
.typeString('<em style="color: yellow">JS</em> !')
.pauseFor(500)
.deleteChars(4)
.typeString('<em style="color: #9C1EE8">PHP</em> !')
.pauseFor(500)
.deleteAll()
.start()
