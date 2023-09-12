import styles from '@/styles/section.module.css';

export default function Section(props) {
    return (
        <div {...props} className={styles[props.dense ? 'section' : 'section-large']}>
            {props.children}
        </div>
    )
}