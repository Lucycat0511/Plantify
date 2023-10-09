import { Link, Outlet } from "react-router-dom";
import Button from "./components/Button";
import ResourcesContainer, {
  ResourceTab,
} from "./components/ResourcesContainer";

function App({ cartCount }) {
  return (
    <div className="flex flex-col">
      <header>
        <div>
          <div className="flex mx-4 md:mx-8 py-4 items-center">
            <h1 className="flex-1 text-xl md:text-3xl">Plantify</h1>
            <div className="flex gap-4 md:gap-12 text-sm">
              <button className="flex-col hidden lg:flex">
                <span className="font-medium">Store Locator</span>
                <span className="text-gray-400 text-xs italic">
                  My Plant Shop
                </span>
              </button>

              <button className="lg:hidden">Search</button>
              <button className="flex-col hidden lg:flex">
                <span className="font-medium">Find Product</span>
                <span className="text-gray-400 text-xs italic">
                  Quick Search
                </span>
              </button>

              <button className="md:hidden">Account</button>
              <button className="flex-col hidden md:flex">
                <span className="font-medium">Hi! Sign In</span>
                <span className="text-gray-400 text-xs italic">
                  Your Account
                </span>
              </button>

              <button>
                <i className="fa-solid fa-basket-shopping fa-lg"></i>
                <span className="text-xs">{`(${0})`}</span>
              </button>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-1 lg:hidden">
              <button className="flex-1 border py-2">Shop</button>
              <button className="flex-1 border py-2">Resources</button>
            </div>
            <div
              className="hidden flex-1 lg:flex
            px-12 py-2 justify-center gap-8 border text-sm"
            >
              <button>Deals</button>
              <button>Stores</button>
              <button>Plants</button>
              <button>Planters</button>
              <button>Plant Care</button>
              <button>Gift Ideas</button>
              <button>Subscriptions</button>
              <button>Workshops</button>
            </div>
          </div>
        </div>
        <div className="hidden">
          <button>Shop</button>
          <button>Resources</button>
          <i>
            Shopping Cart<span>{`(${cartCount})`}</span>
          </i>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-[#F9F8F7] mt-16">
        <section className="flex flex-col gap-16">
          <div className="flex gap-6 items-center md:w-3/5 md:gap-10">
            <img
              className="w-32 md:w-40"
              src="assets/footerstore.png"
              alt="store image"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl md:text-4xl">
                Visit Us In A Store Near You
              </h3>
              <p className="hidden md:block">
                Our stores around the US are open for plant shopping, repotting,
                curbside pickup, in-person workshops, and more.
              </p>
              <Link>
                <p className="group hover:text-emerald-500 hover:italic font-semibold">
                  <span className="md:text-xl">Find Your Local Store</span>
                  <i className="fa-solid fa-arrow-right-long ml-4 group-hover:ml-6 ease-in-out duration-75"></i>
                </p>
              </Link>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-20 md:flex-row-reverse">
            <div className="flex flex-col gap-8 md:w-1/3">
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold">Get the Dirt.</h2>
                <p>
                  Get plant care tips, exclusive offers, & event invites
                  straight to your inbox. No spam, ever.
                </p>
              </div>
              <form
                className="flex flex-col gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("Submission Success!!");
                }}
              >
                <input
                  className="border p-4"
                  type="email"
                  placeholder="Enter your email here..."
                />
                <Button className="w-full">Subscribe</Button>
              </form>
              <ul className="flex gap-6 mt-2">
                <i className="hover:text-emerald-600 fa-lg fa-brands fa-facebook"></i>
                <i className="hover:text-emerald-600 fa-lg fa-brands fa-twitter"></i>
                <i className="hover:text-emerald-600 fa-lg fa-brands fa-instagram"></i>
                <i className="hover:text-emerald-600 fa-lg fa-brands fa-pinterest-p"></i>
                <i className="hover:text-emerald-600 fa-lg fa-brands fa-youtube"></i>
                <i className="hover:text-emerald-600 fa-lg fa-brands fa-tiktok"></i>
                <i className="hover:text-emerald-600 fa-lg fa-brands fa-linkedin-in"></i>
              </ul>
            </div>
            <ResourcesContainer />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="flex text-4xl font-bold">
                <span>Plant</span>
                <span className="ml-auto">ify</span>
              </h1>
              <hr className="border border-black" />
            </div>
            <div className="flex gap-6">
              <p className="text-sm">Copyright 2023 - Zachary Maynor</p>
              <ResourceTab
                className="ml-auto"
                footer
                name="Policies"
                subtabs={[
                  "Affiliate Program",
                  "Terms of Use",
                  "Privacy Policy",
                  "Accessibility",
                  "Do Not Sell My Info",
                ]}
              />
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
