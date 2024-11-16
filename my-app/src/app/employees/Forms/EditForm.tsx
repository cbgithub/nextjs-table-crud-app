import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


interface EditFormProps {
  data: any
  onSubmit: (data: any) => void
  closeSheet: () => void  // Add closeSheet prop
}
const EditForm: React.FC<EditFormProps> = ({ data, onSubmit,  closeSheet }) => {
  const [name, setName] = useState(data?.name || "")
  const [email, setEmail] = useState(data?.email || "")
  const [dept, setDept] = useState(data?.dept || "")
  const [salary, setSalary] = useState(data?.salary || "")


const handleSubmit = (e: React.FormEvent) => {
        // Add to localStorage or API call
    e.preventDefault()
    const formData = {
      name, email, salary, dept }
    // Retrieve existing data from localStorage, or initialize an empty array if none exists
    const existingData = JSON.parse(localStorage.getItem("Emps") || "[]");
    for (var i = 0, len = existingData.length; i < len; ++i) {
        var temp = existingData[i];
        if(temp.id == data?.id){
            temp.dept = formData.dept;
            temp.name = formData.name;
            temp.email = formData.email;
            temp.salary = formData.salary;
        }
    }


     // Store updated data back in localStorage
     localStorage.setItem("Emps", JSON.stringify(existingData));

  
     
    // Call the parent function to close the Sheet
    closeSheet();
  }

  return (
    <div>
  
      <form onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row gap-4">
        <label className="w-full sm:w-1/2">Name
        <Input value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        
      </div>
      <div>
        <label className="w-full sm:w-1/2">Email
        <Input value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
    
      </div>
      <div>
      <div className="flex flex-col sm:flex-row gap-4">
      <label className="w-full sm:w-1/2">Dept
      <Input value={dept} onChange={(e) => setDept(e.target.value)} required /></label>

      </div>
      <div>
        <label className="w-full sm:w-1/2">Salary
        <Input value={salary} onChange={(e) => setSalary(e.target.value)} required /></label>
   
      </div>
      </div>
      <Button type="submit" variant="success" className="absolute bottom-4 right-20">Save Changes</Button>
    </form>
    </div>
  );
}

export default EditForm;
