import { Calendar, CalendarDays, Grid2X2, Inbox } from "lucide-react";


export const primaryNavItems = [
  {
    name: "Inbox",
    icon: <Inbox className="w-4 h-4" />,
    link: "/loggedin",
  },
  {
    name: "Today",
    icon: <Calendar className="w-4 h-4" />,
    link: "/loggedin/today",
  },
  {
    name: "Upcoming",
    icon: <CalendarDays className="w-4 h-4" />,
    link: "/loggedin/upcoming",
  },
  {
    name: "Filters & Labels",
    icon: <Grid2X2 className="w-4 h-4" />,
    link: "/loggedin/filters-labels",
  },
]