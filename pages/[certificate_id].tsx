import { useRouter } from 'next/router';
import { Certificate } from "../components/certificate";

export interface CertificateObject {
  name: string;
  email: string;
  certificate_id: string;
  issue_date: string;
}

export default function Home({name, dateIssued}: {name: string, dateIssued: string}) {
  const router = useRouter();
  const { certificate_id } = router.query;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Certificate name={name} certificateId={certificate_id || ''} dateIssued={dateIssued} />
    </main>
  )
}

export async function getStaticPaths() {
  // Load students data
  const certificates = require('../data/s23_blockchain_fundamentals_certificates.json');

  // Generate static paths
  let paths = certificates.map((certificate: CertificateObject) => ({
    params: { certificate_id: certificate.certificate_id.toString() },
  }));

  paths.push({ params: { certificate_id: 'test' }});

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: {params: {certificate_id: string}}) {
  // Load students data
  const certificates = require('../data/s23_blockchain_fundamentals_certificates.json');

  // Find the student that matches the path
  const certificate = certificates.find(
    (certificate: CertificateObject) => certificate.certificate_id === params.certificate_id
  ) || {name: '', issue_date: '', certificate_id: ''};

  // Pass student name to the page
  return { props: { name: certificate.name, dateIssued: certificate.issue_date } };
}