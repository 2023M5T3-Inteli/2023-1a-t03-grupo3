import {useState} from 'react'
import ReactSwitch from 'react-switch'
export const ToggleSwitch=()=>{
  
  const [checked, setChecked] = useState(false);

  const handleChange = val => {
    setChecked(val)
  }

  return (
    <div className="app" style={{textAlign: "center"}}>
      <ReactSwitch
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
  
};
