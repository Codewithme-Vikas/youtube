export const timeDifference = (publishedAt) => {
    const publishedDate = new Date(publishedAt);
    const currentDate = new Date();


    // difference in milliseconds
    const timeDifference = currentDate - publishedDate;


    // convert milliseconds to days,months and years
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);


    // return high order time - 
    if (years > 0) {
        return `${years} year${years > 1 ? 's' : ''} ago`;
    } else if (months > 0) {
        return `${months} month${months > 1 ? 's' : ''} ago`;
    } else if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }
};


export const numberFormatter = (viewCount) => {

    // Number's limit = 2^53-1
    const views = Number( viewCount );

    const k = 1000;
    const million = 1_000_000;
    const billion = 1_000_000_000;
    const trillion = 1_000_000_000_000;
    const quadrillion = 1_000_000_000_000_000;

    if (views > quadrillion) {
        return `${(views / quadrillion).toFixed(1)}Q `;
    }
    else if (views > trillion) {
        return `${(views / trillion).toFixed(1)}T `
    }
    else if (views > billion) {
        return `${ (views / billion).toFixed(1) }B `
    }
    else if (views > million) {
        return `${(views / million).toFixed(1)}M `
    }
    else if (views > k) {
        return `${(views / k).toFixed(1)}K `
    }
    else {
        return `${views} `
    }
};