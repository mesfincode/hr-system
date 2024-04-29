"use client"

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { BackButton } from "./back-button"
import Header from "./header"


interface CardWrapperProps {
    children: React.ReactNode,
    headerLabel: string,
    backButtonLable: string,
    backButtonHref: string,
    showSocial?: boolean
}

const CardWrapper = (
    { children, headerLabel, backButtonLable
        , backButtonHref, showSocial }: CardWrapperProps
) => {
    return (
        <Card className="w-[400px] shadow-md">
           <CardHeader>
           <Header label={headerLabel}/>
           </CardHeader>
           <CardContent>
           {children}
           </CardContent>
           {/* {
            showSocial &&   <CardFooter>
            <Social/>
            </CardFooter>
           } */}
           <CardFooter>
            <BackButton 
            label={backButtonLable}
            href = {backButtonHref}
            >

            </BackButton>
           </CardFooter>
        </Card>
    )
}
export default CardWrapper