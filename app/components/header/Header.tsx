import Link from 'next/link'
import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

export const Header: FC = () => {
  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="font-medium text-7xl">NAHUEL</h1>
        <p className="text-xl mt-2">Desarrollador Frontend</p>
        <nav className="mt-24 max-lg:hidden">
          <ul className="flex flex-col w-max gap-2 font-mono">
            <Link
              href="#about"
              className="transition-all hover:text-slate-200 focus:text-slate-200"
            >
              Sobre Mi
            </Link>
            <Link
              href="#experience"
              className="transition-all hover:text-slate-200 focus:text-slate-200"
            >
              Experiencia
            </Link>
            <Link
              href="#projects"
              className="transition-all hover:text-slate-200 focus:text-slate-200"
            >
              Proyectos
            </Link>
          </ul>
        </nav>
      </div>
      <footer>
        <ul className="text-3xl flex gap-6 mt-8">
          <li className="cursor-pointer transition-all hover:text-slate-200 focus:text-slate-200">
            <a href="https://github.com/NanoCode2022" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="cursor-pointer transition-all hover:text-slate-200 focus:text-slate-200">
            <a href="https://www.instagram.com/nahuel_dev/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className="cursor-pointer transition-all hover:text-slate-200 focus:text-slate-200">
            <a
              href="https://www.linkedin.com/in/nahuel-gerez-6927b0239/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}
