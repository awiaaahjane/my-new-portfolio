import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import a1 from '@/images/1.jpg'
import a2 from '@/images/2.jpg'
import a3 from '@/images/3.jpg'
import a4 from '@/images/4.jpg'
import a5 from '@/images/5.jpg'
import a6 from '@/images/6.jpg'
import a7 from '@/images/7.jpg'
import a8 from '@/images/8.jpg'
import a9 from '@/images/9.jpg'
import a11 from '@/images/11.jpg'
import a12 from '@/images/12.jpg'
import a13 from '@/images/13.jpg'
import a14 from '@/images/14.jpg'
import a15 from '@/images/15.jpg'
import a16 from '@/images/16.jpg'
import a17 from '@/images/17.jpg'
import a18 from '@/images/18.jpg'
import a19 from '@/images/19.jpg'
import a20 from '@/images/20.jpg'
import a21 from '@/images/21.jpg'
import { loadArticles } from '@/lib/mdx'

const journey = [
  {
    title: 'My Arts',
    people: [
      {
        name: 'Portrait of Post Malone',
        role: 'Materials used: pencil and vellum board',
        image: { src: a1 },
      },
      {
        name: ' Random portrait on Google',
        role: 'Materials used: faber castell colored pencils and vellum board',
        image: { src: a2 },
      },
      {
        name: 'Portrait of Justin Bieber',
        role: 'Materials used: faber castell colored pencils and vellum board',
        image: { src: a3 },
      },
      {
        name: 'Cartoon portrait of Ed Sheeran',
        role: 'Materials used: faber castell colored pencils and vellum board',
        image: { src: a4 },
      },
      {
        name: 'Portrait of Kathryn Bernardo',
        role: 'Materials used: faber castell colored pencils and vellum board',
        image: { src: a5 },
      },
      {
        name: 'Random eye on Google',
        role: 'Materials used: faber castell colored pencils and vellum board',
        image: { src: a6 },
      },
      {
        name: 'Portrait of blue butterfly',
        role: 'Materials used: faber castell colored pencils and vellum board',
        image: { src: a7 },
      },
      {
        name: 'Portrait of colorful fishes',
        role: 'Materials used: styrofoam board and paints',
        image: { src: a8 },
      },
      {
        name: 'Portrait of my grade 10 self',
        role: 'Materials used: pencil and bondpaper',
        image: { src: a9 },
      },
      {
        name: 'Sketching some random face on Google',
        role: 'Materials used: pencil and vellum board',
        image: { src: a21 },
      },
      {
        name: 'Portrait of Emma Watson',
        role: 'Materials used: pencil and bondpaper',
        image: { src: a11 },
      },
      {
        name: 'Portrait of Ash',
        role: 'Materials used: pencil and vellum board',
        image: { src: a12 },
      },
      {
        name: 'Painting of SpongeBob and his friends',
        role: 'Materials used: styrofoam board and paints',
        image: { src: a13 },
      },
      {
        name: 'Random eye on Google',
        role: 'Materials used: pencil and bondpaper',
        image: { src: a14 },
      },
      {
        name: 'Random child on Google',
        role: 'Materials used: pencil and vellum board',
        image: { src: a15 },
      },
      {
        name: 'Portrait of my grade 10 classmate',
        role: 'Materials used: ballpen and notebook',
        image: { src: a16 },
      },
      {
        name: 'Portrait of Mr. Bean',
        role: 'Materials used: pencil and vellum board',
        image: { src: a17 },
      },
      {
        name: 'Portrait of Billie Eilish',
        role: 'Materials used: pencil and vellum board',
        image: { src: a18 },
      },
      {
        name: 'Portrait of Lee Min-ho',
        role: 'Materials used: pencil and vellum board',
        image: { src: a19 },
      },
      {
        name: 'Sketching random cute cat',
        role: 'Materials used: pencil and vellum board',
        image: { src: a20 },
      },
    ],
  },
]

function Arts() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {journey.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-5xl font-semibold text-neutral-950 ">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-4">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96   object-contain   transition duration-1000 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="text-base/2 font-display font-semibold  text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'My Arts',
  description: '',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return <Arts />
}
