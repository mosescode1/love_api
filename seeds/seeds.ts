import prisma from "../prisma";

type Message = {
    message: string
}

const messages: Message[] = [
    {
        "message": "You are the melody that makes my heart sing."
    },
    {
        "message": "Your love feels like a gentle breeze on a warm summer day."
    },
    {
        "message": "In your eyes, I can see a future brighter than the stars."
    },
    {
        "message": "Every word you speak feels like poetry to my ears."
    },
    {
        "message": "You are the greatest treasure I could ever hope to find."
    },
    {
        "message": "With you, every day feels like a new adventure waiting to begin."
    },
    {
        "message": "Your smile lights up my world more than the sun ever could."
    },
    {
        "message": "In your arms, I've found a peace that I never knew existed."
    },
    {
        "message": "You are the inspiration behind my every dream."
    },
    {
        "message": "With you, I feel like the luckiest person in the universe."
    },
    {
        "message": "Your love has painted my life with colors I never dared to imagine."
    },
    {
        "message": "Every beat of my heart echoes your name."
    },
    {
        "message": "Loving you feels like discovering the meaning of eternity."
    },
    {
        "message": "Your touch mends the broken pieces of my soul."
    },
    {
        "message": "You are the chapter of my life I never want to close."
    },
    {
        "message": "Every moment spent with you is a moment worth cherishing forever."
    },
    {
        "message": "You’ve shown me what true love really is."
    },
    {
        "message": "Your love is the light that leads me out of the darkness."
    },
    {
        "message": "You are the reason my heart beats stronger every day."
    },
    {
        "message": "With you, I've found the courage to be my true self."
    },
    {
        "message": "Your love feels like a magical world I never want to leave."
    },
    {
        "message": "You are the kind of miracle I thought only existed in dreams."
    },
    {
        "message": "With you, every little thing seems extraordinarily beautiful."
    },
    {
        "message": "Your love is the thread that ties my life together in harmony."
    },
    {
        "message": "You are the spark that ignites a fire in my soul."
    },
    {
        "message": "Every day with you is a blessing I never take for granted."
    },
    {
        "message": "You are the lighthouse that guides me through life's oceans."
    },
    {
        "message": "Your love is a garden where my soul blossoms endlessly."
    },
    {
        "message": "You are the moonlight that chases away my darkest nights."
    },
    {
        "message": "With you, I've learned that love is the greatest gift of all."
    },
    {
        "message": "Your presence turns the ordinary into the extraordinary."
    },
    {
        "message": "You are the missing piece that makes my puzzle complete."
    },
    {
        "message": "Your love is like a sanctuary where my heart finds peace."
    },
    {
        "message": "Every smile of yours fills my heart with unexplainable joy."
    },
    {
        "message": "You are the hope that brought me back to life."
    },
    {
        "message": "Your love feels like a sunrise after the longest night."
    },
    {
        "message": "In your love, I’ve found the strength to face anything."
    },
    {
        "message": "You make my world spin with a happiness I never thought possible."
    },
    {
        "message": "You are the song I want to listen to for the rest of my life."
    },
    {
        "message": "Your laughter has a way of healing even the deepest wounds."
    }
]


// Ensure the seed function is properly using Prisma client and gracefully handles errors
const seed = async () => {
    for (const message of messages) {
        await prisma.message.create({
            data: {
                messages: message.message
            },
        })
    }
};
seed().then(() => console.log("Seeding complete!"))

