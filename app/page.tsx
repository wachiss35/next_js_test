import CardLayout from '@/app/components/CardLayout'
import BmiForm from '@/app/components/BmiForm'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-5 lg:p-24">
      <h1 className="my-14 text-center text-3xl font-bold uppercase 
tracking-widest">you are hacked!!</h1>
<img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg"></img>
      <a
          href="https://www.youtube.com/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >test link</a>
      <CardLayout>
        <BmiForm />
      </CardLayout>
    </main>
  );
}
