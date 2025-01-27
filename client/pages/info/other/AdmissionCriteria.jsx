import { NaavBar, Footer } from '../../../components/blocks';

const AdmissionCriteria = () => {
  const criteria = [
    {
      grade: "Primary Admission (Class V)",
      requirements: [
        "Must have successfully completed Class IV",
        "Age must be 10 years as of April 1st of the admission year",
        "Transfer Certificate from previous school (mandatory)",
        "Mark sheet/Report Card of Class IV",
        "Birth Certificate (original and photocopy)",
        "Aadhar Card (photocopy)",
        "4 recent passport size photographs",
        "Completed Application Form",
        "Entrance Test Performance",
        "Parent Interview"
      ]
    },
    {
      grade: "School Transfer Cases (Any Class)",
      requirements: [
        "Transfer Certificate from previous school (mandatory)",
        "Character Certificate from previous school",
        "Report Card/Mark sheets of last 2 years",
        "Birth Certificate (original and photocopy)",
        "Aadhar Card (photocopy)",
        "4 recent passport size photographs",
        "Completed Application Form",
        "Entrance Test Clearance",
        "Parent and Student Interview",
        "Address Proof (any government issued)"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <NaavBar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-blue-900 text-center mb-12">
          Admission Criteria
        </h1>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 leading-relaxed">
              Maitri Model Mission maintains strict admission criteria to ensure academic excellence 
              and maintain educational standards. Please review the requirements carefully before 
              applying. All documents must be valid and verified during the admission process.
            </p>
          </div>

          {/* Criteria Cards */}
          {criteria.map((level) => (
            <div key={level.grade} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                {level.grade}
              </h2>
              <ul className="space-y-3">
                {level.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Important Notes */}
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Important Notes
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Transfer Certificate (TC) is mandatory for all students coming from other schools</li>
              <li>• All original documents must be presented for verification</li>
              <li>• Age criteria is strictly followed as per government norms</li>
              <li>• Admission is subject to seat availability and entrance test performance</li>
              <li>• Incomplete applications will not be processed</li>
              <li>• The school reserves the right to reject any application without stating reasons</li>
            </ul>
          </div>

          {/* Document Verification Process */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Document Verification Process
            </h3>
            <p className="text-gray-700 mb-4">
              All documents will be verified in the following order:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Initial document submission with application form</li>
              <li>Original document verification before entrance test</li>
              <li>Final verification after selection</li>
            </ol>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Need More Information?
            </h3>
            <p className="text-gray-700 mb-4">
              For any queries regarding admission criteria or document requirements, please contact:
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                Email: admissions@maitrimodelmission.org
              </p>
              <p className="text-gray-700">
                Phone: +91 XXXXX XXXXX
              </p>
              <p className="text-gray-700">
                Office Hours: Monday to Friday (9:00 AM - 3:00 PM)
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdmissionCriteria;

