import Image from 'next/image';
import { topTeams, topPlayers } from './dashboardLeaders';

const TopRankingWidget = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* TOP TEAMS */}
      <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6">
        <h3 className="text-sm uppercase tracking-widest text-zinc-400 mb-4">
          Top Teams
        </h3>

        <ul className="space-y-3">
          {topTeams.map((team, i) => (
            <li
              key={team.id}
              className="flex items-center justify-between bg-zinc-900/50 border border-zinc-800/50 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <span className="text-zinc-500 text-xs font-bold w-4">
                  #{i + 1}
                </span>

                <div className="w-9 h-9 rounded-full bg-zinc-800 overflow-hidden">
                  <Image
                    src={team.avatar}
                    alt={team.name}
                    width={36}
                    height={36}
                    className="object-cover"
                  />
                </div>

                <span className="font-bold uppercase tracking-tight">
                  {team.name}
                </span>
              </div>

              <span className="text-zinc-400 text-xs font-mono">
                {team.rating} AVG ELO
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* TOP PLAYERS */}
      <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6">
        <h3 className="text-sm uppercase tracking-widest text-zinc-400 mb-4">
          Top Players
        </h3>

        <ul className="space-y-3">
          {topPlayers.map((player, i) => (
            <li
              key={player.id}
              className="flex items-center justify-between bg-zinc-900/50 border border-zinc-800/50 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <span className="text-zinc-500 text-xs font-bold w-4">
                  #{i + 1}
                </span>

                <div className="w-9 h-9 rounded-full bg-zinc-800 overflow-hidden">
                  <Image
                    src={player.avatar}
                    alt={player.nickname}
                    width={36}
                    height={36}
                    className="object-cover"
                  />
                </div>

                <span className="font-bold tracking-tight">
                  {player.nickname}
                </span>
              </div>

              <span className="text-zinc-400 text-xs font-mono">
                {player.elo} ELO
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopRankingWidget;
