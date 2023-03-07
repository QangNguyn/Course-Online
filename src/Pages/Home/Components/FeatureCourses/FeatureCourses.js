// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   courseCategoriesSelector,
//   fetchCourseCatogories,
// } from "./featureCouresSlice";

// export default function FeatureCourses() {
//   const dispatch = useDispatch();
//   const { isLoading, coursesCategories } = useSelector(
//     courseCategoriesSelector
//   );
//   useEffect(() => {
//     dispatch(fetchCourseCatogories());
//   }, []);
//   const cateArr =
//     coursesCategories.length < 3
//       ? coursesCategories
//       : coursesCategories.slice(0, 3);
//   return (
//     <>
//       {cateArr.map((category) => (
//         <div class="course-group pt-3" key={category.id}>
//           <p>{category.title}</p>
//           <ul>
//             <li>
//               <a href="#">Học Family MEP cơ bản</a>
//             </li>
//             <li>
//               <a href="#">Học Revit MEP từ con số 0</a>
//             </li>
//             <li>
//               <a href="#">Nền tảng lập trình Dynamo</a>
//             </li>
//             <li>
//               <a href="#">Diễn họa Enscape trong Revit</a>
//             </li>
//             <li>
//               <a href="#">Xem thêm</a>
//             </li>
//           </ul>
//         </div>
//       ))}
//     </>
//   );
// }
