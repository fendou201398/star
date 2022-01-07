let x = 0
let y = 0
let 亮度 = 0
let 延时 = 0
let x1 = 0
let y1 = 0
basic.forever(function () {
    x = randint(0, 4)
    y = randint(0, 4)
    亮度 = randint(0, 255)
    延时 = randint(200, 500)
    x1 = randint(0, 4)
    y1 = randint(0, 4)
    led.plotBrightness(x, y, 亮度)
    basic.pause(延时)
    led.unplot(x1, y1)
})
