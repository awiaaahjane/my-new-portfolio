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

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this program
      </h3>
      <TagList className="mt-4">
        <TagListItem>Online Courses</TagListItem>
        <TagListItem>Assessment Tools</TagListItem>
        <TagListItem>Learning Materials</TagListItem>
      </TagList>
      <div className="mt-5 flex items-center gap-x-8">
        <Button href="/contact">View More</Button>
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
        <Button href="/contact">View More</Button>
      </div>
    </Section>
  )
}

function Form() {
  return (
    <Section
      title="Efficient Enrollment and Grade Computation System Developed with C# and Microsoft Access"
      image={{ src: imageMeeting, shape: 1 }}
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
        <Button href="/contact">View More</Button>
      </div>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            The first part of any partnership is getting our designer to put
            your logo in our template. The second step is getting them to do the
            colors.
          </GridListItem>
          <GridListItem title="Efficient">
            We pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>
          <GridListItem title="Honest">
            We are transparent about all of our processes, banking on the simple
            fact our clients never actually read anything.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
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

      <Values />

      <ContactSection />
    </>
  )
}
