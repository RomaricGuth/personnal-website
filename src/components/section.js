import styles from '@/styles/section.module.css';

export default function Section(props) {
    return (
        <div class={"py-12 px-8 md:px-16 lg:px-[20%] " + props.class}>
            {props.children}
        </div>
    )
}