import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import CHS from '@/images/chslogo.jpg'
import CNES from '@/images/cneslogo.jpg'
import VMSHS from '@/images/vmshslogo.jpg'
import SCC from '@/images/st.clarelogo.png'
import { loadArticles } from '@/lib/mdx'
import { Button } from '@/components/Button'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow=""
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          Balancing programming and life means managing time, enjoying hobbies,
          and socializing.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Time Management" invert>
            I allocate dedicated work hours for coding, ensuring I meet my
            project deadlines, but I also reserve time in the evenings for
            leisure activities, spending time with family, or pursuing hobbies.
          </GridListItem>
          <GridListItem title="Hobbies" invert>
            Alongside my programming projects, I nurture interests like playing
            and watching movies/seriess. These hobbies provide a creative outlet
            and help me unwind, striking a balance between work and life.
          </GridListItem>
          <GridListItem title="Social Interactions" invert>
            I make an effort to engage with friends and attend social events
            regularly, fostering connections outside of the coding world. This
            social interaction adds a valuable dimension to my life beyond
            programming.
          </GridListItem>
        </GridList>
        <div className="mt-6 flex">
          <Button href="/arts" invert>
            View More
          </Button>
        </div>
      </Container>
    </div>
  )
}

const journey = [
  {
    title: 'My Journey',
    people: [
      {
        name: 'St. Clare College',
        role: 'Tertiary',
        image: { src: SCC },
      },
      {
        name: 'Vicente Malapitan Senior High School',
        role: 'Secondary',
        image: { src: VMSHS },
      },
      {
        name: 'Camarin High School',
        role: 'Middle',
        image: { src: CHS },
      },
      {
        name: 'Caloocan North Elementary School',
        role: 'Primary',
        image: { src: CNES },
      },
    ],
  },
]

function Journey() {
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
                            className="h-96   object-contain  grayscale transition duration-1000 group-hover:grayscale-0 motion-safe:group-hover:scale-105"
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
              <div className="mt-10 flex items-center gap-x-8 lg:col-span-4 lg:ml-auto">
                <Button href="/journeyv2">View More</Button>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      {/* <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Studio was started by three friends who noticed that developer
            studios were charging clients double what an in-house team would
            cost. Since the beginning, we have been committed to doing things
            differently by charging triple instead.
          </p>
          <p>
            At Studio, we’re more than just colleagues — we’re a family. This
            means we pay very little and expect people to work late. We want our
            employees to bring their whole selves to work. In return, we just
            ask that they keep themselves there until at least 6:30pm.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container> */}

      <Culture />

      <Journey />

      {/* <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      /> */}
    </>
  )
}
