
const buyClay = () => {
    const clayObject = {  }
    
    return clayObject
}

let clay = buyClay()

const makePottery = (clay) => {
    clay.shape = "Bowl"

    return clay
} 

clay = makePottery(clay)

const bisqueFire = (clay) => {
    clay.readyForGlazing = true

    return clay
}

clay = bisqueFire(clay)

const glazePottery = (clay) => {
    if(clay.readyForGlazing === true) {
        clay.glazing = "Midnight Blue"
    } else {
        console.log('Make sure you bisque fire the pottery before you glaze it.')
    }
    return clay
}

clay = glazePottery(clay)

const finalFiring = (clay, temperatureOfKiln) => {
    if (temperatureOfKiln > 1200) {
        clay.cracked = true
    } else {
        clay.cracked = false
    }
    return clay
}

clay = finalFiring(clay, 1500)
console.log(clay)

const coolClay = finalFiring(clay, 1000)
console.log(coolClay)
