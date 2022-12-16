import { useState } from 'react';
import './App.css';

interface IClickedPoints {
  clientX: number;
  clientY: number;
  message: string;
}

function App() {
  
  const [clickedPoints, setClickedPoints] = useState<IClickedPoints[]>([]);
  const [restorePoints, setRestorePoints] = useState<IClickedPoints[]>([]);

  const phrases: string[] = [
    'Você',
    'é',
    'incrível',
    'e',
    'merece',
    'todo',
    'respeito',
    'do',
    'mundo!',
    'Desculpa',
    'se',
    'de',
    'alguma',
    'forma',
    'te',
    'magoei!',
  ];

  //const randomIndex = Math.floor(Math.random() * phrases.length);

  function showClickLocation(e: React.MouseEvent<HTMLElement>) {
    const { clientX, clientY } = e;
    const message = phrases[clickedPoints.length];
    setClickedPoints([...clickedPoints, { clientX, clientY, message }]);
  }

  function removeLast() {
    const newClickedPoints = [...clickedPoints];
    const removePoint = newClickedPoints.pop();
    if (!removePoint) return;
    setClickedPoints(newClickedPoints);
    setRestorePoints([...restorePoints, removePoint]);
  }

  function restoreLast() {
    const newRestorePoints = [...restorePoints];
    const restorePoint = newRestorePoints.pop();
    if (!restorePoint) return;
    setRestorePoints(newRestorePoints);
    setClickedPoints([...clickedPoints, restorePoint]);
  }

  /*
  <button className="button" onClick={removeLast}>
   Desfazer
  </button>
  <button className="button" onClick={restoreLast}>
   Refazer
  </button>
  */

  return (
    <>
      <div className="App" onClick={showClickLocation}>
        {clickedPoints.map((clickedPoint) => {
          return (
            <div
              className="clickedPoint"
              style={{
                left: clickedPoint.clientX - 5,
                top: clickedPoint.clientY - 10,
              }}
            >
              {clickedPoint.message}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
