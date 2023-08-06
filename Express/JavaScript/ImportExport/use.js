import {ad, divi, mutiply as mul, subtract} from "./utility.js";
import * as myutil from "./utility.js";

const a = ad(4,5);
console.log("addition = ",a);

const s = subtract(5,1);
console.log("subtraction = ",s);

const m = mul(7,8);
console.log("multiplication = ",m);

const d = divi(4,2);
console.log("division = ",d);

const mo = myutil.modulus(12,5);
console.log("modulus = ",mo);

