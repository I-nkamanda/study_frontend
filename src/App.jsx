import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [task, setTask] = useState(" ")
  const [isImportant, setIsImportant] = useState(false) // 체크박스 상태

  const handleAdd = () => {
    console.log("추가된 할 일:", task, " /중요:", isImportant) // 콘솔 확인용
    setTask("") //입력창 비우기
    setIsImportant(false)
  }

  return (
    <>
      <div>
        <h2>할 일 기록하기</h2>
       <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder = "할 일을 적어주세요!"
        />
    
       <input 
        type="checkbox"
        checked={isImportant}
        onChange={(e) => setIsImportant(e.target.checked)}
       /> -중요표시 <br /><br />
       <button onClick={handleAdd}
        style={{
          fontWeight: 'bold',
          padding: '6px 12px',
          border: '2px solid #111',
          borderRadius: '6px'
        }}
       >
      추가</button>
      </div>
      
    </>
  )
}

export default App
