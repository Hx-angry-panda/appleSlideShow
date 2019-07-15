let $buttons = $('.buttonsBar > li')
let current = 0

//阻止默认事件
$buttons.on('click', function(e){
    e.preventDefault()  
})

$buttons.eq(0).addClass('active')

bindEvent()

// 获取按钮 绑定按钮事件
function bindEvent() {
    $buttons.on('click', function (e) {
        let index = $(e.currentTarget).index()      
        goToSlide(index)
        clearInterval(timer)
    })  
}

//轮播
function goToSlide(index){
    $('#slides').css({'transform': `translateX(${-(index*920)}px)`})
    $buttons.removeClass('active')
    $buttons.eq(index).addClass('active')
    current = current + 1
    if (current > $buttons.length - 1){
        current = 0
    }
}

//自动播放
let timer = setInterval(function(){
    goToSlide(current)
},3000)

//切换标签页暂停自动播放
document.addEventListener("visibilitychange", function () {
    if (document.hidden){
        clearInterval(timer)
    }else{
        timer = setInterval(function(){
            goToSlide(current)
        },3000)
    }
})