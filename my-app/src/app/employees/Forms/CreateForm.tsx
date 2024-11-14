import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


interface CreateFormProps {
  onSubmit: (data: any) => void
  closeDrawer: () => void  // Add closeDrawer prop
}
const CreateForm: React.FC<CreateFormProps> = ({ onSubmit, closeDrawer }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [dept, setDept] = useState("")
  const [salary, setSalary] = useState("")


const handleSubmit = (e: React.FormEvent) => {
        // Add to localStorage or API call
    e.preventDefault()
    const formData = {  id: Date.now().toString(),
      name, email, salary, dept }
    // Retrieve existing data from localStorage, or initialize an empty array if none exists
    const existingData = JSON.parse(localStorage.getItem("Emps") || "[]");

    // Add the new form data to the list
    existingData.push(formData);

    // Store updated data back in localStorage
    localStorage.setItem("Emps", JSON.stringify(existingData));
     
    // Call the parent function to close the drawer
    closeDrawer();
  }

  return (
    <div>
  
      <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <Input value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email</label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
      <label>Dept</label>
        <Input value={dept} onChange={(e) => setDept(e.target.value)} required />
      </div>
      <div>
        <label>Salary</label>
        <Input value={salary} onChange={(e) => setSalary(e.target.value)} required />
      </div>
      <Button type="submit" variant="destructive" className="absolute bottom-4 right-20">Save Changes</Button>
    </form>
    </div>
  );
}

export default CreateForm;
