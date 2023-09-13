export default function Home() {
  return (
    <div className="flex flex-col">
      <section className=" bg-sky-50 flex flex-col md:flex-row-reverse">
        <img
          className="object-cover md:w-1/2"
          src="/assets/landing.png"
          alt="array of plants"
        />

        <div className="p-12 flex flex-col gap-8 md:w-1/2 self-center">
          <h1 className="font-medium text-[2.5rem] leading-tight lg:text-[3.5rem]">
            Plants Make Great Study Buddies
          </h1>
          <div className="flex flex-col gap-6 w-fit">
            <p>It’s true! Houseplants improve concentration & productivity</p>
            <button className="border w-1/2 py-3 px-5 bg-emerald-500 text-white">
              Shop New Arrivals
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#FCF9F3] flex flex-col items-center text-lg py-2">
        <h2>What People Are Saying</h2>
        <img className="md:max-w-3xl" src="/assets/testimonials.gif" />
      </section>
      <section className="p-12 flex flex-col gap-4">
        <h2 className="text-[2rem]">Shop by Collection</h2>
        <div className="grid grid-flow-row grid-cols-3 md:grid-cols-6 gap-8 text-xs font-medium">
          <div>
            <img src="/assets/collections/all.png" alt="plant collection" />
            <p className="mt-4">All Plants & Trees</p>
          </div>
          <div>
            <img src="/assets/collections/pets.png" alt="plant collection" />
            <p className="mt-4">Pet-Friendly Plants</p>
          </div>
          <div>
            <img src="/assets/collections/decor.png" alt="plant collection" />
            <p className="mt-4">Decor Planters</p>
          </div>
          <div>
            <img
              src="/assets/collections/beginner.png"
              alt="plant collection"
            />
            <p className="mt-4">For Beginners</p>
          </div>
          <div>
            <img
              src="/assets/collections/flowering.png"
              alt="plant collection"
            />
            <p className="mt-4">Flowering Plants</p>
          </div>
          <div>
            <img
              src="/assets/collections/flowering.png"
              alt="plant collection"
            />
            <p className="mt-4">Bonsai</p>
          </div>
        </div>
      </section>
      <section>New Arrivals</section>
      <section>Best Sellers</section>
      <section>
        Plant Quiz
        <h1>Find Your Plant Match</h1>
        <p>lorem ipsum</p>
        <ul>
          <li>Answer 3 quick questions</li>
          <li>Get matched with your perfect plant</li>
        </ul>
        <button>Take The Quiz</button>
      </section>
      <section>Flower Plants</section>
      <section>Large Plants and Trees</section>
      <section>Bonsai</section>
      <section>
        Highlight Features
        <div>Free Shipping</div>
        <div>30 Day Happiness Guarantee</div>
        <div>Local Store Fronts</div>
      </section>
    </div>
  );
}
