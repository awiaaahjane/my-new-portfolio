import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/TESDA/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoFormDark from '@/images/clients/Form/logo-dark.svg'
import logoFormLight from '@/images/clients/Form/logo-light.svg'
import logoPresentation from '@/images/clients/Presentation/logo-light.svg'
import imageAliah from '@/images/aliah.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro title="My Projects" className="mt-24 sm:mt-32 lg:mt-40">
        <p>
          I take pride in showcasing my computer science projects, which
          illustrate my hands-on experience and proficiency in various technical
          domains. These projects serve as a testament to my dedication and
          skills as a computer science student.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  {/* <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time> */}
                  {caseStudy.date}
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function AboutMe() {
  return (
    <>
      <SectionIntro
        eyebrow="About Me"
        title="Hello, I'm Aliah!"
        className="mt-24 sm:mt-32 lg:mt-40"
      ></SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageAliah}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Technical Mastery">
              I've mastered diverse technical skills, excelling in programming
              languages, development tools, and frameworks. This proficiency
              empowers me to create efficient and scalable code, adapt to
              various project needs, and embrace new technologies when required.
            </ListItem>
            <ListItem title="Innovative Problem Solver">
              My innovative problem-solving skills define me. I blend creativity
              and logic to tackle complex challenges, breaking them into
              manageable parts and crafting unique, effective solutions—key to
              my success as a programmer.
            </ListItem>
            <ListItem title="Effective Communication & Collaboration">
              I excel in effective communication and collaboration, bridging the
              gap between technical and non-technical team members. My soft
              skills foster a harmonious working environment, minimize
              misunderstandings, and ensure alignment with project objectives.
            </ListItem>
            <ListItem title="Attention to Detail & Strong Dedication">
              My unwavering attention to detail is my hallmark. I meticulously
              review my code, follow best practices, and maintain a high level
              of precision. This, coupled with a strong work ethic, ensures I
              consistently meet deadlines, produce clean, maintainable code, and
              deliver exceptional results.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description: 'Discover my amazing Portfolio!',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Discover my amazing Portfolio!
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            I'm a web developer with a flair for creative design and coding
            expertise. Together, let's transform your ideas into stunning online
            experiences.
          </p>
        </FadeIn>
      </Container>
      <AboutMe />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Form', logo: logoFormDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial>

      <ContactSection />
    </>
  )
}
