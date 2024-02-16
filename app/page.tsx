import CardLayout from '@/app/components/CardLayout'
import BmiForm from '@/app/components/BmiForm'
import Script from 'next/script';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-5 lg:p-24">
      <h1 className="my-14 text-center text-3xl font-bold uppercase 
tracking-widest">newwwww มาเอง</h1>
<img src="https://happeningandfriends.com/uploads/happening/products/46/004551/mock_ST_popecat.jpg"></img>
      <iframe src="https://www.adobe.com/express/create/media_147b85d9e4cb15b95023a74537b8dd2058027f26f.png?width=750&format=png&optimize=medium" title="description"></iframe>
      <a
          href="https://translate.google.com/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >test link</a>
      <CardLayout>
        <BmiForm />
      </CardLayout>
      <p id="demo"></p>
      <Script>document.write(5 + 6);</Script>
    </main>
  );
}
