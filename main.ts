/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelo Yalung
 * Created on: Dec 2023
 * This program receives radio signals and changes the message depending on the distance of a sensor
*/

// variables
let distanceToObject: number = 0

// setup
radio.setGroup(76)
basic.showIcon(IconNames.Happy)

while (true) {
  distanceToObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
  )

  if (distanceToObject <= 10) {
    radio.sendString('Too Close')
    } else {
    radio.sendString('Pee')
    }

  radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
  })
}
