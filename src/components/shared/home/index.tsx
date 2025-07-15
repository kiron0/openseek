import ToggleTheme from "@/components/toggle-theme";
import { buttonVariants } from "@/components/ui/button";
import { Config } from "@/config";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">{Config.title}</h1>
      <p className="text-center text-balance">{Config.description}</p>
      <div className="flex space-x-2">
        <Link href="#" className={buttonVariants({ variant: "outline" })}>
          Learn More
        </Link>
        <a
          href="https://github.com/kironix/glow-next"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: "default" })}
        >
          Get Started
        </a>
      </div>
      <div className="absolute top-4 right-4">
        <ToggleTheme />
      </div>
    </div>
  );
}
