import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <span style="font-size: 5rem; color: red;">HEJ!</span>
    </main>
  );
}
