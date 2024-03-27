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
    const views = Number(viewCount);

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
        return `${(views / billion).toFixed(1)}B `
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


// Function to generate a random chat message
export const randomChatAndUsernameGenerator = () => {
    // Array of sample chat messages
    const chatMessages = [
        "Hi there!",
        "How are you?",
        "What's up?",
        "Nice weather today, isn't it?",
        "Have you seen the latest movie?",
        "I'm feeling hungry.",
        "Let's grab some lunch!",
        "What are your plans for the weekend?",
        "Do you have any pets?",
        "I love coding!",
        "Let's go for a walk.",
        "What's your favorite food?",
        "I'm excited about our project!",
        "How's your day going?",
        "Tell me about your hobbies.",
        "Did you hear about the new restaurant?",
        "I'm bored.",
        "Do you like to travel?",
        "Let's meet up sometime!",
        "How's the family?",
    ];

    // Array of sample names
    const names = [
        'ram',
        'Mohan',
        'Radhe rani',
        'tx5034',
        'code aur chai',
        'world affairs by unacdemy',
        'study iq ias',
        'MIT Institute',
        'Subhas Chandra Boss',
        'Hindustan Times',
        'The Hindu',
        'Hind : A Great Nation'
    ];

    // Generate a random index within the range of the array length
    const randomChatIndex = Math.floor(Math.random() * chatMessages.length);
    const randomNamesIndex = Math.floor(Math.random() * names.length);

    // Return the name and chat  message at the random index
    const data = [{
        name: names[randomNamesIndex],
        message : chatMessages[randomChatIndex]
    }];

    return data ;
};