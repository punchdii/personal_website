import { BlogPosts } from 'app/components/posts'
import { VisitorLocation } from 'app/components/VisitorLocation'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-5xl font-semibold tracking-tighter">Hi!</h1>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        My name is Lucas Sun!
      </h1>
      <VisitorLocation />
      <p className="text-sm text-gray-600">If you are an employer checkout my <a className='underline text-sm text-gray-600' href='/resume_2024_12_24_hardware.pdf'>resume</a> </p>
      <p className="mb-4 ">
        {`I'm a computer engineering student at University of Waterloo. I build websites, make robots move and write code for chips that go up with rockets. I'm currently working on building an interpreter/compiler in GO! Also trying to learn a bit more about FPGA and learn Linux enough to admin a server! Also checkout my photography work `}<a className="mb-4 text-black-500 underline" href='https://www.instagram.com/punchdii/'>here</a>.
      </p>
      <p className="mb-4 ">
        Learn more about me at my <a className="mb-4 text-black-500 underline" href='/portfolio'>portfolio</a>.
      </p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section >
  )
}