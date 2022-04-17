export interface VideoObject {
    id: string
    title: string
    channel: string
    image: string
    description: string
    views: string
    likes: number
    duration: string
    timestamp: number
    comments: CommentObject[]
}

export interface ReducedVideoDetails {
    id: string
    title: string
    channel: string
    image: string
}

export interface CommentObject {
    id: string
    name: string
    comment: string
    likes: number
    timestamp: number
}

export interface MainProps {
    videoDetails: ReducedVideoDetails[] | undefined
    currentVideo: VideoObject | undefined
    comments: CommentObject[] | undefined
    getVideoById: (id: string) => void
}

export interface VideoSectionProps {
    currentVideo: VideoObject | undefined
}

export interface VideoInfoProps {
    currentVideo: VideoObject | undefined
    getVideoById: (id: string) => void
}

export interface CommentSectionProps {
    currentVideo: VideoObject | undefined
    comments: CommentObject[] | undefined
    getVideoById: (id: string) => void
}

export interface CommentFormProps {
    avatarImg: string
    addImg: string
    currentVideo: VideoObject | undefined
    getVideoById: (id: string) => void
}

export interface CommentsProp {
    comments: CommentObject[] | undefined
    getVideoById: (id: string) => void
    currentVideo: VideoObject | undefined
}

export interface CommentBody {
    name: string
    comment: string
}

export interface VideoBody {
    title: string
    description: string
}

export interface CommentProps {
    id: string
    name: string
    comment: string
    timestamp: number
    getVideoById: (id: string) => void
    currentVideo: VideoObject | undefined
}

export interface NextVideosProps {
    currentVideo: VideoObject | undefined
    videoDetails: ReducedVideoDetails[] | undefined
}

export interface BtnProps {
    image: string
    alt: string
    text: string
}