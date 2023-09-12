import { Outlet } from "react-router-dom";

function App({ cartCount, promotion }) {
  return (
    <>
      <header>
        <div>
          <h1>Plantify</h1>
          <p>Search</p>
          <i>Account</i>
          <i>
            Shopping Cart<span>{`(${cartCount})`}</span>
          </i>
        </div>
        <div>
          <button>Shop</button>
          <button>Resources</button>
        </div>
        {promotion ? <h3>{promotion}</h3> : null}
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
    </>
  );
}

export default App;
