import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import conf from "../Config";

function TopBar() {
  const [search, setSearch] = useState("");
  const [mobileSearch, setMobileSearch] = useState(false);

  const [results, setResults] = useState<any>();

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function onClick() {
    setResults(null);
    setSearch("");
    setMobileSearch(false);
  }

  async function getResults() {
    const req = await fetch(conf.API_URL + "/search?query=" + search);
    const res = await req.json();

    if (res.success) {
      setResults(res.results);
    } else {
      setResults(null);
    }
  }

  useEffect(() => {
    if (search.length > 0) {
      getResults();
    }
  }, [search]);

  return (
    <>
      <div className="top-bar">
        <Link to="/" className="top-bar-logo">
          <img src="/logo.png" alt={conf.SITE_NAME} />
        </Link>

        <div className="top-bar-search">
          <Link to="/">
            <h3 className="item-nav-margin">Home</h3>
          </Link>
          <Link to={""}>
            <h3 className="item-nav-margin">Movie</h3>
          </Link>
          <Link to={"/aboutus"}>
            <h3 className="item-nav-margin">About Us</h3>
          </Link>
          <Link to={"/contact"}>
            <h3 className="item-nav-margin">Contact</h3>
          </Link>

          <input
            type="text"
            value={search}
            className="input-nav-margin"
            placeholder="Search"
            onChange={(e) => onChange(e)}
          />

          <i className="fa-solid fa-search icon-nav-margin"></i>

          {search.length > 0 && results && (
            <div className="top-bar-dropdown">
              {results.map((result: any) => (
                <Link
                  to={"/" + result.type + "/" + result.id}
                  onClick={() => onClick()}
                  className="top-bar-dropitem"
                >
                  <i className="fa-solid fa-play-circle"></i>
                  <p className="title">{result.title}</p>

                  <div className="tag">
                    <p>{result.type}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <button className="button-nav">Sign In</button>
        </div>

        <div className="top-bar-mobile">
          <i className="fa-solid fa-search" onClick={() => setMobileSearch(true)}></i>
        </div>
      </div>

      {mobileSearch && (
        <div className="mobile-search">
          <div className="mobile-search-close" onClick={() => setMobileSearch(false)}>
            <i className="fa-solid fa-times"></i>
          </div>

          <div className="mobile-search-input">
            <input type="text" value={search} placeholder="Search" onChange={(e) => onChange(e)} />

            <i className="fa-solid fa-search"></i>
          </div>

          <div className="mobile-search-results">
            {search.length > 0 &&
              results &&
              results.map((result: any) => (
                <Link
                  to={"/" + result.type + "/" + result.id}
                  onClick={() => onClick()}
                  className="mobile-search-item"
                >
                  <i className="fa-solid fa-play-circle"></i>

                  <p className="title">{result.title}</p>

                  <div className="tag">
                    <p>{result.type}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default TopBar;
