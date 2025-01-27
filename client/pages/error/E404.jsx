import { Link } from 'react-router-dom';
import { NaavBar, Footer } from '../../components/blocks';

const E404 = () => {
  return (
    <div className="min-h-screen bg-white pt-16">
      <NaavBar />
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-9xl font-bold text-blue-900 mb-4">404</h1>
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Return Home
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default E404;
