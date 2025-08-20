import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="py-20 lg:py-32 bg-gradient-to-br from-greenvolt-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-greenvolt-green/10 text-greenvolt-green border-greenvolt-green/20">
              Page Not Found
            </Badge>
            <div className="text-8xl lg:text-9xl font-bold text-greenvolt-green mb-6">404</div>
            <h1 className="text-3xl lg:text-5xl font-bold text-greenvolt-black mb-6">
              Oops! This Page Doesn't Exist
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              The page you're looking for might have been moved, deleted, or you may have entered the wrong URL.
              Let's get you back to exploring our electric vehicles!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button
                  size="lg"
                  className="bg-greenvolt-green hover:bg-greenvolt-green-dark text-white px-8 py-3"
                >
                  <Home className="mr-2 h-5 w-5" />
                  Go to Homepage
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-greenvolt-green text-greenvolt-green hover:bg-greenvolt-green hover:text-white px-8 py-3"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
