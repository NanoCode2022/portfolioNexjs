import React, { FC } from 'react'
import mock from '../../../assets/mock.json'
import Image from 'next/image'
export const Projects: FC = () => {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      {mock.projects.map(value => (
        <div
          key={value.id}
          className="group relative mb-24 flex max-md:flex-col max-md:items-center"
        >
          <div className="absolute -inset-x-4 -inset-y-4  hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
          <Image
            loading="lazy"
            src={value.image}
            alt={value.name}
            width={200}
            height={100}
            style={{ height: 100 }}
          />
          <div className="z-10 w-full ml-4">
            <h3 className="max-md:text-center">
              <a
                href={value.link}
                target="_blank"
                className="text-lg cursor-pointer p-2 inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link"
              >
                {value.name}
              </a>
            </h3>
            <p>{value.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
