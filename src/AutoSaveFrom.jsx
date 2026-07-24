import { useEffect , useState ,useEffectEvent } from 'react'

function AutoSaveForm() {
  const [formData , setFormData] = useState({name:"" , email:""})
    const saveDate = useEffectEvent(() => {
        console.log("Form Data: ",formData);
    })
  useEffect(() => {
    const interval = setInterval(() => {
        saveDate()
    }, 3000);
    return() => clearInterval(interval)
  },[])

  return (
    <div>
      <input 
        type="text" 
        placeholder='Name'
        value={formData.name}
        onChange={e => setFormData({...formData , name : e.target.value })}
      />
      <input 
        type="email" 
        placeholder='Email'
        value={formData.email}
        onChange={e => setFormData({...formData , email : e.target.value })}
      />
    </div>
  )
}

export default AutoSaveForm