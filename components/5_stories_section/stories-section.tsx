import Image from "next/image";
import styles from "./stories-section.module.scss";
export default function StoriesSection() {
  return (
    <section className={styles.stories_section} id="stories_section">
      <div className={styles.stories_section_bg_box}>
        <video className={styles.stories_section_bg_box_video} autoPlay loop muted>
          <source src="/media/tunnel-video.mp4" type="video/mp4" />
          <source src="/media/tunnel-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h2 className={`${styles.heading_2} ${styles.u_medium_margin_bottom}`}>
        See What Past Travelers Have to Say
      </h2>
      <div className={styles.story_grid}>
        <div className={styles.story_box}>
          <figure className={styles.story_box_shape_box}>
            <Image
              className={styles.story_box_shape_box_image}
              src="/media/woman-stare2.jpg"
              alt="shape"
              fill
            />
            <figcaption className={styles.story_box_shape_box_caption}>Emily Garcia</figcaption>
          </figure>
          <div className={styles.story_box_text_box}>
            <h3 className={styles.heading_3}>Best Year of My Life</h3>
            <p className={styles.paragraph}>
              {
                "Wow, where do I even begin? My journey with the Novice Tier was nothing short of extraordinary. The planets we visited were breathtaking, and the luxurious spaceship accommodations made me feel like royalty. The tour guides were knowledgeable and friendly, making the whole experience even more enjoyable. I met amazing fellow travelers and made memories that will last a lifetime. This was hands down the best year of my life. I can't recommend these space tours enough. Can't wait for my next adventure!"
              }
            </p>
          </div>
        </div>

        <div className={styles.story_box}>
          <figure className={styles.story_box_shape_box}>
            <Image
              className={styles.story_box_shape_box_image}
              src="/media/guy-cliff.jpg"
              alt="shape"
              fill
            />
            <figcaption className={styles.story_box_shape_box_caption}>Josh Muller</figcaption>
          </figure>
          <div className={styles.story_box_text_box}>
            <h3 className={styles.heading_3}>{"I've Got No Regrets"}</h3>
            <p className={styles.paragraph}>
              {
                "The Pro Tier was an absolute blast! I've always been an adventurer, but this was next level. 25 planets in 5 years? Sign me up! The sights, the experiences, the people... it was all out of this world. Literally! The spaceship was top-notch, and the tour guides were the best. They knew their stuff and made sure we had a great time. I've got no regrets, only incredible memories. If you're thinking about it, just do it. You won't be disappointed. Can't wait for my next space adventure!"
              }
            </p>
          </div>
        </div>
        <button className={styles.link_button}>Read more stories &rarr;</button>
      </div>
    </section>
  );
}
