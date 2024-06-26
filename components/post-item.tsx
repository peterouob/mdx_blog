import Link from "next/link";
import {Calendar} from "lucide-react";
import {buttonVariants} from "@/components/ui/button";
import {cn, formatDate} from "@/lib/utils";
import {Tag} from "@/components/tag";

interface PostItemProps{
    slug: string,
    title: string,
    description?:string,
    date: string
    tags?:Array<string>
}

export function PostItem({slug,title,description,date,tags}:PostItemProps){
    return (
        <article className="flex flex-col gap-2 border-border border-b py-3">
            <div>
                <h2 className="text-2xl font-bold">
                    <Link href={"/" + slug}>{title}</Link>
                </h2>
            </div>
            <div className="flex gap-2">
                {tags?.map(tag=><Tag tag={tag} key={tag}/>)}
            </div>
            <div className="max-w-none text-muted-foreground">{description}</div>
            <div className="flex justify-between items-start">
                <dl>
                    <dt className="sr-only">Publish OOn</dt>
                    <dd className="text-sm sm sm:text-base font-medium flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                </dl>
                <Link href={slug} className={cn(buttonVariants({variant: "link"}))}>
                    Read More...
                </Link>
            </div>
        </article>
    )
}