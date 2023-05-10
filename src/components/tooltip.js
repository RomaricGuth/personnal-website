import styles from '@/styles/tooltip.module.css'

export default function Tooltip({ children, text }) {
    return (
        <div class={styles['tooltip-container']}>
            {children}
            <span class={styles.tooltip}>{text}</span>
        </div>
    )
}