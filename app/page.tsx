import HeroSection from '@/components/HeroSection'
import BookCard from '@/components/BookCard'
import { sampleBooks } from '@/lib/constants'
import { auth } from '@clerk/nextjs/server'

const page = async () => {
  const { userId } = await auth()

  return userId ? (
    <main className='wrapper container'>
      <HeroSection />
      <div className='library-books-grid'>
        {sampleBooks.map(book => (
          <BookCard
            key={book._id}
            title={book.title}
            author={book.author}
            coverURL={book.coverURL}
            slug={book.slug}
          />
        ))}
      </div>
    </main>
  ) : (
    <div className='mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4'>
      <h1 className='text-4xl font-semibold'>Willkommen bei BücherAI</h1>
      <p className='mt-4 text-lg text-slate-600'>
        {userId
          ? 'Sie sind angemeldet.'
          : 'Melden Sie sich an oder registrieren Sie sich über die Navigationsschaltflächen oben.'}
      </p>
    </div>
  )
}

export default page
