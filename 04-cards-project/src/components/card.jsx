
const Card = (props) => {
    // takes 1 object elemenbt from the array
    const { job } = props;
    return (
    <div className="card">
        <img
        src={job.companyLogo} 
        alt={job.companyName} 
        height="50px" 
        width="50px" 
        />
        <h3>{job.companyName}</h3>
        <h4>{job.role}</h4>
        <p>{job.companyDescription}</p>
        <div className="bottom">
        <p><b>${job.monthlySalaryUSD}/month</b></p>
        <button>Apply now</button>
        </div>
    </div>
    );
}

export default Card