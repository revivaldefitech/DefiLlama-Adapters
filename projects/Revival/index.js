
const {masterChefExports} = require("../helper/masterchef");

const revival = "0x7EaeE60040135F20f508A393ca400dEd339d654e";
const masterchef = "0x249535B7a46c25A413bC27f18df0E5a789fD21B5";

module.exports = {
    ...masterChefExports(masterchef, "binance smart chain", revival, false)
}
