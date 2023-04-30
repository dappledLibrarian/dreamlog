var logs = {
    813: "Okay, I admit, this isn’t a dream log. Congrats, you did it, you found the special number. You’re either a waste, perceptive, or you know the kinds of circles I frequent. \n\nSo, what is this, then? It's a collection of my findings, my adventures, my knowledge, and my dreams. I consider myself a guide of sorts, but also a merchant. You have given me so much, and I think it only fair I give you something in return. So here it is! Everything and nothing, which of the two? That's for you to decide.\n\nAnd what's this log? A confession, and an invitation. Join in on the fun. That’s what it’s all about, right?\n\n I use gmail, always have. My username is the same as I use everywhere. The password? Well, good luck finding that, it isn’t hard. I hosted this the same place Dan did, nostalgia probably. There’s something enjoyable about digging through commits.",
    304: "Sunrise Over Mountain",
    2600: "Other Sun",
    31: "Moon",
    308: "Gay",
    525: "Fire",
    52: "Magic",
    264: "Unplace",
    178: "War",
    144: "Library",
    1356: "Gullet",
    19: "Fae",
    100: "Sleepless Raver"
}

function reveal(log) { 
    container = document.getElementById('note-text')
    if(logs[log] == undefined) {
        return
    }
    container.innerText = logs[log]
}
