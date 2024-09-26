import { useState } from 'react';
import Image from './components/Image';
import Position from './components/Position';
import './screen.scss';

const DEFAULT_SCREEN_SIZE = 390;

function Screen() {
  const [position] = useState({ x: DEFAULT_SCREEN_SIZE / 2 - 50, y: DEFAULT_SCREEN_SIZE / 2 - 50 });

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
