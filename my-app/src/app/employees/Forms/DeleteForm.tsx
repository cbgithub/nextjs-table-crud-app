import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


interface DeleteFormProps {
  data: any
  onSubmit: (data: any) => void
  closeSheet: () => void  // Add closeSheet prop
}
const DeleteForm: React.FC<DeleteFormProps> = ({ data, onSubmit,  closeSheet }) => {
  const [name, setName] = useState(data?.name || "")
  const [email, setEmail] = useState(data?.email || "")
  const [dept, setDept] = useState(data?.dept || "")
  const [salary, setSalary] = useState(data?.salary || "")


const handleSubmit = (e: React.FormEvent) => {
        // Add to localStorage or API call
    e.preventDefault()

    // Retrieve existing data from localStorage, or initialize an empty array if none exists
      // Update localStorage after deleting todo
   
    const existingData = JSON.parse(localStorage.getItem("Emps") || "[]");
    const updatedData = JSON.stringify(
        existingData.filter((emps: { id: any; }) => emps.id !== data?.id)
      );
   


     // Store updated data back in localStorage
     localStorage.setItem("Emps", updatedData);

  
     
    // Call the parent function to close the Sheet
    closeSheet();
  }

  return (
    <div>
        <strong>Are you sure you want to delete the following item?</strong>
        <br>
        </br>
      <div className="flex flex-col sm:flex-row gap-4">
     <div>
        <strong>ID:</strong> {data.id}
      </div>
      <div>
        <strong>Name:</strong> {data.name}
      </div>
      <div>
        <strong>Email:</strong> {data.email}
      </div>
      <Button variant="destructive" onClick={handleSubmit} className="absolute bottom-4 right-20">Save Changes</Button>
  
   </div>
    </div>
  );
}

export default DeleteForm;
