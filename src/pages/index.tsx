import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import storage from "@/firebase";
import { ref, uploadBytes } from "firebase/storage";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {

  const OnFIleUploadToFirebase = (e: any) => {
    // e.target.files
    console.log(e.target.files[0].name);
    const file = e.target.files[0];
    const storageRef = ref(storage, "images/" + file.name);

    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
    

  }

  return (
    <>
    <button>
    画像をアップロード
      <input type="file" onChange={OnFIleUploadToFirebase}/>
    </button>
    </>
  );
}
