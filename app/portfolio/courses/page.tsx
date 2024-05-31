'use client'
import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { getCourses } from "./coursesAction";
import Image from "next/image";

export default function Courses() {
    interface ICourse {
        id: String,
        title: string,
        category: string,
        smallImageUri: string,
        isBestseller: boolean,
        hours: string,
        likes: string,
        likesInPercent: string,
        prices: {
            currencySymbol: string,
            price: string,
            discountPrice: String
        },
        authors: [
            { name: String}
        ]
    }
    const [isLoading, setIsLoading] = useState(true)
    const [courses, setCourses] = useState<Array<ICourse>>([])

    useEffect(() => {
        async function getData() {
            await getCourses()
            .then(async (c) => {
                console.log(c)
                //setCourses(courses => [...courses, c])
                setCourses(c)
                setIsLoading(false)
            })
        }
        getData()
    }, [])

    if(isLoading) {
        return (
            <main className={`w-full d-flex column center ${styles.main}`}>
                <section className="courses w-full d-flex center">
                    <div className="container d-flex center">
                        <p>Loading...</p>
                    </div>
                </section>
            </main>
        )
    }

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
            {courses.map((course) => {
                return (
                <div className="grid-item" key={`${course.id}`}>
                <Link href={`/portfolio/course?id=${course.id}`} className="content">
                  <Image src={course.smallImageUri} alt={`Image for ${course.title}`} />
                  <div className="text-box">
                      <p className="h5">{course.title}</p>
                      <p className="text-s">{`By ${course.authors.map(x => x.name).join(' & ')}`}</p>
                      { course.prices.discountPrice === null ? 
                        <p className="text-l price">{`${course.prices.currencySymbol} ${course.prices.price}`}</p> : 
                        <p><span className="text-l price sale-new">{`${course.prices.currencySymbol} ${course.prices.discountPrice}`}</span> <span className="text-l price sale-old">{`${course.prices.currencySymbol} ${course.prices.price}`}</span></p> 
                      }
                      <div className="info-box">
                          <p className="text-s hours">{`${course.hours} hours`}</p>
                          <p className="text-s rating">{`${course.likesInPercent} (${course.likes})`}</p>
                      </div>
                  </div>
                </Link>
                { course.isBestseller && <div className="text-s tag">Best Seller</div> } 
                <button className="bookmark">
                    <i className="fa-regular fa-bookmark"></i>
                </button>
                </div>)
            })}
        </div>
        <div className="pagination-box">

        </div>
    </div>
</section>
    </main>
  );
}
