const itachiQuotes = [
    "If you want to know who you are, you have to look at your real self and acknowledge what you see.",
    "People's lives don't end when they die. It ends when they lose faith.",
    "Teachings that do not speak of pain have no meaning, for humankind cannot gain anything in return.",
    "You don't become the Hokage to be acknowledged by everyone. The one who is acknowledged by everyone becomes the Hokage.",
    "Even the strongest of opponents always has a weakness.",
    "It’s foolish to fear what we have yet to see and know.",
    "It is not wise to judge others based on your own preconceptions and by their apperances.",
    "Even if it's just a little. And no matter what you decide to do from here on out, you never have to forgive me - I will always love you.",
    "However strong you become, never seek to bear everything alone. If you do, failure is certain.",
    "So tell me where should I go, to the left where nothing is right or to the right where nothing is left?",
    "Sorry, Sasuke… There won’t be a next time",
    "My foolish brother… If you want to kill me… curse me! Hate me! And live a long and unsightly life… Run away… run away… and cling to your pitiful life. And then some day, when you have the same eyes as I do, come before me.",
    "Those who cannot acknowledge themselves, will eventually fail.",
    "No matter what darkness or contradictions lie within the village, I am still Itachi Uchiha of the Leaf",
];

const postBtn = $("#post-quote");
const tweetBtn = $("#tweet-quote");
let quoteBox = $("#js-quote-text");
let authorName = $(".itachi-name");
let spinner = $(".spinner");
let clicked = false;
// console.log(itachiQuotes.length);
postBtn.click(function () {
    let randomQ = Math.floor(Math.random() * itachiQuotes.length);
    // console.log(randomQ);
    spinner.removeClass("hidden");
    $(postBtn).prop("disabled", true);

    setTimeout(function () {
        spinner.addClass("hidden");
        $(postBtn).prop("disabled", false);
        quoteBox.text("- " + itachiQuotes[randomQ]);
        authorName.addClass("visible-name");
    }, 2000);
    quoteBox.text("");
    authorName.removeClass("visible-name");
    clicked = true;
});

tweetBtn.click(function () {
    if (clicked) {
        setTweetButton(quoteBox.text(), authorName.text());
    } else {
        alert("There is nothing to tweet");
    }
});

let setTweetButton = function (quote, authName) {
    tweetBtn.attr(
        "href",
        `https://twitter.com/share?text=${quote}   ${authName}`
    );
};