import HeroSupports from "../../components/HeroSupports/HeroSupports";
import styles from "./About.module.scss";

const About = () => {
  return (
    <main className={styles.main}>
      <section className={styles.about}>
        <div className={styles.aboutContainer}>
          <h2 className={styles.title}>Soldiers`Support</h2>
          <div className={styles.spoilersContainer}>
            <div className={styles.spoiler}>
              <h3 className={styles.spoilerTitle}>Про нас</h3>
              <div className={styles.textContainer}>
                <p className={styles.spoilerText}>
                  Soldiers`Support - це не лише платформа, але й спільнота, яка виникла з потреби
                  об'єднати усі благодійні зусилля в єдину базу даних. Наша історія почалася під час
                  воєнних подій в Україні проти Росії, коли ми відчули необхідність створити щось,
                  що допоможе людям висловити свою підтримку та зробити реальні зміни.
                </p>
                <p className={styles.spoilerText}>
                  БФ "Soldiers`Support" народився з бажання створити чітку базу даних благодійних
                  зборів - від підтримки військових до допомоги місцевим громадам, які постраждали
                  від війни чи природних катаклізмів. Ми прагнемо забезпечити кожному можливість не
                  лише приєднатися до існуючих ініціатив, але й створити власний благодійний збір
                  всього за кілька кліків.
                </p>
                <p className={styles.spoilerText}>
                  Ми систематично розвиваємося та розширюємо можливості, щоб кожен, хто підтримує
                  нашу мету, міг знайти тут свій спосіб допомоги та взаємодії. <br /> Долучайтеся до
                  нас, долучайтеся до змін - разом ми здатні зробити більше!
                </p>
              </div>
            </div>
            <div className={styles.spoiler}>
              <h3 className={styles.spoilerTitle}>Наші цілі</h3>
              <div className={styles.textContainer}>
                <p className={styles.spoilerText}>
                  Ціль "Soldiers`Support" полягає в тому, щоб створити прозору та динамічну
                  платформу, яка об'єднує та спрощує благодійні зусилля для підтримки тих, хто
                  найбільше потребує допомоги. Ми прагнемо:
                </p>
                <ol className={styles.spoilerList}>
                  <li className={styles.listItem}>
                    Об'єднувати Громаду: наша ціль - об'єднати людей, які бажають допомагати,
                    надаючи їм зручну та ефективну платформу для підтримки в різних благодійних
                    ініціативах.
                  </li>
                  <li className={styles.listItem}>
                    Забезпечити Прозорість: ми прагнемо забезпечити абсолютну прозорість у розподілі
                    коштів та цільовому використанні зібраних пожертв. Кожен донор має право знати,
                    як його внесок сприяє реальним змінам.
                  </li>
                  <li className={styles.listItem}>
                    Підтримувати Різноманіття Зборів: наша платформа ставить за мету об'єднати
                    різноманітні благодійні проекти, які вирішують різні соціальні проблеми, від
                    підтримки військових до допомоги постраждалим від природних катастроф.
                  </li>
                  <li className={styles.listItem}>
                    Сприяти Активній Участі: ми хочемо, щоб кожен користувач не лише брав участь у
                    наявних зборах, але й мав можливість створювати свої власні благодійні
                    ініціативи.
                  </li>
                  <li className={styles.listItem}>
                    Розвивати та Зростати: "Soldiers`Support" прагне постійно розвивати свої
                    можливості та сервіси, щоб надавати ще більше варіантів для допомоги та
                    підтримки. Наша віра базується на постійному розвитку і готовності адаптуватися
                    до змін потреб нашої спільноти.
                  </li>
                </ol>
                <p className={styles.spoilerText}>
                  Ціль "Soldiers`Support" - це не лише надання допомоги, але й формування спільноти
                  людей, які об'єднують свої зусилля для досягнення спільної мети — зробити світ
                  кращим місцем через активну благодійність та взаємодію.
                </p>
              </div>
            </div>
            <div className={styles.spoiler}>
              <h3 className={styles.spoilerTitle}>Наші цінності</h3>
              <div className={styles.textContainer}>
                <p className={styles.spoilerText}>
                  Наші цінності відображають суть та мету нашої платформи «Soldiers`Support»:
                </p>
                <ol className={styles.spoilerList}>
                  <li className={styles.listItem}>
                    Солідарність: Ми віримо в єднання сил для досягнення спільної мети, підтримки та
                    допомоги тим, хто цього потребує.
                  </li>
                  <li className={styles.listItem}>
                    Прозорість: Ми прагнемо забезпечити максимальну прозорість у сфері благодійних
                    зборів, дозволяючи кожному бачити, чке значення має його вклад.
                  </li>
                  <li className={styles.listItem}>
                    Свобода вибору: Надаючи можливість обирати як благодійні збори, так і створювати
                    їх, ми поважаємо індивідуальні переконання та бажання кожного учасника.
                  </li>
                  <li className={styles.listItem}>
                    Відданість місії: Наша команда віддана меті покращити життя тих, хто опинився в
                    складних обставинах через війну, природні катастрофи чи інші негаразди.
                  </li>
                  <li className={styles.listItem}>
                    Інновації: Ми відкриті для новаторських ідей та проектів, спрямованих на
                    поліпшення добробуту та благополуччя спільноти.
                  </li>
                </ol>
                <p className={styles.spoilerText}>
                  Ці цінності лежать в основі наших дій, надаючи платформі "Soldiers' Support"
                  конкретний та значущий характер у галузі благодійності.
                </p>
              </div>
            </div>
            <div className={styles.spoiler}>
              <h3 className={styles.spoilerTitle}>Команда розробників</h3>
              <div className={styles.textContainer}>
                <p className={styles.spoilerText}>
                  Губчакевич Вадим - Project manager, UI/UX designer, копірайтер
                  <br />
                  Боцюн Денис - Frontend, backend developer, технічний спеціаліст
                  <br />
                  Алексюк Володимир - Frontend, backend developer
                  <br />
                  Гуменюк Крістіна - UI/UX designer, копірайтер
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HeroSupports />
    </main>
  );
};

export default About;
