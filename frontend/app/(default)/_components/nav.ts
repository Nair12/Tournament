import { useUserStore } from '@/app/_providers/UserProvider';
import { TeamResponse } from '@/models/generated.schemas';

import {
    UserGroupIcon,
    UserIcon,
    IdentificationIcon,
    PencilSquareIcon,
    PlusIcon,
    TableCellsIcon,
    BookmarkIcon,
    DocumentTextIcon
} from '@heroicons/react/24/solid';

const isInTeam = useUserStore


export const getSideBarNavigation = (team?:TeamResponse)=>{
    
    
    return [
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
   !!team?
    {
       title: "Your Team ",
       icon: DocumentTextIcon,
       url: `/team/browse/${team.id}`
    } :
     {
       title: "Create team",
       icon: PlusIcon,
       url: "/team/create"
    }
    ,
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


}


