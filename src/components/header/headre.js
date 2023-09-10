import Image from "next/image";
import styles from "@/components/header/Header.module.scss";
import container from "@/img/icon/container.svg";
import logo from "@/img/logo.png";
import NoRegist from "@/img/icon/NoRegist.svg";
import Vector from "@/img/icon/Vector.svg";

import { useSpring, animated } from "@react-spring/web";

function header() {
  const springs = useSpring({
    config: { duration: 2000 },
    from: { transform: "rotateY(0deg)" },
    to: { transform: "rotateY(360deg)" },
  });

  return (
    <header id="qwe" className={styles.header}>
      <div className={styles.header__block}>
        <nav className={styles.header__nav}>
          <div className={styles.header__logo}>
            <Image className={styles.logo_imge} src={logo} />
          </div>
          <p className={styles.header__p}>Предметы</p>
          <p className={styles.header__p}>Теория</p>
          <p className={styles.header__p}>Повторение</p>
          <p className={styles.header__p}>Тесты</p>
        </nav>
        <div className={styles.header__box_btn}>
          <animated.div style={springs}>
            <Image className={styles.header__img_reg} src={NoRegist} />
            <Image className={styles.header__img_vec} src={Vector} />
          </animated.div>
          <button className={styles.header__btn}>
            <Image className={styles.header__btn_imge} src={container} />
            <p className={styles.header__btn_p}>В Банк заданий</p>
          </button>
        </div>
      </div>
    </header>
  );
}

export default header;
