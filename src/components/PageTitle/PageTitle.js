import React from 'react';
import styles from './PageTitle.module.scss';

function PageTitle({children}) {
    return (
        <h1 className={styles.title}>{children}</h1>
    )
}

export default PageTitle
