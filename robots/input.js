const readline = require('readline-sync')
const state = require('./state.js')

function robot(){
	const cableData = {}

	cableData.voltage = askAndReturnVoltage()
	cableData.power = askAndReturnPower()
	cableData.powerUnit = askAndReturnUnit()
	cableData.fp = askAndReturnFP()
	state.save(cableData)

	function askAndReturnVoltage(){
		return readline.question('Informe a voltagem do sistema: ')
	}

	function askAndReturnPower(){
		return readline.question('Informe a carga do cabo: ')
	}

	function askAndReturnUnit(){
		return readline.question('Informe a unidade da carga: ')
	}

	function askAndReturnFP(){
		return readline.question('Informe o fator de potência da carga: ')
	}

}

module.exports = robot