import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const navigation = [
  {
    title: 'Content',
    links: [
      { title: 'Certificates', href: '/certificates' },
      { title: 'Journey', href: '/journeyv2' },
      { title: 'Arts', href: '/arts' },
      { title: 'Projects', href: '/projects' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  let ref = useRef<React.ElementRef<'form'>>(null)
  const sendForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_jfu063j',
        'template_vys7kkg',
        e.currentTarget,
        'UhpxzLZsmzGCMsr2F',
      )
      .then(
        () => {
          alert(
            'Thank you for subscribing! Please check your email for confirmation.',
          )
          ref.current?.reset()
        },
        (error) => {
          alert('An error has occured. Please try again.')
          console.log(error.text)
        },
      )
  }
  return (
    <form ref={ref} className="max-w-sm" onSubmit={sendForm}>
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Sign up for my newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Subscribe to get the latest news, articles, resources and inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          name="to_email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-6" />
          </Link>
          <p className="text-sm text-neutral-700">
            © Aliah Jane Yu. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
