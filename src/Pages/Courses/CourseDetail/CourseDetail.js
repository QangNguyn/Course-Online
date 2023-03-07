import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import config from "../../../Configs/Config.json";
import "./CourseDetail.scss";
const { SERVER_API } = config;

const CourseDetail = () => {
  const param = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [courseDetail, setCourseDetail] = useState({});
  const getDetailCourse = async (id) => {
    const res = await fetch(`${SERVER_API}/courses/${id}`);
    const detail = await res.json();
    setCourseDetail(detail);
    setIsLoading(false);
  };
  useEffect(() => {
    getDetailCourse(param.id);
  }, []);
  console.log(courseDetail);
  return (
    <section class="course-detal">
      <div class="container">
        <div class="row relative">
          <div class="col-12 col-lg-9">
            <div class="submenu">
              <ul>
                <li>
                  <a href="#information">
                    <i class="fa-solid fa-file"></i> Thông tin chung
                  </a>
                </li>
                <li>
                  <a href="#curriculum">
                    <i class="fa-solid fa-book"></i>
                    Giáo trình
                  </a>
                </li>
                <li>
                  <a href="#author">
                    <i class="fa-solid fa-user"></i>
                    Giảng viên
                  </a>
                </li>
                <li>
                  <a href="#evaluate">
                    <i class="fa-solid fa-comment"></i>
                    Đánh giá
                  </a>
                </li>
              </ul>
            </div>
            <div class="course-descreption" id="information">
              <div class="course-content">
                <h4>nội dung khóa học</h4>
                <p class="course-content-infor">
                  Với thời lượng 41 Video, khóa học được xây dựng dựa trên dự án
                  thực tế DSCons đã triển khai. Học viên sẽ được hướng dẫn bài
                  bản - Thực hành Diễn họa làm phim một công trình bằng phần mềm
                  Lumion kết hợp Premiere Pro chuyên nghiệp. Các kỹ năng chính
                  bao gồm:
                </p>
                <ul>
                  <li>Cài đặt, giao diện, thao tác cho người mới bắt đầu.</li>
                  <li>Đưa mô hình Revit MEP vào trong môi trường Lumion.</li>
                  <li>
                    Gán vật liệu cho các đối tượng kiến trúc, kết cấu, cơ điện
                    để hỗ trợ Render ảnh, phim.
                  </li>
                  <li>
                    Tạo địa hình, đặt các đối tượng người, cây cối…v.v giúp cho
                    công trình có tính thực tế hơn.
                  </li>
                  <li>Chụp ảnh, lên bố cục, nội dung quay video diễn họa.</li>
                  <li>Xử lý hậu kỳ Video trước khi tạo thành phẩm</li>
                  <li>
                    Lồng ghép text và logo, nhạc và hiệu ứng chuyên nghiệp.
                  </li>
                </ul>
              </div>
              <div class="course-content">
                <h4>lợi ích khóa học</h4>
                <p class="course-content-infor">
                  Từ một công trình còn đang trên bản vẽ, Lumion và Premiere Pro
                  sẽ mang đến cho người xem góc nhìn từ tổng quát đến chi tiết
                  của dự án. Nhờ có 3D phối cảnh, các đoạn phim diễn họa chuyển
                  động… Chúng ta sẽ dễ dàng trình chiếu được ý tưởng sản phẩm và
                  chinh phục ngay cả những Chủ đầu tư – Khán giả khó tính nhất.
                  Lợi ích chính thu được trong khóa học như sau:
                </p>
                <ul>
                  <li>Cài đặt, giao diện, thao tác cho người mới bắt đầu.</li>
                  <li>Đưa mô hình Revit MEP vào trong môi trường Lumion.</li>
                  <li>
                    Gán vật liệu cho các đối tượng kiến trúc, kết cấu, cơ điện
                    để hỗ trợ Render ảnh, phim.
                  </li>
                  <li>
                    Tạo địa hình, đặt các đối tượng người, cây cối…v.v giúp cho
                    công trình có tính thực tế hơn.
                  </li>
                  <li>Chụp ảnh, lên bố cục, nội dung quay video diễn họa.</li>
                  <li>Xử lý hậu kỳ Video trước khi tạo thành phẩm</li>
                  <li>
                    Lồng ghép text và logo, nhạc và hiệu ứng chuyên nghiệp.
                  </li>
                </ul>
              </div>
              <div class="course-content">
                <h4>đối tượng nên tham gia khóa học</h4>
                <p class="course-content-infor">
                  Từ một công trình còn đang trên bản vẽ, Lumion và Premiere Pro
                  sẽ mang đến cho người xem góc nhìn từ tổng quát đến chi tiết
                  của dự án. Nhờ có 3D phối cảnh, các đoạn phim diễn họa chuyển
                  động… Chúng ta sẽ dễ dàng trình chiếu được ý tưởng sản phẩm và
                  chinh phục ngay cả những Chủ đầu tư – Khán giả khó tính nhất.
                  Lợi ích chính thu được trong khóa học như sau:
                </p>
                <ul>
                  <li>Cài đặt, giao diện, thao tác cho người mới bắt đầu.</li>
                  <li>Đưa mô hình Revit MEP vào trong môi trường Lumion.</li>
                  <li>
                    Gán vật liệu cho các đối tượng kiến trúc, kết cấu, cơ điện
                    để hỗ trợ Render ảnh, phim.
                  </li>
                  <li>
                    Tạo địa hình, đặt các đối tượng người, cây cối…v.v giúp cho
                    công trình có tính thực tế hơn.
                  </li>
                  <li>Chụp ảnh, lên bố cục, nội dung quay video diễn họa.</li>
                  <li>Xử lý hậu kỳ Video trước khi tạo thành phẩm</li>
                  <li>
                    Lồng ghép text và logo, nhạc và hiệu ứng chuyên nghiệp.
                  </li>
                </ul>
              </div>
            </div>
            <div class="accordion" id="curriculum">
              <div class="accordion-top">
                <p>
                  <i class="fa-solid fa-book me-1"></i>
                  Gồm: 3 phần - 30 bài giảng
                </p>
                <p>
                  <i class="fa-solid fa-clock me-1"></i>
                  Thời lượng 120 phút
                </p>
              </div>
              <div class="accordion-group">
                <h4 class="accordion-title">Section 1</h4>
                <div class="accordion-detail">
                  <div class="card-accordion">
                    <div>
                      <i class="fa-brands fa-youtube"></i>
                      <p>học thử</p>
                      Bài 1: title
                      <span>time</span>
                    </div>
                  </div>
                  <div class="card-accordion">
                    <div>
                      <i class="fa-brands fa-youtube"></i>
                      <p>học thử</p>
                      Bài 2: title
                      <span>time</span>
                    </div>
                  </div>
                  <div class="card-accordion">
                    <div>
                      <i class="fa-brands fa-youtube"></i>
                      <p>học thử</p>
                      Bài 3: title
                      <span>time</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-group">
                <h4 class="accordion-title">Section 2</h4>
                <div class="accordion-detail">
                  <div class="card-accordion">
                    <div>
                      <i class="fa-brands fa-youtube"></i>
                      <p>học thử</p>
                      Bài 1: title
                      <span>time</span>
                    </div>
                  </div>
                  <div class="card-accordion">
                    <div>
                      <i class="fa-brands fa-youtube"></i>
                      <p>học thử</p>
                      Bài 2: title
                      <span>time</span>
                    </div>
                  </div>
                  <div class="card-accordion">
                    <div>
                      <i class="fa-brands fa-youtube"></i>
                      <p>học thử</p>
                      Bài 3: title
                      <span>time</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-group">
                <h4 class="accordion-title">Section 3</h4>
                <div class="accordion-detail">
                  <div class="card-accordion">
                    <div>
                      <i class="fa-brands fa-youtube"></i>
                      <p>học thử</p>
                      Bài 1: title
                      <span>time</span>
                    </div>
                  </div>
                  <div class="card-accordion">
                    <div>
                      <i class="fa-brands fa-youtube"></i>
                      <p>học thử</p>
                      Bài 2: title
                      <span>time</span>
                    </div>
                  </div>
                  <div class="card-accordion">
                    <div>
                      <i class="fa-brands fa-youtube"></i>
                      <p>học thử</p>
                      Bài 3: title
                      <span>time</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-group">
                <h4 class="accordion-title">Section 4</h4>
                <div class="accordion-detail">
                  <div class="card-accordion">
                    <div>
                      <i class="fa-brands fa-youtube"></i>
                      <p>học thử</p>
                      Bài 1: title
                      <span>time</span>
                    </div>
                  </div>
                  <div class="card-accordion">
                    <div>
                      <i class="fa-brands fa-youtube"></i>
                      <p>học thử</p>
                      Bài 2: title
                      <span>time</span>
                    </div>
                  </div>
                  <div class="card-accordion">
                    <div>
                      <i class="fa-brands fa-youtube"></i>
                      <p>học thử</p>
                      Bài 3: title
                      <span>time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="course-video" id="author">
              <h4>sản phẩm</h4>
              <p class="course-content-infor">
                Phòng bơm Cấp nước sinh hoạt, phòng Heat Pump, phòng bơm Chữa
                cháy thuộc dự án Mikazuki Spa & Hotel Resort Đà Nẵng DSCons thực
                hiện năm 2019.
              </p>
              <p class="video">
                <iframe
                  width="100%"
                  height="515"
                  src="https://www.youtube.com/embed/kYrC0s4B_-I"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-3">
            <div class="course-profile">
              <div class="img">
                <img src="../assets/banner-course.png" alt="" />
              </div>
              <div class="group-text">
                <p class="price">
                  <i class="fa-solid fa-tag"></i>
                  <span class="sale">600.000đ</span>
                  <span>200.000đ</span>
                </p>
                <p class="bookmark">
                  <i class="fa-solid fa-bookmark"></i>
                  Mã Khóa Học: LU-001
                </p>
                <p class="chart">
                  <i class="fa-solid fa-chart-simple"></i>
                  Cấp độ: Thực chiến
                </p>
                <p class="techer">
                  <i class="fa-solid fa-user"></i>
                  Giảng viên: 3 năm kinh nghiệm
                </p>
                <p class="clock">
                  <i class="fa-solid fa-clock"></i>
                  Thời lượng: 6 giờ học
                </p>
                <button class="payment">đặt mua khóa học</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetail;
