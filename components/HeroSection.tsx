import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className='wrapper pt-28'>
      <div className='library-hero-card'>
        <div className='library-hero-content'>
          {/* Left */}
          <div className='library-hero-text'>
            <h1 className='library-hero-title'>
              Ihre persönliche KI-Bibliothek
            </h1>
            <p className='library-hero-description'>
              Verwandeln Sie Ihre Bücher in interaktive KI-Gespräche.{' '}
              <br className='hidden md:block' /> Hören, lernen und diskutieren
              Sie Ihre Lieblingsbücher.
            </p>
            <Link href='/buecher/neu' className='library-cta-primary mt-4'>
              <span className='text-2xl mr-2'>+</span>Neues Buch hinzufügen
            </Link>
          </div>

          {/* Center Desktop */}
          <div className='library-hero-illustration-desktop'>
            <Image
              src='/assets/hero-illustration.png'
              alt='Hero IllustrationVintage books and globe'
              width={400}
              height={400}
              className='object-contain'
            />
          </div>

          {/* Center Mobile */}
          <div className='library-hero-illustration'>
            <Image
              src='/assets/hero-illustration.png'
              alt='Hero IllustrationVintage books and globe'
              width={300}
              height={300}
              className='object-contain'
            />
          </div>

          {/* Right */}
          <div className='library-steps-card min-w-[260px] max-w-[280px] z-10 shadow-soft-md'>
            <ul className='space-y-6'>
              <li className='library-step-item'>
                <div className='w-10 h-10 min-w-10 min-h-10 rounded-full border border-gray-300 flex items-center justify-center font-medium text-lg'>
                  1
                </div>
                <div className='flex flex-col'>
                  <h3 className='library-step-title text-lg font-bold'>
                    PDF hochladen
                  </h3>
                  <p className='library-step-decription text-gray-500'>
                    Laden Sie Ihre Buchdatei hoch
                  </p>
                </div>
              </li>
              <li className='library-step-item'>
                <div className='w-10 h-10 min-w-10 min-h-10 rounded-full border border-gray-300 flex items-center justify-center font-medium text-lg'>
                  2
                </div>
                <div className='flex flex-col'>
                  <h3 className='library-step-title text-lg font-bold'>
                    KI-Verarbeitung
                  </h3>
                  <p className='library-step-decription text-gray-500'>
                    Lassen Sie Ihre Inhalte von einer KI verarbeiten.
                  </p>
                </div>
              </li>
              <li className='library-step-item'>
                <div className='w-10 h-10 min-w-10 min-h-10 rounded-full border border-gray-300 flex items-center justify-center font-medium text-lg'>
                  3
                </div>
                <div className='flex flex-col'>
                  <h3 className='library-step-title text-lg font-bold'>
                    Interaktive KI-Gespräche
                  </h3>
                  <p className='library-step-decription text-gray-500'>
                    Interagiere mit deinen Büchern durch KI-Gespräche.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

/*
<main className='mx-auto w-full max-w-7xl px-4 py-14'>
      <section className='overflow-hidden rounded-[2rem] border border-[rgba(33,42,59,0.08)] bg-[#f6e0c7] shadow-soft-lg'>
        <div className='grid gap-8 px-6 py-10 lg:grid-cols-[1.35fr_1fr_0.8fr] lg:gap-10 lg:px-10 lg:py-14'>
          <div className='flex flex-col justify-center'>
            <p className='text-sm font-semibold uppercase tracking-[0.28em] text-slate-500'>
              Bookified library
            </p>
            <h1 className='mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl'>
              Your Library
            </h1>
            <p className='mt-5 max-w-xl text-lg leading-8 text-slate-600'>
              Convert your books into interactive AI conversations. Listen,
              learn, and discuss your favorite reads.
            </p>
            <button className='mt-8 inline-flex w-full max-w-xs items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-slate-800 sm:w-auto'>
              + Add new book
            </button>
          </div>

          <div className='relative flex items-center justify-center'>
            <div className='relative aspect-[5/6] w-full max-w-[360px] rounded-[2rem] bg-[#f8f4e9] p-6 shadow-book'>
              <div className='absolute left-6 top-6 h-12 w-12 rounded-full bg-[#f3e4c7] blur-xl' />
              <div className='absolute right-6 top-16 h-8 w-8 rounded-full bg-[#f3e4c7] opacity-80' />
              <div className='absolute -bottom-8 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#f3dac0] opacity-80 blur-2xl' />
              <div className='relative flex h-full flex-col justify-end gap-4'>
                <div className='mx-auto w-[210px] rounded-[1.75rem] border border-[rgba(33,42,59,0.08)] bg-[#fff6e5] p-4 shadow-soft'>
                  <div className='flex items-end gap-3'>
                    <div className='h-20 w-16 rounded-[1.1rem] bg-[#b57c51] shadow-[inset_0_10px_0_rgba(0,0,0,0.08)]' />
                    <div className='space-y-2'>
                      <div className='h-16 w-14 rounded-[1rem] bg-[#c8945a]' />
                      <div className='h-9 w-10 rounded-[1rem] bg-[#a06a42]' />
                    </div>
                    <div className='h-24 w-14 rounded-[1.25rem] bg-[#d0a07b]' />
                  </div>
                </div>
                <div className='absolute left-1/2 top-8 h-28 w-28 -translate-x-1/2 rounded-full border-4 border-[#f8f4e9] bg-[#d0b089] shadow-[0_12px_20px_rgba(0,0,0,0.1)]'>
                  <div className='absolute inset-5 rounded-full bg-[#f8f4e9]' />
                  <div className='absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#9c6b3a] bg-[#e6c99d]' />
                  <div className='absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a77c52] opacity-60' />
                </div>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center lg:justify-end'>
            <div className='w-full max-w-sm rounded-[1.75rem] bg-white p-6 shadow-soft border border-[rgba(33,42,59,0.08)]'>
              <p className='text-sm font-semibold uppercase tracking-[0.28em] text-slate-500'>
                How it works
              </p>
              <div className='mt-6 space-y-4'>
                <div className='flex gap-4 rounded-3xl bg-[#fcf6ec] p-4 shadow-sm'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white'>
                    1
                  </div>
                  <div>
                    <p className='text-sm font-semibold text-slate-900'>
                      Upload PDF
                    </p>
                    <p className='text-sm text-slate-600'>Add your book file</p>
                  </div>
                </div>
                <div className='flex gap-4 rounded-3xl bg-[#fcf6ec] p-4 shadow-sm'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white'>
                    2
                  </div>
                  <div>
                    <p className='text-sm font-semibold text-slate-900'>
                      AI Processing
                    </p>
                    <p className='text-sm text-slate-600'>
                      We analyze the content
                    </p>
                  </div>
                </div>
                <div className='flex gap-4 rounded-3xl bg-[#fcf6ec] p-4 shadow-sm'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white'>
                    3
                  </div>
                  <div>
                    <p className='text-sm font-semibold text-slate-900'>
                      Voice Chat
                    </p>
                    <p className='text-sm text-slate-600'>Discuss with AI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
*/
