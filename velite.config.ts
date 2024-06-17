import {defineConfig,defineCollection,s} from "velite"

const computedFields = <T extends {slug : string}>(data:T)=>({
    ...data,
    slugAsParams: data.slug.split("/").slice(1).join("/"),
})

const posts = defineCollection({
    name: "Post",
    pattern: "blog/**/*.mdx",
    schema: s.object({
        slug: s.path(),
        title: s.string(),
        description: s.string().max(99),
        data: s.isodate(),
        published: s.boolean().default(true),
        body: s.mdx(),
    }).transform(computedFields),
})

export default defineConfig({
    root:"content",
    output:{
        data: ".velite",
        assets: "public",
        base: "/static/",
        name:"[name]-[hash:6].[ext]",
        clean:true,
    },
    collections: {posts},
    mdx:{
        rehypePlugins:[],
        remarkPlugins:[],
    }
})