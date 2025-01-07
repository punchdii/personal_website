import { BlogPosts } from 'app/components/posts'
import { VisitorLocation } from 'app/components/VisitorLocation'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-5xl font-semibold tracking-tighter">Hi!</h1>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My name is Lucas Sun!
      </h1>
      <VisitorLocation />
      <p className="mb-4 ">
        {`I'm a computer engineering student at University of Waterloo. I do full stack development, firmware at school rocketry team, and working on building a interpreter/compiler in Go! Also checkout my photography work `}<a className="mb-4 text-black-500 underline" href='https://www.instagram.com/punchdii/'>here</a>
      </p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}