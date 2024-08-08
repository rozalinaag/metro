import css from './styles.module.css';

export default function Header() {
  return (
    <div className={css.wrapper}>
      <div className={css.title}>Metro Transit</div>
      <div className={css.description}>Show operator your ticket</div>
    </div>
  );
}
