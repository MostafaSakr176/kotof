'use client'
import React, { useState } from 'react'
import Breadcrumb from '@/app/_components/breadcrumb/breadcrumb'
import Pagination from '@/app/_components/pagination/Pagination'
import SectorCard from '@/app/_components/sectorCard/SectorCard'


const SectorsPage = () => {
  
  const [First, setFirst] = useState<number>(1)
  return (
    <>
    <Breadcrumb
      items={[
        { label: 'Sectors', href: '/sectors' },
      ]}
    />


    <div className="mx-auto max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl my-20 md:my-32">
      <div className='text-center mb-10'>
        <h6 data-aos="fade-up" data-aos-duration="500" data-aos-delay="0" className='text-[#009444] font-bold text-[16px]'>Our Blog</h6>
        <h2 data-aos="fade-zoom-in" data-aos-duration="500" data-aos-delay="0" className='text-[26px] md:text-[40px] text-[#252525] font-[500]'>Check our latest blog</h2>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
        <SectorCard/>
        <SectorCard/>
        <SectorCard/>
        <SectorCard/>
      </div>
      <Pagination currentPage={First} totalPages={3} onPageChange={(t) => setFirst(t)} />


    </div>






  </>
  )
}

export default SectorsPage