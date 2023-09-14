import Image from "next/image";
import styles from "@/components/footer/Footer.module.scss";

import logo from "@/img/logo.png";
import up from "@/img/icon/up.svg";
import phone from "@/img/icon/PhoneBlue.svg";
import email from "@/img/icon/mail.svg";
import skolkovo from "@/img/skolkovo.png";
import license from "@/img/license.png";
import youtube from "@/img/icon/youtube.svg";
import vk from "@/img/icon/vk.svg";
import telegram from "@/img/icon/telegram.svg";

import BtnClas from "@/components/button/BtnClas";

function footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__block}>
        <div className={styles.footer__top}>
          <div className={styles.top__logo}>
            <Image src={logo} />
          </div>
          <nav className={styles.top__nav}>
            <Image src={youtube} />
            <Image src={vk} />
            <Image src={telegram} />
          </nav>
          <a href="#qwe">
            <button className={styles.top__btn}>
              <Image src={up} />
              <p className={styles.top__p}>Наверх</p>
            </button>
          </a>
        </div>
        <div className={styles.footer__mid}>
          <div className={styles.footer__mid_left}>
            <div className={styles.mid__contacts}>
              <h3 className={styles.footer__title}>Выслушаем и поможем 😉✌</h3>
              <div className={styles.mid__connection}>
                <div className={styles.mid__phone}>
                  <Image src={phone} />
                  <p>+7 (952) 722-87-33</p>
                </div>
                <div className={styles.mid__phone}>
                  <Image src={email} />
                  <p>school@neofamily.ru</p>
                </div>
              </div>
              <p className={styles.mid__addressp}>
                197101, г. Санкт-Петербург, вн.тер.г. муниципальный округ
                Посадский, ул. Рентгена, д. 9Б, помещ. 1-Н, офис 9
              </p>
            </div>
            <div className={styles.mid__diplom}>
              <Image src={license} />
              <Image src={skolkovo} />
            </div>
          </div>
          <div className={styles.footer__mid_right}>
            <div className={styles.footer__mid_centr}>
              <div className={styles.mid__info}>
                <h3
                  className={styles.footer__title}
                  style={{ paddingBottom: "8px" }}
                >
                  NeoFamily - умная подготовка к ЕГЭ
                </h3>
                <a href="#" className={styles.footer__a}>
                  Предметы
                </a>
                <a href="#" className={styles.footer__a}>
                  Теория
                </a>
                <a href="#" className={styles.footer__a}>
                  Повторение
                </a>
                <a href="#" className={styles.footer__a}>
                  Тесты
                </a>
              </div>
              <div className={styles.mid__offer_box}>
                <div className={styles.mid__offer}>
                  <a href="#" className={styles.mid__offer_a}>
                    Правовая информация
                  </a>
                  <a href="#" className={styles.mid__offer_a}>
                    Оферта
                  </a>
                </div>
                <a href="#" className={styles.mid__offer_a}>
                  Пользовательское соглашение
                </a>
              </div>
            </div>
            <div className={styles.mid__projects}>
              <h3
                style={{ paddingBottom: "8px" }}
                className={styles.footer__title}
              >
                Проекты
              </h3>
              <a href="#" className={styles.footer__a}>
                NeoFamily
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <p style={{ paddingRight: "8px" }} className={styles.bottom__p}>
            © ООО “НЕОФЭМИЛИ”
          </p>
          <p className={styles.bottom__p}>ИНН: 7813660849</p>
          <p className={styles.bottom__p}>КПП: 781301001</p>
          <p className={styles.bottom__p}>ОГРН: 1227800019105</p>
        </div>
      </div>
    </footer>
  );
}

export default footer;
