import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className='wrapper pt-28 mb-10 md:mb-16'>
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
