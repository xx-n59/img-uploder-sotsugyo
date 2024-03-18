import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBBt0ulX2i2Z7Khx_qLRMc2u436g7JlcTA",
    authDomain: "img-uploder-sotugyou.firebaseapp.com",
    projectId: "img-uploder-sotugyou",
    storageBucket: "img-uploder-sotugyou.appspot.com",
    messagingSenderId: "451101896878",
    appId: "1:451101896878:web:b7548a4274eee47cab7d3f"
  };
  
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
