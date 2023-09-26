import { Link, Outlet } from "react-router-dom";

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

      <footer className="bg-[#F9F8F7]">
        <section>
          <div className="flex gap-6">
            <img
              className="w-32 md:w-40"
              src="assets/footerstore.png"
              alt="store image"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl">Visit Us In A Store Near You</h3>
              <Link>
                <p className="group hover:text-emerald-500 hover:italic font-semibold">
                  Find Your Local Store
                  <i className="fa-solid fa-arrow-right-long ml-4 group-hover:ml-6 ease-in-out duration-75"></i>
                </p>
              </Link>
            </div>
          </div>

          <div>Subscribe to email list</div>
          <ul>Social Media Links</ul>
          <div>Resource Tabs</div>
          <div>copyright</div>
        </section>
      </footer>
    </div>
  );
}

export default App;
