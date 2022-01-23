import styles from "./navbar.module.css";

function navbar() {
  return (
    <navbar className={styles.navbar}>
      <h1>QR Generator</h1>
    </navbar>
  );
}

export default navbar;