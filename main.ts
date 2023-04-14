let index2 = 0
let checker = false
let index = 0
let list2 = [1, 2, 15]
let length = 20
let strip = neopixel.create(DigitalPin.P0, length, NeoPixelMode.RGB)
let range2 = strip.range(0, 4)
range2.showColor(neopixel.colors(NeoPixelColors.Red))
range2.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
strip.show()
music.playTone(262, music.beat(BeatFraction.Whole))
range2.shift(1)
range2.show()
basic.pause(1000)
let pos1 = length - 1
basic.forever(function () {
    strip.setPixelColor(list2[2], neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(500)
    while (index < list2.length) {
        if (0 == list2[index]) {
            checker = true
        }
        index += 1
    }
    while (index2 < list2.length) {
        list2[index2] = list2[index2] - 1
        serial.writeLine("" + (list2[index2]))
        index2 += 1
    }
})
