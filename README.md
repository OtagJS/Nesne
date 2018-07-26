Created at [Otag Community](https://otagjs.org)

> Go to Turkish version : [Nesne](https://github.com/ilgilenio/Nesne)
- - -
# Nesne

Nesne is an Object manipulation library.

## Installation

```bash
    npm i nesne -g
```

```javascript   
    import Nesne from 'nesne'
```

#### Traditional use

```html
    <script src="https://cdn.jsdelivr.net/npm/nesne@1.0.0/Nesne.min.js"></script>
```

## License

MIT License

## API

### .toArray 

.toArray( _Object_ )

Converts **Object** or **arguments** to **Array**

``` javascript
   let arr = Nesne.toArray({a: 1,b: 2,c: 3})
   
   console.log(arr) // [1, 2, 3]
```

### .combine

.combine( _Object_, _Object_, ...  )

Combines Objects

``` javascript
   let obj   = {a: 8, b: 2, c: 3, d: -2}
    ,  obj2  = {c: 4, d: 1}
    ,  final = Nesne.combine(obj, obj2)
    
    console.log(final) // {a: 8, b: 2, c: 4, d: 1} // c and d is overwritten
```

### .cumul

.cumul( _Object_, _Object_, ...  )

Combines Objects by summing values.

``` javascript
   let obj   = {a: 8, b: 2, c: 3, d: -2}
    ,  obj2  = {c: 4, d: 1, e: 2}
    ,  final = Nesne.cumul(obj, obj2)
    
    console.log(final) // {a: 8, b: 2, c: 7, d: -1, e :2} // no value loss
```

### .match

.match( **obj** _Object_, **obj2** _Object_, **fields** _Array_, **default** )

Transfers values of given fields from obj2 to obj, if value not exists, uses default value

``` javascript
    let obj1  = {}
    ,   obj2  = {a: 5, c: 6, d: 16}
    ,   final = Nesne.match(obj, obj2, ['a', 'd', 'e'], 12)
    
    console.log(final) // {a: 5, d: 16, e :2} // e is default
```

##### Another default use case

define default values as an Object, use **_def** to define default value for all not existing keys

``` javascript
    let obj1  = {}
    ,   obj2  = {a: 5, c: 6, d: 16}
    ,   final = Nesne.match(
            obj, obj2,
            ['a', 'd', 'e', 'f', 'g', 'h'], {e: 12, _def:10})
    
    console.log(final) // {a: 5, d: 16, e :2, f: 10, g: 10, h:10}
```

### .map 

.map( **obj** _Object_, **map** _Object_, **limit** _Boolean_, **default** )

Creates an Object with key mapping

``` javascript
    let obj   = {a: 5, b: 6, c: 16, d: 18}
    ,  map   = {a: 'b',c: 'a', b: 'c'}
    ,  final = Nesne.map(obj, map)
        
    console.log(final) // {a: 6, b: 16, c: 5, d: 18}
```

##### Limit obtained keys

You can also limit obtained keys which is not specified in map argument

``` javascript
    let obj   = {a: 5, b: 6, c: 16, d: 18}
    ,  map   = {a: 'b',c: 'a', b: 'c'}
    ,  final = Nesne.map(obj, map, true)
        
    console.log(final) // {a: 6, b: 16, c: 5} // d is not obtained
```

##### Use default value

You can use default value for absent values

``` javascript
    let obj   = {a: 5, b: 6, c: 16, d: 18}
    ,  map   = {a: 'b',c: 'a', b: 'c',e: 'f'}
    ,  final = Nesne.map(obj, map, true, 25)
        
    console.log(final) // {a: 6, b: 16, c: 5, e:25} 
    // obj.f isn't exist, so default value is given to e
```
