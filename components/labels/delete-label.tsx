import { Trash2 } from "lucide-react";
import { Doc } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useToast } from "../ui/use-toast";


export default function DeleteLabel({ data }: { data: Doc<"labels"> }) {
  const { _id } = data
  const { toast } = useToast();
  const deleteLabelMutation = useMutation(api.labels.deleteLabel);
  const handleDeleteTodo = (e: any) => {
    e.preventDefault();
    const deletedId = deleteLabelMutation({ labelID: _id });
    if (deletedId !== undefined) {
      toast({
        title: "🗑️ Successfully deleted",
        duration: 3000,
      });
    }
  };

  return (
    <Trash2 className=" text-red-500 hover:cursor-pointer" width="1.25rem" height="1.25rem"
      onClick={() => {
        console.log("clicked")
        console.log(_id)
      }} />
  );
}