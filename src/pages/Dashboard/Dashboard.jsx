import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className='flex-c dashboard-div'>
      
      <h1>Welcome!</h1>
      <img src="https://cdn-icons-png.flaticon.com/512/7747/7747363.png" alt="" className='logo-img' />
      <p>
      This full stack React application serves as a job application and contact tracker. It allows users to keep track of their job applications, including information such as the application date, type, role, environment, location, company, industry, company website, description, salary, status, priority, and references. Users can also track their contacts associated with each application.
      </p>
      <p>This application provides an intuitive and user-friendly interface for tracking job applications and associated contacts. It enables users to manage their job search effectively and keep track of important information related to job applications and contacts.</p>
    </div>
  );
}