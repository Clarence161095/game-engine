import { useEffect, useState } from 'react';
import Image from './components/Image';
import Position from './components/Position';
import './screen.scss';

const DEFAULT_SCREEN_SIZE = 1000;

function Screen() {
  const [position, setPosition] = useState({ x: 200, y: 200 });

  function moveAction(event) {
    switch (event.key) {
      case 'ArrowUp':
        setPosition({ ...position, y: position.y - 10 });
        break;
      case 'ArrowDown':
        setPosition({ ...position, y: position.y + 10 });
        break;
      case 'ArrowLeft':
        setPosition({ ...position, x: position.x - 10 });
        break;
      case 'ArrowRight':
        setPosition({ ...position, x: position.x + 10 });
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', moveAction);
    return () => window.removeEventListener('keydown', moveAction);
  }, []);

  return (
    <div className='flex justify-center'>
      <div className={`relative bg-black`} style={{ width: DEFAULT_SCREEN_SIZE, height: DEFAULT_SCREEN_SIZE }}>
        <Position x={position.x} y={position.y}>
          <Image id={355} />
        </Position>
        <Position>
          <Image id={300} />
        </Position>
      </div>
    </div>
  )
}

export default Screen
