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
import imageMod1 from '@/images/mod1.png'
import imageMod2 from '@/images/mod2.png'
import imageMod3 from '@/images/mod3.png'
import imageMod4 from '@/images/mod4.png'
import imageMod5 from '@/images/mod5.png'
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

function Certificate_1() {
  return (
    <Section title="Introduction to CSS" image={{ src: imageMod1, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          This was the prerequisite module for Computer Systems Servicing NC II.
          It was essential to take this module before proceeding to other
          modules for CSS. This module taught you the{' '}
          <strong className="font-semibold text-neutral-950">
            fundamentals
          </strong>{' '}
          and <strong className="font-semibold text-neutral-950">basics</strong>{' '}
          of the computer system before you proceeded to the actual and hands-on
          computer servicing.
        </p>
      </div>
      <div className="mt-5 flex items-center gap-x-8">
        <Button
          href="https://drive.google.com/file/d/1ZhLQrMfQTJfx-ScfDCth0FJZaHRvq9eQ/view?usp=sharing"
          target="_blank"
        >
          View More
        </Button>
      </div>
    </Section>
  )
}

function Certificate_2() {
  return (
    <Section
      title="Installing and Configuring Computer Systems"
      image={{ src: imageMod2, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          This module was all about installing and configuring computer hardware
          and software. It was the second module for CSS, so you needed to have
          taken the Intro to CSS course before proceeding here. In this module,
          you learned how to{' '}
          <strong className="font-semibold text-neutral-950">
            disassemble
          </strong>{' '}
          and{' '}
          <strong className="font-semibold text-neutral-950">assemble</strong> a
          computer, as well as installed the operating system and necessary
          program applications.
        </p>
      </div>
      <div className="mt-5 flex items-center gap-x-8">
        <Button
          href="https://drive.google.com/file/d/111ZbxE-VMxw8WiF8fwXNP3QTN8FxYdju/view?usp=sharing"
          target="_blank"
        >
          View More
        </Button>
      </div>
    </Section>
  )
}

function Certificate_3() {
  return (
    <Section
      title="Setting Up Computer Networks"
      image={{ src: imageMod3, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          This module was all about setting up computer networks. It was the
          third module for CSS, and it was important that you had completed the
          Intro to CSS and Installing and Configuring Computer Systems modules
          before undertaking this one. In this module, you learned how to{' '}
          <strong className="font-semibold text-neutral-950">create</strong>{' '}
          network cables and{' '}
          <strong className="font-semibold text-neutral-950">configure</strong>{' '}
          the network. You also learned how to configure the router and
          terminate and connect cables for a workstation.
        </p>
      </div>
      <div className="mt-5 flex items-center gap-x-8">
        <Button
          href="https://drive.google.com/file/d/1ZWDaCE5yOdbxD2xubOEARGlBsQ6CZ2g-/view?usp=sharing"
          target="_blank"
        >
          View More
        </Button>
      </div>
    </Section>
  )
}
function Certificate_4() {
  return (
    <Section
      title="Setting Up Computer Servers"
      image={{ src: imageMod4, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          This module was all about setting up computer servers. It was the
          fourth module for CSS, and it was important that you had completed the
          Intro to CSS and Installing and Configuring Computer Systems modules
          before undertaking this one. In this module, you learned how to set up
          computer servers, which included{' '}
          <strong className="font-semibold text-neutral-950">
            setting up user access
          </strong>{' '}
          ,{' '}
          <strong className="font-semibold text-neutral-950">
            configuring network services
          </strong>{' '}
          , and{' '}
          <strong className="font-semibold text-neutral-950">
            performing testing
          </strong>{' '}
          and{' '}
          <strong className="font-semibold text-neutral-950">
            documentation procedures
          </strong>{' '}
          .
        </p>
      </div>
      <div className="mt-5 flex items-center gap-x-8">
        <Button
          href="https://drive.google.com/file/d/199H03b5v3b1vcwg0r9NUw4vJATdrSUfK/view?usp=sharing"
          target="_blank"
        >
          View More
        </Button>
      </div>
    </Section>
  )
}
function Certificate_5() {
  return (
    <Section
      title="Maintaining Computer Systems and Networks"
      image={{ src: imageMod5, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          This module was all about maintaining computer systems and networks.
          It was the last module for CSS, and it was recommended that you had
          completed all of the previous modules. However, it was only necessary
          to have taken Intro to CSS, Installing and Configuring Computer
          Systems, and Setting Up Computer Networks for this module. In this
          module, you learned how to{' '}
          <strong className="font-semibold text-neutral-950">plan</strong> and{' '}
          <strong className="font-semibold text-neutral-950">prepare</strong>{' '}
          for the maintenance of computer systems and networks, as well as how
          to inspect and test configured and repaired computer systems and
          networks.
        </p>
      </div>
      <div className="mt-5 flex items-center gap-x-8">
        <Button
          href="https://drive.google.com/file/d/1RHFZt3ITFjE1YqGAEV-3fIauC0h_WDh4/view?usp=sharing"
          target="_blank"
        >
          View More
        </Button>
      </div>
    </Section>
  )
}

export const metadata: Metadata = {
  title: 'My Certificates',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Certificates() {
  return (
    <>
      <PageIntro eyebrow="" title="My Certificates">
        <p>
          Earning the certificates for all five modules within the TESDA online
          Computer System Servicing NC II program has enriched my knowledge and
          skills in the field, further enhancing my proficiency in computer
          system servicing.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Certificate_1 />
        <Certificate_2 />
        <Certificate_3 />
        <Certificate_4 />
        <Certificate_5 />
      </div>
    </>
  )
}
