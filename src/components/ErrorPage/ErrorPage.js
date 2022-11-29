import React from 'react'
import PageTitle from '../PageTitle/PageTitle';
import styles from './ErrorPage.module.scss';

function ErrorPage() {
  return (
    <>
      <PageTitle>Ooops!</PageTitle>
      <p className={styles.message}>Page not found...</p>
    </>

  )
}

export default ErrorPage

