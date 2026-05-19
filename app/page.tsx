import { auth } from '@clerk/nextjs/server'

const page = async () => {
  const { userId } = await auth()

  return (
    <div className='mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4'>
      <h1 className='text-4xl font-semibold'>Welcome to BooksAI</h1>
      <p className='mt-4 text-lg text-slate-600'>
        {userId
          ? 'You are signed in. Explore Clerk authentication and user management.'
          : 'Sign in or sign up using the navigation buttons above.'}
      </p>
    </div>
  )
}

export default page
