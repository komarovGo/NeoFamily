import Image from "next/image";
import styles from "@/components/InfoBlock/InfoBlock.module.scss";
import content from "@/img/content.jpg";
import smart from "@/img/smart.png";
import task from "@/img/task.png";
import form from "@/img/form.png";
import spam from "@/img/spam.png";

import BtnVK from "../button/ButtonVK";
import BtnEnter from "@/components/button/ButtonEnter";
import BtnClas from "@/components/button/BtnClas";


function InfoBlock() {
  return (
    <section className={styles.bank}>
      <div className={styles.guide__content}>
        <div className={styles.guide__info}>
          <h3 className={styles.info__h3}>Умные справочники</h3>
          <p className={styles.info__p}>
            Вся нужная теория по темам ЕГЭ — на понятном языке и с дизайнерскими
            иллюстрациями. Идеально, чтобы создать фундамент знаний по предмету.
          </p>
          <BtnEnter props="Зарегистрироваться бесплатно" />
        </div>
        <div className={styles.guide__big_img}>
          <Image style={{borderRadius: "16px"}} className={styles.guide__imge} src={content} />
        </div>
      </div>
      <div className={styles.guide__content}>
        <div className={styles.guide__big_img}>
          <Image
            className={styles.guide__imge}
            src={smart}
          />
        </div>
        <div className={styles.guide__info}>
          <h3 className={styles.info__h3}>Умное повторение</h3>
          <p className={styles.info__p}>
            Система интервального повторения, которая позволит тебе запоминать
            миллиарды терминов/правил без особых усилий. Основана на новейших
            исследованиях памяти.
          </p>
          <BtnEnter props="Зарегистрироваться бесплатно" />
        </div>
      </div>
      <div className={styles.guide__content}>
        <div className={styles.guide__info}>
          <h3 className={styles.info__h3}>Варианты и тесты</h3>
          <p className={styles.info__p}>
            Наша платформа имеет 4 способа генерации тестов - это покрывает
            любые сценарии создания вариантов как лично учеником, так и
            преподавателем. Наш интерфейс безумно удобен и дружелюбен.
          </p>
          <BtnEnter props="Зарегистрироваться бесплатно" />
        </div>
        <div className={styles.guide__big_img}>
          <Image className={styles.guide__imge} src={task} />
        </div>
      </div>
      <div className={styles.guide__content}>
        <div className={styles.guide__info}>
          <div className={styles.info__spam}>
            <Image className={styles.info__spam_img} src={spam} />
            <h2 className={styles.info__h2}>Начни подготовку прямо сейчас!</h2>
          </div>
          <p
            style={{ fontSize: "18px", padding: "8px 0px 24px 0px" }}
            className={styles.info__p}
          >
            Это бесплатно и точно тебе понравится.
          </p>
          <div className={styles.info__box_btn}>
            <BtnVK />
            <BtnClas name="Войти" />
          </div>
        </div>
        <div className={styles.guide__big_img}>
          <Image className={styles.guide__imge} src={form} />
        </div>
      </div>
    </section>
  );
}

export default InfoBlock;
