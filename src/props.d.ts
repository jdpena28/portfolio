interface NavLinks {
    path: string
    title: string
    className?: string
    onClick?: () => void
}
interface Stacks {
    stacksTitle: string
    stacksUrl: {
        url: string
        tooltipTitle: string
    }[]
    flex?:string
}
interface EachProject {
    flex?: string
    src: string
    title: string
    desc: string
    color: string
    num: string
    titleClass?: string
    descClass?: string
    hoverClass: string
    hoverDesc: string
    github: string
    link: string
}
