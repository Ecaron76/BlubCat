import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
export default function Home() {
  return (
    <main>
      <Header />
      <section className={styles.sectionMe}>
        <div className={styles.listCardMe}>
          <div className={styles.cardMe}>
            <h2>They share me ! </h2> 
            <div className={styles.contentMe}>
              
              <div className={styles.textMe}>Hey there! I'm BlubCat, and I love to chirp and purr on Twitter! Follow me for some pawsome tweets and bluby fun. Blub!</div>
              <div className={styles.meImgContainer}>
              <Image src={'/assets/images/cardme/blubass.jpg'} alt="Blub cat is showing the chart !" width={150} height={120} />
            </div>
            </div>
            <button className={styles.buttonMe}>
              Blullowb me on X !
            </button>
          </div>
          <div className={styles.cardMe}>
            <h2>They grow me!</h2> 
              <div className={styles.contentMe}>
                <div className={styles.textMe}>Join me on an epic adventure through the vast realms of the crypto universe! Explore new territories, discover hidden treasures, and watch me grow into the mightiest of BlubCat!</div>
                <div className={styles.meImgContainer}>
                <Image src={'/assets/images/cardme/blubshowchart.jpg'} alt="Blub cat is showing the chart !" width={150} height={150} />
              </div>
            </div>
            <button className={styles.buttonMe}>
              Bluyb me on DexScreener !
            </button>
          </div>
          <div className={styles.cardMe}>
          <h2>They love me ! </h2> 
            <div className={styles.contentMe}>
              <div className={styles.textMe}>Embark on a magical journey with me on Telegram! Let's chat, share memes, and spread joy together in the BlubCat community. Your blubssage awaits! </div>
              <Image src={'/assets/images/cardme/blubarmy.jpg'} alt="Blub cat is showing the chart !" width={150} height={150} />
            </div>
            <button className={styles.buttonMe}>
              Bluoinb me on Telegram !
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
