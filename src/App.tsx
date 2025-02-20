import React, { useState } from 'react';
import './App.css';



function App() {
  // const [probSet, setProblemSet] = useState<ProblemSet>({level:1, numOfQ:10, lenOfQ:8, timeLimit:60});
  // const [inputValue, setInputValue] = useState<string>('');
  // const [problem, setProblem] = useState(problemGenerater(probSet.numOfQ));
  // const [nowScore, setNowScore] = useState<number>(0);
  // const [highScore, setHighScore] = useState<number>(0);
  // const [message, setMessage] = useState<string>('');
  // const [incorrectCounter, setIncorrectCounter] = useState<number>(0);
  const [result, setResult] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>, diceType: string) => {
    event.preventDefault();
    
    var diceResult = 888; // 仮の結果
    if(diceType==='binary-6'){
      const list = [0, 0, 0, 1, 1, 1];
      // 半分の確率で0, 半分の確率で1
      // listから選択
      diceResult = list[Math.floor(Math.random() * list.length)];
    }else if(diceType=='8'){
      // 1から8のランダム
      const list = [1,2,3,4,5,6,7,8];
      // listから選択
      diceResult = list[Math.floor(Math.random() * list.length)];
      
    }setResult(`${diceType} dice  →  ${diceResult}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ダイス</h1>
      </header>
      <div className="dice">
        <div className="dice-container">
          <h3 className="dicetype">binary-6面ダイス</h3>
          <form onSubmit={(e) => handleSubmit(e, 'binary-6')}>
            <button type="submit">Roll!</button>
          </form>
        </div>
        <div className="dice-container">
          <h3 className="dicetype">8面ダイス</h3>
          <form onSubmit={(e) => handleSubmit(e, '8')}>
            <button type="submit">Roll!</button>
          </form>
        </div>

        {result && (
          <div className='result'>
            <h2>Result</h2>
            <p dangerouslySetInnerHTML={{ __html: result }} />
          </div>
        )}
      </div>
    </div>
  );
}


export default App;