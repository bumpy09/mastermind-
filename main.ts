input.onButtonPressed(Button.A, function () {
    Right_Color_and_Position += 1
    basic.showNumber(Right_Color_and_Position)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("A=")
    basic.showNumber(Right_Color_and_Position)
    basic.showString("B=")
    basic.showNumber(RIght_Color_and_Wrong_Position)
})
input.onButtonPressed(Button.B, function () {
    RIght_Color_and_Wrong_Position += 1
    basic.showNumber(RIght_Color_and_Wrong_Position)
})
let RIght_Color_and_Wrong_Position = 0
let Right_Color_and_Position = 0
edubitRgbBit.setPixelColor(0, 0xff0000)
edubitRgbBit.setPixelColor(1, 0x00ff00)
edubitRgbBit.setPixelColor(2, 0xffff00)
edubitRgbBit.setPixelColor(3, 0x0000ff)
Right_Color_and_Position = 0
RIght_Color_and_Wrong_Position = 0
