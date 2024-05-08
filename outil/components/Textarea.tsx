import styles from "../scss/page.module.scss";
export default function Textarea() {
  return (
    <div className={`${styles.flex}`}>
      <label htmlFor="question_textarea">
        Pourquoi avez-vous une préférence pour les chiens ?
      </label>
      <textarea
        name="question_textarea"
        id="question_textarea"
        placeholder="Ecricre ici ..."
        required
      ></textarea>
    </div>
  );
}
