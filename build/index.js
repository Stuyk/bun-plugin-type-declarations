import{spawn as k} from"node:child_process";function q(j){return{name:"bun-type-declarations",async setup(){const m=k("bun",["x","tsc","-p",j]);m.stderr.on("data",(l)=>{console.error(l.toString())}),m.stdout.on("data",(l)=>{console.log(l.toString())})}}}var A=q;export{A as default,q as bunTypeDeclarations};