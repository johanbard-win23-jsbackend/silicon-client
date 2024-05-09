import Link from "next/link";
import styles from "./page.module.css";

export default function Courses() {
  return (
    <main className={`w-full d-flex column center ${styles.main}`}>
      <section className="courses w-full d-flex center">
    <div className="container w-max d-flex column">
        <div className="heading-box">
            <h1>Courses</h1>
            <div className="input-box">
                <form id="category-filter" action="">
                    <select>
                        <option selected>All Categories</option>
                        <option>Chrome</option>
                        <option>Edge</option>
                        <option>Firefox</option>
                        <option>Opera</option>                        
                        <option>Safari</option>
                    </select>
                </form>
                <form id="search" action="">
                    <input type="text" placeholder="Search Courses" />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </form>
            </div>
        </div>
        <div className="grid-box">
          <div className="grid-item">
              <Link href="/portfolio/course?!!ID" className="content">
                <img src="/img/avatars/kalle.png" alt="Image for !!COURSE" />
                <div className="text-box">
                    <p className="h5">!!TITLE</p>
                    <p className="text-s">By !!AUTHOR</p>
                    <p className="text-l price">!!PRICE</p>
                    <div className="info-box">
                        <p className="text-s hours">!!HOURS hours</p>
                        <p className="text-s rating">!!PERCENT% (!!TOTAL-K)</p>
                    </div>
                </div>
              </Link>
              <div className="text-s tag">Best Seller</div>
              <button className="bookmark">
                  <i className="fa-regular fa-bookmark"></i>
              </button>
          </div>
            
            {/* @if (Model.Courses != null)
            {
                foreach (var course in Model.Courses)
                {
                    <div className="grid-item">
                        <a asp-action="Index" asp-controller="Course" asp-route-id="@course.Id" className="content">
                            <img src="~/img/courses/@course.ImageUrl" alt="Image for @course.Title">
                            <div className="text-box">
                                <p className="h5">@course.Title</p>
                                <p className="text-s">By @course.Author</p>
                                @if (course.DiscountPrice >= 0)
                                {
                                    <p><span className="text-l price sale-new">$@Math.Round(course.DiscountPrice, 2)</span> <span className="text-l price sale-old">$@Math.Round(course.Price, 2)</span></p>
                                }
                                else
                                {
                                    <p className="text-l price">$@Math.Round(course.Price, 2)</p>
                                }
                                <div className="info-box">
                                    <p className="text-s hours">@course.Hours hours</p>
                                    <p className="text-s rating">@course.LikesInPercent()% (@course.TotalBuysInK()K)</p>
                                </div>
                            </div>
                        </a>
                        @if (course.BestSeller)
                        {
                            <div className="text-s tag">Best Seller</div>
                        }
                        <button className="bookmark">
                            <i className="fa-regular fa-bookmark"></i>
                        </button>
                    </div>
                }
            } */}
        </div>
        <div className="pagination-box">

        </div>
    </div>
</section>
    </main>
  );
}
