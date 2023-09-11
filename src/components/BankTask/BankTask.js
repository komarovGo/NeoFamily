import Image from "next/image";
import styles from "@/components/BankTask/BankTask.module.scss";
import go from "@/img/icon/go.svg";
import arrow from "@/img/icon/arrow.svg";

import { useSpring, animated } from "@react-spring/web";

function BankTask() {
  const springs = useSpring({
    config: { duration: 2000 },
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(-360deg)" },
  });

  return (
    <section className={styles.bank}>
      <div className={styles.bank__content}>
        <div className={styles.bank__item}>
          <animated.div style={springs} className={styles.item__arrow}>
            <Image className={styles.item__arrow} src={arrow} />
          </animated.div>
          <div>
            <button
              style={{ backgroundColor: "#CDE0A4" }}
              className={styles.item__btn}
            >
              <Image className={styles.item__img} src={go} />
              Биология
            </button>
            <button
              style={{ margin: "0px 20px", backgroundColor: "#D4DDEE" }}
              className={styles.item__btn}
            >
              <Image className={styles.item__img} src={go} />
              Химия
            </button>
            <button
              style={{ backgroundColor: "#F9E48A" }}
              className={styles.item__btn}
            >
              <Image className={styles.item__img} src={go} />
              Русский язык
            </button>
          </div>
          <div>
            <button
              style={{ marginRight: "20px", backgroundColor: "#B3D4E5" }}
              className={styles.item__btn}
            >
              <Image className={styles.item__img} src={go} />
              Профильная математика
            </button>
            <button
              style={{ backgroundColor: "#ACD5B7" }}
              className={styles.item__btn}
            >
              <Image className={styles.item__img} src={go} />
              Обществознание
            </button>
          </div>
          <div>
            <button
              style={{ backgroundColor: "#F5C6AA" }}
              className={styles.item__btn}
            >
              <Image className={styles.item__img} src={go} />
              История
            </button>
            <button
              style={{ margin: "0px 20px", backgroundColor: "#76C1C1" }}
              className={styles.item__btn}
            >
              <Image className={styles.item__img} src={go} />
              Физика
            </button>
            <button
              style={{ backgroundColor: "#F4BE9A" }}
              className={styles.item__btn}
            >
              <Image className={styles.item__img} src={go} />
              Литература
            </button>
          </div>
          <div>
            <button
              style={{ marginRight: "20px", backgroundColor: "#DBDBDB" }}
              className={styles.item__btn}
            >
              <Image className={styles.item__img} src={go} />
              Информатика
            </button>
            <button
              style={{ backgroundColor: "#7CB8E0" }}
              className={styles.item__btn}
            >
              <Image className={styles.item__img} src={go} />
              Английский язык
            </button>
          </div>
          <div>
            <button
              style={{ marginRight: "20px", backgroundColor: "#A3D8AF" }}
              className={styles.item__btn}
            >
              <Image className={styles.item__img} src={go} />
              География
            </button>
            <button
              style={{ backgroundColor: "#B3D4E5" }}
              className={styles.item__btn}
            >
              <Image className={styles.item__img} src={go} />
              Базовая математика
            </button>
          </div>
        </div>
        <div className={styles.bank__info}>
          <h3 className={styles.info__title}>Банк заданий по всем предметам</h3>
          <p className={styles.info__p}>
            Десятки тысяч качественных заданий по твоим предметам. Формата
            ЕГЭ-2024, уровня сложности экзамена и выше, с ответами и
            пояснениями. Можно фильтровать по темам, линиям или использовать
            поиск! 
          </p>
          <h4 className={styles.info__h4}>
            Выбирай предмет и переходи в Банк заданий прямо сейчас!
          </h4>
        </div>
      </div>
    </section>
  );
}

export default BankTask;
