import { Outlet } from "react-router-dom";

function App({ cartCount }) {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <div>
          <div className="flex mx-4 md:mx-12 py-2 items-center">
            <h1 className="flex-1 text-xl md:text-2xl">Plantify</h1>
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
            <button className="flex-1 border">Shop</button>
            <button className="flex-1 border">Resources</button>
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

      <footer>
        <div>
          <div>Find your local store</div>
          <div>Subscribe to email list</div>
          <ul>Social Media Links</ul>
          <div>Resource Tabs</div>
        </div>
        <div>copyright</div>
      </footer>
    </div>
  );
}

export default App;
