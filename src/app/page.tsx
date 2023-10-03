import Logo from '@/../public/logo.png'
import ButtonCheckout from '@/components/ButtonCheckout'
import FAQ from '@/components/FAQ'
import SinglePrice from '@/components/SinglePrice'
import {
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import TypedHeading from './TypedHeading'

const calendlyLink = 'https://calendly.com/nextdevagency/free-consulation-call'

const links = ['About', 'Process', 'Pricing', 'FAQs']

export default function Home() {
  const GetStartedButton = (
    <Link href="#pricing" className={cn('block mx-auto', buttonVariants())}>
      Get Started
    </Link>
  )
  const BookButton = (
    <Link
      href={calendlyLink}
      target="_blank"
      className={cn('mt-4', buttonVariants())}
    >
      Free Discovery Call
    </Link>
  )
  return (
    <>
      <div className="sticky z-20 top-0 bg-background">
        <nav className="container mt-4 flex py-2 justify-between items-center gap-4">
          <Link href="/">
            <Image src={Logo} width={40} alt="Next Dev Agency Logo" />
          </Link>
          <ul className="flex gap-4 sm:gap-6">
            {links.map((link) => {
              return (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="sm:text-lg font-medium"
                  >
                    {link}
                  </Link>
                </li>
              )
            })}
          </ul>
          <Image
            src={Logo}
            width={40}
            className="max-sm:hidden invisible"
            alt="Next Dev Agency Logo"
          />
        </nav>
      </div>
      <div className="py-28">
        <main className="gap-2 flex items-center flex-col text-center container">
          <Link
            href="#about"
            className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
          >
            🎉 <Separator className="mx-2 h-4" orientation="vertical" />{' '}
            <span>
              Introducing{' '}
              <span className="max-sm:hidden">Next Dev Agency, </span>
              Drop-in Next.js services
            </span>
            <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Link>
          <PageHeaderHeading>
            <TypedHeading />{' '}
            <span className="z-10 relative">your Next.js Codebase</span>
          </PageHeaderHeading>
          <PageHeaderDescription>
            Cleaning your code, detecting and fixing inefficiencies, schooling
            your workers remotely and upgrading to Next.js 13.
          </PageHeaderDescription>
          <div className="flex items-center gap-2 pt-2">
            {GetStartedButton}
            <Link
              href="#about"
              className={cn(buttonVariants({ variant: 'outline' }))}
            >
              Learn more
            </Link>
          </div>
        </main>
      </div>
      <div className="bg-gradient-to-b from-muted to-background border-t">
        <div className="pt-16 pb-24 flex flex-col items-center container">
          <div
            id="about"
            className="grid sm:grid-cols-2 gap-8 sm:gap-4 justify-center"
          >
            <section className="flex flex-col items-center space-y-4">
              <h2 className="h2">❌ The problem</h2>
              <ul className="list-inside list-disc">
                <li>
                  You maintain a Next.js codebase that you lost control over
                </li>
                <li>
                  You&apos;d like to upgrade to Next.js 13, but don&apos;t know
                  how to do it best
                </li>
                <li>
                  You have a team of juniors and want them to learn Next.js 13
                  the right way
                </li>
              </ul>
            </section>
            <section className="flex flex-col items-center space-y-4">
              <h2 className="h2">✅ Our solution</h2>
              <ul className="list-inside list-disc">
                <li>
                  We refactor and fix your Next.js codebase with clean and
                  efficient code
                </li>
                <li>
                  We upgrade you to Next.js 13, tailored to your project for
                  maximum performance
                </li>
                <li>
                  We school your workers in Next.js 13, tailored to your project
                  for maximum turnover
                </li>
              </ul>
            </section>
          </div>
          <i className="block text-center mt-4 text-muted-foreground">
            In other words
          </i>
          <p className="text-center text-lg font-bold mt-1 mb-4">
            You have a{' '}
            <span className="underline decoration-wavy decoration-destructive">
              problem
            </span>{' '}
            with your Next.js codebase and{' '}
            <span className="underline decoration-double decoration-success">
              we solve it
            </span>{' '}
            for you!
          </p>
          {GetStartedButton}
        </div>
        <section className="text-center space-y-4 pb-16 container">
          <div className="space-y-1">
            <i className="block text-center text-muted-foreground">
              We take the risk so you have peace of mind
            </i>
            <h2 className="h2">Satisfied or money back! 💸</h2>
          </div>
          <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row gap-4 sm:gap-8 shadow items-center p-4 bg-gradient-to-br from-background to-muted rounded-lg border">
            <Image
              src="https://montescout.com/public/about/me.png"
              width={200}
              height={200}
              alt="Picture of Boris Pöhland"
            />
            <div className="space-y-2 text-start">
              <h3 className="h3">Hi, I&apos;m Boris</h3>
              <p className="text-muted-foreground">
                I&apos;m Next.js Developer by heart and I stand behind my
                product. If I do not live up to the standards and scope we
                discussed beforehand, I will refund your money - no questions
                asked.
              </p>
              <div className="flex items-center gap-2 pt-2">
                <Link
                  href="https://borispoehland.com"
                  target="_blank"
                  className={cn(buttonVariants())}
                >
                  More about me
                </Link>
                <Link
                  href="https://twitter.com/borispoehland"
                  target="_blank"
                  className={cn(buttonVariants({ variant: 'outline' }))}
                >
                  Connect with me
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-gradient-to-b from-background to-muted relative border-y">
        <Image src="/grid-pattern-3.png" fill alt="" className="object-cover" />
        <section className="container py-16 text-center space-y-4 z-10 relative">
          <div id="process" className="space-y-1">
            <i className="block text-center text-muted-foreground">
              How does it work?
            </i>
            <h2 className="h2">
              We&apos;re agile because we understand your time is valuable 🚀
            </h2>
          </div>
          <div className="[&>h3]:step [&>p]:mb-4 steps mb-12 ml-4 border-l pl-8 [counter-reset:step] text-start">
            <h3 className="h3">Free consultation call</h3>
            <p>
              We get to know each other in a 15-30 minute meeting and discuss
              your requirements.
            </p>
            <h3 className="h3">We send you an offer</h3>
            <p>
              From the input of the consultation call, we will send you a
              personalised offer to elevate your Next.js codebase.
            </p>
            <h3 className="h3">We do our magic</h3>
            <p>
              After we sign an NDA and you accept our offer, you grant us access
              to your codebase and let us do our magic.
            </p>
            <h3 className="h3">You get amazing results</h3>
            <p>
              You will get the first, if not all results within 72 hours from
              you accepting the offer.
            </p>
            <h3 className="h3">
              We make sure the same mistakes don&apos;t happen again
            </h3>
            <p>
              By commenting your code, documenting our optimizations and
              schooling your team.
            </p>
          </div>
        </section>
      </div>
      <div className="bg-muted border-b">
        <section className="space-y-4 text-center py-16 container">
          <div id="pricing" className="space-y-1">
            <i className="block text-center text-muted-foreground">
              High end services for low tier pricing
            </i>
            <h2 className="h2">Flexible Pricing tailored to your use case</h2>
            <p className="!mt-4 text-xl font-medium">
              🎉 <span className="text-success">10% off</span> for the first 10
              customers
            </p>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <SinglePrice
              heading="🐛 Fix a bug"
              description="We fix the nasty bug you always wanted fixed"
              benefits={[
                'Bug fixed or money back',
                'Next.js Codebase of any size',
                'Bug fix report to help your team prevent it next time',
              ]}
              price={250}
              discountedPrice={225}
            >
              <ButtonCheckout
                priceId={`${process.env.STRIPE_PRICE_ID}`}
                couponCode={`${process.env.STRIPE_COUPON_CODE}`}
              />
            </SinglePrice>
            <SinglePrice
              heading="🔧 Refactor your code"
              description="We refactor and clean your Next.js codebase"
              benefits={[
                'For up to 50k LOC codebase',
                'Up to 1.5k new LOC',
                '2h schooling of your team included',
              ]}
              price={2500}
              discountedPrice={2250}
            >
              {BookButton}
            </SinglePrice>
            <SinglePrice
              heading="✨ Upgrade to Next.js 13"
              description="We upgrade you to Next.js 13 App Router"
              benefits={[
                'For up to 50k LOC codebase',
                'Up to 3k new LOC',
                '3h schooling of your team included',
              ]}
              price={5000}
              discountedPrice={4500}
            >
              {BookButton}
            </SinglePrice>
            <SinglePrice
              heading="🤝 Custom requirements"
              description="We do whatever it needs in your Next.js codebase"
              benefits={[
                'Professional and fast handling',
                'One time or with maintenance',
                'Team schoolings possible',
              ]}
            >
              {BookButton}
            </SinglePrice>
          </div>
          <i className="block mt-4">
            All plans include a{' '}
            <span className="underline decoration-success decoration-double">
              money-back-guarantee
            </span>{' '}
            and first-class support
          </i>
        </section>
      </div>
      <FAQ />
      <section className="text-center space-y-1 pb-16 container">
        <h2 className="h2">
          Ready to take your Next.js codebase to the next level?
        </h2>
        <p className="text-muted-foreground text-lg !mb-3">
          Book us, let us do our magic, and enjoy the results
        </p>
        {GetStartedButton}
      </section>
      <div className="bg-gradient-to-b from-background to-muted">
        <footer className="container pb-8">
          <div className="space-y-2">
            <div className="flex gap-3 items-center">
              <Image src={Logo} width={30} alt="Next Dev Agency Logo" />
              <p className="text-lg font-bold mt-0.5">Next Dev Agency</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm">
                Cleaning your code, detecting and fixing inefficiencies,
                schooling your workers remotely and upgrading to Next.js 13
              </p>
              <p className="text-sm text-muted-foreground">
                Copyright © {new Date().getFullYear()} - All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
