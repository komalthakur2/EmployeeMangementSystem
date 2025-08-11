import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import employeeService from "../services/employee.service";

const AddEmployee = () => {

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [department, setDepartment] = useState('');
    const [gender, setGender] = useState('male');
    const [darkMode, setDarkMode] = useState(false);
    const navigate = useNavigate();
    const{id} = useParams();
    const saveEmployeee = (e) => {
        e.preventDefault();
        const employee = { name, location, department, gender, id};
        if(id){
            
            employeeService.update(employee)
            .then(response => {
                console.log('Employee data updated successfully', response.data);
                navigate("/");
            })
            .catch(error => {
                console.error('There was an error updating the employee!', error);
            });
        }
        else{
            
            employeeService.create(employee)
            .then(response => {
                console.log('Employee data added successfully', response.data);
                navigate("/");
            })
            .catch(error => {
                console.error('There was an error creating the employee!', error);
            });
        }
        
    }
    useEffect(() =>{
        if(id){
            employeeService.get(id)
            .then(employee => {
                setName(employee.data.name);
                setLocation(employee.data.location);
                setDepartment(employee.data.department);
                setGender(employee.data.gender || 'male');
            })
            .catch(error => {
                console.error('There was an error fetching the employee!', error);
            });
        }
        }, [])
return ( 
  
        <div className="container">
            <h3>
                Add New Employee
            </h3>
            <hr/>
            <form onSubmit={saveEmployeee}>
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control col-4"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name"
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select
                        id="gender"
                        className="form-control col-4"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                    <div className="form-group">
                     <input
                    type="text"
                    className="form-control col-4"
                    id="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder="Enter Department"
                    />
                    </div>
                    <div className="form-group">
                     <input
                    type="text"
                    className="form-control col-4"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter Location"
                    />

                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Save</button>

                    </div>
                    </form>
                    <hr/>
                    <Link to="/">Back to the List</Link>
                    </div>

                
            
        
     );
    }
 
export default AddEmployee;