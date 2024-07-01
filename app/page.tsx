import Image from "next/image";
import Link from "next/link";
import {cn, sortPosts} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {siteConfig} from "@/config/site";
import {posts} from "#site/content"
import {PostItem} from "@/components/post-item";
export default function Home() {
  const latestPosts = sortPosts(posts).slice(0,3)
  return (
      <>
        <section className="space-y-6 pb-6 pt-6 md:pb-12 md:mt-10 lg:py-32 flex-1 bg-hero bg-cover bg-center bg-no-repeat">
          <div className="container flex flex-col gap-4 text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
              Hello, I&apos;m Defer
            </h1>
            <p className="max-w-[42rem] mx-auto  sm:text-xl text-balance font-black">
              Welcome to my BLOG.
            </p>
            <div className="flex flex-col gap-4 justify-center sm:flex-row">
              <Link href="/blog" className={cn(buttonVariants({size: "sm"}), "w-full sm:w-fit")}>
                View My Blog
              </Link>
              <Link href={siteConfig.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(buttonVariants({variant: "outline", size: "sm"}), "w-full sm:w-fit")}
              >
                GitHub
              </Link>
            </div>
          </div>
        </section>
        <section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 ">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
            Latest Posts
          </h2>
          <ul className="flex flex-col">
            {latestPosts.map(post=>
                <li key={post.slug}
                    className="first:border-t first:border-border"
                >
                  <PostItem slug={post.slug}
                            title={post.title}
                            description={post.description}
                            date={post.date}
                            tags={post.tags
                  }/>
            </li>)}
          </ul>
        </section>
      </>
  );
}
