// 导入

import {name, foo} from "./m1"
import * as m1 from "./m1"
console.log(m1)
console.log(name)
console.log(foo)

import * as m2 from "./m2"
console.log(m2)
import {name as m2Name, food} from "./m2"
console.log(m2Name)

import * as m3 from "./m3"
console.log(m3)
import {default as m3D} from "./m3"
console.log(m3D)
import m3_easy from "./m3"
console.log(m3_easy)

