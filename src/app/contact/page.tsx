'use client'

import { useId, useRef } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import emailjs from '@emailjs/browser'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactForm() {
  let ref = useRef<React.ElementRef<'form'>>(null)

  const sendForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_jfu063j',
        'template_ozqr9ss',
        e.currentTarget,
        'UhpxzLZsmzGCMsr2F',
      )
      .then(
        () => {
          alert('Thank you! Please check your email for my response.')
          ref.current?.reset()
        },
        (error) => {
          alert('An error has occured. Please try again.')
          console.log(error.text)
        },
      )
  }

  return (
    <FadeIn className="lg:order-last">
      <form ref={ref} onSubmit={sendForm}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="to_name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="to_email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="to_company"
            autoComplete="organization"
          />
          <TextInput
            label="Phone"
            type="tel"
            name="to_phone"
            autoComplete="tel"
          />
          <TextInput label="Message" name="to_message" />
        </div>
        <Button type="submit" className="mt-10">
          Let’s work together
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        My Address
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        I have to list possible places you can see me for legal reasons, but I
        prefer doing things online.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email Me
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Gmail', 'aliahjaneyu02@gmail.com'],
            ['Yahoo', 'aliahjaneyu@yahoo.com'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow Me
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

// export const metadata: Metadata = {
//   title: 'Contact Me',
//   description: 'Let’s work together. I can’t wait to hear from you.',
// }

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact Me" title="Let’s work together">
        <p>Let’s work together. I can’t wait to hear from you.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
