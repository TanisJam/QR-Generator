import Form from "../components/form";
import { useState } from "react";
import Image from "next/image";
import styles from "./index.module.css";

const RickRoll = "https://youtu.be/HIcSWuKMwOw";

export default function Home() {
  const [query, setQuery] = useState(RickRoll);
  return (
    <div className={styles.container}>
      <div className={styles.qrContainer}>
        <Image
          src={`https://api.qrserver.com/v1/create-qr-code/?data=${query}&size=150x150`}
          alt="qr-code"
          width={150}
          height={150}
        />
      </div>
      <Form setQuery={setQuery} />
    </div>
  );
}
