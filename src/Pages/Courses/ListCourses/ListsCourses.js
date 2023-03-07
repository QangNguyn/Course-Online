import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ListCourses.scss";
import config from "../../../Configs/Config.json";
const { SERVER_API } = config;

const ListsCourses = () => {
  const [courses, setCourses] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const getAllCourse = async () => {
    const res = await fetch(`${SERVER_API}/courses`);
    const data = await res.json();
    setCourses(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getAllCourse();
  }, []);
  return (
    <>
      <section class="sub-header">
        <div class="container">
          <div class="sub-title">
            <p>
              Home
              <i class="fa-solid fa-angle-right"></i>
              Khóa học
            </p>
            <h2>Khóa Học</h2>
          </div>
        </div>
      </section>
      <section className="all-course">
        <div className="container">
          <div className="row">
            {isLoading ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <>
                {courses.map(
                  ({
                    id,
                    name,
                    thumbnail,
                    price,
                    sale_price,
                    modules,
                    teacher_detail,
                    views,
                    durations,
                    lessions_count,
                  }) => (
                    <>
                      <div className="col-12 col-lg-6" key={id}>
                        <div className="d-flex course">
                          <div className="banner-course">
                            <img src={thumbnail} alt="" />
                          </div>
                          <div className="descreption-course">
                            <div className="descreption-top">
                              <p>
                                <i className="fa-solid fa-clock" />
                                {durations}
                              </p>
                              <p>
                                <i className="fa-solid fa-video" />{" "}
                                {modules.length} phần/{lessions_count} bài
                              </p>
                              <p>
                                <i className="fa-solid fa-eye" />
                                {views}
                              </p>
                            </div>
                            <h5 className="descreption-title">
                              <Link to={`/khoa-hoc/${id}`}>{name}</Link>
                            </h5>
                            <div className="descreption-teacher">
                              <img src={teacher_detail.image} alt="" />
                              <span>{teacher_detail.name}</span>
                            </div>
                            <p className="descreption-price">
                              <span className="sale">{price}</span>
                              <span>{sale_price}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ListsCourses;
