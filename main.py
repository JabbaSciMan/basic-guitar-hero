index2 = 0
checker = False
index = 0
list2 = [1, 2, 15]
length = 20
strip = neopixel.create(DigitalPin.P0, length, NeoPixelMode.RGB)
range2 = strip.range(0, 4)
range2.show_color(neopixel.colors(NeoPixelColors.RED))
range2.set_pixel_color(1, neopixel.colors(NeoPixelColors.BLUE))
strip.show()
music.play_tone(262, music.beat(BeatFraction.WHOLE))
range2.shift(1)
range2.show()
basic.pause(1000)
pos1 = length - 1

def on_forever():
    global checker, index, index2
    strip.set_pixel_color(list2[2], neopixel.colors(NeoPixelColors.RED))
    strip.show()
    basic.pause(500)
    while index < len(list2):
        if 0 == list2[index]:
            checker = True
        index += 1
    while index2 < len(list2):
        list2[index2] = list2[index2] -1
        serial.write_line("" + str((list2[index2])))
        index2 += 1
basic.forever(on_forever)
