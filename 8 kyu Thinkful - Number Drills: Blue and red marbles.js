function guessBlue(blueStart, redStart, bluePulled, redPulled) {

    const blueBall = blueStart - bluePulled
    const redBall = redStart - redPulled
    const allBall = blueBall+ redBall

    return blueBall / allBall
}