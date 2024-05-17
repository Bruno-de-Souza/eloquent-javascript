switch (prompt("What is the weather today?")) {
    case "rainy":
        console.log("Remember to bring an umbrella!")
        break;
    case "sunny":
        console.log("Dress lightly.")
        break;
    case "cloudy":
        console.log("Go outside.")
        break;
    default: "hollyday"
        console.log("Enjoy your day off!")
        break;
}