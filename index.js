var oyunEkrani = document.getElementById('oyunEkrani')
var engeller = []
var engeller1 = []
var engeller2 = []
var c1 = document.getElementById('c1')
var c2 = document.getElementById('c2')
var c3 = document.getElementById('c3')
var c4 = document.getElementById('c4')
var c5 = document.getElementById('c5')
var c6 = document.getElementById('c6')
var c7 = document.getElementById('c7')
var c8 = document.getElementById('c8')
var c9 = document.getElementById('c9')
var c10 = document.getElementById('c10')
var c11 = document.getElementById('c11')
var c12 = document.getElementById('c12')
var c13 = document.getElementById('c13')
var c14 = document.getElementById('c14')
var c15 = document.getElementById('c15')
var c16 = document.getElementById('c16')
var c17 = document.getElementById('c17')
var c18 = document.getElementById('c18')
var c1top = parseInt(window.getComputedStyle(c1).top)
var c2left = parseInt(window.getComputedStyle(c2).left)
var c4left = parseInt(window.getComputedStyle(c4).left)
var c3top = parseInt(window.getComputedStyle(c3).top)
var c5top = parseInt(window.getComputedStyle(c5).top)
var c6top = parseInt(window.getComputedStyle(c6).top)
var c7left = parseInt(window.getComputedStyle(c7).left)
var c8top = parseInt(window.getComputedStyle(c8).top)
var c9left = parseInt(window.getComputedStyle(c9).left)
var c10top = parseInt(window.getComputedStyle(c10).top)
var c11left = parseInt(window.getComputedStyle(c11).left)
var c12top = parseInt(window.getComputedStyle(c12).top)
var c13left = parseInt(window.getComputedStyle(c13).left)
var c14top = parseInt(window.getComputedStyle(c14).top)
var c15top = parseInt(window.getComputedStyle(c15).top)
var c16left = parseInt(window.getComputedStyle(c16).left)
var c17top = parseInt(window.getComputedStyle(c17).top)
var c18left = parseInt(window.getComputedStyle(c18).left)

var e1 = document.getElementById('e1')
var e2 = document.getElementById('e2')
var e3 = document.getElementById('e3')
var e4 = document.getElementById('e4')
var e5 = document.getElementById('e5')
var e9 = document.getElementById('e9')
var e10 = document.getElementById('e10')
var e11 = document.getElementById('e11')
var e14 = document.getElementById('e14')
var e15 = document.getElementById('e15')

var e61 = document.getElementById('e61')
var e62 = document.getElementById('e62')
var e71 = document.getElementById('e71')
var e72 = document.getElementById('e72')
var e81 = document.getElementById('e81')
var e82 = document.getElementById('e82')

var e121 = document.getElementById('e121')
var e122 = document.getElementById('e122')
var e131 = document.getElementById('e131')
var e132 = document.getElementById('e132')
var e161 = document.getElementById('e161')
var e162 = document.getElementById('e162')
var e171 = document.getElementById('e171')
var e172 = document.getElementById('e172')
var e181 = document.getElementById('e181')
var e182 = document.getElementById('e182')
var e191 = document.getElementById('e191')
var e192 = document.getElementById('e192')

var kust = document.getElementById('kust')
var ksol = document.getElementById('ksol')
var ksag = document.getElementById('ksag')

var m1 = document.getElementById('m1')
var m2 = document.getElementById('m2')
var m3 = document.getElementById('m3')
var m4 = document.getElementById('m4')
var m5 = document.getElementById('m5')

var kapi = document.getElementById('kapi')

engeller.push(  e1, e2, e3, e4, e5, e9, e10, e11, e14,e15,
                e61,e62,e71,e72,e81,e82,
                e121,e122,e131,e132,e161,e162,e171,e172,e181,e182,e191,e192,
                kust,ksol,ksag, 
                m1, m2, m3, m4, m5, 
                c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18
            )
engeller1.push(  e1, e2, e3, e4, e5, e9, e10, e11, e14,e15,
                e61,e62,e71,e72,e81,e82,
                e121,e122,e131,e132,e161,e162,e171,e172,e181,e182,e191,e192,
                kust,ksol,ksag, 
                m1, m2, m3, m4, m5, 
                c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18
            )
engeller2.push(  e1, e2, e3, e4, e5, e9, e10, e11, e14,e15,
                e61,e62,e71,e72,e81,e82,
                e121,e122,e131,e132,e161,e162,e171,e172,e181,e182,e191,e192,
                kust,ksol,ksag, 
                m1, m2, m3, m4, m5, 
                c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18
            )

var kustleft = parseInt(window.getComputedStyle(kust).left)
var ksoltop = parseInt(window.getComputedStyle(ksol).top)

// _________________________________________________
var ghost_red = document.getElementById('ghost_red')
var rghostleft = parseInt(window.getComputedStyle(ghost_red).left)
var rghostop = parseInt(window.getComputedStyle(ghost_red).top)
var rgLeftEye = ghost_red.childNodes[1].childNodes[1]
var rgRightEye = ghost_red.childNodes[1].childNodes[3]
var rgLeftFoot = ghost_red.childNodes[3].childNodes[1]
var rgRightFoot = ghost_red.childNodes[3].childNodes[3]
rgLeftEye.classList.add('eye_to_up')
rgRightEye.classList.add('eye_to_up')

var rgleftFlag2 = true
var rgrightFlag2 = true
var rgupFlag2 = true
var rgdownFlag2 = true
var rdenemeEngelUst = null
var rdenemeEngelAlt = null
var rleftlerEsit = false
var rtoplarEsit = false

var rcopyArray = []
var rcopyFlag = false
var rcopy = ''
var rgrightFlag = false
var rgupFlag = false
var rgdownFlag = false
var rgleftFlag = false
var yon = ''
var redKafeste = true
var ghostCanGo = checkEngelForGhost('red')
// _________________________________________________
var ghost_blue = document.getElementById('ghost_blue')
var bghostleft = parseInt(window.getComputedStyle(ghost_blue).left)
var bghostop = parseInt(window.getComputedStyle(ghost_blue).top)
var bgLeftEye = ghost_blue.childNodes[1].childNodes[1]
var bgRightEye = ghost_blue.childNodes[1].childNodes[3]
var bgLeftFoot = ghost_blue.childNodes[3].childNodes[1]
var bgRightFoot = ghost_blue.childNodes[3].childNodes[3]
bgLeftEye.classList.add('eye_to_up')
bgRightEye.classList.add('eye_to_up')

var bgleftFlag2 = true
var bgrightFlag2 = true
var bgupFlag2 = true
var bgdownFlag2 = true
var bdenemeEngelUst = null
var bdenemeEngelAlt = null
var bleftlerEsit = false
var btoplarEsit = false

var bcopyArray = []
var bcopyFlag = false
var bcopy = ''
var bgrightFlag = false
var bgupFlag = false
var bgdownFlag = false
var bgleftFlag = false
var byon = ''

var blueKafeste = true

var bghostCanGo = checkEngelForGhost('blue')
// _________________________________________________
var ghost_pink = document.getElementById('ghost_pink')
var pghostleft = parseInt(window.getComputedStyle(ghost_pink).left)
var pghostop = parseInt(window.getComputedStyle(ghost_pink).top)
var pgLeftEye = ghost_pink.childNodes[1].childNodes[1]
var pgRightEye = ghost_pink.childNodes[1].childNodes[3]
var pgLeftFoot = ghost_pink.childNodes[3].childNodes[1]
var pgRightFoot = ghost_pink.childNodes[3].childNodes[3]
pgLeftEye.classList.add('eye_to_up')
pgRightEye.classList.add('eye_to_up')

var pgleftFlag2 = true
var pgrightFlag2 = true
var pgupFlag2 = true
var pgdownFlag2 = true
var pdenemeEngelUst = null
var pdenemeEngelAlt = null
var pleftlerEsit = false
var ptoplarEsit = false

var pcopyArray = []
var pcopyFlag = false
var pcopy = ''
var pgrightFlag = false
var pgupFlag = false
var pgdownFlag = false
var pgleftFlag = false
var pyon = ''

var pinkKafeste = true

var pghostCanGo = checkEngelForGhost('pink')

// _________________________________________________

var pacman = document.getElementById('pacman')
pacman.classList.add('asagiGidiyor')
var pacmantop = parseInt(window.getComputedStyle(pacman).top)
var pacmanleft = parseInt(window.getComputedStyle(pacman).left)
var downFlag = false
var upFlag = false
var rightFlag = false
var leftFlag = false
var notMoving = false
var speed = 100
var lastMove = 'asagiGidiyor'
var gameMode = 'chill'

var presS = false
var presW = false
var presD = false
var presA = false
// ------------------------------------------

var beforeLeft = 0
var beforeTop = 0
var afterLeft = 0
var afterTop = 0

var gameCounter = 0
var gameFlag = false
var scatterMode = false
var scattermodeCounter = 0
var endGame = false

var ghostlar = []
ghostlar.push(ghost_red)
ghostlar.push(ghost_pink)
ghostlar.push(ghost_blue)

function leftdonusturucu(param){
    return parseInt(window.getComputedStyle(param).left)
}
function topdonusturucu(param){
    return parseInt(window.getComputedStyle(param).top)
}
function heightdonusturucu(param){
    return parseInt(window.getComputedStyle(param).height)
}
function widthdonusturucu(param){
    return parseInt(window.getComputedStyle(param).width)
}

function checkEngel(){
    var engelGhostCanGo = ['sol','sag','ust','alt']

    engeller.forEach((engel)=>{
        var sagimDolu = ( leftdonusturucu(engel) - (pacmanleft+35) < 15 &&
                        (pacmantop+35)-topdonusturucu(engel)>0 &&
                        (pacmantop+35) - (topdonusturucu(engel)+heightdonusturucu(engel)) < 30 &&
                        (pacmanleft+35)<leftdonusturucu(engel) )
        
        var solumDolu = ( pacmanleft - (leftdonusturucu(engel)+widthdonusturucu(engel)) < 15 &&
                        (pacmantop+35)-topdonusturucu(engel) > 0 &&
                        (pacmantop+35)-(topdonusturucu(engel)+heightdonusturucu(engel))<30 &&
                        (pacmanleft)>(leftdonusturucu(engel)+widthdonusturucu(engel)) )
                        
        var ustumdolu = ( leftdonusturucu(engel)-(pacmanleft+35)<0 &&
                        (pacmantop+35) > (topdonusturucu(engel)+heightdonusturucu(engel)) &&
                        pacmanleft - (leftdonusturucu(engel)+widthdonusturucu(engel)) < 5 &&
                        pacmantop-(topdonusturucu(engel)+heightdonusturucu(engel)) < 10 )

        var altimDolu = ( leftdonusturucu(engel)-(pacmanleft+35)<0 &&
                        pacmanleft-(leftdonusturucu(engel)+widthdonusturucu(engel)) < 5 &&
                        topdonusturucu(engel) - (pacmantop+35) < 10 &&
                        pacmantop < topdonusturucu(engel) )
        
        if(solumDolu){
            leftFlag = false
            var index = engelGhostCanGo.indexOf('sol')
            engelGhostCanGo.splice(index,1)
        }
        if(sagimDolu){
            rightFlag = false
            var index = engelGhostCanGo.indexOf('sag')
            engelGhostCanGo.splice(index,1)
        }
        if(ustumdolu){
            upFlag = false
            var index = engelGhostCanGo.indexOf('ust')
            engelGhostCanGo.splice(index,1)
        }
        if(altimDolu){
            downFlag = false
            var index = engelGhostCanGo.indexOf('alt')
            engelGhostCanGo.splice(index,1)
        }
    })
}

window.addEventListener('keydown',(e)=>{
    if(e.key == 's' && !e.repeat){
        downFlag = true
        presS = false
        notMoving = false
    }
    if(e.key == 'w' && !e.repeat){
        upFlag = true
        presW = false
        notMoving = false
    }
    if(e.key == 'd' && !e.repeat){
        rightFlag = true
        presD = false
        notMoving = false
    }
    if(e.key == 'a' && !e.repeat){
        leftFlag = true
        presA = false
        notMoving = false
    }
})
window.addEventListener('keyup',(e)=>{
    if(e.key == 's'){
        downFlag = false
        notMoving = true
        presS = true
    }
    if(e.key == 'w'){
        upFlag = false
        notMoving = true
        presW = true
    }
    if(e.key == 'd'){
        rightFlag = false
        notMoving = true
        presD = true
    }
    if(e.key == 'a'){
        leftFlag = false
        notMoving = true
        presA = true
    }
})
var myInterval = setInterval(() => {
    if(scatterMode){
        gameCounter = 0
        scattermodeCounter++
        checkEngel()
        pacmanMoves()
        if(scattermodeCounter%3==0){
            gameMode='scatter'
            beforeScatterModeFalse()
            
            redGhostGo(gameMode)
            pinkGhostGo(gameMode)
            blueGhostGo(gameMode)

            if(pacmanleft == rghostleft && pacmantop == rghostop){
                redKafeste = true
                ghost_red.style.left = 495+'px'
                ghost_red.style.top = 300+'px'
            }
            if (pacmanleft == pghostleft && pacmantop == pghostop) {
                pinkKafeste = true
                ghost_pink.style.left = 555 + 'px'
                ghost_pink.style.top = 300 + 'px'
            }
            if (pacmanleft == bghostleft && pacmantop == bghostop) {
                blueKafeste = true
                ghost_blue.style.left = 435 + 'px'
                ghost_blue.style.top = 300 + 'px'
            }

            if(scattermodeCounter==30){
                scattermodeCounter = 0
                scatterMode = false
                resetle()
                afterScatterModeFalse()
                
            }
        }
    }else{
        if(yemler.length > 40){
            gameCounter++
            if(gameCounter%40==0){
                gameFlag = !gameFlag
                resetle()
            }
        }else{
            gameFlag = true
        }
        
        if(gameFlag){
            gameMode = 'attack'
        }else{
            gameMode = 'chill'
        }
        if(!endGame){
            redGhostGo(gameMode)
            pinkGhostGo(gameMode)
            blueGhostGo(gameMode)
        }
        ghostlar.forEach((ghost) => {
            if ((parseInt(window.getComputedStyle(ghost).left) == pacmanleft) && (parseInt(window.getComputedStyle(ghost).top) == pacmantop) && !scatterMode) {
                clearInterval(myInterval)
                endGame = true
            }
        })
        
    }

    if(!scatterMode){
        checkEngel()
    }

    beforeLeft = pacmanleft
    beforeTop = pacmantop
    
    girCik()

    if(!endGame && !scatterMode){
        // if (downFlag) {
        //     yemYeme('asagiGidiyor')
        //     pacmantop += 15
        //     pacman.style.top = pacmantop + 'px'
        //     lastMove = 'asagiGidiyor'
        //     agizEkle('asagiGidiyor')
        // } else if (upFlag) {
        //     yemYeme('yukariGidiyor')
        //     pacmantop -= 15
        //     pacman.style.top = pacmantop + 'px'
        //     lastMove = 'yukariGidiyor'
        //     agizEkle('yukariGidiyor')
        // } else if (rightFlag) {
        //     yemYeme('sagaGidiyor')
        //     pacmanleft += 15
        //     pacman.style.left = pacmanleft + 'px'
        //     lastMove = 'sagaGidiyor'
        //     agizEkle('sagaGidiyor')
        // } else if (leftFlag) {
        //     yemYeme('solaGidiyor')
        //     pacmanleft -= 15
        //     pacman.style.left = pacmanleft + 'px'
        //     lastMove = 'solaGidiyor'
        //     agizEkle('solaGidiyor')
        // }else if(notMoving){
        //     pacman.classList = ''
        //     pacman.classList.add(lastMove)
        // }
        pacmanMoves()
    }
    afterLeft = pacmanleft
    afterTop = pacmantop
    if(afterLeft == beforeLeft && afterTop == beforeTop){
        notMoving = true
    }

    if(!scatterMode){
        if((pacmanleft==rghostleft) && (pacmantop == rghostop) && !redKafeste){
            clearInterval(myInterval)
            endGame = true
        }
        if((pacmanleft == pghostleft)&&(pacmantop==pghostop && !pinkKafeste) ){
            clearInterval(myInterval)
            endGame = true
        }
        if((pacmanleft == bghostleft)&&(pacmantop==bghostop && !blueKafeste) ){
            clearInterval(myInterval)
            endGame = true
        }
    }

}, 100);

function agizEkle(agiz){
    pacman.classList = ''
    pacman.classList.add(`${agiz}`)
    setTimeout(() => {
        pacman.classList.remove(`${agiz}`)
    }, 50);
}

var yemler = []
yemYap()
function yemYap(){
    var yemTop = 45
    var yemLeft = 45
    var bitti = false
    var yenileft = 0
    var yenitop = 0

    while((!bitti)){
        // c1 altı, kust solu
        if(yemTop == 45){
            yenileft = 105
            for(let i=0; i<8; i++){
                var yem = document.createElement('div')
                yem.style.zIndex = '100'
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = yemTop+'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft = yenileft+45
            }
        }
        // c1 altı, kust sağı
        if(yemTop == 45){
            yenileft = kustleft+105
            for(let i=0; i<8; i++){
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = yemTop+'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft = yenileft+45
            }
        }
        // e1 altı, e5 üstü.
        if (yemTop == 135) {
            yenileft = 120
            for (let i = 0; i < 3; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = yemTop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft += 45
            }
        }
        // e2 altı, kust altı, e3 altı, e4 altı uzun kısım.
        if (yemTop == 135) {
            yenileft = 300
            for (let i = 0; i < 12; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = yemTop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft += 45
            }
        }
        // e4 altı, e9 üstü kısa yatay.
        if (yemTop == 135) {
            yenileft = 840
            for (let i = 0; i < 2; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = yemTop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft += 45
            }
        }
        // e5 altı, c3 üstü, e61 solu kısa yatay.
        if (yemTop == 195) {
            yenileft = 90
            for (let i = 0; i < 4; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = yemTop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft += 45
            }
        }
        // e9 altı, c17 üstü.
        if (yemTop == 195) {
            yenileft = 795
            for (let i = 0; i < 4; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = yemTop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft += 45
            }
        }
        if(yemTop==315){
            yenileft = 300
            for (let i = 0; i < 1; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = yemTop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft += 45
            }
            yenileft = 720
            for (let i = 0; i < 2; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = yemTop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft += 45
            }
        }
        if(yemTop==390){
            yenileft = 390
            for (let i = 0; i < 6; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = yemTop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft += 45
            }
        }
        if(yemLeft == 675){
            yenitop = 270
            for (let i = 0; i < 4; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yemLeft + 'px'
                yem.style.top = yenitop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenitop += 45
            }
        }
        // c8 altı, e131 üstü, e14 üstü.
        if (yemTop == 450) {
            yenileft = 120
            for (let i = 0; i < 3; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = yemTop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft += 45
            }
            yenileft += 45
            for (let i = 0; i < 4; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = yemTop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft += 45
            }
        }
        // e15 üstü, e161 üstü.
        if (yemTop == 450) {
            yenileft = 765
            for (let i = 0; i < 5; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = yemTop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft -= 45
            }
            yenileft = 810
            for (let i = 0; i < 4; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = yemTop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft += 45
            }
        }
        // e171 üstü, e14 altı, e181 üstü, e122 altı, e15 altı, yatay.
        if (yemTop == 510) {
            yenileft = 300
            for (let i = 0; i < 11; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = yemTop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft += 45
            }
        }
        // e131 altı, e132 solu, ksol sağı kısımlar tek parçada
        if (yemTop == 510) {
            yenileft = 120
            for(let i=0; i<1; i++){
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = yemTop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft += 45
            }
            yenitop = 540
            for(let i=0; i<1; i++){
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = 150 + 'px'
                yem.style.top = yenitop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenitop += 45
            }
        }
        // e192 üstü, ksag altı yatay kısa. Ve onun altındaki kısa dikey
        if (yemTop == 585) {
            yenileft = 795
            for(let i=0; i<4; i++){
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = yemTop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft += 45
            }
        }
        // e172 sola doğru üstü. 
        if (yemTop == 585) {
            yenileft = 240
            for (let i = 0; i < 4; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = yemTop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft -= 45
            }
        }
        // en alt satır, c10 üstü.
        if (yemTop == 645) {
            yenileft = 120
            for (let i = 0; i < 19; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = yemTop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft += 45
            }
        }
        // c2 sağı, e1 solu, e5 solu.
        if(yemLeft == 75){
            var yem = document.createElement('div')
            yem.id = 'yem'
            yem.style.left = yemLeft + 'px'
            yem.style.top = 75 + 'px'
            yemler.push(yem)
            oyunEkrani.appendChild(yem)
            var yem = document.createElement('div')
            yem.id = 'yem'
            yem.style.left = yemLeft + 'px'
            yem.style.top = 165 + 'px'
            yemler.push(yem)
            oyunEkrani.appendChild(yem)
        }
        // c8 altı, c9 sağı, ksol üstü
        if(yemLeft == 75){
            yenitop = c8top+35
            for(let i=0; i<3; i++){
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yemLeft + 'px'
                yem.style.top = yenitop+'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenitop+=30
            }
        }
        // e1 sağı, e2 solu, uzun dikey.
        if(yemLeft == 255){
            yenitop = 75
            for(let i=0; i<12; i++){
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yemLeft + 'px'
                yem.style.top = yenitop+'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenitop+=45
            }
        }
        // e171 sağı, e181 altı, e182 solu o kısımlar tek parçada
        if (yemLeft == 345) {
            yenitop = 540
            for (let i = 0; i < 2; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = 345 + 'px'
                yem.style.top = yenitop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenitop += 30
            }
            yenileft = 375
            for (let i = 0; i < 2; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = 585 + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft += 45
            }
            yenitop = 585
            for(let i=0; i<2; i++){
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = 450 + 'px'
                yem.style.top = yenitop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenitop+=30
            }

        }
        // e61 sağı, e71 solu, e62 üstünden başlıyor e14 üstüne kadar tek parçada.
        if(yemLeft==345){
            yenitop = 180
            for (let i = 0; i < 1; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = 345 + 'px'
                yem.style.top = yenitop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenitop += 45
            }
            yenileft = 375
            for (let i = 0; i < 3; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = 195 + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft += 45
            }
            var yem = document.createElement('div')
            yem.id = 'yem'
            yem.style.left = 465 + 'px'
            yem.style.top = 240 + 'px'
            yemler.push(yem)
            oyunEkrani.appendChild(yem)

            yenileft = 420
            for (let i = 0; i < 2; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = 255 + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft -= 45
            }
            yenitop = 270
            for (let i = 0; i < 4; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = 345 + 'px'
                yem.style.top = yenitop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenitop += 45
            }
            yenileft = 510
            for (let i = 0; i < 4; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = 255 + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft += 45
            }
        }
        // e71 sağı, e81 solu, e82 üstünden başlıyor e15 üstüne kadar tek parçada.
        if(yemLeft==345){
            yenitop = 165
            for (let i = 0; i < 1; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = 675 + 'px'
                yem.style.top = yenitop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenitop += 45
            }
            yenileft = 660
            for (let i = 0; i < 3; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = 195 + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft -= 45
            }
            var yem = document.createElement('div')
            yem.id = 'yem'
            yem.style.left = 570 + 'px'
            yem.style.top = 225 + 'px'
            yemler.push(yem)
            oyunEkrani.appendChild(yem)
        }
        // e122 solu ve sağı kısa kısımlar.
        if (yemLeft == 450) {
            var yem = document.createElement('div')
            yem.id = 'yem'
            yem.style.left = 450 + 'px'
            yem.style.top = 480 + 'px'
            yemler.push(yem)
            oyunEkrani.appendChild(yem)

            var yem = document.createElement('div')
            yem.id = 'yem'
            yem.style.left = 570 + 'px'
            yem.style.top = 480 + 'px'
            yemler.push(yem)
            oyunEkrani.appendChild(yem)
        }
        // e2 sağı, kust solu kısa dikey.
        if(yemLeft == 465){
            yenitop = 60
            for(let i=0; i<2; i++){
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yemLeft + 'px'
                yem.style.top = yenitop+'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenitop+=45
            }
        }
        // kust sağı, e3 solu, kısa dikey.
        if(yemLeft == 570){
            yenitop = 60
            for(let i=0; i<2; i++){
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yemLeft + 'px'
                yem.style.top = yenitop+'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenitop+=45
            }
        }
        // e182 sağı, e181 sağ altı, e192 sol üstü, e191 solu tek parçada
        if (yemLeft == 675) {
            yenitop = 540
            for (let i = 0; i < 2; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = 675 + 'px'
                yem.style.top = yenitop + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenitop += 30
            }
            yenileft = 645
            for (let i = 0; i < 2; i++) {
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yenileft + 'px'
                yem.style.top = 585 + 'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenileft -= 45
            }      

            var yem = document.createElement('div')
            yem.id = 'yem'
            yem.style.left = 570 + 'px'
            yem.style.top = 615 + 'px'
            yemler.push(yem)
            oyunEkrani.appendChild(yem)

            var yem = document.createElement('div')
            yem.id = 'yem'
            yem.style.left = 570 + 'px'
            yem.style.top = 585 + 'px'
            yemler.push(yem)
            oyunEkrani.appendChild(yem)
        }
        // 1. satır,  e3 sağı, e4 solu, uzun yer dikey.
        if(yemLeft == 780){
            yenitop = 90
            for(let i=0; i<1; i++){
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yemLeft + 'px'
                yem.style.top = yenitop+'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenitop+=30
            }
            var yem = document.createElement('div')
            yem.id = 'yem'
            yem.style.left = yemLeft + 'px'
            yem.style.top = 165 + 'px'
            yemler.push(yem)
            oyunEkrani.appendChild(yem)

            yenitop = 225
            for(let i=0; i<2; i++){
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yemLeft + 'px'
                yem.style.top = yenitop+'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenitop+=45
            }
            yenitop+=45
            for(let i=0; i<2; i++){
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yemLeft + 'px'
                yem.style.top = yenitop+'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenitop+=45
            }
            yenitop+=45
            for(let i=0; i<2; i++){
                var yem = document.createElement('div')
                yem.id = 'yem'
                yem.style.left = yemLeft + 'px'
                yem.style.top = yenitop+'px'
                yemler.push(yem)
                oyunEkrani.appendChild(yem)
                yenitop+=45
            }

        }
        // 1. satır en sağ.
        if(yemLeft == 945){
            var yem = document.createElement('div')
            yem.id = 'yem'
            yem.style.left = yemLeft + 'px'
            yem.style.top = 75+'px'
            yemler.push(yem)
            oyunEkrani.appendChild(yem)

            var yem = document.createElement('div')
            yem.id = 'yem'
            yem.style.left = yemLeft + 'px'
            yem.style.top = 165+'px'
            yemler.push(yem)
            oyunEkrani.appendChild(yem)


        }
        // e161 sağı, ksag üstü, e162 sağı.
        if (yemLeft == 945) {
            var yem = document.createElement('div')
            yem.id = 'yem'
            yem.style.left = yemLeft + 'px'
            yem.style.top = 495 + 'px'
            yemler.push(yem)
            oyunEkrani.appendChild(yem)

            var yem = document.createElement('div')
            yem.id = 'yem'
            yem.style.left = yemLeft-45 + 'px'
            yem.style.top = 510 + 'px'
            yemler.push(yem)
            oyunEkrani.appendChild(yem)

            var yem = document.createElement('div')
            yem.id = 'yem'
            yem.style.left = yemLeft-60 + 'px'
            yem.style.top = 540 + 'px'
            yemler.push(yem)
            oyunEkrani.appendChild(yem)
        }

        if(yemTop < 660){
            yemTop+=15
        }
        if(yemLeft<960){
            yemLeft+=15
            if(yemLeft==960){
                bitti = true
            }
        }
    }
    var ozelYem1 = document.createElement('div')
    ozelYem1.id = 'ozelYem'
    oyunEkrani.appendChild(ozelYem1)
    ozelYem1.style.left = 60+'px'
    ozelYem1.style.top = 105+'px'
    yemler.push(ozelYem1)

    var ozelYem2 = document.createElement('div')
    ozelYem2.id = 'ozelYem'
    oyunEkrani.appendChild(ozelYem2)
    ozelYem2.style.left = 930+'px'
    ozelYem2.style.top = 105+'px'
    yemler.push(ozelYem2)

    var ozelYem3 = document.createElement('div')
    ozelYem3.id = 'ozelYem'
    oyunEkrani.appendChild(ozelYem3)
    ozelYem3.style.left = 60+'px'
    ozelYem3.style.top = 615+'px'
    yemler.push(ozelYem3)

    var ozelYem4 = document.createElement('div')
    ozelYem4.id = 'ozelYem'
    oyunEkrani.appendChild(ozelYem4)
    ozelYem4.style.left = 930+'px'
    ozelYem4.style.top = 615+'px'
    yemler.push(ozelYem4)

}

function yemYeme(yon) {
    for(let i=0; i<yemler.length; i++){
        if(yon == 'asagiGidiyor'){
            if( (pacmanleft+15) == parseInt(yemler[i].style.left) && (pacmantop+30)==parseInt(yemler[i].style.top) ){
                yemler[i].remove()
                yemler.splice(i,1)
            } else if (yemler[i].id == 'ozelYem'){
                if (parseInt(yemler[i].style.left) == pacmanleft && parseInt(yemler[i].style.top) == (pacmantop + 30)) {
                    scatterMode = true
                    yemler[i].remove()
                    yemler.splice(i, 1)
                }
            }
        }else if(yon=='sagaGidiyor'){
            if( (pacmanleft+30) == parseInt(yemler[i].style.left) && (pacmantop+15)==parseInt(yemler[i].style.top) ){
                yemler[i].remove()
                yemler.splice(i,1)
            }
        }else if(yon == 'yukariGidiyor'){
            if( (pacmanleft+15) == parseInt(yemler[i].style.left) && (pacmantop)==parseInt(yemler[i].style.top) ){
                yemler[i].remove()
                yemler.splice(i,1)
            }else if(yemler[i].id === 'ozelYem'){
                if (parseInt(yemler[i].style.left) == pacmanleft && parseInt(yemler[i].style.top) == (pacmantop - 15)) {
                    scatterMode = true
                    yemler[i].remove()
                    yemler.splice(i, 1)
                }
            }
        }else if(yon == 'solaGidiyor'){
            if( (pacmanleft) == parseInt(yemler[i].style.left) && (pacmantop+15)==parseInt(yemler[i].style.top) ){
                yemler[i].remove()
                yemler.splice(i,1)
            }
        }
        
    }

}

function checkEngelForGhost(hangiGhost) {
    var yonler = ['sol', 'sag', 'ust', 'alt']
    var ghostleft = null
    var ghostop = null

    if(hangiGhost == 'red'){
        ghostleft = parseInt(window.getComputedStyle(ghost_red).left)
        ghostop = parseInt(window.getComputedStyle(ghost_red).top)
        engeller.forEach((engel) => {
            var sagimDolu = (leftdonusturucu(engel) - (ghostleft + 40) < 10 &&
                (ghostop + 40) - topdonusturucu(engel) > 10 &&
                (ghostop + 40) - (topdonusturucu(engel) + heightdonusturucu(engel)) <= 30 &&
                (ghostleft + 40) < leftdonusturucu(engel) + 5)

            var solumDolu = (ghostleft - (leftdonusturucu(engel) + widthdonusturucu(engel)) < 15 &&
                (ghostop + 40) - (topdonusturucu(engel)) > 10 &&
                (ghostop + 40) - (topdonusturucu(engel) + heightdonusturucu(engel)) < 35 &&
                (ghostleft) > (leftdonusturucu(engel) + widthdonusturucu(engel)))

            var ustumdolu = (leftdonusturucu(engel) - (ghostleft + 40) < 0 &&
                (ghostop + 40) > (topdonusturucu(engel) + heightdonusturucu(engel)) &&
                ghostleft - (leftdonusturucu(engel) + widthdonusturucu(engel)) < 5 &&
                ghostop - (topdonusturucu(engel) + heightdonusturucu(engel)) < 10)

            var altimDolu = (leftdonusturucu(engel) - (ghostleft + 40) < 0 &&
                ghostleft - (leftdonusturucu(engel) + widthdonusturucu(engel)) < 5 &&
                topdonusturucu(engel) - (ghostop + 40) < 10 &&
                ghostop < topdonusturucu(engel))

            if (solumDolu) {
                var index = yonler.indexOf('sol')
                yonler.splice(index, 1)
            }
            if (sagimDolu) {
                var index = yonler.indexOf('sag')
                yonler.splice(index, 1)
            }
            if (ustumdolu) {
                var index = yonler.indexOf('ust')
                yonler.splice(index, 1)
                if (hangiGhost == 'red') {
                    rdenemeEngelUst = engel
                }
            }
            if (altimDolu) {
                var index = yonler.indexOf('alt')
                yonler.splice(index, 1)
                if (hangiGhost == 'red') {
                    rdenemeEngelAlt = engel
                }
            }
        })
        return yonler
    }else if(hangiGhost == 'pink'){
        ghostleft = parseInt(window.getComputedStyle(ghost_pink).left)
        ghostop = parseInt(window.getComputedStyle(ghost_pink).top)
        engeller1.forEach((engel) => {
            var sagimDolu = (leftdonusturucu(engel) - (ghostleft + 40) < 10 &&
                (ghostop + 40) - topdonusturucu(engel) > 10 &&
                (ghostop + 40) - (topdonusturucu(engel) + heightdonusturucu(engel)) <= 30 &&
                (ghostleft + 40) < leftdonusturucu(engel) + 5)

            var solumDolu = (ghostleft - (leftdonusturucu(engel) + widthdonusturucu(engel)) < 15 &&
                (ghostop + 40) - (topdonusturucu(engel)) > 10 &&
                (ghostop + 40) - (topdonusturucu(engel) + heightdonusturucu(engel)) < 35 &&
                (ghostleft) > (leftdonusturucu(engel) + widthdonusturucu(engel)))

            var ustumdolu = (leftdonusturucu(engel) - (ghostleft + 40) < 0 &&
                (ghostop + 40) > (topdonusturucu(engel) + heightdonusturucu(engel)) &&
                ghostleft - (leftdonusturucu(engel) + widthdonusturucu(engel)) < 5 &&
                ghostop - (topdonusturucu(engel) + heightdonusturucu(engel)) < 10)

            var altimDolu = (leftdonusturucu(engel) - (ghostleft + 40) < 0 &&
                ghostleft - (leftdonusturucu(engel) + widthdonusturucu(engel)) < 5 &&
                topdonusturucu(engel) - (ghostop + 40) < 10 &&
                ghostop < topdonusturucu(engel))

            if (solumDolu) {
                // gleftFlag = false
                var index = yonler.indexOf('sol')
                yonler.splice(index, 1)
            }
            if (sagimDolu) {
                // grightFlag = false
                var index = yonler.indexOf('sag')
                yonler.splice(index, 1)
            }
            if (ustumdolu) {
                // gupFlag = false
                var index = yonler.indexOf('ust')
                yonler.splice(index, 1)
                if (hangiGhost == 'pink') {
                    pdenemeEngelUst = engel
                }
            }
            if (altimDolu) {
                // gdownFlag = false
                var index = yonler.indexOf('alt')
                yonler.splice(index, 1)
                if (hangiGhost == 'pink') {
                    pdenemeEngelAlt = engel
                }
            }
        })
        return yonler
    }else if(hangiGhost == 'blue'){
        ghostleft = parseInt(window.getComputedStyle(ghost_blue).left)
        ghostop = parseInt(window.getComputedStyle(ghost_blue).top)
        engeller2.forEach((engel) => {
            var sagimDolu = (leftdonusturucu(engel) - (ghostleft + 40) < 10 &&
                (ghostop + 40) - topdonusturucu(engel) > 10 &&
                (ghostop + 40) - (topdonusturucu(engel) + heightdonusturucu(engel)) <= 30 &&
                (ghostleft + 40) < leftdonusturucu(engel) + 5)

            var solumDolu = (ghostleft - (leftdonusturucu(engel) + widthdonusturucu(engel)) < 15 &&
                (ghostop + 40) - (topdonusturucu(engel)) > 10 &&
                (ghostop + 40) - (topdonusturucu(engel) + heightdonusturucu(engel)) < 35 &&
                (ghostleft) > (leftdonusturucu(engel) + widthdonusturucu(engel)))

            var ustumdolu = (leftdonusturucu(engel) - (ghostleft + 40) < 0 &&
                (ghostop + 40) > (topdonusturucu(engel) + heightdonusturucu(engel)) &&
                ghostleft - (leftdonusturucu(engel) + widthdonusturucu(engel)) < 5 &&
                ghostop - (topdonusturucu(engel) + heightdonusturucu(engel)) < 10)

            var altimDolu = (leftdonusturucu(engel) - (ghostleft + 40) < 0 &&
                ghostleft - (leftdonusturucu(engel) + widthdonusturucu(engel)) < 5 &&
                topdonusturucu(engel) - (ghostop + 40) < 10 &&
                ghostop < topdonusturucu(engel))

            if (solumDolu) {
                // gleftFlag = false
                var index = yonler.indexOf('sol')
                yonler.splice(index, 1)
            }
            if (sagimDolu) {
                // grightFlag = false
                var index = yonler.indexOf('sag')
                yonler.splice(index, 1)
            }
            if (ustumdolu) {
                // gupFlag = false
                var index = yonler.indexOf('ust')
                yonler.splice(index, 1)
                if (hangiGhost == 'blue') {
                    bdenemeEngelUst = engel
                }
            }
            if (altimDolu) {
                // gdownFlag = false
                var index = yonler.indexOf('alt')
                yonler.splice(index, 1)
                if (hangiGhost == 'blue') {
                    bdenemeEngelAlt = engel
                }
            }
        })
        return yonler
    }
}

function redGhostGo(mode) {

    if(redKafeste){
        if(rghostleft == 495 && rghostop == 300){
            hareketEt('red','ust')
        }else if(rghostleft == 495 && rghostop == 285){
            hareketEt('red','ust')
        }else if(rghostleft == 495 && rghostop == 270){
            hareketEt('red','ust')
            engeller.push(kapi)
        }else if(rghostleft == 495 && rghostop == 255){
            redKafeste = false
            hareketEt('red','ust')
        }
    }else{
        if(pacmanleft == rghostleft){
            rleftlerEsit = true
        }
        if(pacmantop == rghostop){
            rtoplarEsit = true
        }
        if(mode === 'attack'){
            // pacman sol alttaysa
            if (pacmantop > rghostop && pacmanleft < rghostleft && rleftlerEsit == false && rtoplarEsit == false) {
                if (ghostCanGo.includes('alt') && rgdownFlag2) {
                    hareketEt('red','alt')
                    rgleftFlag2 = true
                } else if (rgleftFlag2 && ghostCanGo.includes('sol')) {
                    hareketEt('red','sol')
                } else{
                    if(ghostCanGo.includes('sag')){
                        hareketEt('red','sag')
                        rgleftFlag2 = false
                    }
                }
            }
            // pacman sol üstteyse
            if (pacmantop < rghostop && pacmanleft < rghostleft && rleftlerEsit == false && rtoplarEsit == false) {
    
                if (ghostCanGo.includes('ust') && rgupFlag2) {
                    hareketEt('red', 'ust')
                    rgleftFlag2 = true
                } else if (rgleftFlag2 && ghostCanGo.includes('sol')) {
                    hareketEt('red', 'sol')
                } else {
                    if(ghostCanGo.includes('sag')){
                        rgleftFlag2 = false
                        hareketEt('red','sag')
                    }else if(ghostCanGo.includes('sol')){
                        rgleftFlag2 = true
                        hareketEt('red','sol')
                    }
                }
            }
            // pacman sağ üstteyse
            if(pacmantop < rghostop && pacmanleft > rghostleft && rleftlerEsit == false && rtoplarEsit == false){
    
                if (ghostCanGo.includes('ust') && rgupFlag2) {
                    hareketEt('red','ust')
                } else if (rgrightFlag2 && ghostCanGo.includes('sag')) {
                    hareketEt('red','sag')
                    rgupFlag2 = true
                } else {
                    if(ghostCanGo.includes('alt')){
                        rgupFlag2 = false
                        hareketEt('red','alt')
                    }else if(ghostCanGo.includes('ust')){
                        rgupFlag2 = true
                        hareketEt('red','ust')
                    }
                }
            }
            // pacman sağ alttaysa
            if(pacmantop > rghostop && pacmanleft > rghostleft && rleftlerEsit == false && rtoplarEsit == false){
    
                if (ghostCanGo.includes('alt') && rgdownFlag2) {
                    hareketEt('red','alt')
                } else if (rgrightFlag2 && ghostCanGo.includes('sag')) {
                    hareketEt('red','sag')
                    rgdownFlag2 = true
                } else {
                    if(ghostCanGo.includes('ust')){
                        hareketEt('red','ust')
                        rgdownFlag2 = false
                    }else if(ghostCanGo.includes('alt')){
                        rgdownFlag2 = true
                        hareketEt('red','alt')
                    }
                }
            }
            // yatayda eşitlendiyse
            if(rleftlerEsit){
                if(pacmantop > rghostop){
                    if (ghostCanGo.includes('alt')) {
                        hareketEt('red','alt')
                        rgrightFlag2 = true
                        rgleftFlag2 = true
                        if(pacmanleft != rghostleft){
                            rleftlerEsit = false
                        }
                    } else {
                        /* engelResult'dan, pacmanResult'u çıkarınca çıkan sonuç;
                        eğer ki engel width'inin yarısından büyükse engelin solunda demektir.
                        eğer ki engel width'inin yarısından küçükse engelin sağında demektir.
                        */
                        var engelLeft = leftdonusturucu(rdenemeEngelAlt)
                        var engelWidth = widthdonusturucu(rdenemeEngelAlt)
                        var engelResult = engelLeft + engelWidth
                        var ghostResult = (rghostleft + 40)
                        var result = engelResult - ghostResult
                            if (result < (engelWidth / 2)) {
                            // engelin sağında.
                                if (ghostCanGo.includes('sag') && rgrightFlag2) {
                                    hareketEt('red','sag')
                                    rgleftFlag2 = false
                                } else if (ghostCanGo.includes('sol') && rgleftFlag2) {
                                    rgrightFlag2 = false
                                    hareketEt('red','sol')
                                }
                            } else {
                                // engelin solunda.
                                if (ghostCanGo.includes('sol') && rgleftFlag2) {
                                    hareketEt('red','sol')
                                    rgrightFlag2 = false
                                } else if (ghostCanGo.includes('sag') && rgrightFlag2) {
                                    hareketEt('red','sag')
                                    rgleftFlag2 = false
                                }
                            }
                    }
                }else{

                    // leftler eşitlendiyse pacman üstteyse
                    if (ghostCanGo.includes('ust')) {
                        hareketEt('red', 'ust')
                        rgrightFlag2 = true
                        rgleftFlag2 = true
                        if (pacmanleft != rghostleft) {
                            rleftlerEsit = false
                        }
                    } else {
                        /* engelResult'dan, pacmanResult'u çıkarınca çıkan sonuç;
                        eğer ki engel width'inin yarısından büyükse engelin solunda demektir.
                        eğer ki engel width'inin yarısından küçükse engelin sağında demektir.
                        */
                        var engelLeft = leftdonusturucu(rdenemeEngelUst)
                        var engelWidth = widthdonusturucu(rdenemeEngelUst)
                        var engelResult = engelLeft + engelWidth
                        var ghostResult = (rghostleft + 40)
                        var result = engelResult - ghostResult
                        if (result < (engelWidth / 2)) {
                            // engelin sağında.
                            if (ghostCanGo.includes('sag') && rgrightFlag2) {
                                hareketEt('red', 'sag')
                            } else if (ghostCanGo.includes('sol') && rgleftFlag2) {
                                rgrightFlag2 = false
                                hareketEt('red', 'sol')
                            }
                        } else {
                            // engelin solunda.
                            if (ghostCanGo.includes('sol') && rgleftFlag2) {
                                hareketEt('red', 'sol')
                            } else if (ghostCanGo.includes('sag') && rgrightFlag2) {
                                hareketEt('red', 'sag')
                                rgleftFlag2 = false
                            }
                        }
                    }
                }
                
            }
            // dikeyde eşitlendiğinde
            if(rtoplarEsit){
                // console.log('toplar eşit')
                // pacman daha soldaysa
                if(pacmanleft < rghostleft){
                    if(ghostCanGo.includes('sol')){
                        hareketEt('red','sol')
                        rgdownFlag2 = true
                        if(pacmanleft != rghostleft){
                            rtoplarEsit = false
                        }
                    }else{
                        if(ghostCanGo.includes('alt') && rgdownFlag2){
                            hareketEt('red','alt')
                        }else if(ghostCanGo.includes('ust')){
                            hareketEt('red','ust')
                            rgdownFlag2 = false
                        }else{
                            rgdownFlag2 = true
                        }
                    }
                }else{
                // pacman daha sağdaysa 
                    if(ghostCanGo.includes('sag')){
                        rgupFlag2 = true
                        hareketEt('red', 'sag')
                        if(pacmantop != rghostop){
                            rtoplarEsit = false
                        }
                        
                    }else{
                        if(ghostCanGo.includes('ust') && rgupFlag2){
                            hareketEt('red','ust')
                        }else if(ghostCanGo.includes('alt')){
                            hareketEt('red','alt')
                            rgupFlag2 = false
                        }else if(ghostCanGo.includes('ust')){
                            rgupFlag2 = true
                        }
                    }
                }
            }
            
    
        }
        if (mode === 'chill') {
            if (rcopyArray.length != ghostCanGo.length) {
    
                rcopyArray = checkEngelForGhost('red')
                yon = rcopyArray[Math.floor(Math.random()*rcopyArray.length)]
                if (yon == 'sol' && rgleftFlag2 == false) {
                    if (rcopyArray.includes('ust')) {
                        yon = 'ust'
                    } else if (rcopyArray.includes('alt')) {
                        yon = 'alt'
                    }
                }
                if (yon == 'sag' && rgrightFlag2 == false) {
                    if (rcopyArray.includes('ust')) {
                        yon = 'ust'
                    } else if (rcopyArray.includes('alt')) {
                        yon = 'alt'
                    }
                }
                if (yon == 'ust' && rgupFlag2 == false) {
                    if (rcopyArray.includes('sol')) {
                        yon = 'sol'
                    } else if (rcopyArray.includes('sag')) {
                        yon = 'sag'
                    }
                }
                if (yon == 'alt' && rgdownFlag2 == false) {
                    if (rcopyArray.includes('sol')) {
                        yon = 'sol'
                    } else if (rcopyArray.includes('sag')) {
                        yon = 'sag'
                    }
                }
                // ________
    
                if (yon == 'sag' && rgrightFlag2) {
                    rgrightFlag = true
                    rgleftFlag = false
                    rgupFlag = false
                    rgdownFlag = false
    
                    rgleftFlag2 = false
    
                    rgupFlag2 = true
                    rgdownFlag2 = true
                } else if (yon == 'sol' && rgleftFlag2) {
                    rgrightFlag = false
                    rgleftFlag = true
                    rgupFlag = false
                    rgdownFlag = false
    
                    rgrightFlag2 = false
    
                    rgupFlag2 = true
                    rgdownFlag2 = true
                } else if (yon == 'alt' && rgdownFlag2) {
                    rgrightFlag = false
                    rgleftFlag = false
                    rgupFlag = false
                    rgdownFlag = true
    
                    rgupFlag2 = false
    
                    rgleftFlag2 = true
                    rgrightFlag2 = true
                } else if (yon == 'ust' && rgupFlag2) {
                    rgrightFlag = false
                    rgleftFlag = false
                    rgupFlag = true
                    rgdownFlag = false
    
                    rgdownFlag2 = false
    
                    rgleftFlag2 = true
                    rgrightFlag2 = true
                }
    
            } else if (rcopyArray.length == ghostCanGo.length) {
                for (let i = 0; i < ghostCanGo.length; i++) {
                    if (ghostCanGo[i] != rcopyArray[i]) {
                        rcopy = ghostCanGo[i]
                        rcopyArray[i] = rcopy
                        rcopyFlag = true
                    }
                }
                if (rcopyFlag) {
                    yon = rcopyArray[Math.floor(Math.random()*rcopyArray.length)]
                    if (yon == 'sol' && rgleftFlag2 == false) {
                        if (rcopyArray.includes('ust')) {
                            yon = 'ust'
                        } else if (rcopyArray.includes('alt')) {
                            yon = 'alt'
                        }
                    }
                    if (yon == 'sag' && rgrightFlag2 == false) {
                        if (rcopyArray.includes('ust')) {
                            yon = 'ust'
                        } else if (rcopyArray.includes('alt')) {
                            yon = 'alt'
                        }
                    }
                    if (yon == 'ust' && rgupFlag2 == false) {
                        if (rcopyArray.includes('sol')) {
                            yon = 'sol'
                        } else if (rcopyArray.includes('sag')) {
                            yon = 'sag'
                        }
                    }
                    if (yon == 'alt' && rgdownFlag2 == false) {
                        if (rcopyArray.includes('sol')) {
                            yon = 'sol'
                        } else if (rcopyArray.includes('sag')) {
                            yon = 'sag'
                        }
                    }
                    // __________
    
                    if (yon == 'sag' && rgrightFlag2) {
                        rgrightFlag = true
                        rgleftFlag = false
                        rgupFlag = false
                        rgdownFlag = false
    
                        rgleftFlag2 = false
    
                        rgupFlag2 = true
                        rgdownFlag2 = true
                    } else if (yon == 'sol' && rgleftFlag2) {
                        rgrightFlag = false
                        rgleftFlag = true
                        rgupFlag = false
                        rgdownFlag = false
    
                        rgrightFlag2 = false
    
                        rgupFlag2 = true
                        rgdownFlag2 = true
                    } else if (yon == 'alt' && rgdownFlag2) {
                        rgrightFlag = false
                        rgleftFlag = false
                        rgupFlag = false
                        rgdownFlag = true
    
                        rgupFlag2 = false
    
                        rgleftFlag2 = true
                        rgrightFlag2 = true
                    } else if (yon == 'ust' && rgupFlag2) {
                        rgrightFlag = false
                        rgleftFlag = false
                        rgupFlag = true
                        rgdownFlag = false
    
                        rgdownFlag2 = false
    
                        rgleftFlag2 = true
                        rgrightFlag2 = true
                    }
    
                }
                rcopyFlag = false
            }
            if(rgleftFlag2 && rgleftFlag){
                hareketEt('red','sol')
            }else if(rgrightFlag2 && rgrightFlag){
                hareketEt('red','sag')
            }else if(rgupFlag2 && rgupFlag){
                hareketEt('red','ust')
            }else if(rgdownFlag2 && rgdownFlag){
                hareketEt('red','alt')
            }
        }
        if(mode == 'scatter'){
            // pacman sol üstteyse.
            if(pacmanleft < rghostleft && pacmantop < rghostop){
                if(ghostCanGo.includes('sag')){
                    hareketEt('red','sag')
                }else{
                    if(ghostCanGo.includes('alt')){
                        hareketEt('red','alt')
                    }else if(ghostCanGo.includes('ust')){
                        hareketEt('red','ust')
                    }
                }
            }
            // pacman sol alttaysa
            if(pacmanleft < rghostleft && pacmantop > rghostop){
                if(ghostCanGo.includes('ust')){
                    hareketEt('red','ust')
                }else{
                    if(ghostCanGo.includes('sag')){
                        hareketEt('red','sag')
                    }else if(ghostCanGo.includes('alt')){
                        hareketEt('red','alt')
                    }
                }
            }
            // pacman sağ alttaysa
            if(pacmanleft > rghostleft && pacmantop > rghostop){
                if(ghostCanGo.includes('sol')){
                    hareketEt('red','sol')
                }else{
                    if(ghostCanGo.includes('ust')){
                        hareketEt('red','ust')
                    }else if(ghostCanGo.includes('alt')){
                        hareketEt('red','alt')
                    }
                }
            }
            // pacman sol alttaysa
            if(pacmanleft > rghostleft && pacmantop < rghostop){
                if(ghostCanGo.includes('sol')){
                    hareketEt('red','sol')
                }else{
                    if(ghostCanGo.includes('alt')){
                        hareketEt('red','alt')
                    }else if(ghostCanGo.includes('ust')){
                        hareketEt('red','ust')
                    }
                }
            }
            // yatayda eşitlendilerse ve pacman sağdaysa
            if(pacmantop == rghostop && pacmanleft > rghostleft){
                if(ghostCanGo.includes('sol')){
                    hareketEt('red','sol')
                }else if(ghostCanGo.includes('alt')){
                    hareketEt('red','alt')
                }else if(ghostCanGo.includes('ust')){
                    hareketEt('red','ust')
                }
            }
            // yatayda eşitlendilerse ve pacman soldaysa
            if(pacmantop == rghostop && pacmanleft < rghostleft){
                if(ghostCanGo.includes('sag')){
                    hareketEt('red','sag')
                }else if(ghostCanGo.includes('alt')){
                    hareketEt('red','alt')
                }else if(ghostCanGo.includes('ust')){
                    hareketEt('red','ust')
                }
            }
            // dikeyde eşitlendilerse ve pacman üstteyse
            if(pacmanleft == rghostleft && pacmantop < rghostop){
                if(ghostCanGo.includes('alt')){
                    hareketEt('red','alt')
                }else if(ghostCanGo.includes('sol')){
                    hareketEt('red','sol')
                }else if(ghostCanGo.includes('sag')){
                    hareketEt('red','sag')
                }
            }
            // dikeyde eşitlendilerse ve pacman alttaysa
            if(pacmanleft == rghostleft && pacmantop > rghostop){
                if(ghostCanGo.includes('ust')){
                    hareketEt('red','ust')
                }else if(ghostCanGo.includes('sag')){
                    hareketEt('red','sag')
                }else if(ghostCanGo.includes('sol')){
                    hareketEt('red','sol')
                }
            }

        }
    }

    
}
function blueGhostGo(mode) {


    if(blueKafeste){
        if(bghostleft == 435 && bghostop == 300){
            hareketEt('blue','sag')
        }else if(bghostleft == 450 && bghostop == 300){
            hareketEt('blue','sag')
        }else if(bghostleft == 465 && bghostop == 300){
            hareketEt('blue','sag')
        }else if(bghostleft == 480 && bghostop == 300){
            hareketEt('blue','sag')
        }else if(bghostleft == 495 && bghostop == 300){
            hareketEt('blue','ust')
        }else if(bghostleft == 495 && bghostop == 285){
            hareketEt('blue','ust')
        }else if(bghostleft == 495 && bghostop == 270){
            hareketEt('blue','ust')
            engeller2.push(kapi)
        }else if(bghostleft == 495 && bghostop == 255){
            hareketEt('blue','ust')
            blueKafeste = false
        }
    }else{
        if (pacmanleft == bghostleft) {
            bleftlerEsit = true
        }
        if (pacmantop == bghostop) {
            btoplarEsit = true
        }
    
        if (mode == 'attack') {
            // pacman sol alttaysa
            if (pacmantop > bghostop && pacmanleft < bghostleft && bleftlerEsit == false && btoplarEsit == false) {
                if (bghostCanGo.includes('alt') && bgdownFlag2) {
                    hareketEt('blue', 'alt')
                    bgleftFlag2 = true
                } else if (bgleftFlag2 && bghostCanGo.includes('sol')) {
                    hareketEt('blue', 'sol')
                } else {
                    if (bghostCanGo.includes('sag')) {
                        hareketEt('blue', 'sag')
                        bgleftFlag2 = false
                    }
                }
            }
            // pacman sol üstteyse
            if (pacmantop < bghostop && pacmanleft < bghostleft && bleftlerEsit == false && btoplarEsit == false) {
                if (bghostCanGo.includes('ust') && bgupFlag2) {
                    hareketEt('blue', 'ust')
                    bgleftFlag2 = true
                } else if (bgleftFlag2 && bghostCanGo.includes('sol')) {
                    hareketEt('blue', 'sol')
                } else {
                    if (bghostCanGo.includes('sag')) {
                        bgleftFlag2 = false
                        hareketEt('blue', 'sag')
                    } else if (bghostCanGo.includes('sol')) {
                        bgleftFlag2 = true
                        hareketEt('blue', 'sol')
                    }
                }
            }
            // pacman sağ üstteyse
            if (pacmantop < bghostop && pacmanleft > bghostleft && bleftlerEsit == false && btoplarEsit == false) {
                if (bghostCanGo.includes('ust') && bgupFlag2) {
                    hareketEt('blue', 'ust')
                } else if (bgrightFlag2 && bghostCanGo.includes('sag')) {
                    hareketEt('blue', 'sag')
                    bgupFlag2 = true
                } else {
                    if (bghostCanGo.includes('alt')) {
                        bgupFlag2 = false
                        hareketEt('blue', 'alt')
                    } else if (bghostCanGo.includes('ust')) {
                        bgupFlag2 = true
                        hareketEt('blue', 'ust')
                    }
                }
            }
            // pacman sağ alttaysa
            if (pacmantop > bghostop && pacmanleft > bghostleft && bleftlerEsit == false && btoplarEsit == false) {
                if (bghostCanGo.includes('alt') && bgdownFlag2) {
                    hareketEt('blue', 'alt')
                } else if (bgrightFlag2 && bghostCanGo.includes('sag')) {
                    hareketEt('blue', 'sag')
                    bgdownFlag2 = true
                } else {
                    if (bghostCanGo.includes('ust')) {
                        hareketEt('blue', 'ust')
                        bgdownFlag2 = false
                    } else if (bghostCanGo.includes('alt')) {
                        bgdownFlag2 = true
                        hareketEt('blue', 'alt')
                    }
                }
            }
            // yatayda eşitlendiyse
            if (bleftlerEsit) {
                if (pacmantop > bghostop) {
                    if (bghostCanGo.includes('alt')) {
                        hareketEt('blue', 'alt')
                        bgrightFlag2 = true
                        bgleftFlag2 = true
                        if (pacmanleft != bghostleft) {
                            bleftlerEsit = false
                        }
                    } else {
                        /* engelResult'dan, pacmanResult'u çıkarınca çıkan sonuç;
                        eğer ki engel width'inin yarısından büyükse engelin solunda demektir.
                        eğer ki engel width'inin yarısından küçükse engelin sağında demektir.
                        */
                        var engelLeft = leftdonusturucu(bdenemeEngelAlt)
                        var engelWidth = widthdonusturucu(bdenemeEngelAlt)
                        var engelResult = engelLeft + engelWidth
                        var ghostResult = (bghostleft + 40)
                        var result = engelResult - ghostResult
                        if (result < (engelWidth / 2)) {
                            // engelin sağında.
                            if (bghostCanGo.includes('sag') && bgrightFlag2) {
                                hareketEt('blue', 'sag')
                                bgleftFlag2 = false
                            } else if (bghostCanGo.includes('sol') && bgleftFlag2) {
                                bgrightFlag2 = false
                                hareketEt('blue', 'sol')
                            }
                        } else {
                            // engelin solunda.
                            if (bghostCanGo.includes('sol') && bgleftFlag2) {
                                hareketEt('blue', 'sol')
                                bgrightFlag2 = false
                            } else if (bghostCanGo.includes('sag') && bgrightFlag2) {
                                hareketEt('blue', 'sag')
                                bgleftFlag2 = false
                            }
                        }
                    }
                } else {
                    // leftler eşitlendiyse pacman üstteyse
                    if (bghostCanGo.includes('ust')) {
                        hareketEt('blue', 'ust')
                        bgrightFlag2 = true
                        bgleftFlag2 = true
                        if (pacmanleft != bghostleft) {
                            bleftlerEsit = false
                        }
                    } else {
                        /* engelResult'dan, pacmanResult'u çıkarınca çıkan sonuç;
                        eğer ki engel width'inin yarısından büyükse engelin solunda demektir.
                        eğer ki engel width'inin yarısından küçükse engelin sağında demektir.
                        */
                        var engelLeft = leftdonusturucu(bdenemeEngelUst)
                        var engelWidth = widthdonusturucu(bdenemeEngelUst)
                        var engelResult = engelLeft + engelWidth
                        var ghostResult = (bghostleft + 40)
                        var result = engelResult - ghostResult
                        if (result < (engelWidth / 2)) {
                            // engelin sağında.
                            if (bghostCanGo.includes('sag') && bgrightFlag2) {
                                hareketEt('blue', 'sag')
                            } else if (bghostCanGo.includes('sol') && bgleftFlag2) {
                                bgrightFlag2 = false
                                hareketEt('blue', 'sol')
                            }
                        } else {
                            // engelin solunda.
                            if (bghostCanGo.includes('sol') && bgleftFlag2) {
                                hareketEt('blue', 'sol')
                            } else if (bghostCanGo.includes('sag') && bgrightFlag2) {
                                hareketEt('blue', 'sag')
                                bgleftFlag2 = false
                            }
                        }
                    }
                }
    
            }
            // dikeyde eşitlendiğinde
            if (btoplarEsit) {
                console.log('toplar eşit')
                // pacman daha soldaysa
                if (pacmanleft < bghostleft) {
                    if (bghostCanGo.includes('sol')) {
                        hareketEt('blue', 'sol')
                        bgdownFlag2 = true
                        if (pacmanleft != bghostleft) {
                            btoplarEsit = false
                        }
                    } else {
                        if (bghostCanGo.includes('alt') && bgdownFlag2) {
                            hareketEt('blue', 'alt')
                        } else if (bghostCanGo.includes('ust')) {
                            hareketEt('blue', 'ust')
                            bgdownFlag2 = false
                        } else {
                            bgdownFlag2 = true
                        }
                    }
                } else {
                    // pacman daha sağdaysa 
                    if (bghostCanGo.includes('sag')) {
                        bgupFlag2 = true
                        hareketEt('blue', 'sag')
                        if (pacmantop != bghostop) {
                            btoplarEsit = false
                        }
    
                    } else {
                        if (bghostCanGo.includes('ust') && bgupFlag2) {
                            hareketEt('blue', 'ust')
                        } else if (bghostCanGo.includes('alt')) {
                            hareketEt('blue', 'alt')
                            bgupFlag2 = false
                        } else if (bghostCanGo.includes('ust')) {
                            bgupFlag2 = true
                        }
                    }
                }
            }
    
    
        }
        if (mode == 'chill') {
            if (bcopyArray.length != bghostCanGo.length) {
    
                bcopyArray = checkEngelForGhost('blue')
                byon = bcopyArray[Math.floor(Math.random() * bcopyArray.length)]
                if (byon == 'sol' && bgleftFlag2 == false) {
                    if (bcopyArray.includes('ust')) {
                        byon = 'ust'
                    } else if (bcopyArray.includes('alt')) {
                        byon = 'alt'
                    }
                }
                if (byon == 'sag' && bgrightFlag2 == false) {
                    if (bcopyArray.includes('ust')) {
                        byon = 'ust'
                    } else if (bcopyArray.includes('alt')) {
                        byon = 'alt'
                    }
                }
                if (byon == 'ust' && bgupFlag2 == false) {
                    if (bcopyArray.includes('sol')) {
                        byon = 'sol'
                    } else if (bcopyArray.includes('sag')) {
                        byon = 'sag'
                    }
                }
                if (byon == 'alt' && bgdownFlag2 == false) {
                    if (bcopyArray.includes('sol')) {
                        byon = 'sol'
                    } else if (bcopyArray.includes('sag')) {
                        byon = 'sag'
                    }
                }
                // ________
    
                if (byon == 'sag' && bgrightFlag2) {
                    bgrightFlag = true
                    bgleftFlag = false
                    bgupFlag = false
                    bgdownFlag = false
    
                    bgleftFlag2 = false
    
                    bgupFlag2 = true
                    bgdownFlag2 = true
                } else if (byon == 'sol' && bgleftFlag2) {
                    bgrightFlag = false
                    bgleftFlag = true
                    bgupFlag = false
                    bgdownFlag = false
    
                    bgrightFlag2 = false
    
                    bgupFlag2 = true
                    bgdownFlag2 = true
                } else if (byon == 'alt' && bgdownFlag2) {
                    bgrightFlag = false
                    bgleftFlag = false
                    bgupFlag = false
                    bgdownFlag = true
    
                    bgupFlag2 = false
    
                    bgleftFlag2 = true
                    bgrightFlag2 = true
                } else if (byon == 'ust' && bgupFlag2) {
                    bgrightFlag = false
                    bgleftFlag = false
                    bgupFlag = true
                    bgdownFlag = false
    
                    bgdownFlag2 = false
    
                    bgleftFlag2 = true
                    bgrightFlag2 = true
                }
    
            } else if (bcopyArray.length == bghostCanGo.length) {
                for (let i = 0; i < bghostCanGo.length; i++) {
                    if (bghostCanGo[i] != bcopyArray[i]) {
                        bcopy = bghostCanGo[i]
                        bcopyArray[i] = bcopy
                        bcopyFlag = true
                    }
                }
                if (bcopyFlag) {
                    byon = bcopyArray[Math.floor(Math.random() * bcopyArray.length)]
                    if (byon == 'sol' && bgleftFlag2 == false) {
                        if (bcopyArray.includes('ust')) {
                            byon = 'ust'
                        } else if (bcopyArray.includes('alt')) {
                            byon = 'alt'
                        }
                    }
                    if (byon == 'sag' && bgrightFlag2 == false) {
                        if (bcopyArray.includes('ust')) {
                            byon = 'ust'
                        } else if (bcopyArray.includes('alt')) {
                            byon = 'alt'
                        }
                    }
                    if (byon == 'ust' && bgupFlag2 == false) {
                        if (bcopyArray.includes('sol')) {
                            byon = 'sol'
                        } else if (bcopyArray.includes('sag')) {
                            byon = 'sag'
                        }
                    }
                    if (byon == 'alt' && bgdownFlag2 == false) {
                        if (bcopyArray.includes('sol')) {
                            byon = 'sol'
                        } else if (bcopyArray.includes('sag')) {
                            byon = 'sag'
                        }
                    }
                    // __________
    
                    if (byon == 'sag' && bgrightFlag2) {
                        bgrightFlag = true
                        bgleftFlag = false
                        bgupFlag = false
                        bgdownFlag = false
    
                        bgleftFlag2 = false
    
                        bgupFlag2 = true
                        bgdownFlag2 = true
                    } else if (byon == 'sol' && bgleftFlag2) {
                        bgrightFlag = false
                        bgleftFlag = true
                        bgupFlag = false
                        bgdownFlag = false
    
                        bgrightFlag2 = false
    
                        bgupFlag2 = true
                        bgdownFlag2 = true
                    } else if (byon == 'alt' && bgdownFlag2) {
                        bgrightFlag = false
                        bgleftFlag = false
                        bgupFlag = false
                        bgdownFlag = true
    
                        bgupFlag2 = false
    
                        bgleftFlag2 = true
                        bgrightFlag2 = true
                    } else if (byon == 'ust' && bgupFlag2) {
                        bgrightFlag = false
                        bgleftFlag = false
                        bgupFlag = true
                        bgdownFlag = false
    
                        bgdownFlag2 = false
    
                        bgleftFlag2 = true
                        bgrightFlag2 = true
                    }
    
                }
                bcopyFlag = false
            }
            if (bgleftFlag2 && bgleftFlag) {
                hareketEt('blue', 'sol')
            } else if (bgrightFlag2 && bgrightFlag) {
                hareketEt('blue', 'sag')
            } else if (bgupFlag2 && bgupFlag) {
                hareketEt('blue', 'ust')
            } else if (bgdownFlag2 && bgdownFlag) {
                hareketEt('blue', 'alt')
            }
        }
        if (mode == 'scatter') {
            // pacman sol üstteyse.
            if (pacmanleft < bghostleft && pacmantop < bghostop) {
                if (bghostCanGo.includes('sag')) {
                    hareketEt('blue', 'sag')
                } else {
                    if (bghostCanGo.includes('alt')) {
                        hareketEt('blue', 'alt')
                    } else if (bghostCanGo.includes('ust')) {
                        hareketEt('blue', 'ust')
                    }
                }
            }
            // pacman sol alttaysa
            if (pacmanleft < bghostleft && pacmantop > bghostop) {
                if (bghostCanGo.includes('ust')) {
                    hareketEt('blue', 'ust')
                } else {
                    if (bghostCanGo.includes('sag')) {
                        hareketEt('blue', 'sag')
                    } else if (bghostCanGo.includes('alt')) {
                        hareketEt('blue', 'alt')
                    }
                }
            }
            // pacman sağ alttaysa
            if (pacmanleft > bghostleft && pacmantop > bghostop) {
                if (bghostCanGo.includes('sol')) {
                    hareketEt('blue', 'sol')
                } else {
                    if (bghostCanGo.includes('ust')) {
                        hareketEt('blue', 'ust')
                    } else if (bghostCanGo.includes('alt')) {
                        hareketEt('blue', 'alt')
                    }
                }
            }
            // pacman sol alttaysa
            if (pacmanleft > bghostleft && pacmantop < bghostop) {
                if (bghostCanGo.includes('sol')) {
                    hareketEt('blue', 'sol')
                } else {
                    if (bghostCanGo.includes('alt')) {
                        hareketEt('blue', 'alt')
                    } else if (bghostCanGo.includes('ust')) {
                        hareketEt('blue', 'ust')
                    }
                }
            }
            // yatayda eşitlendilerse ve pacman sağdaysa
            if (pacmantop == bghostop && pacmanleft > bghostleft) {
                if (bghostCanGo.includes('sol')) {
                    hareketEt('blue', 'sol')
                } else if (bghostCanGo.includes('alt')) {
                    hareketEt('blue', 'alt')
                } else if (bghostCanGo.includes('ust')) {
                    hareketEt('blue', 'ust')
                }
            }
            // yatayda eşitlendilerse ve pacman soldaysa
            if (pacmantop == bghostop && pacmanleft < bghostleft) {
                if (bghostCanGo.includes('sag')) {
                    hareketEt('blue', 'sag')
                } else if (bghostCanGo.includes('alt')) {
                    hareketEt('blue', 'alt')
                } else if (bghostCanGo.includes('ust')) {
                    hareketEt('blue', 'ust')
                }
            }
            // dikeyde eşitlendilerse ve pacman üstteyse
            if (pacmanleft == bghostleft && pacmantop < bghostop) {
                if (bghostCanGo.includes('alt')) {
                    hareketEt('blue', 'alt')
                } else if (bghostCanGo.includes('sol')) {
                    hareketEt('blue', 'sol')
                } else if (bghostCanGo.includes('sag')) {
                    hareketEt('blue', 'sag')
                }
            }
            // dikeyde eşitlendilerse ve pacman alttaysa
            if (pacmanleft == bghostleft && pacmantop > bghostop) {
                if (bghostCanGo.includes('ust')) {
                    hareketEt('blue', 'ust')
                } else if (bghostCanGo.includes('sag')) {
                    hareketEt('blue', 'sag')
                } else if (bghostCanGo.includes('sol')) {
                    hareketEt('blue', 'sol')
                }
            }

        }
    }


}
function pinkGhostGo(mode) {

    if(pinkKafeste){
        if(pghostleft == 555 && pghostop == 300){
            hareketEt('pink','sol')
        }else if(pghostleft == 540 && pghostop == 300){
            hareketEt('pink','sol')
        }else if(pghostleft == 525 && pghostop == 300){
            hareketEt('pink','sol')
        }else if(pghostleft == 510 && pghostop == 300){
            hareketEt('pink','sol')
        }else if(pghostleft == 495 && pghostop == 300){
            hareketEt('pink','ust')
        }else if(pghostleft == 495 && pghostop == 285){
            hareketEt('pink','ust')
        }else if(pghostleft == 495 && pghostop == 270){
            hareketEt('pink','ust')
            engeller1.push(kapi)
        }else if(pghostleft == 495 && pghostop == 255){
            hareketEt('pink','ust')
            pinkKafeste = false
        }
    }else{
        if (pacmanleft == pghostleft) {
            pleftlerEsit = true
        }
        if (pacmantop == pghostop) {
            ptoplarEsit = true
        }
    
        if (mode == 'attack') {
            // pacman sol alttaysa
            if (pacmantop > pghostop && pacmanleft < pghostleft && pleftlerEsit == false && ptoplarEsit == false) {
    
                if (pghostCanGo.includes('alt') && pgdownFlag2) {
                    hareketEt('pink', 'alt')
                    pgleftFlag2 = true
                } else if (pgleftFlag2 && pghostCanGo.includes('sol')) {
                    hareketEt('pink', 'sol')
                } else {
                    if (pghostCanGo.includes('sag')) {
                        hareketEt('pink', 'sag')
                        pgleftFlag2 = false
                    }
                }
            }
            // pacman sol üstteyse
            if (pacmantop < pghostop && pacmanleft < pghostleft && pleftlerEsit == false && ptoplarEsit == false) {
    
                if (pghostCanGo.includes('ust') && pgupFlag2) {
                    hareketEt('pink', 'ust')
                    pgleftFlag2 = true
                } else if (pgleftFlag2 && pghostCanGo.includes('sol')) {
                    hareketEt('pink', 'sol')
                } else {
                    if (pghostCanGo.includes('sag')) {
                        pgleftFlag2 = false
                        hareketEt('pink', 'sag')
                    } else if (pghostCanGo.includes('sol')) {
                        pgleftFlag2 = true
                        hareketEt('pink', 'sol')
                    }
                }
            }
            // pacman sağ üstteyse
            if (pacmantop < pghostop && pacmanleft > pghostleft && pleftlerEsit == false && ptoplarEsit == false) {
    
                if (pghostCanGo.includes('ust') && pgupFlag2) {
                    hareketEt('pink', 'ust')
                } else if (pgrightFlag2 && pghostCanGo.includes('sag')) {
                    hareketEt('pink', 'sag')
                    pgupFlag2 = true
                } else {
                    if (pghostCanGo.includes('alt')) {
                        pgupFlag2 = false
                        hareketEt('pink', 'alt')
                    } else if (pghostCanGo.includes('ust')) {
                        pgupFlag2 = true
                        hareketEt('pink', 'ust')
                    }
                }
            }
            // pacman sağ alttaysa
            if (pacmantop > pghostop && pacmanleft > pghostleft && pleftlerEsit == false && ptoplarEsit == false) {
    
                if (pghostCanGo.includes('alt') && pgdownFlag2) {
                    hareketEt('pink', 'alt')
                } else if (pgrightFlag2 && pghostCanGo.includes('sag')) {
                    hareketEt('pink', 'sag')
                    pgdownFlag2 = true
                } else {
                    if (pghostCanGo.includes('ust')) {
                        hareketEt('pink', 'ust')
                        pgdownFlag2 = false
                    } else if (pghostCanGo.includes('alt')) {
                        pgdownFlag2 = true
                        hareketEt('pink', 'alt')
                    }
                }
            }
            // yatayda eşitlendiyse
            if (pleftlerEsit) {
    
                if (pacmantop > pghostop) {
                    if (pghostCanGo.includes('alt')) {
                        hareketEt('pink', 'alt')
                        pgrightFlag2 = true
                        pgleftFlag2 = true
                        if (pacmanleft != pghostleft) {
                            pleftlerEsit = false
                        }
                    } else {
                        /* engelResult'dan, pacmanResult'u çıkarınca çıkan sonuç;
                        eğer ki engel width'inin yarısından büyükse engelin solunda demektir.
                        eğer ki engel width'inin yarısından küçükse engelin sağında demektir.
                        */
                        var engelLeft = leftdonusturucu(pdenemeEngelAlt)
                        var engelWidth = widthdonusturucu(pdenemeEngelAlt)
                        var engelResult = engelLeft + engelWidth
                        var ghostResult = (pghostleft + 40)
                        var result = engelResult - ghostResult
                        if (result < (engelWidth / 2)) {
                            // engelin sağında.
                            if (pghostCanGo.includes('sag') && pgrightFlag2) {
                                hareketEt('pink', 'sag')
                                pgleftFlag2 = false
                            } else if (pghostCanGo.includes('sol') && pgleftFlag2) {
                                pgrightFlag2 = false
                                hareketEt('pink', 'sol')
                            }
                        } else {
                            // engelin solunda.
                            if (pghostCanGo.includes('sol') && pgleftFlag2) {
                                hareketEt('pink', 'sol')
                                pgrightFlag2 = false
                            } else if (pghostCanGo.includes('sag') && pgrightFlag2) {
                                hareketEt('pink', 'sag')
                                pgleftFlag2 = false
                            }
                        }
                    }
                } else {
                    // leftler eşitlendiyse pacman üstteyse
                    if (pghostCanGo.includes('ust')) {
                        hareketEt('pink', 'ust')
                        pgrightFlag2 = true
                        pgleftFlag2 = true
                        if (pacmanleft != pghostleft) {
                            pleftlerEsit = false
                        }
                    } else {
                        /* engelResult'dan, pacmanResult'u çıkarınca çıkan sonuç;
                        eğer ki engel width'inin yarısından büyükse engelin solunda demektir.
                        eğer ki engel width'inin yarısından küçükse engelin sağında demektir.
                        */
                        var engelLeft = leftdonusturucu(pdenemeEngelUst)
                        var engelWidth = widthdonusturucu(pdenemeEngelUst)
                        var engelResult = engelLeft + engelWidth
                        var ghostResult = (pghostleft + 40)
                        var result = engelResult - ghostResult
                        if (result < (engelWidth / 2)) {
                            // engelin sağında.
                            if (pghostCanGo.includes('sag') && pgrightFlag2) {
                                hareketEt('pink', 'sag')
                            } else if (pghostCanGo.includes('sol') && pgleftFlag2) {
                                pgrightFlag2 = false
                                hareketEt('pink', 'sol')
                            }
                        } else {
                            // engelin solunda.
                            if (pghostCanGo.includes('sol') && pgleftFlag2) {
                                hareketEt('pink', 'sol')
                            } else if (pghostCanGo.includes('sag') && pgrightFlag2) {
                                hareketEt('pink', 'sag')
                                pgleftFlag2 = false
                            }
                        }
                    }
                }
    
            }
            // dikeyde eşitlendiğinde
            if (ptoplarEsit) {
                // console.log('toplar eşit')
                // pacman daha soldaysa
                if (pacmanleft < pghostleft) {
                    if (pghostCanGo.includes('sol')) {
                        hareketEt('pink', 'sol')
                        pgdownFlag2 = true
                        if (pacmanleft != pghostleft) {
                            ptoplarEsit = false
                        }
                    } else {
                        if (pghostCanGo.includes('alt') && pgdownFlag2) {
                            hareketEt('pink', 'alt')
                        } else if (pghostCanGo.includes('ust')) {
                            hareketEt('pink', 'ust')
                            pgdownFlag2 = false
                        } else {
                            pgdownFlag2 = true
                        }
                    }
                } else {
                    // pacman daha sağdaysa 
                    if (pghostCanGo.includes('sag')) {
                        pgupFlag2 = true
                        hareketEt('pink', 'sag')
                        if (pacmantop != pghostop) {
                            ptoplarEsit = false
                        }
    
                    } else {
                        if (pghostCanGo.includes('ust') && pgupFlag2) {
                            hareketEt('pink', 'ust')
                        } else if (pghostCanGo.includes('alt')) {
                            hareketEt('pink', 'alt')
                            pgupFlag2 = false
                        } else if (pghostCanGo.includes('ust')) {
                            pgupFlag2 = true
                        }
                    }
                }
            }
    
    
        }
        if (mode == 'chill') {
            if (pcopyArray.length != pghostCanGo.length) {
    
                pcopyArray = checkEngelForGhost('pink')
                pyon = pcopyArray[Math.floor(Math.random() * pcopyArray.length)]
                if (pyon == 'sol' && pgleftFlag2 == false) {
                    if (pcopyArray.includes('ust')) {
                        pyon = 'ust'
                    } else if (pcopyArray.includes('alt')) {
                        pyon = 'alt'
                    }
                }
                if (pyon == 'sag' && pgrightFlag2 == false) {
                    if (pcopyArray.includes('ust')) {
                        pyon = 'ust'
                    } else if (pcopyArray.includes('alt')) {
                        pyon = 'alt'
                    }
                }
                if (pyon == 'ust' && pgupFlag2 == false) {
                    if (pcopyArray.includes('sol')) {
                        pyon = 'sol'
                    } else if (pcopyArray.includes('sag')) {
                        pyon = 'sag'
                    }
                }
                if (pyon == 'alt' && pgdownFlag2 == false) {
                    if (pcopyArray.includes('sol')) {
                        pyon = 'sol'
                    } else if (pcopyArray.includes('sag')) {
                        pyon = 'sag'
                    }
                }
                // ________
    
                if (pyon == 'sag' && pgrightFlag2) {
                    pgrightFlag = true
                    bleftFlag = false
                    pgupFlag = false
                    pgdownFlag = false
    
                    pgleftFlag2 = false
    
                    pgupFlag2 = true
                    pgdownFlag2 = true
                } else if (pyon == 'sol' && pgleftFlag2) {
                    pgrightFlag = false
                    bleftFlag = true
                    pgupFlag = false
                    pgdownFlag = false
    
                    pgrightFlag2 = false
    
                    pgupFlag2 = true
                    pgdownFlag2 = true
                } else if (pyon == 'alt' && pgdownFlag2) {
                    pgrightFlag = false
                    bleftFlag = false
                    pgupFlag = false
                    pgdownFlag = true
    
                    pgupFlag2 = false
    
                    pgleftFlag2 = true
                    pgrightFlag2 = true
                } else if (pyon == 'ust' && pgupFlag2) {
                    pgrightFlag = false
                    bleftFlag = false
                    pgupFlag = true
                    pgdownFlag = false
    
                    pgdownFlag2 = false
    
                    pgleftFlag2 = true
                    pgrightFlag2 = true
                }
    
            } else if (pcopyArray.length == pghostCanGo.length) {
                for (let i = 0; i < pghostCanGo.length; i++) {
                    if (pghostCanGo[i] != pcopyArray[i]) {
                        pcopy = pghostCanGo[i]
                        pcopyArray[i] = pcopy
                        pcopyFlag = true
                    }
                }
                if (pcopyFlag) {
                    pyon = pcopyArray[Math.floor(Math.random() * pcopyArray.length)]
                    if (pyon == 'sol' && pgleftFlag2 == false) {
                        if (pcopyArray.includes('ust')) {
                            pyon = 'ust'
                        } else if (pcopyArray.includes('alt')) {
                            pyon = 'alt'
                        }
                    }
                    if (pyon == 'sag' && pgrightFlag2 == false) {
                        if (pcopyArray.includes('ust')) {
                            pyon = 'ust'
                        } else if (pcopyArray.includes('alt')) {
                            pyon = 'alt'
                        }
                    }
                    if (pyon == 'ust' && pgupFlag2 == false) {
                        if (pcopyArray.includes('sol')) {
                            pyon = 'sol'
                        } else if (pcopyArray.includes('sag')) {
                            pyon = 'sag'
                        }
                    }
                    if (pyon == 'alt' && pgdownFlag2 == false) {
                        if (pcopyArray.includes('sol')) {
                            pyon = 'sol'
                        } else if (pcopyArray.includes('sag')) {
                            pyon = 'sag'
                        }
                    }
                    // __________
    
                    if (pyon == 'sag' && pgrightFlag2) {
                        pgrightFlag = true
                        bleftFlag = false
                        pgupFlag = false
                        pgdownFlag = false
    
                        pgleftFlag2 = false
    
                        pgupFlag2 = true
                        pgdownFlag2 = true
                    } else if (pyon == 'sol' && pgleftFlag2) {
                        pgrightFlag = false
                        bleftFlag = true
                        pgupFlag = false
                        pgdownFlag = false
    
                        pgrightFlag2 = false
    
                        pgupFlag2 = true
                        pgdownFlag2 = true
                    } else if (pyon == 'alt' && pgdownFlag2) {
                        pgrightFlag = false
                        bleftFlag = false
                        pgupFlag = false
                        pgdownFlag = true
    
                        pgupFlag2 = false
    
                        pgleftFlag2 = true
                        pgrightFlag2 = true
                    } else if (pyon == 'ust' && pgupFlag2) {
                        pgrightFlag = false
                        bleftFlag = false
                        pgupFlag = true
                        pgdownFlag = false
    
                        pgdownFlag2 = false
    
                        pgleftFlag2 = true
                        pgrightFlag2 = true
                    }
    
                }
                pcopyFlag = false
            }
            if (pgleftFlag2 && bleftFlag) {
                hareketEt('pink', 'sol')
            } else if (pgrightFlag2 && pgrightFlag) {
                hareketEt('pink', 'sag')
            } else if (pgupFlag2 && pgupFlag) {
                hareketEt('pink', 'ust')
            } else if (pgdownFlag2 && pgdownFlag) {
                hareketEt('pink', 'alt')
            }
        }
        if (mode == 'scatter') {
            // pacman sol üstteyse.
            if (pacmanleft < pghostleft && pacmantop < pghostop) {
                if (pghostCanGo.includes('sag')) {
                    hareketEt('pink', 'sag')
                } else {
                    if (pghostCanGo.includes('alt')) {
                        hareketEt('pink', 'alt')
                    } else if (pghostCanGo.includes('ust')) {
                        hareketEt('pink', 'ust')
                    }
                }
            }
            // pacman sol alttaysa
            if (pacmanleft < pghostleft && pacmantop > pghostop) {
                if (pghostCanGo.includes('ust')) {
                    hareketEt('pink', 'ust')
                } else {
                    if (pghostCanGo.includes('sag')) {
                        hareketEt('pink', 'sag')
                    } else if (pghostCanGo.includes('alt')) {
                        hareketEt('pink', 'alt')
                    }
                }
            }
            // pacman sağ alttaysa
            if (pacmanleft > pghostleft && pacmantop > pghostop) {
                if (pghostCanGo.includes('sol')) {
                    hareketEt('pink', 'sol')
                } else {
                    if (pghostCanGo.includes('ust')) {
                        hareketEt('pink', 'ust')
                    } else if (pghostCanGo.includes('alt')) {
                        hareketEt('pink', 'alt')
                    }
                }
            }
            // pacman sol alttaysa
            if (pacmanleft > pghostleft && pacmantop < pghostop) {
                if (pghostCanGo.includes('sol')) {
                    hareketEt('pink', 'sol')
                } else {
                    if (pghostCanGo.includes('alt')) {
                        hareketEt('pink', 'alt')
                    } else if (pghostCanGo.includes('ust')) {
                        hareketEt('pink', 'ust')
                    }
                }
            }
            // yatayda eşitlendilerse ve pacman sağdaysa
            if (pacmantop == pghostop && pacmanleft > pghostleft) {
                if (pghostCanGo.includes('sol')) {
                    hareketEt('pink', 'sol')
                } else if (pghostCanGo.includes('alt')) {
                    hareketEt('pink', 'alt')
                } else if (pghostCanGo.includes('ust')) {
                    hareketEt('pink', 'ust')
                }
            }
            // yatayda eşitlendilerse ve pacman soldaysa
            if (pacmantop == pghostop && pacmanleft < pghostleft) {
                if (pghostCanGo.includes('sag')) {
                    hareketEt('pink', 'sag')
                } else if (pghostCanGo.includes('alt')) {
                    hareketEt('pink', 'alt')
                } else if (pghostCanGo.includes('ust')) {
                    hareketEt('pink', 'ust')
                }
            }
            // dikeyde eşitlendilerse ve pacman üstteyse
            if (pacmanleft == pghostleft && pacmantop < pghostop) {
                if (pghostCanGo.includes('alt')) {
                    hareketEt('pink', 'alt')
                } else if (pghostCanGo.includes('sol')) {
                    hareketEt('pink', 'sol')
                } else if (pghostCanGo.includes('sag')) {
                    hareketEt('pink', 'sag')
                }
            }
            // dikeyde eşitlendilerse ve pacman alttaysa
            if (pacmanleft == pghostleft && pacmantop > pghostop) {
                if (pghostCanGo.includes('ust')) {
                    hareketEt('pink', 'ust')
                } else if (pghostCanGo.includes('sag')) {
                    hareketEt('pink', 'sag')
                } else if (pghostCanGo.includes('sol')) {
                    hareketEt('pink', 'sol')
                }
            }

        }
    }
}

function hareketEt(hangiGhost,netarafa){
    if(hangiGhost=='red'){
        if(netarafa == 'sol'){
            rgLeftEye.classList = ''
            rgRightEye.classList = ''
            rgLeftEye.classList.add('eye_to_left')
            rgRightEye.classList.add('eye_to_left')
            
            rghostleft -= 15
            ghost_red.style.left = rghostleft + 'px'
        }else if(netarafa == 'sag'){
            rgLeftEye.classList = ''
            rgRightEye.classList = ''
            rgLeftEye.classList.add('eye_to_right')
            rgRightEye.classList.add('eye_to_right')
            
            rghostleft += 15
            ghost_red.style.left = rghostleft + 'px'
        }else if(netarafa == 'ust'){
            rgLeftEye.classList = ''
            rgRightEye.classList = ''
            rgLeftEye.classList.add('eye_to_up')
            rgRightEye.classList.add('eye_to_up')
            
            rghostop -= 15
            ghost_red.style.top = rghostop + 'px'
        }else if(netarafa == 'alt'){
            rgLeftEye.classList = ''
            rgRightEye.classList = ''
            rgLeftEye.classList.add('eye_to_down')
            rgRightEye.classList.add('eye_to_down')
            
            rghostop += 15
            ghost_red.style.top = rghostop + 'px'
        }
        ghostCanGo = checkEngelForGhost('red')
    }
    if(hangiGhost == 'blue'){
        if (netarafa == 'sol') {
            bgLeftEye.classList = ''
            bgRightEye.classList = ''
            bgLeftEye.classList.add('eye_to_left')
            bgRightEye.classList.add('eye_to_left')
            
            bghostleft -= 15
            ghost_blue.style.left = bghostleft + 'px'
        } else if (netarafa == 'sag') {
            bgLeftEye.classList = ''
            bgRightEye.classList = ''
            bgLeftEye.classList.add('eye_to_right')
            bgRightEye.classList.add('eye_to_right')
            
            bghostleft += 15
            ghost_blue.style.left = bghostleft + 'px'
        } else if (netarafa == 'ust') {
            bgLeftEye.classList = ''
            bgRightEye.classList = ''
            bgLeftEye.classList.add('eye_to_up')
            bgRightEye.classList.add('eye_to_up')
            
            bghostop -= 15
            ghost_blue.style.top = bghostop + 'px'
        } else if (netarafa == 'alt') {
            bgLeftEye.classList = ''
            bgRightEye.classList = ''
            bgLeftEye.classList.add('eye_to_down')
            bgRightEye.classList.add('eye_to_down')
            
            bghostop += 15
            ghost_blue.style.top = bghostop + 'px'
        }
        bghostCanGo = checkEngelForGhost('blue')
    }
    if(hangiGhost == 'pink'){
        if (netarafa == 'sol') {
            pgLeftEye.classList = ''
            pgRightEye.classList = ''
            pgLeftEye.classList.add('eye_to_left')
            pgRightEye.classList.add('eye_to_left')
            
            pghostleft -= 15
            ghost_pink.style.left = pghostleft + 'px'
        } else if (netarafa == 'sag') {
            pgLeftEye.classList = ''
            pgRightEye.classList = ''
            pgLeftEye.classList.add('eye_to_right')
            pgRightEye.classList.add('eye_to_right')
            
            pghostleft += 15
            ghost_pink.style.left = pghostleft + 'px'
        } else if (netarafa == 'ust') {
            pgLeftEye.classList = ''
            pgRightEye.classList = ''
            pgLeftEye.classList.add('eye_to_up')
            pgRightEye.classList.add('eye_to_up')
            
            pghostop -= 15
            ghost_pink.style.top = pghostop + 'px'
        } else if (netarafa == 'alt') {
            pgLeftEye.classList = ''
            pgRightEye.classList = ''
            pgLeftEye.classList.add('eye_to_down')
            pgRightEye.classList.add('eye_to_down')
            
            pghostop += 15
            ghost_pink.style.top = pghostop + 'px'
        }
        pghostCanGo = checkEngelForGhost('pink')
    }
}
function resetle(){
    rgleftFlag2 = true
    rgrightFlag2 = true
    rgupFlag2 = true
    rgdownFlag2 = true

    bgleftFlag2 = true
    bgrightFlag2 = true
    bgupFlag2 = true
    bgdownFlag2 = true

    pgleftFlag2 = true
    pgrightFlag2 = true
    pgupFlag2 = true
    pgdownFlag2 = true

    if (pacmanleft !== rghostleft) {
        rleftlerEsit = false
    }
    if (pacmantop !== rghostop) {
        rtoplarEsit = false
    }
    if (pacmanleft !== bghostleft) {
        bleftlerEsit = false
    }
    if (pacmantop !== bghostop) {
        btoplarEsit = false
    }
    if (pacmanleft !== pghostleft) {
        pleftlerEsit = false
    }
    if (pacmantop !== pghostop) {
        ptoplarEsit = false
    }
}
function afterScatterModeFalse(){
    ghost_red.style.background = 'red'
    rgRightFoot.style.background = 'red'
    rgLeftFoot.style.background = 'red'

    ghost_pink.style.background = 'pink'
    pgRightFoot.style.background = 'pink'
    pgLeftFoot.style.background = 'pink'
    
    ghost_blue.style.background = 'lightskyblue'
    bgRightFoot.style.background = 'lightskyblue'
    bgLeftFoot.style.background = 'lightskyblue'
}
function beforeScatterModeFalse(){
    if(!redKafeste){
        ghost_red.style.background = 'blue'
        rgRightFoot.style.background = 'blue'
        rgLeftFoot.style.background = 'blue'
    }
    if(!pinkKafeste){
        ghost_pink.style.background = 'blue'
        pgRightFoot.style.background = 'blue'
        pgLeftFoot.style.background = 'blue'
    }
    if(!blueKafeste){
        ghost_blue.style.background = 'blue'
        bgRightFoot.style.background = 'blue'
        bgLeftFoot.style.background = 'blue'
    }

}
function girCik(){
    if (pacmanleft == 0 && pacmantop == 300) {
        pacmanleft = 975
    }
    if (pacmanleft == 990 && pacmantop == 300) {
        pacmanleft = 15
    }
    if (rghostleft == 0 && rghostop == 300) {
        rghostleft = 975
    }
    if (rghostleft == 990 && rghostop == 300) {
        rghostleft = 15
    }
    if (bghostleft == 0 && bghostop == 300) {
        bghostleft = 975
    }
    if (bghostleft == 990 && bghostop == 300) {
        bghostleft = 15
    }
    if (pghostleft == 0 && pghostop == 300) {
        pghostleft = 975
    }
    if (pghostleft == 990 && pghostop == 300) {
        pghostleft = 15
    }
}
function pacmanMoves(){
    
    if (downFlag) {
        yemYeme('asagiGidiyor')
        pacmantop += 15
        pacman.style.top = pacmantop + 'px'
        lastMove = 'asagiGidiyor'
        agizEkle('asagiGidiyor')
    } else if (upFlag) {
        yemYeme('yukariGidiyor')
        pacmantop -= 15
        pacman.style.top = pacmantop + 'px'
        lastMove = 'yukariGidiyor'
        agizEkle('yukariGidiyor')
    } else if (rightFlag) {
        yemYeme('sagaGidiyor')
        pacmanleft += 15
        pacman.style.left = pacmanleft + 'px'
        lastMove = 'sagaGidiyor'
        agizEkle('sagaGidiyor')
    } else if (leftFlag) {
        yemYeme('solaGidiyor')
        pacmanleft -= 15
        pacman.style.left = pacmanleft + 'px'
        lastMove = 'solaGidiyor'
        agizEkle('solaGidiyor')
    } else if (notMoving) {
        pacman.classList = ''
        pacman.classList.add(lastMove)
    }
    
}

