"use client"
import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import { Tags, } from 'lucide-react';
import DeleteLabel from "../labels/delete-label";

export default function LabelsDetails() {
  const labels = useQuery(api.labels.getLabels)
  console.log(labels)
  return (
    <div className="xl:px-40">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <h1 className="text-lg font-semibold md:text-2xl">Labels</h1>
        {/* BUG */}
        {/* it's mapping the same label twice */}
        {labels?.map((labels, id) => {
          return (
            <div
              className="flex items-center justify-between space-x-2 border-b-2 p-2 border-gray-100"
            >
              <div className="flex items-center ">
                <Tags className="text-primary rotate-90" width="1.25rem" height="1.25rem" />
                <label
                  className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70  text-base font-normal"

                >{labels.name}</label>
              </div>
              {/* <DeleteLabel data={labels._id} /> */}
            </div>

          )
        })
        }
      </div>
    </div>
  )
}