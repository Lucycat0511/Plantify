export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <section hero className=" bg-sky-50 flex flex-col md:flex-row-reverse">
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
      <section>Testimonials</section>
      <section>Shop by Collection</section>
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
