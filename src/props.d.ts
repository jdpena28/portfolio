interface NavLinks {
    path: string
    title: string
    className?: string
    onClick?: () => void
    delay?: number
}
interface Stacks {
    stacksTitle: string
    stacksUrl: {
        url: string
        tooltipTitle: string
    }[]
    flex?:string
    aos?: string
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
    hoverClass?: string
    hoverDesc: string
    github: string
    link: string
    imgAOS: string
    textAOS:string
}
