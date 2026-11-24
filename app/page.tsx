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
      <Rules />
      <div className="textBlock">
        <p>
          Черные дыры представляют собой области пространства-времени,
          гравитационное притяжение которых настолько велико, что даже свет не
          способен проникнуть в их пределы.
        </p>
        <p>
          Ученые предполагают, что в центре большинства крупных галактик
          находятся сверхмассивные черные дыры, масса которых, может в миллионы
          и даже миллиарды раз превышать массу Солнца.
        </p>
        <p>
          Несмотря на то что современные телескопы позволяют наблюдать влияние
          этих объектов на окружающее пространство, многие процессы происходящие
          непосредственно за горизонтом событий, до сих пор остаются загадкой
          для науки.
        </p>
      </div>
      <Keyboard />
    </main>
  );
}
