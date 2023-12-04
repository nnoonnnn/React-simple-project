import { useCallback, useEffect, useState } from 'react'

import './App.css'

function App() {
  let  [length,Setlength]=useState(8)
let  [Password,Setpasswrod]=useState("")
let [numberAllow, setnumberAllow]=useState(false)
let [charAllow, setcharAllow]=useState(false)


let GeneratePassword=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(numberAllow) str += "1234567890"
if(charAllow) str += "+-*/{}[]!@#$%^&*()_,>/~`"

  for (let i = 0; i <= length; i++) {
let char=Math.floor(Math.random()* str.length +1)
pass +=str.charAt(char)
  }

  Setpasswrod(pass)
},[length,Setpasswrod,numberAllow,charAllow])
 useEffect(()=>{
  GeneratePassword()
 },[length,Setpasswrod,numberAllow,charAllow,GeneratePassword])

  return (
<>
<h1>
  APP Generator
</h1>

<input type="text" value={Password} readOnly />
<input type='range' min={8} max={20} onChange={(e)=>Setlength(e.target.value)} value={length} />
<label htmlFor="length"> Length:{length}</label>

<label htmlFor="Number" >Number : </label>
<input type="checkbox" defaultChecked={numberAllow} onChange={()=>setnumberAllow((prev)=>!prev)} />

<label htmlFor="Number">Charcter : </label>
<input type="checkbox" defaultChecked={charAllow} onChange={()=>setcharAllow((prev)=>!prev)} />

</>
  )
}

export default App
