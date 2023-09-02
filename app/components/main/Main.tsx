import React, { FC } from 'react'
import { Projects } from './sections/Projects'
import { Experience } from './sections/Experience'
export const Main: FC = () => {
  return (
    <div className="pt-24 lg:w-1/2 lg:py-24">
      <h2 className="lg:hidden text-slate-200 font-medium mb-6 text-lg">
        Acerca de
      </h2>
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      >
        <p className="font-medium">
          Hola me llamo Nahuel soy Desarrollador frontend, soy una persona
          autodidacta me he formado atraves de YouTube y cursos (desarrollo web,
          JavaScript, desarrollador fullstack), mi experiencia se basa en lo que
          practico cada día. Mis habilidades se basan mas por el frontend con
          Reactjs. Estoy en busca de trabajo soy una persona dispuesta a
          aprender mas cada día. Espero que te guste mi trabajo.
        </p>
      </section>
      <h2 className="lg:hidden text-slate-200 font-medium mb-6 text-lg">
        Experiencia
      </h2>
      <Experience />
      <h2 className="lg:hidden text-slate-200 font-medium mb-6 text-lg">
        Proyectos
      </h2>
      <Projects />
    </div>
  )
}
