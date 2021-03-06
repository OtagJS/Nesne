let Nesne = {
	toArray: function(o){
		return Object.keys(o).map( i => o[i] )
	},
	combine: function(){
		let args = this.toArray(arguments);
		return args.reduce((o, o2) => {
			Object.keys(o2).forEach(i => {
				o[i] = o2[i]
			})
			return o;
		}, args.shift())
	},
	cumul: function(){
		let args = this.toArray(arguments);
		return args.reduce((o, o2) => {
			Object.keys(o2).forEach(i => {
				if(!o.hasOwnProperty(i)){o[i] = 0}
				o[i] += o2[i]
			})
			return o;
		}, args.shift())
	},
	match: function(obj, obj2, fields, def){
		return fields.reduce(def instanceof Object ? (o, i) => {
			o[i] = obj2.hasOwnProperty(i) ? obj2[i] : (def.hasOwnProperty(i) ? def[i] : (def._def != null ? def._def : null))
			return o
		} : (o, i) => {
			o[i] = obj2.hasOwnProperty(i) ? obj2[i] : def
			return o
		}, obj)
	},
	map: function(obj, map, lim, def){
		return Object.keys(lim ? map : obj).reduce((o, i) => {
			o[map[i]] = obj.hasOwnProperty(i) ? obj[i] : def
			return o
		}, {})
	}
}
if(typeof module !== "undefined"){module.exports = Nesne}
