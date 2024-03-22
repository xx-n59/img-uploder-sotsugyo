import { Inter } from "next/font/google";
import storage from "@/firebase";
import { ref, uploadBytes } from "firebase/storage";
import styles from "@/styles/styles.module.css";
import Header from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const OnFileUploadToFirebase = (e: any) => {
  //   console.log(e.target.files[0].name);
  //   const file = e.target.files[0];
  //   const storageRef = ref(storage, "images/" + file.name);

  //   uploadBytes(storageRef, file).then((snapshot) => {
  //     console.log("Uploaded a blob or file!");
  //   });
  // };

  const OnFileUploadToFirebase = (e: any) => {
    const files = e.target.files; // ユーザーが選択したファイル群を取得
    const uploadPromises = Array.from(files).map((file: any) => { // Array.from()でFileListを配列に変換し、mapで各ファイルを処理
      const storageRef = ref(storage, "images/" + file.name); // 各ファイルに対する参照を作成
      return uploadBytes(storageRef, file); // Firebase StorageにファイルをアップロードするPromiseを返す
    });

    Promise.all(uploadPromises).then(() => {
      alert('アップロード完了'); // 全てのファイルのアップロードが完了したらアラートを表示
    }).catch((error) => {
      console.error("Upload failed: ", error); // いずれかのファイルのアップロードに失敗した場合のエラー処理
    });
  };


  const OnMovieUploadToFirebase = (e: any) => {
    const file = e.target.files[0];

    const storageRef = ref(storage, "movies/" + file.name);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
      alert("アップロード完了")
    });

  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <label className={styles.button}>画像を選択
          <input className={styles.input} type="file" onChange={OnFileUploadToFirebase} accept="image/*" multiple />
        </label>
        <label className={styles.button}>メッセージ動画をアップロード
          <input className={styles.input} type="file" onChange={OnMovieUploadToFirebase} />
        </label>
      </div>
    </>
  );
}
