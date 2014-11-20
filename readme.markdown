# 𝔣𝔯𝔞𝔨𝔱𝔲𝔯

𝔠𝔬𝔫𝔳𝔢𝔯𝔱 𝔱𝔥𝔢 𝔩𝔞𝔱𝔦𝔫 𝔞𝔩𝔭𝔥𝔞𝔟𝔢𝔱 𝔱𝔬
[𝔣𝔯𝔞𝔨𝔱𝔲𝔯 𝔲𝔫𝔦𝔠𝔬𝔡𝔢 𝔠𝔥𝔞𝔯𝔞𝔠𝔱𝔢𝔯𝔰](http://www.fileformat.info/info/unicode/char/search.htm?q=fraktur&preview=entity)

# 𝔢𝔵𝔞𝔪𝔭𝔩𝔢

``` js
var fraktur = require('fraktur');
var s = fraktur.encode(process.argv.slice(2).join(' '));
console.log(s);
```

```
$ node encode.js "
Heere bigynneth the Knyghtes Tale
Whilom, as olde stories tellen us,
Ther was a duc that highte Theseus;
Of Atthenes he was lord and governour,
And in his tyme swich a conquerour,
That gretter was ther noon under the sonne.
"

𝕳𝔢𝔢𝔯𝔢 𝔟𝔦𝔤𝔶𝔫𝔫𝔢𝔱𝔥 𝔱𝔥𝔢 𝔎𝔫𝔶𝔤𝔥𝔱𝔢𝔰 𝔗𝔞𝔩𝔢
𝔚𝔥𝔦𝔩𝔬𝔪, 𝔞𝔰 𝔬𝔩𝔡𝔢 𝔰𝔱𝔬𝔯𝔦𝔢𝔰 𝔱𝔢𝔩𝔩𝔢𝔫 𝔲𝔰,
𝔗𝔥𝔢𝔯 𝔴𝔞𝔰 𝔞 𝔡𝔲𝔠 𝔱𝔥𝔞𝔱 𝔥𝔦𝔤𝔥𝔱𝔢 𝔗𝔥𝔢𝔰𝔢𝔲𝔰;
𝔒𝔣 𝔄𝔱𝔱𝔥𝔢𝔫𝔢𝔰 𝔥𝔢 𝔴𝔞𝔰 𝔩𝔬𝔯𝔡 𝔞𝔫𝔡 𝔤𝔬𝔳𝔢𝔯𝔫𝔬𝔲𝔯,
𝔄𝔫𝔡 𝔦𝔫 𝔥𝔦𝔰 𝔱𝔶𝔪𝔢 𝔰𝔴𝔦𝔠𝔥 𝔞 𝔠𝔬𝔫𝔮𝔲𝔢𝔯𝔬𝔲𝔯,
𝔗𝔥𝔞𝔱 𝔤𝔯𝔢𝔱𝔱𝔢𝔯 𝔴𝔞𝔰 𝔱𝔥𝔢𝔯 𝔫𝔬𝔬𝔫 𝔲𝔫𝔡𝔢𝔯 𝔱𝔥𝔢 𝔰𝔬𝔫𝔫𝔢.
```

# 𝔲𝔰𝔞𝔤𝔢

𝔗𝔥𝔦𝔰 𝔭𝔞𝔠𝔨𝔞𝔤𝔢 𝔰𝔥𝔦𝔭𝔰 𝔴𝔦𝔱𝔥 𝔞 `fraktur` 𝔠𝔬𝔪𝔪𝔞𝔫𝔡.

```
usage: fraktur {OPTIONS}

  Convert latin alphabet text on stdin to 𝔣𝔯𝔞𝔨𝔱𝔲𝔯 on stdout.

  -d --decode   Decode instead of encoding.
  -m --message  Input text instead of stdin.
  -h --help     Show this message.

```

# 𝔪𝔢𝔱𝔥𝔬𝔡𝔰

``` js
var fraktur = require('fraktur')
```

## var 𝔰𝔱𝔯𝔦𝔫𝔤 = fraktur(string)
## var 𝔰𝔱𝔯𝔦𝔫𝔤 = fraktur.encode(string)

𝕮𝔬𝔫𝔳𝔢𝔯𝔱 𝔞 𝔩𝔞𝔱𝔦𝔫 `string` 𝔱𝔬 𝔞 𝔣𝔯𝔞𝔨𝔱𝔲𝔯 `𝔰𝔱𝔯𝔦𝔫𝔤`.

## var string = fraktur.decode(𝔰𝔱𝔯𝔦𝔫𝔤)

𝕮𝔬𝔫𝔳𝔢𝔯𝔱 𝔞 𝔣𝔯𝔞𝔨𝔱𝔲𝔯 `𝔰𝔱𝔯𝔦𝔫𝔤` 𝔱𝔬 𝔞 𝔩𝔞𝔱𝔦𝔫 `string`.

# 𝔩𝔦𝔠𝔢𝔫𝔰𝔢

𝔐𝕴𝔗
