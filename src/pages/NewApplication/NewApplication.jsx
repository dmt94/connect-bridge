import ApplicationForm from "../../components/ApplicationForm/ApplicationForm";
import './NewApplication.css'


export default function NewApplication() {
  return (
    <div className="new-application-page">
      <h1>Add New Application 📌</h1>
      <ApplicationForm />
    </div>
  );
}