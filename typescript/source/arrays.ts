const names:string[]=[];
names.push("Sabina");
names.push("Manisha");
names.push("Bandana");
names.push("Rojina");

console.log(names);
console.log(names[0]);
console.log(names[1]);

names.pop();
console.log(names);
names.unshift("Kabiraj");

console.log(names);
names.shift();
console.log(names);
console.log(names.length);
names.forEach(std=>console.log(std));