import React from 'react'

export default function Footer() {
  return (
    <section className='mt-[54px] bg-[#0B7373] w-full'>
        <div className='px-4 py-6 w-full max-w-7xl mx-auto flex flex-col lg:flex-row space-y-4 justify-between items-center'>
            <p className='text-vista-white'>© 2023 Zamrood by PT Teknologi Pandu Wisata</p>
            <div className='w-fit inline-flex gap-6 items-center justify-center lg:justify-end'>
                <a href="" target='_blank'>
                    <img src="/facebook.svg" alt="" />
                </a>
                <a href="" target='_blank'>
                    <img src="/ig.svg" alt="" />
                </a>
                <a href="" target='_blank'>
                    <img src="/Email.svg" alt="" />
                </a>
            </div>
        </div>
    </section>
  )
}
