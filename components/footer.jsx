import styles from "./footer.module.css";

function footer() {
  return (
    <footer className={styles.footer}>
      <p>
        <span>
          Made with Next.js by{" "}
          <a
            href="https://linkedin.com/in/mauricionromero"
            target="_blank"
            rel="noreferrer"
          >
            Mauricio Romero
          </a>
        </span>
        <span>
        Source code on{" "}
          <a
            href="https://github.com/TanisJam"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </span>
      </p>
    </footer>
  );
}
export default footer;
