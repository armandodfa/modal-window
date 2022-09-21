import { useState } from "react";
const Modal = ({open, setOpen, children})=>{
  return(
    <div className={`overlay animated ${open ? 'show' : ''}`}>
    <div className="modal">
      <svg onClick={()=>{setOpen(false)}} height="200" viewBox="0 0 200 200" width="200">
        <title />
        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
      </svg>
      {children }
    </div>
  </div>
  )
}
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <button className="open-modal-btn" onClick={()=>{setOpen(true)}}>✨ Don't do this!</button>
      <Modal open={open} setOpen={setOpen}>
        <h2>u did...</h2>
      <img src="https://i.gifer.com/RZf1.gif" />
      <h3>wubba lubba dub dub</h3>
      </Modal>
    </div>
  );
}

export default App;
