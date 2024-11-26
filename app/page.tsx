import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import Educators from "@/components/Educators";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 font-siliguri">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>আপনার সন্তানকে&nbsp;</span>
          <span className={title({ color: "violet" })}>
            মেশিন লার্নিং&nbsp;
          </span>
          <br />
          <span className={title()}>শিক্ষা দিন আগামী দিনের জন্য</span>
          <div className={subtitle({ class: "mt-4 font-playpen" })}>
            Make them future-ready with our courses and events.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Explore More
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
          <Button color="danger" variant="shadow" radius="full">
            Click me
          </Button>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing <Code color="primary">app/page.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section>
      {/* Our  Educators  */}
      <Educators />
      {/* Testimonials */}
      <Testimonials/>
    </div>
  );
}
