import React from 'react'
import styles from '@/css/loader.module.css'

export const LoadingScreen = () => {
  return <div className={styles.loader}></div>
}

export const LoadingData = () => {
  return <p className='text-center text-xl font-semibold'>Loading data...</p>
}

export const NoDataFind = () => {
  return <p className='text-center text-xl font-semibold'>No data find</p>
}
