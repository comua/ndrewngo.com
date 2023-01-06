import React from 'react'

import { Project } from './Project'

export const Projects = ({ projects }) => {
  return (
    <>
      {projects.map((project, index) => {
        return <Project key={`project-${project.name}`} {...{ project, index }} />
      })}
    </>
  )
}
