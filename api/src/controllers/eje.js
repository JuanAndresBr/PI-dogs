const en={o:{e:4, g:5}}
const i =[{a:"a"},{a:"j"},{a:"b"}]
// const r=en.filter((e,i)=> {
//   console.log("????",en.indexOf(e))
//   console.log(i)
//   return en.indexOf(e)===i})

console.log(i.sort((a,b)=>{
  if(a.a<b.a)return -1
  if(a.a>b.a)return 1
  return 0
}))