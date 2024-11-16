import React from "react"
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetDescription,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import CreateForm from "./Forms/CreateForm"
import EditForm from "./Forms/EditForm"
import DeleteForm from "./Forms/DeleteForm"


interface CrudSheetProps {
  open: boolean
  onClose: () => void
  operation: "Add" | "Edit" | "Delete" | ""
  data: any | null
 
}

const CrudSheet: React.FC<CrudSheetProps> = ({ open, onClose, operation, data }) => {
    function refreshData() {
        throw new Error("Function not implemented.")
    }

  return (
    <Sheet open={open}   >
      <SheetOverlay />
      <SheetContent>
      <SheetHeader className="text-lg font-semibold">{operation} Item</SheetHeader>
        <SheetTitle></SheetTitle>
      
          {operation === "Add" && <CreateForm onSubmit={function (data: any): void {
                      throw new Error("Function not implemented.") 
                  } } closeSheet={()=> {onClose();
                
                  }} />}
        {operation === "Edit" && <EditForm onSubmit={function (data: any): void {
                  throw new Error("Function not implemented.")
              } } closeSheet={() => {
                  onClose()

              } } data={data} />}
        {operation === "Delete" && <DeleteForm onSubmit={function (data: any): void {
                  throw new Error("Function not implemented.")
              } } closeSheet={() => {
                  onClose()

              } } data={data} />}
                  
               <Button onClick={onClose} className="absolute bottom-4 right-3">Close</Button>
           
        
 
      </SheetContent>
    </Sheet>
  )
}

export default CrudSheet
