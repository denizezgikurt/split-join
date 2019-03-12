var letterSplit = function(sentence, splitter) {
    return sentence.split(splitter);
};

var splittedSentenceArray = letterSplit("let's split a sentence into words in an array"," ");
console.log(splittedSentenceArray);
// gives each word in the array

letterSplit("this is a custom sentence we wrote", " ")
(7) ["this", "is", "a", "custom", "sentence", "we", "wrote"]

letterSplit("this sentence will be splitted with the letter e", "e")
(10) ["this s", "nt", "nc", " will b", " splitt", "d with th", " l", "tt", "r ", ""]

var longLoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non vestibulum ipsum, nec pharetra ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut quis lorem libero. Nam eu diam eros. Nunc ullamcorper ligula at blandit convallis. Aliquam ut purus pellentesque, blandit ante ut, dapibus velit. Nullam aliquet mi a dolor ultricies venenatis. Sed convallis ac magna sed mollis. Ut et dui nisi. Etiam molestie vestibulum mauris, a gravida massa elementum nec. Praesent vel lectus tellus. Donec feugiat risus erat, ac rhoncus nulla blandit vel. Maecenas in faucibus nibh, ac malesuada mi. Pellentesque rhoncus suscipit lectus sed pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae"

var loremIpsumLength = letterSplit(longLoremIpsum, " ").length

loremIpsumLength // gives the word count of the variable loremIpsumLength, paragraph splitted by space.
116

var loremIpsumWithoutSpace = letterSplit(longLoremIpsum, " ");

loremIpsumWithoutSpace // gives the whole paragraph in an array as words, splitted by space.
(116) ["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit.", "Aliquam", "non", "vestibulum", "ipsum,", "nec", "pharetra", "ipsum.", "Pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas.", "Ut", "quis", "lorem", "libero.", "Nam", "eu", "diam", "eros.", "Nunc", "ullamcorper", "ligula", "at", "blandit", "convallis.", "Aliquam", "ut", "purus", "pellentesque,", "blandit", "ante", "ut,", "dapibus", "velit.", "Nullam", "aliquet", "mi", "a", "dolor", "ultricies", "venenatis.", "Sed", "convallis", "ac", "magna", "sed", "mollis.", "Ut", "et", "dui", "nisi.", "Etiam", "molestie", "vestibulum", "mauris,", "a", "gravida", "massa", "elementum", "nec.", "Praesent", "vel", "lectus", "tellus.", "Donec", "feugiat", "risus", "erat,", "ac", "rhoncus", "nulla", "blandit", "vel.", "Maecenas", "in", "faucibus", "nibh,", "ac", "malesuada", "mi.", "Pellentesque", "rhoncus", "suscipit", …]

var loremIpsumWithDash = loremIpsumWithoutSpace.join('-');
//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.

loremIpsumWithDash
"Lorem-ipsum-dolor-sit-amet,-consectetur-adipiscing-elit.-Aliquam-non-vestibulum-ipsum,-nec-pharetra-ipsum.-Pellentesque-habitant-morbi-tristique-senectus-et-netus-et-malesuada-fames-ac-turpis-egestas.-Ut-quis-lorem-libero.-Nam-eu-diam-eros.-Nunc-ullamcorper-ligula-at-blandit-convallis.-Aliquam-ut-purus-pellentesque,-blandit-ante-ut,-dapibus-velit.-Nullam-aliquet-mi-a-dolor-ultricies-venenatis.-Sed-convallis-ac-magna-sed-mollis.-Ut-et-dui-nisi.-Etiam-molestie-vestibulum-mauris,-a-gravida-massa-elementum-nec.-Praesent-vel-lectus-tellus.-Donec-feugiat-risus-erat,-ac-rhoncus-nulla-blandit-vel.-Maecenas-in-faucibus-nibh,-ac-malesuada-mi.-Pellentesque-rhoncus-suscipit-lectus-sed-pharetra.-Vestibulum-ante-ipsum-primis-in-faucibus-orci-luctus-et-ultrices-posuere-cubilia-Curae"

var elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join());
// expected output: "Fire,Wind,Rain"

console.log(elements.join(''));
// expected output: "FireWindRain"

console.log(elements.join('-'));
// expected output: "Fire-Wind-Rain"
