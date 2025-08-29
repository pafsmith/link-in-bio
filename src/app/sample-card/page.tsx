import Image from "next/image";
import { LinkCard } from "../../components/link-card";

export default function SampleCardPage() {

  return (
    <div>
      <h1>Sample Card Page</h1>

      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-between border rounded-xl mt-10 px-6 py-10 shadow-lg gap-4 ">
          {/* Avatar */}
          <div className="">
            <img src="https://static.wikia.nocookie.net/clashroyale/images/b/b8/BowlerCard.png" alt="User Avatar" className="w-24 h-24 rounded-full object-cover" />
          </div>
          {/* Title */}
          <div className="flex flex-col gap-1 text-center">
            <h1>Bowlers Bowling Balls</h1>
            <p>Bowling up the left lane. All night long.</p>
          </div>
          { /* Links */}
          <div className="flex flex-col gap-3 w-2/3">
            <LinkCard
              href="https://bowler.com"
              title="Bowler"
              image="https://static.wikia.nocookie.net/clashroyale/images/b/b8/BowlerCard.png"
            />
            <LinkCard
              href="https://bowling.com"
              title="Bowling"
              image="https://static.wikia.nocookie.net/clashroyale/images/b/b8/BowlerCard.png"
            />
          </div>
    
        
        </div>
       
      </div>
    </div>
  )
}