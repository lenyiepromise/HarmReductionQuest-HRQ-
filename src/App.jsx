import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import MiniGameScreen from './components/MiniGameScreen';
import ResultsScreen from './components/ResultsScreen';
import MessageBox from './components/MessageBox';
import ReferralModal from './components/ReferralModal';

function App() {
  const [screen, setScreen] = useState('start'); // 'start', 'game', 'mini-game', 'results'
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const showMessageBox = (msg) => {
    setMessage(msg);
    setShowMessage(true);
  };

  const hideMessageBox = () => setShowMessage(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {screen === 'start' && <StartScreen startGame={() => setScreen('game')} />}
      {screen === 'game' && <GameScreen showMessageBox={showMessageBox} />}
      {screen === 'mini-game' && <MiniGameScreen />}
      {screen === 'results' && <ResultsScreen />}
      
      {showMessage && <MessageBox message={message} hideMessageBox={hideMessageBox} />}
      <ReferralModal />
    </div>
  );
}

export default App;