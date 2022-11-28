var tops_mebtoons_contents = [{
        "title": "Teenage Dragon",
        "subscriber": "1.2M",
        "author": "Peanut",
        "genre": "Comedy",
        "image": "./assets/img/mebtoons/teenage_dragon/thumb_white.jpg",
        "desc": "Teenage Dragon is a comic book series written and illustrated by Peanut. The series is based on the popular manga series of the same name."
    }, {
        "title": "Wayne Family",
        "subscriber": "1M",
        "author": "StarBite, CRC Payne",
        "genre": "Slice of Life",
        "image": "./assets/img/mebtoons/batman_wayne_family_adventures/thumb.jpg",
        "desc": "Batman: Wayne Family Adventures is a comic book series written and illustrated by StarBite, CRC Payne, and published by DC Comics."
    },
    {
        "title": "High Class Homos",
        "subscriber": "1.2M",
        "author": "Momozerii",
        "genre": "Comedy",
        "image": "./assets/img/mebtoons/high_class_homos/thumb.jpg",
        "desc": "Princess Sapphia of Mytilene is not into princes. So, when her parents start putting the heat on her to get hitched, she enlists the help of her equally gay best friend, Prince August of Phthia."
    },
    {
        "title": "Jungle Juice",
        "subscriber": "1M",
        "author": "Hyeong Eun , JUDER",
        "genre": "Action",
        "image": "./assets/img/mebtoons/jungle_juice/thumb.jpg",
        "desc": "Underneath the perfect facade, he hides a pair of insect wings that suddenly grew when he used a mysterious bug spray called \"Jungle Juice.\”"
    },
    {
        "title": "unOrdinary",
        "subscriber": "5.5M",
        "author": "uru-chan",
        "genre": "Action",
        "image": "./assets/img/mebtoons/unordinary/thumb.jpg",
        "desc": "John is a normal teenager who attends a high school for kids with superpowers. His secret past threatens to destroy the school's social order."
    },
]

var tops_author_contents = [{
        "title": "refrainbow",
        "subscriber": "61K",
        "author": "degenerate wifeguy",
        "image": "./assets/img/authors/refrainbow/download.jpg",
    },
    {
        "title": "purpah",
        "subscriber": "16K",
        "author": "Ello! I’m Purpah - an avid enjoyer of all things fantasy and helmeted. At the moment I am working on “Suitor Armor” on here but hope to make many more stories for you to enjoy in the future.",
        "image": "./assets/img/authors/purpah/download.jpg",
    },
    {
        "title": "stephattyy",
        "subscriber": "20K",
        "author": "hi, i’m bad at bios cuz idk much about myself, but i’m getting there ッ currently working on Reunion for WEBTOON Originals!",
        "image": "./assets/img/authors/stephattyy/download.jpg",
    },
    {
        "title": "Miyuli",
        "subscriber": "24K",
        "author": "Comic Creator, Reader, Gamer.",
        "image": "./assets/img/authors/miyuli/download.jpg",
    },
    {
        "title": "mintibi",
        "subscriber": "10K",
        "author": "Pst, hey, want some slowburn romance and action?",
        "image": "./assets/img/authors/mintibi/download.jpg",
    },
]

var path = window.location.pathname;
console.log(path);

function first_init(type, first_container, tops_contents) {
    var first_item = tops_contents[0];
    var first_info_container = document.createElement("a");
    first_info_container.href = "#";
    first_info_container.classList.add("info");


    var first_thumbnail_container = document.createElement("div");
    first_thumbnail_container.classList.add("thumbnail");

    var first_thumbnail = document.createElement("img");
    first_thumbnail.src = first_item.image;
    first_thumbnail.alt = first_item.title;

    first_thumbnail_container.appendChild(first_thumbnail);

    var first_text_container = document.createElement("div");
    first_text_container.classList.add("first-text-container");

    var first_text = document.createElement("div");
    first_text.classList.add("first-text");

    var first_genre = document.createElement("p");
    first_genre.classList.add("tops-card-genre");
    first_genre.innerText = first_item.genre;

    var first_title = document.createElement("h3");
    first_title.classList.add("tops-card-title");

    var first_subscribers = document.createElement("p");
    first_subscribers.classList.add("tops-card-subscribers");
    first_subscribers.innerHTML = `<i class="fa-solid fa-heart"></i> ${first_item.subscriber} followers`;

    var first_author = document.createElement("p");
    first_author.classList.add("tops-card-author");
    first_author.innerText = first_item.author;

    if (type == "mebtoons") {

        var first_description = document.createElement("p");
        first_description.classList.add("tops-card-description");
        first_description.innerText = first_item.desc;
        first_text.appendChild(first_genre);
    }

    first_title.innerText = first_item.title;

    first_text.appendChild(first_title);
    first_text.appendChild(first_subscribers);
    first_text.appendChild(first_author);

    if (type == "mebtoons") {
        first_text.appendChild(first_description);
    }

    first_text_container.appendChild(first_text);

    first_info_container.appendChild(first_thumbnail_container);
    first_info_container.appendChild(first_text_container);

    first_container.appendChild(first_info_container);
}

function tops_init(type, tops_container, tops_contents) {
    for (var i = 0; i < tops_contents.length; i++) {

        // skip first item
        if (i == 0) {
            continue;
        }

        var tops_card = document.createElement("a");
        tops_card.className = "tops-card";
        tops_card.href = "#";

        var tops_card_number = document.createElement("div");
        tops_card_number.className = "tops-card-number";

        var tops_card_number_p = document.createElement("p");
        tops_card_number_p.innerHTML = "#" + (i + 1);
        tops_card_number.appendChild(tops_card_number_p);

        var tops_card_thumbnail = document.createElement("div");
        tops_card_thumbnail.className = "tops-card-thumbnail";

        var tops_card_thumbnail_img = document.createElement("img");
        tops_card_thumbnail_img.src = tops_contents[i].image;
        tops_card_thumbnail_img.alt = tops_contents[i].title;
        tops_card_thumbnail.appendChild(tops_card_thumbnail_img);

        var tops_card_info = document.createElement("div");
        tops_card_info.className = "tops-card-info";

        var tops_card_genre = document.createElement("p");
        tops_card_genre.className = "tops-card-genre";
        tops_card_genre.innerHTML = tops_contents[i].genre;

        var tops_card_title = document.createElement("h3");
        tops_card_title.className = "tops-card-title";
        tops_card_title.innerHTML = tops_contents[i].title;

        var tops_card_subscribers = document.createElement("p");
        tops_card_subscribers.className = "tops-card-subscribers";
        if (type == "author") {
            text = "Followers";
        } else {
            text = "Subscribers";
        }
        tops_card_subscribers.innerHTML = "<i class=\"fa-solid fa-heart\"></i> " + tops_contents[i].subscriber + " " + text;

        var tops_card_author = document.createElement("p");
        tops_card_author.className = "tops-card-author";
        tops_card_author.innerHTML = tops_contents[i].author;

        if (type != "author") {
            tops_card_info.appendChild(tops_card_genre);

            var tops_card_description = document.createElement("p");
            tops_card_description.className = "tops-card-description";
            tops_card_description.innerHTML = tops_contents[i].desc;

        }
        tops_card_info.appendChild(tops_card_title);
        tops_card_info.appendChild(tops_card_subscribers);
        tops_card_info.appendChild(tops_card_author);

        if (type != "author") {
            tops_card_info.appendChild(tops_card_description);
        }
        tops_card.appendChild(tops_card_number);
        tops_card.appendChild(tops_card_thumbnail);
        tops_card.appendChild(tops_card_info);

        tops_container.appendChild(tops_card);
    }
}

$(document).ready(function() {
    if (path.endsWith("/top_mebtoons.html")) {
        first_init("mebtoons", document.getElementById("first-container"), tops_mebtoons_contents);
        tops_init("mebtoons", document.getElementById("tops-cards-container"), tops_mebtoons_contents);
    } else if (path.endsWith("/top_authors.html")) {
        first_init("author", document.getElementById("first-container"), tops_author_contents);
        tops_init("author", document.getElementById("tops-cards-container"), tops_author_contents);
    }
});