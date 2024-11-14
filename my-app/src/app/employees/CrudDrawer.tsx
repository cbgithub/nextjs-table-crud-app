import React from "react"
import { Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import CreateForm from "./Forms/CreateForm"
import EditForm from "./Forms/EditForm"
import DeleteForm from "./Forms/DeleteForm"


interface CrudDrawerProps {
  open: boolean
  onClose: () => void
  operation: "Add" | "Edit" | "Delete" | ""
  data: any | null
 
}

const CrudDrawer: React.FC<CrudDrawerProps> = ({ open, onClose, operation, data }) => {
    function refreshData() {
        throw new Error("Function not implemented.")
    }

  return (
    <Drawer open={open} onClose={() => { 
        onClose(); 
      }}>
      <DrawerOverlay />
      <DrawerContent className="fixed inset-y-0 left-0 w-100 bg-white p-6 shadow-lg">
        <DrawerHeader>{operation} Item</DrawerHeader>
        <DrawerTitle></DrawerTitle>
      
          {operation === "Add" && <CreateForm onSubmit={function (data: any): void {
                      throw new Error("Function not implemented.") 
                  } } closeDrawer={()=> {onClose();
                
                  }} />}
        {operation === "Edit" && <EditForm onSubmit={function (data: any): void {
                  throw new Error("Function not implemented.")
              } } closeDrawer={() => {
                  onClose()

              } } data={data} />}
        {operation === "Delete" && <DeleteForm onSubmit={function (data: any): void {
                  throw new Error("Function not implemented.")
              } } closeDrawer={() => {
                  onClose()

              } } data={data} />}
                  
               <Button onClick={onClose} className="absolute bottom-4 right-3">Close</Button>
           
        
 
      </DrawerContent>
    </Drawer>
  )
}

export default CrudDrawer
