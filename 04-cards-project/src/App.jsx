
import Card from "./components/card";

const App = () => {

  const arr = [
  {
    id: "job-meta-001",
    companyName: "Meta",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    role: "Senior Full-Stack Developer",
    monthlySalaryUSD: 18500,
    salaryFormatted: "$18,500/month",
    companyDescription: "Meta builds social technologies and immersive hardware connecting billions of people worldwide.\nThe company develops platforms including Instagram, WhatsApp, and the Reality Labs ecosystem."
  },
  {
    id: "job-apple-002",
    companyName: "Apple",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    role: "Junior iOS Developer",
    monthlySalaryUSD: 12500,
    salaryFormatted: "$12,500/month",
    companyDescription: "Apple engineers premium consumer hardware, custom silicon, and integrated operating systems.\nIts product lines span iPhone, Mac, wearable devices, and privacy-focused digital services."
  },
  {
    id: "job-amazon-003",
    companyName: "Amazon",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    role: "Senior Backend Developer (AWS)",
    monthlySalaryUSD: 17000,
    salaryFormatted: "$17,000/month",
    companyDescription: "Amazon is an international tech enterprise focused on e-commerce, cloud infrastructure, and AI.\nIts AWS division supplies the backbone cloud compute and storage for modern internet services."
  },
  {
    id: "job-netflix-004",
    companyName: "Netflix",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    role: "Senior Distributed Systems Developer",
    monthlySalaryUSD: 25000,
    salaryFormatted: "$25,000/month",
    companyDescription: "Netflix operates a leading subscription entertainment platform and digital media studio.\nIt streams high-bandwidth original content and licensed entertainment across 190+ countries."
  },
  {
    id: "job-google-005",
    companyName: "Google",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    role: "Junior Software Developer",
    monthlySalaryUSD: 13500,
    salaryFormatted: "$13,500/month",
    companyDescription: "Google pioneers core internet infrastructure, machine learning, and consumer web applications.\nKey products include Search, Android, Chrome, and the Google Cloud Platform suite."
  },
  {
    id: "job-msft-006",
    companyName: "Microsoft",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    role: "Senior Cloud Solutions Developer",
    monthlySalaryUSD: 16500,
    salaryFormatted: "$16,500/month",
    companyDescription: "Microsoft produces enterprise operating systems, enterprise productivity software, and cloud computing.\nIt drives industry transformation via Azure, GitHub, Microsoft 365, and AI integrations."
  }, 
  {
    id: "job-nvda-007",
    companyName: "NVIDIA",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    role: "Senior Deep Learning Systems Developer",
    monthlySalaryUSD: 20000,
    salaryFormatted: "$20,000/month",
    companyDescription: "NVIDIA designs advanced graphics processing units and AI supercomputing infrastructure.\nIts CUDA platform and Tensor Core chips accelerate research labs and autonomous technologies worldwide."
  },
  {
    id: "job-uber-008",
    companyName: "Uber",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    role: "Junior Backend Developer",
    monthlySalaryUSD: 13000,
    salaryFormatted: "$13,000/month",
    companyDescription: "Uber connects consumers with on-demand rides, local delivery, and freight shipping across the globe.\nIts distributed platforms handle real-time geospatial matching, dynamic pricing, and dispatch routing."
  },
  {
    id: "job-adobe-009",
    companyName: "Adobe",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
    role: "Senior Frontend Developer",
    monthlySalaryUSD: 16000,
    salaryFormatted: "$16,000/month",
    companyDescription: "Adobe develops creative software suites and digital experience management tools.\nIts products like Photoshop, Illustrator, and Acrobat power creative workflows for millions of professionals."
  },
  {
    id: "job-spotify-010",
    companyName: "Spotify",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    role: "Junior Data Engineer",
    monthlySalaryUSD: 12000,
    salaryFormatted: "$12,000/month",
    companyDescription: "Spotify provides digital music, podcast, and video streaming access to millions of global listeners.\nIts platform utilizes large-scale data pipelines to power real-time discovery and personalized playlists."
  },
  {
    id: "job-crm-011",
    companyName: "Salesforce",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    role: "Senior Platform Developer",
    monthlySalaryUSD: 17500,
    salaryFormatted: "$17,500/month",
    companyDescription: "Salesforce produces enterprise cloud software focused on customer relationship management (CRM).\nIt delivers unified sales, customer support, and business analytics applications to organizations worldwide."
  }
];
  return (
    <div className='parent'>
      {arr.map(function(job, idx){
        console.log(idx);
        return <div key={idx}>
          <Card job={job}/>
        </div> 
      })}
    </div>
  )
}

export default App