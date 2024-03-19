import styles from "@/styles/header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <div className={styles.container}>
      <Image src="/卒サプ.png" width={50} height={50} alt="aaaaaa" />
      <h1 className={styles.header}>卒業サプライズ2024</h1>
    </div>
  );
}
