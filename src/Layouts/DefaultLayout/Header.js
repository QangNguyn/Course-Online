import React, { useEffect, useState } from "react";
import "./Header.scss";

const Header = () => {
  const [menu, setMenu] = useState();
  const getMenu = async () => {
    const res = await fetch("http://localhost:3004/menu");
    const data = await res.json();
    setMenu(data);
  };
  useEffect(() => {
    getMenu();
  }, []);
  return (
    <header class="header">
      <div class="action-bar">
        <div class="container">
          <div class="row align-items-center">
            <div class="d-none d-lg-block col-lg-2">
              <form>
                <input type="text" placeholder="Bạn tìm gì" />
                <button type="submit" class="btn btn-primary">
                  Tìm
                </button>
              </form>
            </div>
            <div class="d-none d-lg-block col-lg-7">
              <div class="d-flex">
                <p class="slogan">
                  <i class="fas fa-phone"></i>Tư vấn & hỗ trợ:
                  <a href="#">0989341634</a>
                </p>
                <p class="mail">
                  <i class="far fa-envelope"></i>
                  <a href="#">ngocnguyenchi1507@gmail.com</a>
                </p>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="social">
                <button class="btn btn-primary">
                  <i class="fas fa-user"></i> Đăng ký
                </button>
                <button class="btn btn-primary">
                  <i class="fas fa-key"></i> Đăng nhập
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="/Images/logo.png" alt="" />
          </a>
          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              {menu?.map((item) => (
                <li class="nav-item" key={item.id}>
                  <a class="nav-link" href={item.url}>
                    <i class="fas fa-user"></i> {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p class="cart">
            <i class="fas fa-shopping-cart"></i>
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
