import React, { useRef } from 'react';
import Header from './Header';
import './App.css';
import Canvas from './canvas';

function App() {

  const resetCanvas = () => {
    
    const canvas: any = document.getElementById("mycanvas");
    const context = canvas.getContext('2d');
    
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  return (
    <div className="App">
       <Header headerText= "Doodle Drawing App"/>
       <Canvas width={600} height={600} />
    </div>
  );
}

export default App;
