'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { getCourse, getQuery } from "./courseAction";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function Course() {
  interface ICourse {
    id: String,
    title: string,
    category: string,
    description: string,
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

  const searchParams = useSearchParams()
  const id = searchParams.get('id')?.toString()
  const [isLoading, setIsLoading] = useState(true)
  const [course, setCourse] = useState<ICourse>()

  useEffect(() => {
    async function getData() {
        // console.log(id)
        // let test = await getQuery(id)
        // console.log(test)
        await getCourse(id)
        .then(async (c) => {
            setCourse(c)
            setIsLoading(false)
        })
    }
    getData()
}, [])

if(isLoading) {
    return (
        <main className={`w-full d-flex column center ${styles.main}`}>
            <section className="course w-full d-flex center">
                <div className="container d-flex center">
                    <p>Loading...</p>
                </div>
            </section>
        </main>
    )
}

if(course === undefined) {
  return (
    <main className={`w-full d-flex column center ${styles.main}`}>
        <section className="course w-full d-flex center">
            <div className="container d-flex center">
                <p>Course not found!</p>
            </div>
        </section>
    </main>
  )
}


  return (
    <main className={`w-full d-flex column center ${styles.main}`}>
      <section className="course w-full d-flex center">
        <div className="container w-full d-flex column center">
          {/* <div className="heading-box w-max d-flex column center" style={{backgroundImage: `url(${course.smallImageUri})`}}> */}
          <div className="heading-box w-max d-flex column center">
            <Image src={course.smallImageUri} alt="" className="bg" />
            <div className="heading-info w-max">
              <div className="tags">
                { course.isBestseller && <div className="text-s bestseller">Best Seller</div> }
                { course.category !== null && <div className="text-s category">{course.category}</div> }
              </div>
              <h1 className="title">{course.title}</h1>
              <div className="info-box">
                <div className="price-box">
                  { course.prices.discountPrice === null ? 
                    <p className="text-l price">{`${course.prices.currencySymbol} ${course.prices.price}`}</p> : 
                    <p><span className="text-l price sale-new">{`${course.prices.currencySymbol} ${course.prices.discountPrice} `}</span><span className="text-l price sale-old">{` ${course.prices.currencySymbol} ${course.prices.price}`}</span></p> 
                  }
                </div>
                <div className="details-box">
                  <div className="text-s hours rating">{`The course totals ${course.hours} hours and is liked by ${course.likesInPercent} (${course.likes} people)`}</div>
                </div>
              </div>
              <div className="author-box">
                <p className="h6">Created by</p>
                <p className="navigation">{`By ${course.authors.map(x => x.name).join(' & ')}`}</p>
              </div>
            </div>
          </div>
          <div className="content-box w-max">
            <h2 className="h1">Course Description</h2>
            <p className="content" dangerouslySetInnerHTML={{__html: course.description}}></p>
          </div>
        </div>
      </section>
    </main>
  );
}
