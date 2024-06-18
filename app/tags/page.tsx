import {Metadata} from "next";
import {getAllTags, sortTagsByCount} from "@/lib/utils";
import {posts} from "#site/content"
import {Tag} from "@/components/tag";
export const metadata: Metadata = {
    title: "Tags",
    description: "Topic I have written about"
}
export default async function TagePages(){
    const tags = getAllTags(posts)
    const sortedTags = sortTagsByCount(tags)

    return <div className="container max-w-4xl py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
            <div className="flex-1 space-y-4">
                <h1 className="inline-block font-black text-4xl lg:text-5xl">Tags</h1>
            </div>
        </div>
        <hr className="my-4"/>
        <div className="flex flex-wrap gap-3">
            {sortedTags?.map(tag=> <Tag tag={tag} key={tag} count={tags[tag]} /> )}
        </div>
    </div>
}