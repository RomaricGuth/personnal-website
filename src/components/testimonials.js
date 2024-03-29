"use client";

import { useTranslation } from "@/utils/translation/client_utils";
import styles from "@/styles/testimonials.module.css";
import Image from "./image";
import { technos } from "@/utils/technos";

export default function Testimonials() {
    const { t } = useTranslation("home");
    const testimonials = [
        {
            "author": "Thomas Landais",
            "picture": "/assets/thomas-landais.jpeg",
            "linkedin": "https://www.linkedin.com/in/thomas-landais",
            "job": t('thomasJob'),
            "comment": "Pendant 3 ans, nous avons travaillé en collaboration avec Romaric sur une plateforme de donnée. Il est curieux, creuse ses sujets en autonomie et c'est quelqu'un avec lequel il est très agréable de travailler."
        }
    ];

    return (
        <div className={styles.testimonials}>
            {testimonials.map((testimonial) => (
                <div key={testimonial.author} className={styles.testimonial}>
                    <Image src={testimonial.picture} width={100} height={100} alt={"picture of " + testimonial.author} className={styles['author-pic']} />
                    <blockquote className={styles.comment}>{testimonial.comment}</blockquote>
                    <a href={testimonial.linkedin} className="flex flex-row items-center gap-2">
                        <cite className={styles['author-name']}>{testimonial.author}</cite>
                        <Image src="/assets/linkedin.png" width={20} height={20} alt="Linkedin logo" />
                    </a>
                    <p className={styles['author-job']}>{testimonial.job}</p>
                </div>
            ))}
        </div>
    )
}