function aliBaba(sesame) {
    let open = sesame.lastIndexOf('Open, Sesame!'),
        shut = sesame.lastIndexOf('Shut, Sesame!')
    if (open < 0) return "Ali Baba didn't get the treasure and he was still a poor man."
    if (shut < open) return "Ali Baba got a lot of treasure and he was finally killed by the robbers."
    return "Ali Baba got a lot of treasures and he lived a rich life."
}