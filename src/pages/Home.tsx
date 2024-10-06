import Layout from '../layouts/Layout'
import heroImg from '../assets/countries-hero-img.jpg'
import { Button, Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center text-center mb-12 space-y-6">
            <Typography
                as="h1"
                className="text-gray-900 dark:text-white text-5xl font-extrabold"
            >
                Explore the World with Ease
            </Typography>
            <Typography
                as="p"
                className="text-gray-600 dark:text-gray-300 text-lg max-w-xl"
            >
                Discover detailed information about countries worldwide. From population and languages to geography and more, explore every corner of the world with real-time data. Start your journey today!
            </Typography>
            <Link to="/countries">
                <Button
                variant="outlined"
                size="lg"
                className="dark:text-white dark:border-white border-gray-700"
                >
                Get Started
                </Button>
            </Link>
            </div>
            <div className="w-full h-72 md:h-96 lg:h-[500px] mt-8 overflow-hidden rounded-lg shadow-lg">
            <img
                className="w-full h-full object-cover"
                src={heroImg}
                alt="Explore the World"
            />
            </div>
        </Layout>
    );
}

export default Home