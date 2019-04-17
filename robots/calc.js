const state = require('./state.js')

function robot(){
	const cableData = state.load()
		if (cableData.powerUnit	=== 'kVA'){
		cableData.current = cableData.power/(cableData.voltage/1000)/Math.sqrt(3)
	} else if (cableData.powerUnit	=== 'kW'){
		const powerkva = cableData.power/cableData.fp
		cableData.current = powerkva/(cableData.voltage/1000)/Math.sqrt(3)
	} else{
		cableData.current = cableData.power
	}

	state.save(cableData)
}

module.exports = robot