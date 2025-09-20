import styles from "../modules/Header.module.css";

function Header() {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-12 text-center">
          <h1>
            <em>Welcome to my favourites movies library</em>
          </h1>
          <h3 className="my-2">Enjoy the vision</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
