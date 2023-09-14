import Image from "next/image";

import styles from "@/components/button/Button.module.scss";

function BtnClas({ name, svg }) {
  return (
    <>
      <button className={styles.btn_clas}>
        <Image src={svg} />
        {name}
      </button>
    </>
  );
}

export default BtnClas;
