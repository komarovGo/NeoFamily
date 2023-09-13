import Image from "next/image";
import styles from "@/components/button/Button.module.scss";
import vkmini from "@/img/icon/vkmini.svg";

function BtnVK() {
  return (
    <button className={styles.btn_vk}>
      <Image src={vkmini} />
      Войти через VK ID
    </button>
  );
}

export default BtnVK;
