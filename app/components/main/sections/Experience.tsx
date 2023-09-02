import React, { FC } from 'react'
import mock from '../../../assets/mock.json'
export const Experience: FC = () => {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      {mock.experience.map(value => (
        <div
          key={value.id}
          className="group relative mb-24 flex max-md:flex-col max-md:gap-1"
        >
          <div className="absolute -inset-x-4 -inset-y-4  hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
          <div className="text-sm w-1/4 max-lg:w-1/4 max-md:w-full">
            <span>
              {value.start_time} - {value.end_time}
            </span>
          </div>
          <div className="z-10 pl-2 max-md:pl-0">
            <h3 className="text-xl pb-2 pr-2 inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300">
              {value.name}
            </h3>
            <p className="pb-4">{value.description}</p>
            <ul className="flex flex-wrap gap-2">
              {value.skills.map(skill => (
                <li
                  key={skill}
                  className="bg-teal-400/10 text-teal-400/70 px-4 py-0.5 rounded-lg"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  )
}
