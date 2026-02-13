import { RoleDto } from "@/models/generated.schemas";

export const mockResumes = Array.from({ length: 25 }, (_, idx) => ({
  id: idx + 1,
  type: idx % 2 === 0 ? 'Casual' : 'Professional',
  description: [
    'Aggressive entry fragger with LAN experience',
    'Support player, strong utility knowledge',
    'AWPer with fast reactions and good positioning',
    'Flexible rifler, ready for teamplay',
    'Young talent grinding Faceit daily',
  ][idx % 5],

  roles: [
    { name: 'AWP' },
    { name: 'IGL' },
    { name: 'RIFLER' },
    { name: 'SUPPORT' },
  ].slice(0, (idx % 3) + 1),

  player: {
    faceitProfile: {
      nickname: `Player_${idx + 1}`,
      elo: 1200 + idx * 45,
      skillLevel: (idx % 10) + 1,
      country: ['us', 'de', 'fr', 'pl', 'ua', 'ro', 'tr'][idx % 7],
      avatar: `https://i.pravatar.cc/150?img=${idx + 10}`,
    },
  },
}));
