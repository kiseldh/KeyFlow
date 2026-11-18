import Keyboard from "./components/keyboard/Keyboard";
import Rules from "./components/rules/Rules";
export default function Home() {
  return (
    <main className="MAIN">
      <div className="stats">
        <div className="stat">
          <span>Скорость</span>
          <strong>0 знаков/мин</strong>
        </div>
        <div className="stat">
          <span>Точность</span>
          <strong>100%</strong>
        </div>
        <div className="stat">
          <span>Время</span>
          <strong>00:00</strong>
        </div>
      </div>
      <Rules/>
      <div className="textBlock">
      <p>ЗДЕСЬ МОГЛА БЫТЬ ВАША РЕКЛАМА</p>
      </div>
    <Keyboard />
    
    </main>
  );
}