[Otağ](https://otagjs.org)'da gururla yaratıldı | Türkçe konuşuyoruz, Türkçe üretiyoruz

> For those who say "My main language is English": [Nesne](https://github.com/OtagJS/Nesne)
- - -
# Nesne

Nesne bir **Nesne** işleme kütüphanesidir. lodash ile benzerlik gösteren işlevler içerir.

Benzerlerinden ayrı olarak, yöntemlerin genelinde yeni **Nesne** oluşturmak yerine ilk girdi olarak verilen **Nesne** üzerine işler

## Kurulum / Kullanım

```bash
    npm i nesne -g
```

```javascript   
    import Nesne from 'nesne'
```

#### Geleneksel kullanım biçimi

```html
    <script src="https://cdn.jsdelivr.net/npm/nesne@1.0.0/Nesne.min.js"></script>
```

## Yeterge

MIT License

## Uygulama Geliştirme Arabirimi(UGA)

### .toArray 

.toArray( _Nesne_ )

**Nesne** ya da **işlev girdileri(arguments)**'ni **Dizi**'ye dönüştürür.

``` javascript
   let dizelge = Nesne.toArray({a: 1,b: 2,c: 3})
   
   console.log(dizelge) // [1, 2, 3]
```

### .combine

.combine( _Nesne_, _Nesne_, ...  )

**Nesne**leri birleştirir. 


``` javascript
   let nsn   = {a: 8, b: 2, c: 3, d: -2}
    ,  nsn2  = {c: 4, d: 1}
    ,  sonuç = Nesne.combine(nsn, nsn2)
    
    console.log(sonuç) // {a: 8, b: 2, c: 4, d: 1} // c ve d'nin üstüne yazıldı
```

> Buradaki _sonuç_ **Nesne**si aslında _nsn_'nin kendisidir.

### .cumul

.cumul( _Nesne_, _Nesne_, ...  )

**Nesne**lerin değerlerini birleştirir 


``` javascript
   let nsn   = {a: 8, b: 2, c: 3, d: -2}
    ,  nsn2  = {c: 4, d: 1, e: 2}
    ,  sonuç = Nesne.cumul(nsn, nsn2)
    
    console.log(sonuç) // {a: 8, b: 2, c: 7, d: -1, e :2} // değer kaybı yok
```

> Buradaki _sonuç_ **Nesne**si aslında _nsn_'nin kendisidir.

### .match

.match( **nsn** _Nesne_, **nsn2** _Nesne_, **alanlar** _Dizi_, **öntanımlı* )

_nsn2_ **Nesne**sindeki ilgili _alanlar_'ı _nsn_ içine taşır, eğer o açar _nsn_ içinde yoksa _öntanımlı_ değer verilir

``` javascript
    let nsn  = {}
    ,   nsn2  = {a: 5, c: 6, d: 16}
    ,   sonuç = Nesne.match(nsn, nsn2, ['a', 'd', 'e'], 12)
    
    console.log(sonuç) // {a: 5, d: 16, e :2} // e öntanımlı değer ile
```

> Buradaki _sonuç_ **Nesne**si aslında _nsn_'nin kendisidir.

##### Öntanımlı değer kullanmanın başka bir biçimi

_öntanımlı_ değerleri bir ilgili açarlar için karşılığı bulunan bir **Nesne** olarak verin. _ _def _ açarını da diğer bütün açarlar için kullanın

``` javascript
    let nsn1  = {}
    ,   nsn2  = {a: 5, c: 6, d: 16}
    ,   sonuç = Nesne.match(
            nsn, nsn2,
            ['a', 'd', 'e', 'f', 'g', 'h'], {e: 12, _def:10})
    
    console.log(sonuç) // {a: 5, d: 16, e :2, f: 10, g: 10, h:10}
```

### .map 

.map( **nsn** _Nesne_, **pusula** _Nesne_, **sınırla** _Mantıksal_, **öntanımlı** )

**Nesne** açarlarını belirtiğiniz şekilde değiştirir.
Aşağıdaki örnekte a'nın değerini b'den al şeklinde bir değişim yapılmıştır. 

``` javascript
    let nsn   = {a: 5, b: 6, c: 16, d: 18}
    ,  pusula   = {a: 'b',c: 'a', b: 'c'}
    ,  sonuç = Nesne.map(nsn, pusula)
        
    console.log(sonuç) // {a: 6, b: 16, c: 5, d: 18}
```

> !! Buradaki sonuç **Nesne**si YENİ OLUŞTURULMUŞ bir **Nesne**dir

##### Açar kazanımını sınırlama

Bu yeni oluşturulan **Nesne**yi dilerseniz sınırlayanilirsiniz. öntanımlı değerler ile bütün **Nesne**yi emmek yerine sadece _pusula_da belirttiğiniz açarlar emilmiş olur

``` javascript
    let nsn   = {a: 5, b: 6, c: 16, d: 18}
    ,  pusula   = {a: 'b',c: 'a', b: 'c'}
    ,  sonuç = Nesne.map(nsn, pusula, true)
        
    console.log(sonuç) // {a: 6, b: 16, c: 5} // d emilmedi
```

##### Ön tanımlı değeri kullanma

_nsn_'de bulunmayan açarlar için öntanımlı bir değer tanımlayabilirsiniz. 

``` javascript
    let nsn   = {a: 5, b: 6, c: 16, d: 18}
    ,  pusula   = {a: 'b',c: 'a', b: 'c',e: 'f'}
    ,  sonuç = Nesne.map(nsn, pusula, true, 25)
        
    console.log(sonuç) // {a: 6, b: 16, c: 5, e:25} 
    // nsn.f yok, bu durumda ön tanımlı değer e'ye verilmiş oldu
```

