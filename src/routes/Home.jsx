import Button from "../components/Button";
import FeatureContainer from "../components/FeatureContainer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className=" bg-sky-50 flex flex-col md:flex-row-reverse">
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
            <Button>Shop New Arrivals</Button>
          </div>
        </div>
      </div>
      <div className="bg-[#FCF9F3] flex flex-col items-center text-lg py-2">
        <h2>What People Are Saying</h2>
        <img className="md:max-w-3xl" src="/assets/testimonials.gif" />
      </div>
      <section className="flex flex-col gap-4">
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
      <section>
        <FeatureContainer title="New Arrivals" />
      </section>
      <section>
        <FeatureContainer title="Best Sellers" />
      </section>
      <section className="flex flex-col md:flex-row-reverse gap-8">
        <img
          src="assets/quiz.png"
          alt="plant quiz"
          className="md:w-1/2 aspect-square"
        />
        <div className="flex flex-col gap-8 self-center  w-full text-left">
          <h1 className="text-[2rem] lg:text-[3rem]">Find Your Plant Match</h1>
          <p className="">
            Share a little bit about yourself and we’ll help find your perfect
            plant.
          </p>
          <ul className="mt-4 flex flex-col gap-2 italic">
            <li>
              <i className="fa-solid fa-arrow-right-long mr-6 text-emerald-500"></i>
              Answer 3 quick questions
            </li>
            <li>
              <i className="fa-solid fa-arrow-right-long mr-6 text-emerald-500"></i>
              Get matched with your perfect plant
            </li>
          </ul>
          <Button>Take The Quiz</Button>
        </div>
      </section>
      <section>
        <FeatureContainer title="Flowering Plants" />
      </section>
      <section>
        <FeatureContainer title="Large Plants and Trees" />
      </section>
      <section>
        <FeatureContainer title="Bonsai" />
      </section>
      <section>
        Highlight Features
        <div>Free Shipping</div>
        <div>30 Day Happiness Guarantee</div>
        <div>Local Store Fronts</div>
      </section>
    </div>
  );
}
