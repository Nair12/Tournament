'use client';

import { RoleDto } from "@/models/generated.schemas";
import { ROLES } from "../create/_components/roles";

type Props = {
    value: string[];
    onChange: (value: string[]) => void;
    roles:RoleDto[]
};

const RolesSelect = ({ value, onChange,roles }: Props) => {
    const toggle = (role: string) => {
        onChange(
            value.includes(role)
                ? value.filter(r => r !== role)
                : [...value, role]
        );
    };

    return (
        <div className="flex gap-2 flex-wrap">
            {roles.map(role => {
                const active = value.includes(role.id);

                return (
                    <button
                        key={role.id}
                        type="button"
                        onClick={() => toggle(role.id)}
                        className={`
              px-3 py-1
              text-[11px] font-black uppercase
              border
              transition
              ${active
                                ? 'bg-white text-black border-white'
                                : 'bg-zinc-900 text-zinc-400 border-zinc-700 hover:border-zinc-400'}
            `}
                    >
                        {role.name}
                    </button>
                );
            })}
        </div>
    );
};
export default RolesSelect
