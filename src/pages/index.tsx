import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import storage from "@/firebase";
import { ref, uploadBytes } from "firebase/storage";
import styles from "@/styles/styles.module.css";
// import Header from "../components/header";
import Header from "../../components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const OnFileUploadToFirebase = (e: any) => {
    console.log(e.target.files[0].name);
    const file = e.target.files[0];
    const storageRef = ref(storage, "images/" + file.name);

    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  };

  const OnMovieUploadToFirebase = (e: any) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, "movies/" + file.name);

    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <input type="file" onChange={OnFileUploadToFirebase} accept="image/*" />
        <button className={styles.button}>画像をアップロード</button>
        <input type="file" onChange={OnMovieUploadToFirebase} />
        <button className={styles.button}>メッセージ動画をアップロード</button>
      </div>
    </>
  );
}
