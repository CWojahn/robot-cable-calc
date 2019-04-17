const robots ={
	input: require('./robots/input.js'),
	state: require('./robots/state.js'),
	calc: require('./robots/calc.js')
	
}

async function start(){
	robots.input()
	await robots.calc()

	const cableData = robots.state.load()
	console.dir(cableData,{ depth: null})
	//console.log(cableData.current)
}

start()
