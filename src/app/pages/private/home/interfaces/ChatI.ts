import { MessageI } from './MessageI';

export interface ChatI{
    email: string
    number: any
    title: string
    status?: string
    icon: string
    msgPreview: string
    isRead: boolean
    lastMsg: string
    msgs: Array<MessageI>
}