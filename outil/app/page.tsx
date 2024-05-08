"use client";
import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import Image from "next/image";
import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import image from "../public/chien.png";
import styles from "../scss/page.module.scss";
import Select from "../components/Select";
import Textarea from "../components/Textarea";
import Radio from "../components/Radio";
import SendIcon from "@mui/icons-material/Send";

export default function Index() {
  const [describe, setDescribe] = useState("");
  const [question_number, setQuestion_number] = useState("");
  const [radio, setRadio] = useState("");
  const [question_select, setQuestion_select] = useState("");
  const [question_textarea, setQuestion_textarea] = useState("");

  const supabase = createClient(
    "https://qipxytuoobzcjnbwauyq.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpcHh5dHVvb2J6Y2puYndhdXlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUwNzQ2ODcsImV4cCI6MjAzMDY1MDY4N30.8ZOCV-n8X8-U5kPRbSM_P0I5zNmf014jftq3rYSspKg"
  );
  const handleSubmit = async (event) => {
    const { data, error } = await supabase.from("questionnaire").insert({
      describe: describe,
      question_number: question_number,
      question_select: question_select,
      question_textarea: question_textarea,
      contact_choice: radio,
    });
  };

  return (
    <>
      <form className={`${styles.form}`} onSubmit={handleSubmit}>
        <div>
          <h1>Bienvenue sur le questionnaire</h1>
          <p>Thème : chiens</p>
          <Image src={image} alt="chien" className={`${styles.img}`} />
          <br />
        </div>
        <div className={`${styles.flex}`}>
          <label htmlFor="describe">
            Quels sont vos meilleurs conseils pour l{"'"}entraînement d{"'"}un
            chiot à la propreté ?
          </label>
          <input
            type="text"
            name="describe"
            id="describe"
            required
            onChange={(e) => setDescribe(e.target.value)}
          />
        </div>
        <div className={`${styles.flex}`}>
          <label htmlFor="question_number">
            Combien y a t-il de chient sur l{"'"}image?
          </label>
          <input
            type="number"
            name="question_number"
            id="question_number"
            required
            onChange={(e) => setQuestion_number(e.target.value)}
          />
        </div>
        <div className={`${styles.flex}`}>
          <label htmlFor="question_select">
            Quelle est votre race de chien préférée ?
          </label>
          <select
            name="question_select"
            id="question_select"
            required
            onChange={(e) => setQuestion_select(e.target.value)}
          >
            <option value="" selected disabled>
              Sélectionner
            </option>
            <option value="Labrador">Labrador Retriever</option>
            <option value="Berger">Berger Allemand</option>
            <option value="Bulldog">Bulldog Français</option>
            <option value="Caniche">Caniche</option>
            <option value="Chihuahua">Chihuahua</option>
            <option value="Beagle">Beagle</option>
          </select>
        </div>
        <div className={`${styles.flex}`}>
          <label htmlFor="question_textarea">
            Pourquoi avez-vous une préférence pour les chiens ?
          </label>
          <textarea
            name="question_textarea"
            id="question_textarea"
            placeholder="Ecricre ici ..."
            required
            onChange={(e) => setQuestion_textarea(e.target.value)}
          ></textarea>
        </div>
        <div className={`${styles.flex}`}>
          <label>
            Merci de sélectionner la méthode de contact qui vous convient le
            mieux :
          </label>
          <div>
            <input
              type="radio"
              id="contactChoice1"
              name="contact"
              value="email"
              required
              onChange={(e) => setRadio(e.target.value)}
            />
            <label htmlFor="contactChoice1" className="mr-4	">
              Email
            </label>
            <input
              type="radio"
              id="contactChoice2"
              name="contact"
              value="telephone"
              required
              onChange={(e) => setRadio(e.target.value)}
            />
            <label htmlFor="contactChoice2" className="mr-4	">
              Téléphone
            </label>
            <input
              type="radio"
              id="contactChoice3"
              name="contact"
              value="courrier"
              required
              onChange={(e) => setRadio(e.target.value)}
            />
            <label htmlFor="contactChoice3">Courrier</label>
          </div>
        </div>
        <button type="submit" className={`${styles.btn}`}>
          Envoyer vos réponses <SendIcon className={`${styles.icone}`} />
        </button>
      </form>
    </>
  );
}
