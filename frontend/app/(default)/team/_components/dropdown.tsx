"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { TrashIcon } from '@heroicons/react/24/solid';
import { PencilIcon } from 'lucide-react';

const TeamDropdown = () => {
    return (
        <DropdownMenu>
            
            <DropdownMenuTrigger asChild>
                <Button variant="outline" type="button">
                  Edit
                </Button>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent sideOffset={5} align="end">
                <DropdownMenuItem onClick={() => console.log('Rename')}>
                    <PencilIcon/>
                    Rename
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                    className="!text-red-600 !bg-red-600" 
                    onClick={() => console.log('Delete')}>
                        <TrashIcon/>
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default TeamDropdown;
