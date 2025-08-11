import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import employeeService from '../services/employee.service';
import { Link } from 'react-router-dom';
import male1 from './male1.png';
import femaleWorker from './female worker.png';
import maleWorker from './male 2.png';

const EmployeesList = ({ textStyle }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    employeeService.getAll()
      .then(response => {
        console.log('Printing the employees data', response.data);
        setEmployees(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the employees!', error);
      });
  };

  const handleDelete = (id) => {
    employeeService.remove(id)
      .then(response => {
        console.log('Employee deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.error('There was an error deleting the employee!', error);
      });
  };

  const getEmployeePhoto = (employee) => {
    if (employee.gender === 'female') {
      return femaleWorker;
    } else if (employee.gender === 'male') {
      return maleWorker;
    } else {
      return male1; 
    }
  };

  const cardStyle = {
    backgroundColor: textStyle.color === "#fff" ? "#1e1e1e" : "#fff",
    color: textStyle.color
  };

  return (
    <div className="container">
      <h3 style={textStyle}><i>List of Employees</i></h3>
      <br />
      <div>
        <Link to="/add" className="btn btn-primary mb-3">Add Employee</Link>
      </div>

      <div className="row">
        {employees.map((employee) => (
          <div className="col-md-4 mb-4" key={employee.id}>
            <div className="card shadow-sm h-100 text-center p-3" style={cardStyle}>
              <img
                src={getEmployeePhoto(employee)}
                alt="Employee"
                className="rounded-circle mx-auto"
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'cover',
                  border: '3px solid #ddd'
                }}
              />
              <div className="card-body">
                <h5 className="card-title" style={textStyle}>{employee.name}</h5>
                <p className="card-text" style={textStyle}>📍 {employee.location}</p>
                <p className="card-text" style={textStyle}>{employee.department}</p>
                <div className="d-flex justify-content-center gap-2">
                  <Link className="btn btn-info" to={`/employees/edit/${employee.id}`}>Update</Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(employee.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeesList;
