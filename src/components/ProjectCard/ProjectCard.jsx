import React from 'react'
import { Col } from 'react-bootstrap'
import styles from './projectcard.module.css'

function ProjectCard({title, description, imgUrl}) {
  return (
    <Col sm={6} md={4}>
      <div className={styles.projimgbx}>
        <img src={imgUrl} alt="img card" className='img-fluid'/>
        <div className={styles.projtxtx}>
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard