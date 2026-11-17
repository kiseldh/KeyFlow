import Keyboard from "./components/keyboard/Keyboard";
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
      <div className="textBlock">
      <p>ЭТО ПРОСТО ПИЗДЕЦ, ДАЖЕ ДЕМИ МУРЫЧ БЫ ЗАДУШИЛСЯ. ЕСЛИ ТАК БУДЕТ ПРОДОЛЖАТЬСЯ Я НАЛОЖУ СЕБЕ В РУКИ</p>
      </div>
    <Keyboard />
    </main>
  );
}