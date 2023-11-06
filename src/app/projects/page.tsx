import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageTesda from '@/images/tesda.jpg'
import imageForm from '@/images/form.png'
import imagePresentation from '@/images/presentation.jpg'
import { Button } from '@/components/Button'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function TESDA() {
  return (
    <Section
      title="Skill Enhancement: Empowering Through TESDA's Online Programs"
      image={{ src: imageTesda, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <strong className="font-semibold text-neutral-950">
            TESDA Online Program (TOP)
          </strong>{' '}
          is a web-based platform that offers free Massive Open Online Courses
          (MOOCs) for the technical education and skills development of the
          Filipino workers.
        </p>
        <p>
          Through the use of information and communication technologies, the TOP
          provides an{' '}
          <strong className="font-semibold text-neutral-950">effective</strong>{' '}
          and{' '}
          <strong className="font-semibold text-neutral-950">efficient</strong>{' '}
          way to deliver technical-vocational education and training at the
          learner’s own space and time.
        </p>
        <p>
          The TOP is available for blended learning through the{' '}
          <strong className="font-semibold text-neutral-950">
            Multi-Regional TESDA Online Program (MRTOP)
          </strong>{' '}
          offered by TESDA Technology Institutions (TTIs).
        </p>
      </div>
      <div className="mt-5 flex items-center gap-x-8">
        <Button href="/certificates">View More</Button>
      </div>
    </Section>
  )
}

function Presentation() {
  return (
    <Section
      title="Designing IT Infrastructure for 'Stylez': Bridging Technology and Fashion"
      image={{ src: imagePresentation, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          The objective of this activity was to{' '}
          <strong className="font-semibold text-neutral-950">design</strong> an
          IT infrastructure tailored to the{' '}
          <strong className="font-semibold text-neutral-950">needs</strong> of a
          small business. This exercise helped participants understand the
          components of IT infrastructure, their{' '}
          <strong className="font-semibold text-neutral-950">functions</strong>,
          and how they contributed to the overall operation of a business.
        </p>
        <p>
          We created{' '}
          <strong className="font-semibold text-neutral-950">"Stylez"</strong>{' '}
          as a small clothing and apparel brand that specialized in trendy and
          fashion-forward clothing for both men and women. It successfully
          operated through both online and physical retail store channels.
        </p>
      </div>
      <div className="mt-5 flex items-center gap-x-8">
        <Button
          href="https://docs.google.com/document/d/1VLMRGapPsnAR_FEfBJwVwWxXl49ju0ZT/edit?usp=sharing&ouid=113390240957587940695&rtpof=true&sd=true"
          target="_blank"
        >
          View More
        </Button>
      </div>
    </Section>
  )
}

function Form() {
  return (
    <Section
      title="Efficient Enrollment and Grade Computation System Developed with C# and Microsoft Access"
      image={{ src: imageForm, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We developed a{' '}
          <strong className="font-semibold text-neutral-950">
            comprehensive system
          </strong>{' '}
          that integrated an efficient enrollment form with automated grade
          computation, using C# programming and Microsoft Access for data
          management.
        </p>
        <p>
          This system{' '}
          <strong className="font-semibold text-neutral-950">simplified</strong>{' '}
          the enrollment process, ensuring{' '}
          <strong className="font-semibold text-neutral-950">accuracy</strong>{' '}
          and{' '}
          <strong className="font-semibold text-neutral-950">
            convenience
          </strong>{' '}
          for students, while also aiding instructors by automating the
          calculation of grades, thus enhancing the overall educational
          experience.
        </p>
      </div>
      <div className="mt-5 flex items-center gap-x-8">
        <Button
          href="https://drive.google.com/file/d/1xx5hF8XJm__AcTkYX1XljQgafuUHuusP/view?usp=sharing"
          target="_blank"
        >
          View More
        </Button>
      </div>
    </Section>
  )
}

export const metadata: Metadata = {
  title: 'My Projects',
  description: '',
}

export default function Projects() {
  return (
    <>
      <PageIntro eyebrow="" title="My Projects">
        <p>
          I take pride in showcasing my computer science projects, which
          illustrate my hands-on experience and proficiency in various technical
          domains. These projects serve as a testament to my dedication and
          skills as a computer science student.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <TESDA />
        <Presentation />
        <Form />
      </div>
    </>
  )
}
