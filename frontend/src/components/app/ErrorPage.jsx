import { IoIosWarning } from "react-icons/io";
import { Link } from "react-router";
import styles from "../../styles/app/ErrorPage.module.css";

function ErrorPage() {

    return (

        <main className={styles.errorContainer}>
            <div className={styles.errorContent}>
                <IoIosWarning className={styles.warningIcon} aria-hidden="true" />

                <h1 className={styles.title}>Page not found</h1>

                <p className={styles.description}>The page you are looking for doesn't exist.</p>

                <Link to="/" className={styles.homeLink}>Go back</Link>
            </div>
        </main>
    );
}

export default ErrorPage;