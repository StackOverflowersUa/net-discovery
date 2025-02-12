export function truncate(str, len) {
    if (str.length > len) {
        return str.substring(0, len) + '...';
    }
    return str;
}

export function getFormattedTime(seconds, sep) {
    let minutes = Math.floor(seconds / 60);
    return `${minutes}${sep}${seconds - minutes * 60}`;
}