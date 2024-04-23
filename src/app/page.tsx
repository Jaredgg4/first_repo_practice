import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.head}>
        <h1>EPLabsMo</h1>
        <p>Help us EpLabs pay their instructors and apprentices</p>
      </header>
      <div className={styles.tablediv}>
        <table className={styles.tabl}>
          <tr className={styles.header}>
            <th colSpan={4}><h1>The Table</h1></th>
          </tr>
          <tr>
            <td></td>
            <td className={styles.cells}>1</td>
            <td className={styles.cells1}>2</td>
            <td className={styles.cells2}>3</td>
          </tr>
          <tr>
          <td></td>
            <td className={styles.cells3}>4</td>
            <td className={styles.cells4}>5</td>
            <td className={styles.cells5}>6</td>
          </tr>
          <tr>
          <td></td>
            <td className={styles.cells6}>7</td>
            <td className={styles.cells7}>8</td>
            <td className={styles.cells8}>9</td>
          </tr>
          <tr>
          <td></td>
            <td className={styles.cells9}>10</td>
            <td className={styles.cells10}>11</td>
            <td className={styles.cells11}>12</td>
          </tr>
          <tr>
          <td></td>
            <td className={styles.cells12}>13</td>
            <td className={styles.cells13}>14</td>
            <td className={styles.cells14}>15</td>
          </tr>
          <tr>
          <td></td>
            <td className={styles.cells15}>16</td>
            <td className={styles.cells16}>18</td>
            <td className={styles.cells17}>19</td>
          </tr>
        </table>
      </div>
      <div className={styles.divForm}>
        <form className={styles.form}>
          Username: <input type="text" name="username" id="username"></input>
          <br></br>
          Money: <input type="number" name="currency"></input>
          <br></br>
          <input type="submit" value="Donate" className={styles.btn}></input>
        </form>
      </div>
    </main>
  );
}