//Function as a value in JS

let launchMissiles = function () {
    missilleSystem.launch('now');
};
if (safeMode) {
    launchMissiles = function () {/* Do Nothing*/};
}