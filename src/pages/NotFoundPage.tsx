import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";
import { Button, Typography } from "@material-tailwind/react";

const NotFoundPage = () => {
  return (
    <Layout>
        <div className="flex flex-col items-center dark:text-white">
            <Typography
                as="h2"
                variant="h2"
                className="uppercase mb-6"
            >
                404 - Page Not Found
            </Typography>
            <Typography className="mb-12">
                The page you are looking for might have been removed <br />
                had its name changed or is temporarily unavailable.
            </Typography>
            <Link to={"/"}>
                <Button variant="filled" size="lg" className="dark:bg-light-dark" >Go to homepage</Button>
            </Link>
        </div>
    </Layout>
  );
};

export default NotFoundPage;
