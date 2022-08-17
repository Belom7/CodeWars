function contamination(text, char){
    return text.split('').map((m)=>m===''? '' : char).join('')
}