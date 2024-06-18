"use client"
import {usePathname, useSearchParams} from "next/navigation";
import {
    Pagination,
    PaginationContent,
    PaginationItem, PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination";

interface QueryPaginationProps {
    totalPages: number
    className?:string
}

export function QueryPagination({totalPages,className}:QueryPaginationProps){
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const currentPage = Number(searchParams.get("page")) || 1
    const prevPages = currentPage - 1
    const nextPages = currentPage + 1

    const createPageURL = (pageNumber : number | string) =>{
        const params = new URLSearchParams(searchParams)
        params.set("page",pageNumber.toString())
        return `${pathname}?${params.toString}`
    }

    return (
        <Pagination className={className}>
            <PaginationContent>
                {prevPages >= 1 ? (
                    <PaginationItem>
                        <PaginationPrevious href={createPageURL(prevPages)} />
                    </PaginationItem>
                ) : null}
                {Array(totalPages).fill("").map((_,index)=> <PaginationItem className="hidden sm:inline-block" key={`page-button_${index}`}>
                    <PaginationLink isActive={currentPage === index + 1} href={createPageURL(index+1)}>
                        {index + 1}
                    </PaginationLink>
                </PaginationItem>)}
                {nextPages <= totalPages ? (
                    <PaginationItem>
                        <PaginationNext href={createPageURL(nextPages)} />
                    </PaginationItem>
                ) : null}

            </PaginationContent>
        </Pagination>
    )
}