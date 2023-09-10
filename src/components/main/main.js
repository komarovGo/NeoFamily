import Image from "next/image";
import styles from "@/components/main/Main.module.scss";
import image from "@/img/image.png";
import spam from "@/img/try.png";
import line from "@/img/icon/line.svg";
import BigPlus from "@/img/icon/BigPlus.svg";
import eye from "@/img/icon/eye.svg";
import BtnVK from "@/components/button/Button";

import { useSpring, animated } from "@react-spring/web";

function Main() {
  const springs = useSpring({
    config: { duration: 2000 },
    from: { opacity: 0, transform: "translateY(-7rem)" },
    to: { opacity: 1, transform: "translateY(2rem)" },
  });

  return (
    <section className={styles.main}>
      <div className={styles.main__content}>
        <div className={styles.main__title}>
          <div className={styles.title__box_h1}>
            <animated.div style={springs}>
              <Image className={styles.title__spam_try} src={spam} />
            </animated.div>
            <animated.div style={springs}>
              <Image className={styles.title__spam_line} src={line} />
            </animated.div>
            <h1 className={styles.title__h1}>
              NeoFamily — умная подготовка к ЕГЭ
            </h1>
          </div>
          <h3 className={styles.title__h3}>
            <animated.div style={springs}>
              <Image className={styles.title__img_plus} src={BigPlus} />
            </animated.div>
            Более 30 000 заданий по всем предметам ЕГЭ. <br />
            Бесплатная теория, тесты и умное повторение
          </h3>
          <div className={styles.title__box_btn}>
            <BtnVK />
            <button className={styles.title__btn_enter}>Войти</button>
          </div>
        </div>
        <div className={styles.main__registration}>
          <form className={styles.registration__form}>
            <h2 className={styles.registration__h2}>
              Регистрируйся, чтобы начать обучение
            </h2>
            <input
              placeholder="Телефон или Email"
              type="text"
              className={styles.registration__input}
            />
            <div className={styles.registration__input_eye}>
              <Image className={styles.registration__input_svg} src={eye} />
              <input
                placeholder="Пароль"
                type="password"
                className={styles.registration__input}
              />
            </div>
            <div className={styles.registration__input_eye}>
              <Image className={styles.registration__input_svg} src={eye} />
              <input
                placeholder="Подтверждение пароля"
                type="password"
                className={styles.registration__input}
              />
            </div>
            <button className={styles.registration__btn}>
              Зарегистрироваться
            </button>
            <p className={styles.registration__p}>
              Нажимая «Зарегистрироваться», вы выражаете
              <span className={styles.span}>
                согласие на обработку персональных данных,
              </span>
              а также подтверждаете ознакомление и согласие с условиями
              <span className={styles.span}> Оферты</span> и
              <span className={styles.span}>
                Политики <br />
                конфиденциальности.
              </span>
            </p>
          </form>
          <div className={styles.registration__img}>
            <Image src={image} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
