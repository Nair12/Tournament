import {
    ShieldCheckIcon,
    SquaresPlusIcon,
    CalendarDaysIcon,
    MagnifyingGlassPlusIcon,
    UserGroupIcon,
    UserIcon,
    IdentificationIcon,
    PencilSquareIcon,
    PlusIcon,
    TableCellsIcon,
    BookmarkIcon,
} from '@heroicons/react/24/solid';

export const nav = [
    {
      title:"Dashboard",
      icon: BookmarkIcon,
      url:"/dashboard"
    },
    {
     title: "Find team",
     icon: UserGroupIcon,
     url: "/teams",
    },
    {
      title:"Find Player",
      icon: UserIcon,
      url:"/players"
    },
    {
       title: "Create team",
       icon: PlusIcon,
       url: "/team/create"
    },
    {
        title: "Create request",
        icon:PencilSquareIcon,
        url:"/tournament/register"

    },
    {
        title: "Leaderboard",
        icon: TableCellsIcon,
        url: "/leaderboard"
    },
    {

    }
]
