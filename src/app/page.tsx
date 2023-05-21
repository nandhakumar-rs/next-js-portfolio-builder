import Image from 'next/image'
import Header from './components/header.component'
import UserForm from './components/user-form.component'
import Portfolio from './components/portfolio.component'

export default function Home() {
  return (
    <main className="bg-slate-100 h-screen w-screen">
      <Header />
      <UserForm />

      <div className="pl-[450px] pt-[100px] pr-20 pb-8 h-full w-full">
        <Portfolio />
      </div>
    </main>
  )
}
