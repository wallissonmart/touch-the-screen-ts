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
    'Tenha coragem para se tornar aquilo que sonha.',
    'Os sonhos servem para abrir caminho e mostrar a direção.',
    'A vida é uma aventura ousada ou nada...',
    'Tenha orgulho da pessoa que você é.',
    'Faça hoje o que vai te dar orgulho amanhã.',
    'Perdoe a si pelos seus erros. Não se torture por bobagem.',
    'Grandes passos requerem coragem. Ainda bem que você é corajoso!',
    'A persistência realiza o impossível.',
    'Permita-se ser feliz.',
    'Embarque numa aventura pessoal: descubra-se.',
    'Ser uma pessoa melhor é o objetivo do dia.',
    'O futuro ainda não chegou, seja grato pelo agora.',
    'Seu maior medo também pode ser sua maior motivação.',
    'A força de vontade é meu superpoder.',
    'Você é forte, você é capaz, você pode.',
    'O melhor está por vir. Acredite!',
  ];

  const randomIndex = Math.floor(Math.random() * phrases.length);

  function showClickLocation(e: React.MouseEvent<HTMLElement>) {
    const { clientX, clientY } = e;
    //const message = phrases[clickedPoints.length];
    const message = phrases[randomIndex];
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
