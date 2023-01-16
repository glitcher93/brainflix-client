import { CommentObject } from "./interfaces";

export const apiURL = import.meta.env.VITE_API_URL || 'http://localhost:8085'

export let timeSince = (date: number) => {
    const newDate: any = new Date();
    let seconds = Math.floor((newDate - date) / 1000);
    let interval = seconds / 31536000;

    if (interval >= 1) {
        return `${Math.floor(interval)} year(s) ago`;
    }
    interval = seconds / 2592000;
    if (interval >= 1) {
        return `${Math.floor(interval)} months(s) ago`;
    }
    interval = seconds / 86400;
    if (interval >= 1) {
        return `${Math.floor(interval)} day(s) ago`;
    }
    interval = seconds / 3600;
    if (interval >= 1) {
        return `${Math.floor(interval)} hour(s) ago`;
    }
    interval = seconds / 60;
    if (interval >= 1) {
        return `${Math.floor(interval)} minute(s) ago`;
    } 
    return `Moments ago`;
}

export let compareTime = (a: CommentObject, b: CommentObject) => {
    let timeA = a.timestamp;
    let timeB = b.timestamp;

    if (timeA > timeB) {
        return -1;
    }
}