import styles from "@/components/button/Button.module.scss";


function BtnEnter({props}) {
  return (
    <>
      <button className={styles.btn_enter}>{props}</button>
    </>
  );
}

export default BtnEnter;
