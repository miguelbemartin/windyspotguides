'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import NavLightTwo from '../components/navbar/nav-light-two'
import FilterOne from '../components/filter-one'
import FooterTop from '../components/footer-top'
import Footer from '../components/footer/footer'
import BackToTop from '../components/back-to-top'

import { listData } from '../data/data'

import { BsEyeFill, BsGeoAlt, BsPatchCheckFill, BsShareFill, BsStar, BsSuitHeart, BsTelephone } from 'react-icons/bs'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import { IconType } from 'react-icons'

interface ListData{
    id: number;
    slug?: string;
    image: string;
    user: string;
    status: string;
    featured: boolean;
    title: string;
    desc: string;
    call: string;
    loction: string;
    tag: string;
    tagIcon: IconType;
    tagIconStyle: string;
    review: string;
    rating: string;
    ratingRate: string;
    instantBooking: boolean;
}

export default function Page() {

useEffect(() => {
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
        new (window as any).bootstrap.Tooltip(tooltipTriggerEl);
    });
    }, []);
  return (
    <>
        <NavLightTwo/>
1
        <div className="bg-white py-3 sticky-lg-top z-3">
            <FilterOne list={false}/>
        </div>

2
        <section className="bg-light">
            <div className="container">
                <div className="row align-items-center justify-content-between mb-4">
                    <div className="col-xl- 5 col-lg-5 col-md-5 col-sm-6 col-6">
                        <div className="totalListingshow">
                            <h6 className="fw-medium text-md mb-0">106 Listings Founds</h6>
                        </div>
                    </div>

                    <div className="col-xl- 5 col-lg-5 col-md-5 col-sm-6 col-6">
                        <div className="text-end">
                            <div className="dropdown d-inline-flex p-0">
                                <Link href="#" className="py-2 px-3 dropdown-toggle toogleDrops" id="shortfilter" data-bs-toggle="dropdown" aria-expanded="false">
                                    Short Listings
                                </Link>
                                <div className="dropdown-menu border shadow-sm">
                                    <ul className="card rounded-0 p-0">
                                        <li><Link href="#" className="dropdown-item">Default Order</Link></li>
                                        <li><Link href="#" className="dropdown-item">Highest Rated</Link></li>
                                        <li><Link href="#" className="active dropdown-item">Most Reviewed</Link></li>
                                        <li><Link href="#" className="dropdown-item">Newest Listings</Link></li>
                                        <li><Link href="#" className="dropdown-item">Oldest Listings</Link></li>
                                        <li><Link href="#" className="dropdown-item">Featured Listings</Link></li>
                                        <li><Link href="#" className="dropdown-item">Most Viewed</Link></li>
                                        <li><Link href="#" className="dropdown-item">Short By A To Z</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center justify-content-center g-xl-4 g-3">
                     {listData.map((item:ListData,index:number)=>{
                        return(
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                                <Link href={`/spots/${item.slug}`} className="text-decoration-none">
                                    <div className="position-relative overflow-hidden rounded-4" style={{height: '280px'}}>
                                        <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'100%', objectFit:'cover'}} className="img-fluid" alt={item.title}/>
                                        <div className="position-absolute bottom-0 start-0 end-0 p-3" style={{background: 'linear-gradient(transparent 0%, rgba(0,0,0,0.85) 100%)', paddingTop: '80px'}}>
                                            <h5 className="text-white fw-bold mb-1">{item.title}</h5>
                                            <p className="mb-1 small" style={{color: 'rgba(255,255,255,0.85)'}}>{item.desc}</p>
                                            <div className="d-flex align-items-center small" style={{color: 'rgba(255,255,255,0.8)'}}>
                                                <BsGeoAlt className="me-1"/>{item.loction}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                     })}
                </div>

                <div className="row align-items-center justify-content-center mt-5">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <Link href="#" className="page-link"><FaArrowLeft/></Link>
                                </li>
                                <li className="page-item"><Link href="#" className="page-link">1</Link></li>
                                <li className="page-item active"><Link href="#" className="page-link">2</Link></li>
                                <li className="page-item"><Link href="#" className="page-link">3</Link></li>
                                <li className="page-item"><Link href="#" className="page-link">4</Link></li>
                                <li className="page-item"><Link href="#" className="page-link">5</Link></li>
                                <li className="page-item">
                                    <Link href="#" className="page-link"><FaArrowRight/></Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>

        <FooterTop/>
        <Footer/>
        <BackToTop/>
    </>
  )
}
