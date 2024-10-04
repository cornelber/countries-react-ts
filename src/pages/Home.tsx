import Layout from '../layouts/Layout'
import heroImg from '../assets/countries-hero-img.jpg'
import { Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Layout>
        <div className='h-[700px] flex gap-16'>
            <img className='basis-1/2 w-full rounded-lg shadow-lg object-cover' src={heroImg} alt="Hero Image" />
            <div className="basis-1/2 flex flex-col justify-center">
                <Typography
                    as={'h1'}
                    className='text-gray-900 text-3xl font-bold'
                >
                    Explore the World with Ease
                </Typography>
                <Typography 
                    as={'p'}
                    className='text-gray-600 mt-4'
                >
                    Discover detailed information about countries around the globe. From population and languages to geography and more, explore every corner of the world at your fingertips. Powered by real-time data, start your journey today!
                </Typography>
                <Link to='/countries' className='btn mt-8 w-fit'>
                    Get Started
                </Link>
            </div>
        </div>
    </Layout>
  )
}

export default Home