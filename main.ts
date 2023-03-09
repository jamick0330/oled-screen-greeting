// ON start always tell Micro:bit an OLED screen is connected
OLED12864_I2C.init(60)
// Forever show "Hello World!" on FIRST (top) line
// 
// Forever show "Hello Self!" on SECOND line
// 
// Forever show happy face emoticon on FOURTH (bottom) line
basic.forever(function () {
    OLED12864_I2C.showString(
    0,
    0,
    "Hello World!",
    1
    )
    OLED12864_I2C.showString(
    0,
    1,
    "Hello Self!",
    1
    )
    OLED12864_I2C.showString(
    0,
    3,
    ": )   ; )",
    1
    )
})
