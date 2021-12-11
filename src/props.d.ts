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

interface birthdayMessage {
    name?: string,
    message?: string,
}

interface clientMessage {
    clientName?: string,
    clientEmail?: string,
    clientMessage?: string,
}
interface ClientMessages {
    id: string,
    client_message: string,
    client_name: string,
    email: string,
    mark_as_read?: boolean,
    time?:any,
}


type messagesType = 'Birthday_Messages' | 'Client_Messages'
