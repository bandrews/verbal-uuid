const words = [
    "dragon",
    "arrival",
    "ellipse",
    "merchant",
    "dish",
    "twist",
    "awake",
    "eclipse",
    "bamboo",
    "travel",
    "mother",
    "legend",
    "promise",
    "refund",
    "efficient",
    "finger",
    "kilogram",
    "water",
    "swan",
    "basin",
    "stable",
    "sample",
    "glance",
    "foot",
    "feedback",
    "nest",
    "scarf",
    "market",
    "degree",
    "hand",
    "breakfast",
    "purse",
    "village",
    "cloud",
    "grass",
    "insurance",
    "tile",
    "lace",
    "fall",
    "celebrate",
    "stretch",
    "hunger",
    "sculpture",
    "oxygen",
    "retail",
    "watch",
    "success",
    "lecture",
    "important",
    "passport",
    "suitcase",
    "calcium",
    "shoe",
    "box",
    "allow",
    "chat",
    "satellite",
    "early",
    "profit",
    "company",
    "shelf",
    "radio",
    "shirt",
    "spin",
    "antenna",
    "impulse",
    "vision",
    "clerk",
    "reverse",
    "episode",
    "boundary",
    "pump",
    "rock",
    "global",
    "building",
    "farmer",
    "tent",
    "rose",
    "payment",
    "tomorrow",
    "yak",
    "classic",
    "tennis",
    "egg",
    "basket",
    "cement",
    "little",
    "iron",
    "motor",
    "calm",
    "dollar",
    "wolf",
    "insect",
    "chess",
    "growth",
    "gardener",
    "lunch",
    "season",
    "mango",
    "happy",
    "stomach",
    "silk",
    "urge",
    "note",
    "structure",
    "wrench",
    "forest",
    "exit",
    "lemon",
    "annual",
    "onion",
    "deck",
    "education",
    "fortune",
    "subject",
    "bank",
    "number",
    "cabbage",
    "trade",
    "crocodile",
    "guidebook",
    "spoken",
    "airport",
    "identical",
    "champion",
    "homework",
    "surplus",
    "region",
    "studio",
    "equipment",
    "ceremony",
    "towel",
    "oval",
    "gecko",
    "stylish",
    "logic",
    "land",
    "balloon",
    "range",
    "thriller",
    "jar",
    "axle",
    "pizza",
    "candle",
    "souvenir",
    "fetch",
    "normal",
    "proper",
    "consumer",
    "student",
    "photon",
    "image",
    "online",
    "vertical",
    "play",
    "robot",
    "power",
    "general",
    "fence",
    "ostrich",
    "speech",
    "acquire",
    "hydrogen",
    "sandwich",
    "truth",
    "border",
    "heat",
    "giant",
    "swim",
    "zebra",
    "ultimate",
    "vessel",
    "throat",
    "web",
    "soldier",
    "nail",
    "violin",
    "paragraph",
    "bargain",
    "across",
    "penguin",
    "question",
    "clown",
    "panther",
    "bus",
    "strategy",
    "baby",
    "platform",
    "rainbow",
    "telescope",
    "baseball",
    "person",
    "festival",
    "lab",
    "swimming",
    "cobra",
    "skill",
    "flag",
    "owner",
    "iridium",
    "vacation",
    "country",
    "spend",
    "draw",
    "select",
    "radish",
    "breath",
    "venture",
    "luggage",
    "music",
    "helmet",
    "delicate",
    "mayor",
    "phone",
    "canal",
    "smart",
    "practical",
    "beyond",
    "rocket",
    "yard",
    "operator",
    "sphere",
    "yarn",
    "edition",
    "half",
    "spider",
    "relax",
    "formula",
    "middle",
    "graceful",
    "plunge",
    "bow",
    "fountain",
    "uniform",
    "welcome",
    "engine",
    "quantity",
    "muffin",
    "attach",
    "spring",
    "child",
    "meal",
    "splash",
    "honey",
    "nature",
    "engage",
    "fasten",
    "candy",
    "dove",
    "hill",
    "downtown",
    "banana",
    "daughter",
    "editor",
    "yacht",
    "castle",
    "nebula",
    "smile",
    "cake",
    "admire",
    "page",
    "silver",
    "jet",
    "mirror",
    "eat",
    "locket",
    "crab",
    "manager",
    "texture",
    "lily",
    "twig",
    "budget",
    "ground",
    "vanilla",
    "mixed",
    "respect",
    "overnight",
    "wealth",
    "leopard",
    "family",
    "uranium",
    "dinosaur",
    "camp",
    "assemble",
    "carriage",
    "dial",
    "return",
    "dividend",
    "product",
    "atomic",
    "edge",
    "fever",
    "collect",
    "hockey",
    "panel",
    "dentist",
    "fabric",
    "harmonica",
    "speaker",
    "plastic",
    "output",
    "oil",
    "bulb",
    "parallel",
    "citizen",
    "cotton",
    "shark",
    "coat",
    "history",
    "comedy",
    "research",
    "wing",
    "home",
    "alarm",
    "adopt",
    "letter",
    "item",
    "premium",
    "office",
    "primary",
    "skate",
    "enjoy",
    "ornament",
    "creative",
    "postcard",
    "herb",
    "text",
    "autumn",
    "permanent",
    "outline",
    "section",
    "interest",
    "neck",
    "stadium",
    "fantastic",
    "pillar",
    "airline",
    "girl",
    "ink",
    "self",
    "ape",
    "run",
    "basic",
    "museum",
    "greeting",
    "walrus",
    "continent",
    "eagle",
    "tropical",
    "monument",
    "worldwide",
    "multiply",
    "casual",
    "cliff",
    "during",
    "laundry",
    "superb",
    "wrist",
    "daffodil",
    "picnic",
    "mars",
    "stand",
    "kangaroo",
    "cashew",
    "unique",
    "passenger",
    "fog",
    "ticket",
    "work",
    "galaxy",
    "river",
    "type",
    "bush",
    "dice",
    "adventure",
    "recycle",
    "unit",
    "railroad",
    "thesis",
    "remark",
    "room",
    "chicken",
    "invite",
    "finance",
    "join",
    "face",
    "string",
    "kindness",
    "coffee",
    "artist",
    "volunteer",
    "reply",
    "embassy",
    "rating",
    "bath",
    "king",
    "haircut",
    "broom",
    "mountain",
    "expert",
    "kiwi",
    "agent",
    "street",
    "uncle",
    "camel",
    "canvas",
    "earring",
    "bandage",
    "dolphin",
    "tomato",
    "case",
    "state",
    "palm",
    "unlimited",
    "mom",
    "stripe",
    "newspaper",
    "index",
    "soy",
    "pocket",
    "potato",
    "award",
    "brother",
    "fork",
    "beautiful",
    "lizard",
    "cactus",
    "outside",
    "nickname",
    "sailor",
    "square",
    "matrix",
    "reward",
    "silicon",
    "soap",
    "chair",
    "mechanic",
    "act",
    "morning",
    "advanced",
    "explore",
    "challenge",
    "fang",
    "brass",
    "flying",
    "segment",
    "every",
    "broccoli",
    "diary",
    "recipe",
    "activity",
    "tourist",
    "headline",
    "catch",
    "furniture",
    "tilt",
    "juice",
    "eraser",
    "ordinary",
    "cover",
    "floor",
    "whistle",
    "essential",
    "color",
    "capable",
    "drill",
    "seminar",
    "gentle",
    "channel",
    "poem",
    "graphics",
    "waffle",
    "professor",
    "potential",
    "location",
    "grocery",
    "car",
    "circle",
    "pudding",
    "wise",
    "party",
    "proton",
    "mint",
    "corner",
    "climate",
    "manual",
    "ceiling",
    "ankle",
    "deposit",
    "cricket",
    "hotel",
    "butter",
    "user",
    "diamond",
    "puzzle",
    "outer",
    "shampoo",
    "weapon",
    "usual",
    "birthday",
    "desert",
    "plough",
    "paper",
    "public",
    "charm",
    "mouse",
    "date",
    "gift",
    "traffic",
    "resort",
    "deliver",
    "along",
    "hobby",
    "pot",
    "device",
    "sponge",
    "apartment",
    "harvest",
    "geography",
    "skirt",
    "assist",
    "pulsar",
    "elevator",
    "hero",
    "exhibit",
    "basement",
    "muscle",
    "avenue",
    "athlete",
    "cheerful",
    "fashion",
    "alert",
    "attitude",
    "nerve",
    "plug",
    "moment",
    "asteroid",
    "sand",
    "apple",
    "tunnel",
    "view",
    "bundle",
    "kitchen",
    "chocolate",
    "frame",
    "spark",
    "nation",
    "fiscal",
    "school",
    "hardware",
    "curtain",
    "cage",
    "sunshine",
    "amusement",
    "vacant",
    "movie",
    "theory",
    "highway",
    "list",
    "sincere",
    "institute",
    "wind",
    "large",
    "cyclist",
    "fluent",
    "wall",
    "father",
    "mat",
    "octopus",
    "milk",
    "glacier",
    "loyal",
    "bonus",
    "electric",
    "titanium",
    "neon",
    "elbow",
    "relevant",
    "quarter",
    "cockroach",
    "cable",
    "falcon",
    "second",
    "approach",
    "memory",
    "mug",
    "helium",
    "purple",
    "blend",
    "pickle",
    "kettle",
    "trophy",
    "landscape",
    "apricot",
    "cheek",
    "saddle",
    "notice",
    "science",
    "bone",
    "brush",
    "reveal",
    "chalk",
    "stage",
    "trip",
    "glasses",
    "nurse",
    "plural",
    "factory",
    "ocean",
    "depth",
    "brave",
    "stamp",
    "feast",
    "stitch",
    "nitrogen",
    "faculty",
    "brain",
    "clip",
    "print",
    "wish",
    "dimension",
    "reflect",
    "rhino",
    "category",
    "spot",
    "liver",
    "rule",
    "cube",
    "film",
    "worth",
    "storm",
    "gesture",
    "copper",
    "helicopter",
    "crisp",
    "sock",
    "sloth",
    "badge",
    "house",
    "link",
    "table",
    "cinema",
    "detective",
    "calculator",
    "triangle",
    "clock",
    "golden",
    "depart",
    "donkey",
    "author",
    "aurora",
    "bottom",
    "mobile",
    "plan",
    "heart",
    "baker",
    "lake",
    "arm",
    "fruit",
    "barrel",
    "diplomat",
    "squirrel",
    "fish",
    "comb",
    "extra",
    "currency",
    "thought",
    "shovel",
    "cow",
    "luxury",
    "bridge",
    "vitamin",
    "version",
    "ambulance",
    "wonderful",
    "snail",
    "discount",
    "connect",
    "designer",
    "oat",
    "vulture",
    "result",
    "peaceful",
    "winter",
    "mystery",
    "exchange",
    "pottery",
    "perfume",
    "passage",
    "hidden",
    "concert",
    "runner",
    "dime",
    "parcel",
    "cabin",
    "blanket",
    "fact",
    "brand",
    "jelly",
    "reality",
    "urgent",
    "pyramid",
    "space",
    "coast",
    "mouth",
    "blizzard",
    "mercury",
    "stone",
    "scissor",
    "answer",
    "regular",
    "oyster",
    "thirsty",
    "estimate",
    "custom",
    "upper",
    "notebook",
    "frozen",
    "tornado",
    "marathon",
    "governor",
    "snow",
    "star",
    "marble",
    "club",
    "semester",
    "light",
    "actor",
    "ending",
    "stick",
    "hammer",
    "cardboard",
    "tiger",
    "roof",
    "platinum",
    "summer",
    "fox",
    "beast",
    "remote",
    "curve",
    "automatic",
    "media",
    "orchestra",
    "skin",
    "upgrade",
    "popular",
    "back",
    "post",
    "crayon",
    "energy",
    "ray",
    "cream",
    "calendar",
    "rhythm",
    "genuine",
    "gem",
    "steam",
    "bottle",
    "initial",
    "weekend",
    "brilliant",
    "exact",
    "motion",
    "bell",
    "lumber",
    "mushroom",
    "picture",
    "front",
    "message",
    "evidence",
    "lotus",
    "bookshelf",
    "diesel",
    "life",
    "digital",
    "park",
    "flight",
    "cart",
    "beam",
    "thing",
    "amount",
    "cup",
    "evening",
    "sheep",
    "rectangle",
    "pipe",
    "ice",
    "panda",
    "surface",
    "doctor",
    "impact",
    "appear",
    "maker",
    "sweater",
    "document",
    "technical",
    "ancient",
    "switch",
    "material",
    "vehicle",
    "shower",
    "aspect",
    "total",
    "income",
    "language",
    "piano",
    "tulip",
    "flexible",
    "tube",
    "script",
    "arrange",
    "screen",
    "crane",
    "biology",
    "minister",
    "thumb",
    "jaw",
    "toy",
    "bicycle",
    "sister",
    "album",
    "giraffe",
    "priority",
    "magazine",
    "thunder",
    "avocado",
    "midnight",
    "context",
    "knee",
    "vegetable",
    "exam",
    "give",
    "garlic",
    "orange",
    "pilot",
    "develop",
    "anchor",
    "soil",
    "island",
    "captain",
    "cathedral",
    "idea",
    "distance",
    "event",
    "register",
    "sort",
    "knowledge",
    "element",
    "stove",
    "talent",
    "economy",
    "modern",
    "similar",
    "tsunami",
    "access",
    "ear",
    "lesson",
    "bangle",
    "chain",
    "visitor",
    "tin",
    "money",
    "virtual",
    "orchid",
    "map",
    "guitar",
    "pattern",
    "topic",
    "patch",
    "branch",
    "swing",
    "olive",
    "invent",
    "account",
    "people",
    "holiday",
    "line",
    "wheat",
    "journal",
    "clay",
    "youth",
    "enhance",
    "vivid",
    "area",
    "wardrobe",
    "wildlife",
    "cucumber",
    "typical",
    "writer",
    "display",
    "wisdom",
    "particle",
    "elephant",
    "support",
    "soccer",
    "input",
    "miracle",
    "single",
    "ginger",
    "rate",
    "papaya",
    "rope",
    "sleep",
    "cloth",
    "reliable",
    "jacket",
    "bubble",
    "skeleton",
    "industry",
    "widen",
    "jeep",
    "city",
    "society",
    "academic",
    "lamp",
    "mammoth",
    "carbon",
    "character",
    "month",
    "dress",
    "possible",
    "clover",
    "truck",
    "commerce",
    "force",
    "include",
    "diagram",
    "mineral",
    "magic",
    "gradual",
    "recent",
    "define",
    "tooth",
    "pencil",
    "safe",
    "agree",
    "level",
    "almond",
    "bright",
    "learn",
    "alphabet",
    "toast",
    "north",
    "treasure",
    "split",
    "football",
    "method",
    "enable",
    "century",
    "dinner",
    "train",
    "signal",
    "moonlight",
    "useful",
    "entry",
    "judge",
    "buyer",
    "keyboard",
    "brick",
    "elegant",
    "neutral",
    "plasma",
    "explain",
    "gravity",
    "credit",
    "aircraft",
    "universal",
    "syllable",
    "bench",
    "hurricane",
    "comfort",
    "teacher",
    "tortoise",
    "purchase",
    "buffalo",
    "lifetime",
    "afternoon",
    "original",
    "gorgeous",
    "union",
    "boot",
    "earth",
    "address",
    "equation",
    "chemical",
    "crack",
    "arch",
    "oak",
    "orbit",
    "task",
    "drum",
    "bucket",
    "accurate",
    "library",
    "coin",
    "length",
    "honest",
    "lawyer",
    "wire",
    "machine",
    "sauce",
    "direct",
    "pack",
    "benefit",
    "position",
    "snake",
    "ascend",
    "art",
    "trumpet",
    "update",
    "career",
    "amaze",
    "often",
    "necklace",
    "sunlight",
    "freezer",
    "barbecue",
    "umbrella",
    "reference",
    "living",
    "eager",
    "chimpanzee",
    "animal",
    "robin"];

const MAX_INT = "0xFFFFFFFFF";


const isString = (o) => {
    return Object.prototype.toString.call(o) === "[object String]"
}

const randomBigInt = () => {
    return BigInt(MAX_INT.replace(/[F]/g, function (c) {
        var r = Math.random() * 16 | 0;
        return r.toString(16);
    }));
};

const calcChecksum = (number) => {
    let checksumId = BigInt(number);
    let checksum = BigInt(0);
    const mask = BigInt(0xF);

    // Implement a BSD-like checksum operating on 4-bit chunks.
    for (let i = 0; i < 9; i++) {
        // Wrap around right shift the checksum
        checksum = (checksum >> 1n) + ((checksum & 1n) << 3n);
        // Add the current checksum ID state;
        checksum = (checksum + ((checksumId & mask))) & mask;
        // Cue up the next four bits.
        checksumId = checksumId >> 4n;
    }
    return checksum;
}

const parse = (id) => {

    if (!isString(id)) { return undefined; }
    const tokens = id.split(" ");
    if (tokens.length !== 4) {
        return undefined;
    }

    let pieces = [-1, -1, -1, -1];
    for (let i = 0; i < 1024; i++) {
        for (let j = 0; j < 4; j++) {
            if (words[i] === tokens[j]) {
                pieces[j] = i;
            }
        }
    }

    if (pieces[0] === -1 || pieces[1] === -1 || pieces[2] === -1 || pieces[3] === -1) {
        return undefined;
    }

    let number = BigInt(pieces[0]);
    number += BigInt(pieces[1]) << 10n;
    number += BigInt(pieces[2]) << 20n;

    let checksum = BigInt(pieces[3]) & 0x0Fn;
    number += (BigInt(pieces[3]) & 0x3F0n) << 26n;

    if (checksum !== calcChecksum(number)) {
        return undefined;
    }

    return number.toString(16);
}

const create = (id) => {
    let idNumber;
    if (!id) {
        idNumber = randomBigInt();
    }
    else {
        if (isString(id) && id.match(/[abcdef0-9]+/)) {
            idNumber = BigInt("0x" + id);
        }
        else if (typeof (idNumber) === BigInt) {
            idNumber = id;
        }
        else {
            return undefined;
        }
    }

    let checksum = calcChecksum(idNumber);

    let chunk1 = (idNumber & (0x3ffn));
    let chunk2 = ((idNumber >> 10n) & (0x3ffn));
    let chunk3 = ((idNumber >> 20n) & (0x3ffn));
    let chunk4 = (((idNumber >> 30n) & (0x03fn)) << 4n) + checksum;

    let result = [words[chunk1], words[chunk2], words[chunk3], words[chunk4]];
    return result.join(" ");
}

exports.create = create;
exports.parse = parse;
exports.words = words;