import React from 'react'
import Navbar from './components/navbar'
import Content from './components/content'


export default function page() {
    return (
        <div className="pt-20 md:pt-24 max-w-6xl 2xl:max-w-screen-xl mx-auto">
            <div className="flex">
                <div className="w-64">
                    <Navbar />
                </div>
                <Content />
            </div>
        </div>
    )
}
