let Nesne = require('./index')
let Tests = {
	toArray: function(){
		let arr = Nesne.toArray({a: 1,b: 2,c: 3})
		return arr.reduce((i, j) => i + j) == 6 && arr.reduce((i, j) => i + j) == 6
	},
	combine: function(){
		let obj  = {a: 8, b: 2, c: 3}
		,	obj2 = {c: 4, d: 1}
		,	obj3 = {d: 6, e: 9} ;
		obj  	 = Nesne.combine(obj, obj2, obj3)
		nums 	 = Nesne.toArray(obj)
		return nums.reduce((i, j) => i + j) == 29 && nums.reduce((i, j) => i * j) == 3456
	},
	cumul: function(){
		let obj  = {a: 8, b: 2, c: 3}
		,	obj2 = {c: 4, d: 1}
		,	obj3 = {d: 6, e: 9} ;
		obj  	 = Nesne.cumul(obj, obj2, obj3)
		nums 	 = Nesne.toArray(obj)
		return nums.reduce((i, j) => i + j) == 33 && nums.reduce((i, j) => i * j) == 7056
	},
	match: function(){
		let obj  = {}
		,	obj2 = {a: 5, c: 6, d: 16}
		,	obj3 = Nesne.match(obj, obj2, ['a', 'd', 'e'], 12)
		return obj3.e == 12 && Nesne.toArray(obj3).reduce((i, j) => i + j) == 33
	},
	map: function(){
		let obj  = {a: 5, c: 6, d: 16}
		,	map  = {a: 'b',c: 'a', d:'c'}
		,	obj2 = Nesne.map(obj, map)
		return obj2.b == 5 && obj2.c == 16, obj2.a == 6
	}
}

res=Object.keys(Tests).reduce((o, i) => {
	o[i] = Number(Tests[i]())
	return o;
},{})
	console.log('█████████████████████████████████')
	console.log('       2018 - OtagJS.org         ')
	console.log('█████████████████████████████████')
	console.log('\n')
	console.log('                 ) ')
	console.log('               /  \'. ')
	console.log('             (      \'.')
	console.log('        «-------------##')
	console.log('             (      .\' ')
	console.log('               \\  .\' ')
	console.log('                 )')
	console.log('\n\n')

if(Nesne.toArray(res).reduce((i, j) => i * j)){
	console.log('█████████████████████████████████')
	console.log(' .........Test Succeed.......... ')
	console.log(' ........Sınama Başarılı........ ')
	console.log('█████████████████████████████████')
process.exit(0)
}else{
	console.log('█████████████████████████████████')
	console.log(' ..Başarısız! Başarı Dizelgesi:  ')
	console.log(' Test Fail, See Pass Table Below ')
	console.log('█████████████████████████████████\n\n')
	console.log(res);
process.exit(1)	
}
console.log('\n\n\n\n');
