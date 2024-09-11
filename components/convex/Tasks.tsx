"use client"

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

import React from 'react'

const Tasks = () => {
  const tasks = useQuery(api.tasks.get);
  return (
    <div>{tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}</div>
  )
}

export default Tasks