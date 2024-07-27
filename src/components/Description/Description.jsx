
    import s from "./Description.module.css"

    export default function Description() {
        return (
            <div>
                <h1 className={s.title}>Sip Happens Café</h1>
                <div className={s.span}></div>
                <br />
                <div className={s.span2}></div>
                <p className={s.text}>Please leave your feedback about our service by selecting one of the options below.</p>
            </div>
        )
    }