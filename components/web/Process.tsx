import TimelineDemo from "@/components/timeline-demo";
import { SectionBackground } from "@/components/ui/section-background";

export const Process = () => {
  return (
    <div id="process" className="relative w-full max-w-full overflow-x-hidden pt-8">
      <SectionBackground intensity={0.5} speed={50} />
      <div className="relative z-10">
        <TimelineDemo />
      </div>
    </div>
  );
};
