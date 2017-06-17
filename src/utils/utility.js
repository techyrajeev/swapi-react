 export function isEmpty(str) {
     return (!str || str.length === 0);
 }

 export function isEmptyObj(obj) {
     if (!obj) {
         return true;
     }
     return Object.getOwnPropertyNames(obj).length === 0;
 }

