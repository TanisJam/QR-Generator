import styles from './form.module.css';

function form({ setQuery }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    if (query === "") return;
    setQuery(query);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input id="query" type="text" placeholder="Your text here" className={styles.input}/>
      <button type="submit">Generate</button>
    </form>
  );
}

export default form;
