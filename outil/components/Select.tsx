import styles from "../scss/page.module.scss";
export default function Select() {
  return (
    <div className={`${styles.flex}`}>
      <label htmlFor="question_select">
        Quelle est votre race de chien préférée ?
      </label>
      <select name="question_select" id="question_select" required>
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
  );
}
