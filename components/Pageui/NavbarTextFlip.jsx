import { ContainerTextFlip } from "@/components/ui/container-text-flip";

export function NavbarTextFlip() {
  return (
    <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 bg-transparent">
      <ContainerTextFlip words={["Gijuhan", "ギジュハン"]} />
    </div>
  );
}