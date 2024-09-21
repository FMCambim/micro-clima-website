import NewsletterInput from "../NewsletterInput/NewsletterInput";

export default function Subscribe() {
  return (
    <section className="py-20 border-0 border-t-2 border-black w-full flex flex-col items-center justify-center bg-indigo-700">
      <div>
        <h1 className="flex justify-center leading-normal font-bold text-4xl md:text-5xl mb-4 text-white drop-shadow-md">
          NEWSLETTER
        </h1>
        <p className="flex justify-center text-base text-white drop-shadow-md">
          Queres ficar a par de todas as novidades?
        </p>
        <p className="flex justify-center text-base text-white drop-shadow-md">
          Escreve o teu e-mail e nós tratamos do resto.
        </p>
      </div>
      <NewsletterInput status={false} />
    </section>
  );
}
