import React from "react";
import { Monitor, Headphones, ArrowRight, Bot } from "lucide-react";
import Link from "next/link";
const FeatureCards = () => {
  const categories = [
    {
      title: "Workstations",
      desc: "Modular computing units for heavy-duty processing.",
      icon: <Monitor size={20} className="text-white" />,
      iconBg: "bg-[#0066FF]",
      large: false,
    },
    {
      title: "Audio Lab",
      desc: "Acoustic perfection through precision hardware.",
      icon: <Headphones size={20} className="text-white" />,
      iconBg: "bg-[#00E0FF]",
      large: false,
    },
    {
      title: "Neural Link",
      desc: "AI-integrated peripherals that adapt to your specific workflow and tactile preferences.",
      icon: <Bot size={48} className="text-white/20" />,
      large: true,
    },
  ];

  return (
    <section className="bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Standard Cards */}
        {categories.map((item, idx) => (
          <div
            key={idx}
            className={`relative group overflow-hidden rounded-2xl bg-[#161617] border border-white/5 p-8 transition-all duration-300 hover:bg-[#1c1c1e] ${item.large ? "md:col-span-1" : ""}`}
          >
            {/* Logic for standard vs large card layout */}
            {!item.large ? (
              <div className="flex flex-col h-full justify-between space-y-8">
                <div>
                  <div
                    className={`w-10 h-10 ${item.iconBg} rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-white text-2xl font-medium mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
                <ArrowRight
                  className="text-gray-500 group-hover:text-white transition-colors cursor-pointer"
                  size={20}
                />
              </div>
            ) : (
              /* Large Card (Neural Link style) */
              <div className="flex justify-between h-full">
                <div className="flex flex-col justify-between h-full pr-4">
                  <div>
                    <h3 className="font-serif text-white text-2xl font-medium mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#C2C6D8] text-sm leading-relaxed font-light max-w-[180px]">
                      {item.desc}
                    </p>
                  </div>
                  <Link href="/category">
                  <button className="flex items-center gap-2 text-[10px] tracking-[0.2em] font-bold text-[#B3C5FF] uppercase mt-6 opacity-70 hover:opacity-100 transition-opacity">
                    Explore Tech <ArrowRight size={14} className="-rotate-45" />
                  </button>
                  </Link>
                </div>

                {/* Large Background Icon */}
                <div className="self-center opacity-40">{item.icon}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
