"use client"

// import { Card, CardContent, CardFooter, CardHeader } from "@"
import Header from "./auth/header"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"


interface CardWrapperProps {
    children: React.ReactNode,
    headerLabel: string,
    backButtonLable: string,
    backButtonHref: string,
    showSocial?: boolean
}

const FormWrapper = (
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
         
           </CardFooter>
        </Card>
    )
}
export default FormWrapper