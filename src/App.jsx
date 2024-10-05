import Header from './Header.jsx'
import BlogList from './BlogList.jsx'
import './cssModule/reset.css';
import styles from './cssModule/styles.module.css'

const App = () => {
  return (
    <>
      <div
        style={{
          '--color-primary': '#333',
          '--color-secondary': '#06c',
          '--color-border': '#ccc',
          '--color-gray': '#888',
        }}
      >
        <Header />
        <div className={styles.content}>
          <BlogList />
        </div>
      </div>
    </>
  );
}

export default App;
