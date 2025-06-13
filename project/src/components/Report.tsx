import React from 'react';

interface PathologyReportProps {
  patientData: {
    name: string;
    dob: string;
    sex: string;
    race?: string;
    address: string;
    tin?: string;
  };
  reportData: {
    accessionNumber: string;
    dateOfSurgery?: string;
    dateReceived: string;
    dateOfReport: string;
    grossDescription: string;
    diagnosis: string;
    diagnosisCode: string;
    cptCode: string;
    location: string;
    comments: string[];
    slidesReviewed: string;
  };
  pathologist: {
    name: string;
    credentials: string;
  };
}

export const PathologyReport: React.FC<PathologyReportProps> = ({
  patientData,
  reportData,
  pathologist,
}) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md print:shadow-none print:p-0 font-serif">
      {/* Header */}
      <header className="text-center mb-6 border-b border-gray-300 pb-4">
        <h1 className="text-xl font-bold uppercase tracking-wider">ORAL PATHOLOGY CONSULTANTS</h1>
        <div className="text-xs mt-2">
          <p className="uppercase">DEPARTMENT OF DIAGNOSTIC SCIENCES AND PATHOLOGY</p>
          <p>650 WEST BALTIMORE STREET, 7 North</p>
          <p>BALTIMORE, MARYLAND 21201</p>
          <p>(410) 706-7936</p>
        </div>
        <div className="mt-2 text-xs">
          <p>CLIA ID: 21D0649765</p>
        </div>
      </header>

      {/* Report Date and Accession Number */}
      <div className="flex justify-between mb-6 text-sm">
        <div>
          <p><span className="font-semibold">Date of Report:</span> {reportData.dateOfReport}</p>
        </div>
        <div>
          <p><span className="font-semibold">Accession No:</span> {reportData.accessionNumber}</p>
        </div>
      </div>

      {/* Patient Information */}
      <div className="flex flex-col md:flex-row justify-between mb-6 text-sm gap-4">
        <div>
          <p className="font-semibold">Dr. {patientData.name}</p>
          <p className="whitespace-pre-line">{patientData.address}</p>
          {patientData.tin && (
            <p className="mt-1"><span className="font-semibold">T.I.N. #:</span> {patientData.tin}</p>
          )}
        </div>
        <div>
          <p><span className="font-semibold">Date Received:</span> {reportData.dateReceived}</p>
          {reportData.dateOfSurgery && (
            <p><span className="font-semibold">Date of Surgery:</span> {reportData.dateOfSurgery}</p>
          )}
          <p><span className="font-semibold">Date Of Birth:</span> {patientData.dob}</p>
          <p><span className="font-semibold">Sex:</span> {patientData.sex}</p>
          {patientData.race && (
            <p><span className="font-semibold">Race:</span> {patientData.race}</p>
          )}
        </div>
      </div>

      {/* Patient Divider */}
      <div className="border-t-2 border-black pt-2 mb-4">
        <h2 className="font-bold uppercase text-sm">Patient</h2>
      </div>

      {/* Gross Description */}
      <section className="mb-6">
        <h3 className="font-bold mb-1 text-sm">Gross Description:</h3>
        <p className="text-sm">{reportData.grossDescription}</p>
      </section>

      {/* Diagnosis */}
      <section className="mb-6">
        <h3 className="font-bold mb-1 text-sm">Diagnosis: <span className="font-normal">{reportData.diagnosis} ({reportData.diagnosisCode})</span></h3>
        <p className="text-sm">
          Lesion shows epithelial proliferation in the form of papillary projections consistent with papilloma (A). 
          The epithelial margins and some of the papillary projections show mild to moderate dysplastic changes 
          of drop shaped rete ridges, hyperchromatism, and basilar hyperplasia (B and C). 
          Dysplasia extends to margins. Incisional biopsy.
        </p>
      </section>

      {/* CPT and Location */}
      <div className="flex justify-between mb-6 text-sm">
        <div>
          <p><span className="font-semibold">CPT Code:</span> {reportData.cptCode}</p>
        </div>
        <div>
          <p><span className="font-semibold">Location:</span> {reportData.location}</p>
        </div>
      </div>

      {/* Comments */}
      <section className="mb-6 text-sm">
        <p><span className="font-semibold">Comment:</span> {reportData.slidesReviewed} reviewed.</p>
        {reportData.comments.map((comment, index) => (
          <p key={index} className="mt-2">{comment}</p>
        ))}
      </section>

      {/* Footer with Signature */}
      <footer className="mt-8 text-sm">
        <p>
          By this electronic signature I attest that the above diagnosis is based upon my personal examination 
          of the slides (and/or other material indicated in the diagnosis), and that I have reviewed and 
          approved this report.
        </p>
        <p className="mt-4 font-bold">{pathologist.name} {pathologist.credentials}</p>
      </footer>
    </div>
  );
};

// Example usage:
/*
const ExampleReport = () => (
  <PathologyReport
    patientData={{
      name: "Phillip Gentry",
      dob: "11/25/1972",
      sex: "M",
      address: "1831 Wilson Blvd\nArlington, VA 22201",
      tin: "521456103"
    }}
    reportData={{
      accessionNumber: "2017-1245",
      dateReceived: "07/13/2017",
      dateOfReport: "07/19/2017",
      grossDescription: "One previously fixed piece of tan soft tissue (0.3 × 0.3 × 0.2 cm), hemi (AS) Photo reviewed.",
      diagnosis: "Mild to moderate dysplasia",
      diagnosisCode: "K13.29",
      cptCode: "88305",
      location: "Right Soft Palate",
      comments: [
        "The findings suggest a need for close follow-up due to the presence of dysplasia.",
        "Recommend repeat biopsy in 3 months to monitor progression."
      ],
      slidesReviewed: "6 slides 8 sections"
    }}
    pathologist={{
      name: "Rania Younis",
      credentials: "BDS, MDS, PhD"
    }}
  />
);
*/