import styles from "../scss/page.module.scss";
export default function Radio() {
  return (
    <div className={`${styles.flex}`}>
      <label>
        Merci de sélectionner la méthode de contact qui vous convient le mieux :
      </label>
      <div>
        <input
          type="radio"
          id="contactChoice1"
          name="contact"
          value="email"
          required
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
        />
        <label htmlFor="contactChoice3">Courrier</label>
      </div>
    </div>
  );
}
