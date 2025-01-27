import { NaavBar, Footer } from '../../components/blocks';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <NaavBar />
      
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">About Maitri Model Mission</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Nurturing young minds with quality education following the West Bengal State Board curriculum
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To provide comprehensive education following the West Bengal State Board curriculum, 
              focusing on building strong academic foundations and developing well-rounded personalities 
              in students from classes 5 to 10.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To be a leading educational institution in MirzaNagar that prepares students for academic 
              excellence while instilling strong values and life skills essential for their future success.
            </p>
          </div>
        </div>
      </div>

      {/* Academic Overview */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Academic Overview</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">State Board Curriculum</h3>
              <p className="text-gray-600">Following West Bengal Board syllabus for classes 5 to 10</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Support</h3>
              <p className="text-gray-600">Extra guidance and support for all subjects</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Faculty</h3>
              <p className="text-gray-600">Dedicated teachers with state board expertise</p>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Journey</h2>
          <div className="prose lg:prose-lg mx-auto text-gray-700">
            <p className="mb-4">
              Established in 2005, Maitri Model Mission began with the goal of providing quality education 
              to students in MirzaNagar and surrounding areas. We focus on classes 5 to 10, following the 
              West Bengal State Board curriculum.
            </p>
            <p className="mb-4">
              Our institution has grown to become a trusted name in education, known for our commitment to 
              academic excellence and student development. We take pride in our track record of helping 
              students achieve strong results in their board examinations.
            </p>
            <p>
              With dedicated teachers, supportive staff, and a nurturing environment, we continue to serve 
              our community by providing quality education that prepares students for their future academic 
              endeavors.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;

