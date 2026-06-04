// Anime data — facts about real series, but no copyrighted art/UI is recreated.
// Posters are styled placeholders generated from genre + title.

window.ANIME_DATA = [
  {
    id: "quintuplets",
    title: "The Quintessential Quintuplets",
    jpTitle: "Go-Tōbun no Hanayome",
    creator: "Negi Haruba",
    studio: "Tezuka Productions / Bibury Animation Studios",
    year: 2019,
    endYear: 2021,
    status: "Finished",
    genres: ["Romance", "Comedy", "School"],
    rating: 7.7,
    seasons: [
      { n: 1, year: 2019, episodes: 12, title: "Season 1" },
      { n: 2, year: 2021, episodes: 12, title: "Season 2" },
      { n: 0, year: 2022, episodes: 1, title: "The Movie" }
    ],
    characters: [
      "Futaro Uesugi", "Ichika Nakano", "Nino Nakano",
      "Miku Nakano", "Yotsuba Nakano", "Itsuki Nakano",
      "Raiha Uesugi", "Isanari Uesugi", "Maruo Nakano"
    ],
    synopsis: "A broke, high-achieving tutor is hired to coach five identical quintuplet sisters — each with a personality and life of her own — through high school. Years later, one of them becomes his bride.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Negi Haruba", publisher: "Kodansha · Weekly Shonen Magazine" },
    openingTheme: { song: "Gotōbun no Katachi", artist: "The Quintessential Quintuplets" },
    streaming: ["Crunchyroll", "Hulu"],
    awards: ["Kodansha Manga Award · Shonen (2019)"],
    relatedWorks: ["The Quintessential Quintuplets ∗ (2022 Film)"],
    accent: 250 // hue
  },
  {
    id: "tomodachi-game",
    title: "Tomodachi Game",
    jpTitle: "Tomodachi Gēmu",
    creator: "Mikoto Yamaguchi / Yuki Sato",
    studio: "Okuruto Noboru",
    year: 2022,
    endYear: 2022,
    status: "Finished",
    genres: ["Psychological", "Mystery", "Thriller"],
    rating: 7.3,
    seasons: [
      { n: 1, year: 2022, episodes: 12, title: "Season 1" }
    ],
    characters: [
      "Yuichi Katagiri", "Yutori Kokorogi", "Shiho Sawaragi",
      "Makoto Shibe", "Tenji Mikasa", "Manabu-kun"
    ],
    synopsis: "Five close friends are abducted and forced to play psychological games to clear one member's massive debt — testing how far friendship really goes when money is on the line.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Mikoto Yamaguchi · Yuki Sato", publisher: "Kodansha · Bessatsu Shonen Magazine" },
    openingTheme: { song: "Double Shuffle", artist: "Nanawoakari" },
    streaming: ["Crunchyroll"],
    awards: [],
    relatedWorks: [],
    accent: 320,
    collections: ["underrated"]
  },
  {
    id: "jjk",
    title: "Jujutsu Kaisen",
    jpTitle: "Jujutsu Kaisen",
    creator: "Gege Akutami",
    studio: "MAPPA",
    year: 2020,
    endYear: null,
    status: "Airing",
    genres: ["Action", "Supernatural", "Dark Fantasy"],
    rating: 8.6,
    seasons: [
      { n: 1, year: 2020, episodes: 24, title: "Season 1" },
      { n: 0, year: 2021, episodes: 1, title: "Movie 0" },
      { n: 2, year: 2023, episodes: 23, title: "Shibuya Incident" }
    ],
    characters: [
      "Yuji Itadori", "Megumi Fushiguro", "Nobara Kugisaki",
      "Satoru Gojo", "Ryomen Sukuna", "Kento Nanami",
      "Maki Zenin", "Toge Inumaki", "Panda", "Suguru Geto",
      "Mahito", "Aoi Todo", "Yuta Okkotsu", "Choso"
    ],
    synopsis: "A high-schooler swallows a cursed finger to save his friends and becomes the host of a thousand-year-old curse — forced into a hidden world of sorcerers who exorcise the dark side of human emotion.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Gege Akutami", publisher: "Shueisha · Weekly Shonen Jump" },
    openingTheme: { song: "Kaikai Kitan", artist: "Eve" },
    streaming: ["Crunchyroll", "Netflix"],
    awards: ["Crunchyroll Anime of the Year (2021)", "Tsugi ni Kuru Manga Award (2019)"],
    relatedWorks: ["Jujutsu Kaisen 0 (2021 Film)", "Jujutsu Kaisen: Execution (upcoming)"],
    accent: 0
  },
  {
    id: "jjba",
    title: "JoJo's Bizarre Adventure",
    jpTitle: "JoJo no Kimyō na Bōken",
    creator: "Hirohiko Araki",
    studio: "David Production",
    year: 2012,
    endYear: null,
    status: "Airing",
    genres: ["Action", "Adventure", "Supernatural"],
    rating: 8.7,
    seasons: [
      { n: 1, year: 2012, episodes: 26, title: "Phantom Blood / Battle Tendency" },
      { n: 2, year: 2014, episodes: 48, title: "Stardust Crusaders" },
      { n: 3, year: 2016, episodes: 39, title: "Diamond is Unbreakable" },
      { n: 4, year: 2018, episodes: 39, title: "Golden Wind" },
      { n: 5, year: 2021, episodes: 38, title: "Stone Ocean" }
    ],
    characters: [
      "Jonathan Joestar", "Joseph Joestar", "Jotaro Kujo",
      "Josuke Higashikata", "Giorno Giovanna", "Jolyne Cujoh",
      "Dio Brando", "Bruno Bucciarati", "Iggy",
      "Noriaki Kakyoin", "Jean Pierre Polnareff", "Caesar Zeppeli",
      "Yoshikage Kira", "Diavolo", "Enrico Pucci"
    ],
    synopsis: "A multi-generational saga following the Joestar bloodline — each protagonist confronts supernatural threats with elaborate stand powers, fashion, and dramatic poses across nearly a century.",
    demographic: "Shonen / Seinen",
    source: { type: "Manga", author: "Hirohiko Araki", publisher: "Shueisha · Weekly Shonen Jump / Ultra Jump" },
    openingTheme: { song: "Sono Chi no Sadame", artist: "Hiroaki Tominaga" },
    streaming: ["Netflix", "Crunchyroll"],
    awards: ["Kodansha Manga Award (1993)", "Tezuka Osamu Cultural Prize Grand Prize (2024)"],
    relatedWorks: ["JoJo's Bizarre Adventure (1993 OVA)", "Thus Spoke Kishibe Rohan"],
    accent: 60
  },
  {
    id: "date-a-live",
    title: "Date A Live",
    jpTitle: "Dēto A Raibu",
    creator: "Kōshi Tachibana",
    studio: "AIC Plus+ / Production IMS / J.C.Staff / Geek Toys",
    year: 2013,
    endYear: 2024,
    status: "Finished",
    genres: ["Sci-Fi", "Romance", "Harem"],
    rating: 7.1,
    seasons: [
      { n: 1, year: 2013, episodes: 12, title: "Season 1" },
      { n: 2, year: 2014, episodes: 10, title: "Season 2" },
      { n: 3, year: 2019, episodes: 12, title: "Season 3" },
      { n: 4, year: 2022, episodes: 12, title: "Season 4" },
      { n: 5, year: 2024, episodes: 12, title: "Season 5" }
    ],
    characters: [
      "Shido Itsuka", "Tohka Yatogami", "Origami Tobiichi",
      "Kotori Itsuka", "Yoshino", "Kurumi Tokisaki",
      "Kaguya Yamai", "Yuzuru Yamai", "Miku Izayoi",
      "Natsumi", "Mukuro Hoshimiya", "Reine Murasame"
    ],
    synopsis: "A teenager learns the world's spacequakes are caused by Spirits — and the only way to neutralize them without violence is to make them fall in love with him.",
    demographic: "Shonen",
    source: { type: "Light Novel", author: "Kōshi Tachibana", publisher: "Fujimi Shobo · Fujimi Fantasia Bunko" },
    openingTheme: { song: "Date A Live", artist: "sweet ARMS" },
    streaming: ["HiDive", "Crunchyroll"],
    awards: [],
    relatedWorks: ["Date A Bullet (Spin-off Films)", "Date A Live: Mayuri Judgment (2015 Film)"],
    accent: 195
  },
  {
    id: "gachiakuta",
    title: "Gachiakuta",
    jpTitle: "Gachiakuta",
    creator: "Kei Urana",
    studio: "Bones",
    year: 2025,
    endYear: null,
    status: "Airing",
    genres: ["Action", "Dark Fantasy", "Shonen"],
    rating: 8.2,
    seasons: [
      { n: 1, year: 2025, episodes: 24, title: "Season 1" }
    ],
    characters: [
      "Rudo", "Engine", "Chiwa",
      "Riyo", "Zanka", "Semiu", "Jabber"
    ],
    synopsis: "Cast into the Abyss — a literal trash heap below a floating city of the privileged — a slum boy wields Vital Instruments forged from cherished objects to fight his way back up.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Kei Urana", publisher: "Kodansha · Weekly Shonen Magazine" },
    openingTheme: { song: "HUGs", artist: "Paledusk × Chico" },
    streaming: ["Crunchyroll"],
    awards: ["Tsugi ni Kuru Manga Award (2023)"],
    relatedWorks: [],
    accent: 130
  },
  {
    id: "aot",
    title: "Attack on Titan",
    jpTitle: "Shingeki no Kyojin",
    creator: "Hajime Isayama",
    studio: "WIT Studio / MAPPA",
    year: 2013,
    endYear: 2023,
    status: "Finished",
    genres: ["Action", "Drama", "Dark Fantasy"],
    rating: 9.0,
    seasons: [
      { n: 1, year: 2013, episodes: 25, title: "Season 1" },
      { n: 2, year: 2017, episodes: 12, title: "Season 2" },
      { n: 3, year: 2018, episodes: 22, title: "Season 3" },
      { n: 4, year: 2020, episodes: 28, title: "The Final Season" }
    ],
    characters: [
      "Eren Yeager", "Mikasa Ackerman", "Armin Arlert",
      "Levi Ackerman", "Erwin Smith", "Historia Reiss",
      "Reiner Braun", "Bertholdt Hoover", "Annie Leonhart",
      "Sasha Blouse", "Jean Kirstein", "Zeke Yeager",
      "Hange Zoe", "Connie Springer", "Ymir"
    ],
    synopsis: "Humanity, penned behind enormous walls, faces extinction at the hands of mindless man-eating giants — until a boy with a vendetta inherits a power that will rewrite the world's history.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Hajime Isayama", publisher: "Kodansha · Bessatsu Shonen Magazine" },
    openingTheme: { song: "Guren no Yumiya", artist: "Linked Horizon" },
    streaming: ["Crunchyroll", "Hulu"],
    awards: ["Kodansha Manga Award · Shonen (2011)", "Crunchyroll Anime of the Year (2022, 2024)"],
    relatedWorks: ["Attack on Titan: Junior High", "Attack on Titan: No Regrets (OVA)", "Attack on Titan: Lost Girls"],
    accent: 30
  },
  {
    id: "bleach",
    title: "Bleach",
    jpTitle: "Burīchi",
    creator: "Tite Kubo",
    studio: "Pierrot",
    year: 2004,
    endYear: null,
    status: "Airing",
    genres: ["Action", "Supernatural", "Shonen"],
    rating: 8.2,
    seasons: [
      { n: 1, year: 2004, episodes: 366, title: "Original Series" },
      { n: 2, year: 2022, episodes: 13, title: "Thousand-Year Blood War Pt. 1" },
      { n: 3, year: 2023, episodes: 13, title: "Thousand-Year Blood War Pt. 2" },
      { n: 4, year: 2024, episodes: 14, title: "Thousand-Year Blood War Pt. 3" }
    ],
    characters: [
      "Ichigo Kurosaki", "Rukia Kuchiki", "Orihime Inoue",
      "Yasutora Sado", "Uryu Ishida", "Renji Abarai",
      "Byakuya Kuchiki", "Kenpachi Zaraki", "Sosuke Aizen",
      "Yhwach", "Kisuke Urahara", "Toshiro Hitsugaya",
      "Yoruichi Shihoin", "Gin Ichimaru"
    ],
    synopsis: "A high-schooler who can see ghosts inherits a Soul Reaper's powers and is dragged into a vast cosmology of warring afterlife factions, hollow spirits, and ancient kings.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Tite Kubo", publisher: "Shueisha · Weekly Shonen Jump" },
    openingTheme: { song: "Asterisk", artist: "Orange Range" },
    streaming: ["Hulu", "Disney+", "Crunchyroll"],
    awards: ["Shogakukan Manga Award · Shonen (2005)"],
    relatedWorks: ["Bleach: Memories of Nobody (2006 Film)", "Bleach: Hell Verse (2010 Film)"],
    accent: 215
  },
  {
    id: "mha",
    title: "My Hero Academia",
    jpTitle: "Boku no Hīrō Akademia",
    creator: "Kōhei Horikoshi",
    studio: "Bones",
    year: 2016,
    endYear: 2025,
    status: "Finished",
    genres: ["Action", "Superhero", "School"],
    rating: 8.0,
    seasons: [
      { n: 1, year: 2016, episodes: 13, title: "Season 1" },
      { n: 2, year: 2017, episodes: 25, title: "Season 2" },
      { n: 3, year: 2018, episodes: 25, title: "Season 3" },
      { n: 4, year: 2019, episodes: 25, title: "Season 4" },
      { n: 5, year: 2021, episodes: 25, title: "Season 5" },
      { n: 6, year: 2022, episodes: 25, title: "Season 6" },
      { n: 7, year: 2024, episodes: 21, title: "Season 7" },
      { n: 8, year: 2025, episodes: 12, title: "Final Season" }
    ],
    characters: [
      "Izuku Midoriya", "Katsuki Bakugo", "Ochaco Uraraka",
      "Shoto Todoroki", "Tenya Iida", "All Might",
      "Tomura Shigaraki", "Dabi", "Himiko Toga",
      "Shota Aizawa", "Enji Todoroki", "Tsuyu Asui",
      "Eijiro Kirishima", "Momo Yaoyorozu"
    ],
    synopsis: "In a world where most people are born with superpowers called Quirks, a powerless boy inherits the legacy of the world's greatest hero and enrolls at an elite hero academy.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Kōhei Horikoshi", publisher: "Shueisha · Weekly Shonen Jump" },
    openingTheme: { song: "The Day", artist: "Porno Graffitti" },
    streaming: ["Crunchyroll", "Hulu"],
    awards: ["Sugoi Japan Award (2017)", "Harvey Award · Best Manga (2019)"],
    relatedWorks: ["My Hero Academia: Two Heroes", "Heroes Rising", "World Heroes' Mission", "Vigilantes (Spin-off)"],
    accent: 145
  },
  {
    id: "konosuba",
    title: "KonoSuba",
    jpTitle: "Kono Subarashii Sekai ni Shukufuku wo!",
    creator: "Natsume Akatsuki",
    studio: "Studio DEEN / Drive",
    year: 2016,
    endYear: 2024,
    status: "Finished",
    genres: ["Comedy", "Fantasy", "Isekai"],
    rating: 8.1,
    seasons: [
      { n: 1, year: 2016, episodes: 10, title: "Season 1" },
      { n: 2, year: 2017, episodes: 10, title: "Season 2" },
      { n: 0, year: 2019, episodes: 1, title: "Legend of Crimson" },
      { n: 3, year: 2024, episodes: 11, title: "Season 3" }
    ],
    characters: [
      "Kazuma Satou", "Aqua", "Megumin",
      "Darkness", "Wiz", "Yunyun",
      "Vanir", "Chris", "Iris"
    ],
    synopsis: "A NEET dies pathetically, gets reincarnated in a fantasy world, and is saddled with a useless goddess, an explosion-obsessed mage, and a masochist knight. Heroism does not follow.",
    demographic: "Seinen",
    source: { type: "Light Novel", author: "Natsume Akatsuki", publisher: "Kadokawa · Sneaker Bunko" },
    openingTheme: { song: "fantastic dreamer", artist: "Machico" },
    streaming: ["Crunchyroll", "HiDive"],
    awards: [],
    relatedWorks: ["KonoSuba: Legend of Crimson (2019 Film)", "An Explosion on This Wonderful World!"],
    accent: 280
  },
  {
    id: "tokyo-ghoul",
    title: "Tokyo Ghoul",
    jpTitle: "Tōkyō Gūru",
    creator: "Sui Ishida",
    studio: "Pierrot",
    year: 2014,
    endYear: 2018,
    status: "Finished",
    genres: ["Horror", "Dark Fantasy", "Psychological"],
    rating: 7.8,
    seasons: [
      { n: 1, year: 2014, episodes: 12, title: "Tokyo Ghoul" },
      { n: 2, year: 2015, episodes: 12, title: "Root A" },
      { n: 3, year: 2018, episodes: 12, title: ":re" },
      { n: 4, year: 2018, episodes: 12, title: ":re 2nd Season" }
    ],
    characters: [
      "Ken Kaneki", "Touka Kirishima", "Rize Kamishiro",
      "Shu Tsukiyama", "Renji Yomo", "Kotaro Amon",
      "Juuzou Suzuya", "Hideyoshi Nagachika", "Kishou Arima",
      "Eto Yoshimura", "Kuzen Yoshimura"
    ],
    synopsis: "After an organ transplant turns a Tokyo student into a half-ghoul, he must learn to feed on human flesh while navigating a hidden underworld at war with the agency hunting his kind.",
    demographic: "Seinen",
    source: { type: "Manga", author: "Sui Ishida", publisher: "Shueisha · Weekly Young Jump" },
    openingTheme: { song: "Unravel", artist: "TK from Ling Tosite Sigure" },
    streaming: ["Crunchyroll", "Hulu"],
    awards: ["Tsugi ni Kuru Manga Award (2014)"],
    relatedWorks: ["Tokyo Ghoul: Jack (OVA)", "Tokyo Ghoul: Pinto (OVA)", "Tokyo Ghoul (2017 Live-Action Film)"],
    accent: 350
  },
  {
    id: "edgerunners",
    title: "Cyberpunk: Edgerunners",
    jpTitle: "Saibāpanku: Ejjirannāzu",
    creator: "Rafał Jaki / CD Projekt Red",
    studio: "Trigger",
    year: 2022,
    endYear: 2022,
    status: "Finished",
    genres: ["Sci-Fi", "Cyberpunk", "Action"],
    rating: 8.4,
    seasons: [
      { n: 1, year: 2022, episodes: 10, title: "Season 1" }
    ],
    characters: [
      "David Martinez", "Lucy", "Maine",
      "Dorio", "Kiwi", "Pilar",
      "Rebecca", "Falco", "Faraday", "Adam Smasher", "Gloria Martinez"
    ],
    synopsis: "In a neon-drowned megacity where corporations farm bodies and chrome eats minds, a street kid joins a crew of edgerunners and burns brighter — and shorter — than he ever should have.",
    demographic: "Seinen",
    source: { type: "Original", author: "Based on Cyberpunk 2077 · CD Projekt Red", publisher: "Netflix Original" },
    openingTheme: { song: "This Fffire", artist: "Franz Ferdinand" },
    streaming: ["Netflix"],
    awards: ["Crunchyroll Anime of the Year (2023)", "Crunchyroll · Best Original Anime, Best Action, Best Score (2023)"],
    relatedWorks: ["Cyberpunk 2077 (Video Game)", "Cyberpunk 2077: Phantom Liberty (DLC)"],
    accent: 175
  },
  {
    id: "bocchi",
    title: "Bocchi the Rock!",
    jpTitle: "Botchi za Rokku!",
    creator: "Aki Hamaji",
    studio: "CloverWorks",
    year: 2022,
    endYear: 2022,
    status: "Finished",
    genres: ["Comedy", "Music", "Slice of Life"],
    rating: 8.7,
    seasons: [
      { n: 1, year: 2022, episodes: 12, title: "Season 1" }
    ],
    characters: [
      "Hitori Gotoh", "Nijika Ijichi",
      "Ryo Yamada", "Ikuyo Kita", "Seika Ijichi", "PA-san", "Kikuri Hiroi"
    ],
    synopsis: "A painfully shy bedroom guitarist with a YouTube following she can't admit to is dragged into a real high-school band — and into the unbearable terror of actually meeting people.",
    demographic: "Seinen",
    source: { type: "Manga", author: "Aki Hamaji", publisher: "Houbunsha · Manga Time Kirara Max" },
    openingTheme: { song: "Seishun Complex", artist: "Kessoku Band" },
    streaming: ["Crunchyroll"],
    awards: ["Crunchyroll · Best Comedy (2023)", "Newtype Anime Awards · Best Anime (2023)"],
    relatedWorks: ["Bocchi the Rock! Re: (2024 Recap Film)", "Bocchi the Rock! Re:Re: (2024 Sequel Film)"],
    accent: 340
  },
  {
    id: "spy-x-family",
    title: "Spy x Family",
    jpTitle: "Supai Famirī",
    creator: "Tatsuya Endo",
    studio: "Wit Studio / CloverWorks",
    year: 2022,
    endYear: null,
    status: "Airing",
    genres: ["Action", "Comedy", "Slice of Life"],
    rating: 8.5,
    seasons: [
      { n: 1, year: 2022, episodes: 25, title: "Season 1" },
      { n: 2, year: 2023, episodes: 12, title: "Season 2" },
      { n: 0, year: 2023, episodes: 1, title: "Code: White (Film)" }
    ],
    characters: [
      "Loid Forger", "Yor Forger", "Anya Forger", "Bond Forger",
      "Yuri Briar", "Damian Desmond", "Becky Blackbell",
      "Franky Franklin", "Fiona Frost", "Sylvia Sherwood"
    ],
    synopsis: "A master spy must build a fake family to get close to a reclusive target — never realizing his adopted daughter is a telepath and his new wife is a contract killer. Everyone is lying; somehow it works.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Tatsuya Endo", publisher: "Shueisha · Shonen Jump+" },
    openingTheme: { song: "Mixed Nuts", artist: "Official HIGE DANdism" },
    streaming: ["Crunchyroll", "Hulu", "Netflix"],
    awards: ["Harvey Award · Best Manga (2021)", "Crunchyroll · Best New Series (2023)"],
    relatedWorks: ["Spy x Family Code: White (2023 Film)"],
    accent: 18
  },
  {
    id: "demon-slayer",
    title: "Demon Slayer",
    jpTitle: "Kimetsu no Yaiba",
    creator: "Koyoharu Gotouge",
    studio: "ufotable",
    year: 2019,
    endYear: null,
    status: "Airing",
    genres: ["Action", "Supernatural", "Historical"],
    rating: 8.6,
    seasons: [
      { n: 1, year: 2019, episodes: 26, title: "Season 1" },
      { n: 0, year: 2020, episodes: 1, title: "Mugen Train (Film)" },
      { n: 2, year: 2021, episodes: 11, title: "Entertainment District Arc" },
      { n: 3, year: 2023, episodes: 11, title: "Swordsmith Village Arc" },
      { n: 4, year: 2024, episodes: 8, title: "Hashira Training Arc" }
    ],
    characters: [
      "Tanjiro Kamado", "Nezuko Kamado", "Zenitsu Agatsuma",
      "Inosuke Hashibira", "Giyu Tomioka", "Kyojuro Rengoku",
      "Tengen Uzui", "Shinobu Kocho", "Muzan Kibutsuji",
      "Akaza", "Kanao Tsuyuri", "Genya Shinazugawa"
    ],
    synopsis: "After a demon slaughters his family and turns his sister into one, a kind-hearted boy joins the Demon Slayer Corps — vowing to cure her and hunt the demon king behind it all.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Koyoharu Gotouge", publisher: "Shueisha · Weekly Shonen Jump" },
    openingTheme: { song: "Gurenge", artist: "LiSA" },
    streaming: ["Crunchyroll", "Netflix", "Hulu"],
    awards: ["Crunchyroll Anime of the Year (2020)", "Newtype Anime Award · Best Work (2020)"],
    relatedWorks: ["Mugen Train (2020 Film)", "Demon Slayer: Infinity Castle (Film Trilogy)"],
    accent: 8
  },
  {
    id: "re-zero",
    title: "Re:Zero",
    jpTitle: "Re:Zero kara Hajimeru Isekai Seikatsu",
    creator: "Tappei Nagatsuki",
    studio: "White Fox",
    year: 2016,
    endYear: null,
    status: "Airing",
    genres: ["Isekai", "Drama", "Psychological", "Dark Fantasy"],
    rating: 8.2,
    seasons: [
      { n: 1, year: 2016, episodes: 25, title: "Season 1" },
      { n: 2, year: 2020, episodes: 25, title: "Season 2" },
      { n: 3, year: 2024, episodes: 16, title: "Season 3" }
    ],
    characters: [
      "Subaru Natsuki", "Emilia", "Rem", "Ram", "Beatrice",
      "Roswaal L Mathers", "Puck", "Felt", "Reinhard van Astrea",
      "Echidna", "Petelgeuse Romanee-Conti", "Otto Suwen"
    ],
    synopsis: "Yanked into a fantasy world, a hopeless shut-in discovers his only power: every time he dies, time rewinds. To save the people he loves, he must die — agonizingly, repeatedly — until he gets it right.",
    demographic: "Shonen",
    source: { type: "Light Novel", author: "Tappei Nagatsuki", publisher: "Kadokawa · MF Bunko J" },
    openingTheme: { song: "Redo", artist: "Konomi Suzuki" },
    streaming: ["Crunchyroll"],
    awards: ["Sugoi Japan Award (2017)"],
    relatedWorks: ["Re:Zero – Memory Snow (OVA)", "Re:Zero – The Frozen Bond (OVA)"],
    accent: 200
  },
  {
    id: "chainsaw-man",
    title: "Chainsaw Man",
    jpTitle: "Chensō Man",
    creator: "Tatsuki Fujimoto",
    studio: "MAPPA",
    year: 2022,
    endYear: null,
    status: "Airing",
    genres: ["Action", "Dark Fantasy", "Horror"],
    rating: 8.4,
    seasons: [
      { n: 1, year: 2022, episodes: 12, title: "Season 1" },
      { n: 0, year: 2025, episodes: 1, title: "Reze Arc (Film)" }
    ],
    characters: [
      "Denji", "Pochita", "Makima", "Power", "Aki Hayakawa",
      "Himeno", "Kobeni Higashiyama", "Reze", "Kishibe", "Angel Devil"
    ],
    synopsis: "A penniless teen who merges with his chainsaw devil-dog to clear his dead father's debt becomes a Devil Hunter for a shadowy government agency — chasing the one thing he's never had: a normal life.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Tatsuki Fujimoto", publisher: "Shueisha · Weekly Shonen Jump / Shonen Jump+" },
    openingTheme: { song: "Kick Back", artist: "Kenshi Yonezu" },
    streaming: ["Crunchyroll", "Hulu"],
    awards: ["Harvey Award · Best Manga (2021)", "Crunchyroll · Best Animation (2023)"],
    relatedWorks: ["Chainsaw Man – The Movie: Reze Arc (2025 Film)"],
    accent: 12
  },
  {
    id: "angel-next-door",
    title: "The Angel Next Door Spoils Me Rotten",
    jpTitle: "Otonari no Tenshi-sama ni Itsunomanika Dame Ningen ni Sareteita Ken",
    creator: "Saekisan",
    studio: "Project No.9",
    year: 2023,
    endYear: 2023,
    status: "Finished",
    genres: ["Romance", "Comedy", "Slice of Life"],
    rating: 7.3,
    seasons: [
      { n: 1, year: 2023, episodes: 12, title: "Season 1" }
    ],
    characters: [
      "Amane Fujimiya", "Mahiru Shiina", "Chitose Shirakawa",
      "Itsuki Akazawa", "Yuuta Kadowaki"
    ],
    synopsis: "The most admired girl in school — the untouchable 'angel' next door — quietly starts cooking and caring for the slovenly boy across the hall, and a tentative domestic intimacy blooms between them.",
    demographic: "Shonen",
    source: { type: "Light Novel", author: "Saekisan", publisher: "SB Creative · GA Bunko" },
    openingTheme: { song: "Kimiiro Recipe", artist: "Masayoshi Oishi" },
    streaming: ["Crunchyroll", "HiDive"],
    awards: [],
    relatedWorks: [],
    accent: 330
  },
  {
    id: "death-note",
    title: "Death Note",
    jpTitle: "Desu Nōto",
    creator: "Tsugumi Ohba / Takeshi Obata",
    studio: "Madhouse",
    year: 2006,
    endYear: 2007,
    status: "Finished",
    genres: ["Psychological", "Thriller", "Supernatural", "Mystery"],
    rating: 8.6,
    seasons: [
      { n: 1, year: 2006, episodes: 37, title: "Season 1" }
    ],
    characters: [
      "Light Yagami", "L", "Misa Amane", "Ryuk", "Near", "Mello",
      "Soichiro Yagami", "Rem", "Teru Mikami", "Watari"
    ],
    synopsis: "A brilliant student finds a notebook that kills anyone whose name is written in it — and sets out to remake the world as its god. A faceless detective sets out to stop him. Neither will blink.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Tsugumi Ohba · Takeshi Obata", publisher: "Shueisha · Weekly Shonen Jump" },
    openingTheme: { song: "the WORLD", artist: "Nightmare" },
    streaming: ["Netflix", "Hulu", "Crunchyroll"],
    awards: ["American Anime Award · Best Cast (2007)"],
    relatedWorks: ["Death Note: Relight (Specials)", "Death Note (Live-Action Films)"],
    accent: 285
  },
  {
    id: "horimiya",
    title: "Horimiya",
    jpTitle: "Horimiya",
    creator: "HERO / Daisuke Hagiwara",
    studio: "CloverWorks",
    year: 2021,
    endYear: 2023,
    status: "Finished",
    genres: ["Romance", "Comedy", "Slice of Life", "School"],
    rating: 7.9,
    seasons: [
      { n: 1, year: 2021, episodes: 13, title: "Season 1" },
      { n: 2, year: 2023, episodes: 13, title: "The Missing Pieces" }
    ],
    characters: [
      "Kyoko Hori", "Izumi Miyamura", "Yuki Yoshikawa", "Toru Ishikawa",
      "Sakura Kono", "Remi Ayasaki", "Kakeru Sengoku", "Shu Iura"
    ],
    synopsis: "A popular, put-together girl and a quiet, pierced-and-tattooed loner discover each other's hidden home selves — and a frank, unusually grown-up high-school romance grows from the secret.",
    demographic: "Shonen",
    source: { type: "Manga", author: "HERO · Daisuke Hagiwara", publisher: "Square Enix · Monthly GFantasy" },
    openingTheme: { song: "Iro Kōsui", artist: "Yū Serizawa" },
    streaming: ["Crunchyroll", "Hulu"],
    awards: [],
    relatedWorks: ["Horimiya: The Missing Pieces (2023)"],
    accent: 155
  },
  {
    id: "my-dress-up-darling",
    title: "My Dress-Up Darling",
    jpTitle: "Sono Bisuku Dōru wa Koi wo Suru",
    creator: "Shinichi Fukuda",
    studio: "CloverWorks",
    year: 2022,
    endYear: null,
    status: "Airing",
    genres: ["Romance", "Comedy", "Slice of Life"],
    rating: 7.9,
    seasons: [
      { n: 1, year: 2022, episodes: 12, title: "Season 1" },
      { n: 2, year: 2025, episodes: 12, title: "Season 2" }
    ],
    characters: [
      "Wakana Gojo", "Marin Kitagawa", "Sajuna Inui", "Shinju Inui", "Kaoru Gojo"
    ],
    synopsis: "A shy boy who secretly crafts traditional Hina dolls is pulled out of his shell when a popular, fearlessly herself classmate begs him to sew her elaborate cosplay — and cosplay turns into something more.",
    demographic: "Seinen",
    source: { type: "Manga", author: "Shinichi Fukuda", publisher: "Square Enix · Young Gangan" },
    openingTheme: { song: "Sansan Days", artist: "Spira Spica" },
    streaming: ["Crunchyroll"],
    awards: ["Crunchyroll · Best Romance nominee (2023)"],
    relatedWorks: [],
    accent: 310
  },
  {
    id: "frieren",
    title: "Frieren: Beyond Journey's End",
    jpTitle: "Sōsō no Frieren",
    creator: "Kanehito Yamada / Tsukasa Abe",
    studio: "Madhouse",
    year: 2023,
    endYear: null,
    status: "Airing",
    genres: ["Adventure", "Fantasy", "Drama"],
    rating: 8.9,
    seasons: [
      { n: 1, year: 2023, episodes: 28, title: "Season 1" }
    ],
    characters: [
      "Frieren", "Fern", "Stark", "Himmel", "Heiter", "Eisen",
      "Sein", "Übel", "Denken", "Serie", "Flamme", "Stille"
    ],
    synopsis: "An elven mage who outlives the hero's party she once traveled with sets out, a lifetime later, to retrace their journey — and to finally understand the fleeting humans she never took the time to know.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Kanehito Yamada · Tsukasa Abe", publisher: "Shogakukan · Weekly Shonen Sunday" },
    openingTheme: { song: "Bound", artist: "YOASOBI" },
    streaming: ["Crunchyroll", "Netflix"],
    awards: ["Crunchyroll Anime of the Year (2024)", "Tezuka Osamu Cultural Prize · New Creator (2021)"],
    relatedWorks: [],
    accent: 165
  },
  {
    id: "berserk",
    title: "Berserk",
    jpTitle: "Beruseruku",
    creator: "Kentaro Miura",
    studio: "OLM / Millepensee",
    year: 1997,
    endYear: 2017,
    status: "Finished",
    genres: ["Action", "Dark Fantasy", "Horror", "Tragedy"],
    rating: 8.5,
    seasons: [
      { n: 1, year: 1997, episodes: 25, title: "1997 Series" },
      { n: 0, year: 2012, episodes: 3, title: "Golden Age Arc (Films)" },
      { n: 2, year: 2016, episodes: 24, title: "2016–2017 Series" }
    ],
    characters: [
      "Guts", "Griffith", "Casca", "Judeau", "Pippin", "Corkus",
      "Skull Knight", "Nosferatu Zodd", "Puck", "Schierke", "Farnese", "Serpico"
    ],
    synopsis: "A branded mercenary wages a lonely, brutal war against demons and the man who betrayed him — once his closest friend, now a fallen angel reaching for godhood. Rage is the only thing keeping him alive.",
    demographic: "Seinen",
    source: { type: "Manga", author: "Kentaro Miura", publisher: "Hakusensha · Young Animal" },
    openingTheme: { song: "Tell Me Why", artist: "Penpals" },
    streaming: ["Crunchyroll", "RetroCrush"],
    awards: ["Tezuka Osamu Cultural Prize · Excellence (2002)"],
    relatedWorks: ["Berserk: The Golden Age Arc (Film Trilogy)"],
    accent: 358
  },
  {
    id: "future-diary",
    title: "Future Diary",
    jpTitle: "Mirai Nikki",
    creator: "Sakae Esuno",
    studio: "Asread",
    year: 2011,
    endYear: 2012,
    status: "Finished",
    genres: ["Thriller", "Psychological", "Action", "Supernatural"],
    rating: 7.4,
    seasons: [
      { n: 1, year: 2011, episodes: 26, title: "Season 1" },
      { n: 0, year: 2013, episodes: 1, title: "Redial (OVA)" }
    ],
    characters: [
      "Yukiteru Amano", "Yuno Gasai", "Minene Uryu", "Akise Aru",
      "Tsubaki Kasugano", "Deus Ex Machina", "Murmur", "Keigo Kurusu", "Takao Hiyama"
    ],
    synopsis: "Twelve people are handed diaries that predict the future and forced into a survival game — last one standing becomes god. The shy boy at its center has one terrifying advantage: a girl who will kill anything for him.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Sakae Esuno", publisher: "Kadokawa · Shonen Ace" },
    openingTheme: { song: "Kūsō Mesorogiwi", artist: "Yousei Teikoku" },
    streaming: ["Funimation", "Crunchyroll"],
    awards: ["Kodansha Manga Award nominee (2009)"],
    relatedWorks: ["Mirai Nikki: Redial (OVA)", "Future Diary (Live-Action Drama)"],
    accent: 335,
    collections: ["underrated"]
  },
  {
    id: "bunny-girl-senpai",
    title: "Rascal Does Not Dream of Bunny Girl Senpai",
    jpTitle: "Seishun Buta Yarō wa Bunny Girl Senpai no Yume wo Minai",
    creator: "Hajime Kamoshida",
    studio: "CloverWorks",
    year: 2018,
    endYear: 2019,
    status: "Finished",
    genres: ["Romance", "Drama", "Supernatural", "Psychological"],
    rating: 8.2,
    seasons: [
      { n: 1, year: 2018, episodes: 13, title: "Season 1" },
      { n: 0, year: 2019, episodes: 1, title: "Dreaming Girl (Film)" }
    ],
    characters: [
      "Sakuta Azusagawa", "Mai Sakurajima", "Tomoe Koga", "Rio Futaba",
      "Nodoka Toyohama", "Kaede Azusagawa", "Shoko Makinohara", "Yuuma Kunimi"
    ],
    synopsis: "When a famous actress walks the halls in a bunny-girl outfit and no one but him notices, a level-headed boy is drawn into 'Adolescence Syndrome' — a string of supernatural ailments born from teenage anxiety.",
    demographic: "Seinen",
    source: { type: "Light Novel", author: "Hajime Kamoshida", publisher: "ASCII Media Works · Dengeki Bunko" },
    openingTheme: { song: "Kimi no Sei", artist: "The Peggies" },
    streaming: ["Crunchyroll"],
    awards: [],
    relatedWorks: ["Rascal Does Not Dream of a Dreaming Girl (2019 Film)", "Sister Venturing Out (2023 Films)"],
    accent: 235
  },
  {
    id: "hxh",
    title: "Hunter × Hunter",
    jpTitle: "Hantā Hantā",
    creator: "Yoshihiro Togashi",
    studio: "Madhouse",
    year: 2011,
    endYear: 2014,
    status: "Finished",
    genres: ["Action", "Adventure", "Fantasy"],
    rating: 9.0,
    seasons: [
      { n: 1, year: 2011, episodes: 148, title: "2011 Series" }
    ],
    characters: [
      "Gon Freecss", "Killua Zoldyck", "Kurapika", "Leorio Paradinight",
      "Hisoka Morow", "Chrollo Lucilfer", "Ging Freecss", "Meruem",
      "Isaac Netero", "Illumi Zoldyck", "Biscuit Krueger", "Knuckle Bine"
    ],
    synopsis: "A bright boy sets out to become a Hunter and find the father who left him — and stumbles into a world of monsters, mafias, and god-tier killers, gathering friends who'd burn the world for one another.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Yoshihiro Togashi", publisher: "Shueisha · Weekly Shonen Jump" },
    openingTheme: { song: "Departure!", artist: "Masatoshi Ono" },
    streaming: ["Crunchyroll", "Netflix"],
    awards: ["Shogakukan Manga Award · Shonen (2024)"],
    relatedWorks: ["Phantom Rouge (2013 Film)", "The Last Mission (2013 Film)"],
    accent: 110
  },
  {
    id: "one-punch-man",
    title: "One Punch Man",
    jpTitle: "Wanpanman",
    creator: "ONE / Yusuke Murata",
    studio: "Madhouse / J.C.Staff",
    year: 2015,
    endYear: null,
    status: "Airing",
    genres: ["Action", "Comedy", "Superhero", "Parody"],
    rating: 8.5,
    seasons: [
      { n: 1, year: 2015, episodes: 12, title: "Season 1" },
      { n: 2, year: 2019, episodes: 12, title: "Season 2" },
      { n: 3, year: 2025, episodes: 12, title: "Season 3" }
    ],
    characters: [
      "Saitama", "Genos", "Tatsumaki", "Fubuki", "Bang", "King",
      "Mumen Rider", "Garou", "Speed-o'-Sound Sonic", "Lord Boros",
      "Metal Bat", "Atomic Samurai"
    ],
    synopsis: "A bored hero who can defeat any foe with a single punch struggles with the only thing strong enough to challenge him: total, crushing boredom — and the bureaucracy of the Hero Association.",
    demographic: "Seinen",
    source: { type: "Manga", author: "ONE · Yusuke Murata", publisher: "Shueisha · Tonari no Young Jump" },
    openingTheme: { song: "THE HERO !! ~Ikareru Kobushi ni Hi wo Tsukero~", artist: "JAM Project" },
    streaming: ["Crunchyroll", "Hulu", "Netflix"],
    awards: ["Sugoi Japan Award (2016)"],
    relatedWorks: ["One Punch Man (Webcomic by ONE)"],
    accent: 48
  },
  {
    id: "toradora",
    title: "Toradora!",
    jpTitle: "Toradora!",
    creator: "Yuyuko Takemiya / Yasu",
    studio: "J.C.Staff",
    year: 2008,
    endYear: 2009,
    status: "Finished",
    genres: ["Romance", "Comedy", "Drama", "School"],
    rating: 8.1,
    seasons: [
      { n: 1, year: 2008, episodes: 25, title: "Season 1" }
    ],
    characters: [
      "Ryuuji Takasu", "Taiga Aisaka", "Minori Kushieda",
      "Yusaku Kitamura", "Ami Kawashima", "Yasuko Takasu"
    ],
    synopsis: "A gentle boy with a scary face and a tiny, ferocious 'palmtop tiger' of a girl team up to help each other land their respective crushes — and slowly realize the help was the romance all along.",
    demographic: "Shonen",
    source: { type: "Light Novel", author: "Yuyuko Takemiya", publisher: "ASCII Media Works · Dengeki Bunko" },
    openingTheme: { song: "Pre-Parade", artist: "Rie Kugimiya, Eri Kitamura, Yui Horie" },
    streaming: ["Crunchyroll", "HiDive"],
    awards: [],
    relatedWorks: ["Toradora SOS! (Specials)"],
    accent: 25
  },
  {
    id: "highschool-dxd",
    title: "High School DxD",
    jpTitle: "Haisukūru Dī Dī",
    creator: "Ichiei Ishibumi / Miyama-Zero",
    studio: "TNK / Passione",
    year: 2012,
    endYear: 2018,
    status: "Finished",
    genres: ["Action", "Comedy", "Ecchi", "Harem", "Supernatural"],
    rating: 7.3,
    seasons: [
      { n: 1, year: 2012, episodes: 12, title: "Season 1" },
      { n: 2, year: 2013, episodes: 12, title: "New" },
      { n: 3, year: 2015, episodes: 12, title: "BorN" },
      { n: 4, year: 2018, episodes: 12, title: "Hero" }
    ],
    characters: [
      "Issei Hyodo", "Rias Gremory", "Akeno Himejima", "Asia Argento",
      "Koneko Toujou", "Yuuto Kiba", "Xenovia Quarta", "Vali Lucifer",
      "Azazel", "Sona Sitri"
    ],
    synopsis: "Killed on his first date and revived as a devil's servant, a hopeless pervert is reborn into the secret war between devils, angels, and fallen angels — vowing to become a Harem King along the way.",
    demographic: "Seinen",
    source: { type: "Light Novel", author: "Ichiei Ishibumi", publisher: "Fujimi Shobo · Fujimi Fantasia Bunko" },
    openingTheme: { song: "Trip -innocent of D-", artist: "Larval Stage Planning" },
    streaming: ["HiDive", "Crunchyroll"],
    awards: [],
    relatedWorks: ["High School DxD (OVAs)"],
    accent: 352
  },
  {
    id: "dr-stone",
    title: "Dr. Stone",
    jpTitle: "Dokutā Sutōn",
    creator: "Riichiro Inagaki / Boichi",
    studio: "TMS Entertainment",
    year: 2019,
    endYear: 2025,
    status: "Finished",
    genres: ["Sci-Fi", "Adventure", "Post-Apocalyptic", "Comedy"],
    rating: 8.2,
    seasons: [
      { n: 1, year: 2019, episodes: 24, title: "Season 1" },
      { n: 2, year: 2021, episodes: 11, title: "Stone Wars" },
      { n: 3, year: 2023, episodes: 22, title: "New World" },
      { n: 4, year: 2025, episodes: 12, title: "Science Future" }
    ],
    characters: [
      "Senku Ishigami", "Taiju Oki", "Yuzuriha Ogawa", "Chrome", "Kohaku",
      "Gen Asagiri", "Tsukasa Shishio", "Ryusui Nanami", "Suika", "Kaseki", "Ukyo Saionji"
    ],
    synopsis: "After a mysterious flash petrifies all of humanity for millennia, a teenage science genius wakes into a stone-age world and sets out to rebuild civilization from scratch — one experiment at a time.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Riichiro Inagaki · Boichi", publisher: "Shueisha · Weekly Shonen Jump" },
    openingTheme: { song: "Good Morning World!", artist: "BURNOUT SYNDROMES" },
    streaming: ["Crunchyroll", "Hulu"],
    awards: ["Shogakukan Manga Award · Shonen (2024)"],
    relatedWorks: ["Dr. Stone: Ryusui (Special)"],
    accent: 88,
    collections: ["underrated"]
  },
  {
    id: "devil-may-cry",
    title: "Devil May Cry",
    jpTitle: "Debiru Mei Kurai",
    creator: "Adi Shankar (based on Capcom)",
    studio: "Studio Mir",
    year: 2025,
    endYear: null,
    status: "Airing",
    genres: ["Action", "Supernatural", "Dark Fantasy"],
    rating: 8.0,
    seasons: [
      { n: 1, year: 2025, episodes: 8, title: "Season 1" }
    ],
    characters: [
      "Dante", "Lady", "Vergil", "The White Rabbit", "Enzo", "Baines"
    ],
    synopsis: "A wisecracking, demon-hunting mercenary for hire is dragged into a war between the human and demon worlds — one that runs straight through his own half-demon bloodline.",
    demographic: "Seinen",
    source: { type: "Original", author: "Based on Capcom's Devil May Cry", publisher: "Netflix Original" },
    openingTheme: { song: "Rollin' (Air Raid Vehicle)", artist: "Limp Bizkit" },
    streaming: ["Netflix"],
    awards: [],
    relatedWorks: ["Devil May Cry (Capcom Video Game Series)"],
    accent: 4
  },
  {
    id: "fragrant-flower",
    title: "The Fragrant Flower Blooms with Dignity",
    jpTitle: "Kaoru Hana wa Rin to Saku",
    creator: "Saka Mikami",
    studio: "CloverWorks",
    year: 2025,
    endYear: null,
    status: "Airing",
    genres: ["Romance", "Slice of Life", "School"],
    rating: 8.0,
    seasons: [
      { n: 1, year: 2025, episodes: 24, title: "Season 1" }
    ],
    characters: [
      "Rintaro Tsumugi", "Kaoruko Waguri", "Subaru Hosokawa", "Ayato Uka", "Shohei Usami"
    ],
    synopsis: "Two neighboring schools despise each other — the brutish boys' academy and the elite girls' school — but a gentle, intimidating-looking boy and a warm girl from the rival side fall quietly, sweetly in love across the divide.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Saka Mikami", publisher: "Kodansha · Weekly Shonen Magazine" },
    openingTheme: { song: "Manten", artist: "Tatsuya Kitani" },
    streaming: ["Netflix", "Crunchyroll"],
    awards: [],
    relatedWorks: [],
    accent: 140,
    collections: ["underrated"]
  },
  {
    id: "black-clover",
    title: "Black Clover",
    jpTitle: "Burakku Kurōbā",
    creator: "Yuki Tabata",
    studio: "Pierrot",
    year: 2017,
    endYear: 2021,
    status: "Finished",
    genres: ["Action", "Fantasy", "Comedy"],
    rating: 7.8,
    seasons: [
      { n: 1, year: 2017, episodes: 170, title: "TV Series" },
      { n: 0, year: 2023, episodes: 1, title: "Sword of the Wizard King (Film)" }
    ],
    characters: [
      "Asta", "Yuno", "Noelle Silva", "Yami Sukehiro", "Charmy Pappitson",
      "Luck Voltia", "Magna Swing", "Finral Roulacase", "Mereoleona Vermillion",
      "Julius Novachrono", "Secre Swallowtail"
    ],
    synopsis: "Born with no magic in a world where it's everything, an orphan with a deafening voice and a five-leaf grimoire claws his way toward an impossible dream: becoming the Wizard King.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Yuki Tabata", publisher: "Shueisha · Weekly Shonen Jump" },
    openingTheme: { song: "Haruka Mirai", artist: "Kankaku Piero" },
    streaming: ["Crunchyroll", "Hulu", "Netflix"],
    awards: [],
    relatedWorks: ["Black Clover: Sword of the Wizard King (2023 Film)"],
    accent: 95
  },
  {
    id: "blue-lock",
    title: "Blue Lock",
    jpTitle: "Burū Rokku",
    creator: "Muneyuki Kaneshiro / Yusuke Nomura",
    studio: "Eight Bit",
    year: 2022,
    endYear: null,
    status: "Airing",
    genres: ["Sports", "Drama", "Thriller"],
    rating: 8.2,
    seasons: [
      { n: 1, year: 2022, episodes: 24, title: "Season 1" },
      { n: 0, year: 2024, episodes: 1, title: "Episode Nagi (Film)" },
      { n: 2, year: 2024, episodes: 14, title: "Season 2" }
    ],
    characters: [
      "Yoichi Isagi", "Meguru Bachira", "Rensuke Kunigami", "Hyoma Chigiri",
      "Seishiro Nagi", "Reo Mikage", "Rin Itoshi", "Sae Itoshi",
      "Jinpachi Ego", "Shoei Barou"
    ],
    synopsis: "To finally win a World Cup, Japan locks 300 of its best teenage strikers in a brutal facility built to forge the most selfish, lethal egoist on the planet. Only one can come out the world's greatest striker.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Muneyuki Kaneshiro · Yusuke Nomura", publisher: "Kodansha · Weekly Shonen Magazine" },
    openingTheme: { song: "Chaos Lips", artist: "UNISON SQUARE GARDEN" },
    streaming: ["Crunchyroll", "Netflix"],
    awards: ["Kodansha Manga Award · Shonen (2021)"],
    relatedWorks: ["Blue Lock: Episode Nagi (2024 Film)"],
    accent: 222
  },
  {
    id: "arcane",
    title: "Arcane",
    jpTitle: "Ākein",
    creator: "Christian Linke / Alex Yee (Riot Games)",
    studio: "Fortiche",
    year: 2021,
    endYear: 2024,
    status: "Finished",
    genres: ["Action", "Drama", "Steampunk", "Fantasy"],
    rating: 9.0,
    seasons: [
      { n: 1, year: 2021, episodes: 9, title: "Act I–III" },
      { n: 2, year: 2024, episodes: 9, title: "Season 2" }
    ],
    characters: [
      "Vi", "Jinx", "Caitlyn", "Jayce", "Viktor", "Heimerdinger",
      "Silco", "Ekko", "Mel Medarda", "Ambessa", "Singed", "Vander"
    ],
    synopsis: "Two orphaned sisters are torn to opposite sides of a brewing war between a gleaming utopia and the oppressed undercity beneath it — as a volatile new technology threatens to shatter both.",
    demographic: "Seinen",
    source: { type: "Original", author: "Based on League of Legends · Riot Games", publisher: "Netflix Original" },
    openingTheme: { song: "Enemy", artist: "Imagine Dragons & JID" },
    streaming: ["Netflix"],
    awards: ["Emmy · Outstanding Animated Program (2022)", "Annie Awards · Best TV/Media – Mature (2022)"],
    relatedWorks: ["League of Legends (Video Game)"],
    accent: 268,
    collections: ["not-anime"]
  },
  {
    id: "sakamoto-days",
    title: "Sakamoto Days",
    jpTitle: "Sakamoto Deizu",
    creator: "Yuto Suzuki",
    studio: "TMS Entertainment",
    year: 2025,
    endYear: null,
    status: "Airing",
    genres: ["Action", "Comedy"],
    rating: 7.8,
    seasons: [
      { n: 1, year: 2025, episodes: 11, title: "Part 1" },
      { n: 2, year: 2025, episodes: 11, title: "Part 2" }
    ],
    characters: [
      "Taro Sakamoto", "Shin Asakura", "Lu Shaotang", "Heisuke Mashimo",
      "Nagumo", "Osaragi", "Slur", "Gaku"
    ],
    synopsis: "The greatest hitman alive retired, got married, got fat, and opened a corner store. When his violent past comes collecting, the chubby family man must protect his quiet new life — without breaking his no-killing vow.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Yuto Suzuki", publisher: "Shueisha · Weekly Shonen Jump" },
    openingTheme: { song: "Hashi", artist: "Vaundy" },
    streaming: ["Netflix"],
    awards: [],
    relatedWorks: [],
    accent: 210
  },
  {
    id: "eminence-in-shadow",
    title: "The Eminence in Shadow",
    jpTitle: "Kage no Jitsuryokusha ni Naritakute!",
    creator: "Daisuke Aizawa / Tōzai",
    studio: "Nexus",
    year: 2022,
    endYear: null,
    status: "Airing",
    genres: ["Isekai", "Action", "Comedy", "Fantasy"],
    rating: 8.2,
    seasons: [
      { n: 1, year: 2022, episodes: 20, title: "Season 1" },
      { n: 2, year: 2023, episodes: 12, title: "Season 2" }
    ],
    characters: [
      "Cid Kagenou", "Alpha", "Beta", "Gamma", "Delta", "Epsilon",
      "Zeta", "Eta", "Alexia Midgar", "Rose Oriana", "Claire Kagenou"
    ],
    synopsis: "Obsessed with being the mastermind lurking in the shadows, a reincarnated boy invents a fake evil cult to roleplay as its hidden leader — never realizing the conspiracy he made up is, terrifyingly, completely real.",
    demographic: "Shonen",
    source: { type: "Light Novel", author: "Daisuke Aizawa", publisher: "Kadokawa · Enterbrain" },
    openingTheme: { song: "Highest", artist: "OxT" },
    streaming: ["HiDive", "Crunchyroll"],
    awards: [],
    relatedWorks: ["The Eminence in Shadow: Master of Garden (Game)"],
    accent: 255
  },
  {
    id: "blue-box",
    title: "Blue Box",
    jpTitle: "Ao no Hako",
    creator: "Kouji Miura",
    studio: "Telecom Animation Film",
    year: 2024,
    endYear: null,
    status: "Airing",
    genres: ["Romance", "Sports", "School", "Drama"],
    rating: 8.1,
    seasons: [
      { n: 1, year: 2024, episodes: 25, title: "Season 1" }
    ],
    characters: [
      "Taiki Inomata", "Chinatsu Kano", "Hina Chono", "Kyo Kasahara", "Ayame Haryu"
    ],
    synopsis: "A badminton player nurses a quiet crush on the basketball star a year above him — until she moves into his house, and the line between teammate, housemate, and first love blurs entirely.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Kouji Miura", publisher: "Shueisha · Weekly Shonen Jump" },
    openingTheme: { song: "Same Blue", artist: "Official HIGE DANdism" },
    streaming: ["Netflix"],
    awards: [],
    relatedWorks: [],
    accent: 205,
    collections: ["underrated"]
  },
  {
    id: "komi-cant-communicate",
    title: "Komi Can't Communicate",
    jpTitle: "Komi-san wa, Komyushō desu",
    creator: "Tomohito Oda",
    studio: "OLM",
    year: 2021,
    endYear: 2022,
    status: "Finished",
    genres: ["Comedy", "Romance", "Slice of Life", "School"],
    rating: 7.9,
    seasons: [
      { n: 1, year: 2021, episodes: 12, title: "Season 1" },
      { n: 2, year: 2022, episodes: 12, title: "Season 2" }
    ],
    characters: [
      "Shoko Komi", "Hitohito Tadano", "Najimi Osana", "Himiko Agari",
      "Ren Yamai", "Makoto Katai", "Omoharu Nakanaka", "Kaede Otori"
    ],
    synopsis: "Admired as a serene, beautiful 'goddess,' a girl is secretly crippled by a communication disorder so severe she can barely speak. Her unremarkable seatmate vows to help her make 100 friends.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Tomohito Oda", publisher: "Shogakukan · Weekly Shonen Sunday" },
    openingTheme: { song: "Cinderella", artist: "CIDERGIRL" },
    streaming: ["Netflix"],
    awards: ["Shogakukan Manga Award · Shonen (2022)"],
    relatedWorks: [],
    accent: 248
  },
  {
    id: "high-rise-invasion",
    title: "High-Rise Invasion",
    jpTitle: "Tenkū Shinpan",
    creator: "Tsuina Miura / Takahiro Oba",
    studio: "Zero-G",
    year: 2021,
    endYear: 2021,
    status: "Finished",
    genres: ["Action", "Horror", "Psychological", "Survival"],
    rating: 6.9,
    seasons: [
      { n: 1, year: 2021, episodes: 12, title: "Season 1" }
    ],
    characters: [
      "Yuri Honjo", "Rika Honjo", "Sniper Mask", "Mayuko Nise",
      "Kuon Shinzaki", "Aikawa"
    ],
    synopsis: "Trapped on a sealed world of skyscrapers linked by sky-bridges, a high-schooler must survive masked killers driving victims to suicide — and uncover the god-game pulling everyone's strings.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Tsuina Miura · Takahiro Oba", publisher: "Kodansha · Manga Box" },
    openingTheme: { song: "HONOR", artist: "Coldrain" },
    streaming: ["Netflix"],
    awards: [],
    relatedWorks: [],
    accent: 190,
    collections: ["underrated"]
  },
  {
    id: "dandadan",
    title: "Dandadan",
    jpTitle: "Dandadan",
    creator: "Yukinobu Tatsu",
    studio: "Science SARU",
    year: 2024,
    endYear: null,
    status: "Airing",
    genres: ["Action", "Supernatural", "Comedy", "Sci-Fi", "Romance"],
    rating: 8.5,
    seasons: [
      { n: 1, year: 2024, episodes: 12, title: "Season 1" },
      { n: 2, year: 2025, episodes: 12, title: "Season 2" }
    ],
    characters: [
      "Momo Ayase", "Ken Takakura", "Turbo Granny", "Aira Shiratori",
      "Jin Enjoji", "Seiko Ayase", "Acrobatic Silky", "Evil Eye"
    ],
    synopsis: "An occult-obsessed boy and a ghost-believing girl each bet the other is wrong — only to discover aliens AND spirits are both very real. Now bound by a curse, they fight the paranormal together, badly.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Yukinobu Tatsu", publisher: "Shueisha · Shonen Jump+" },
    openingTheme: { song: "Otonoke", artist: "Creepy Nuts" },
    streaming: ["Crunchyroll", "Netflix"],
    awards: ["Harvey Award · Best Manga nominee (2023)"],
    relatedWorks: [],
    accent: 300
  },
  {
    id: "shitpiece",
    title: "Shitpiece",
    jpTitle: "Wan Pīsu",
    creator: "Eiichiro Oda",
    studio: "Toei Animation",
    year: 1999,
    endYear: null,
    status: "Airing",
    genres: ["Action", "Adventure", "Fantasy", "Comedy"],
    rating: 8.7,
    seasons: [
      { n: 1, year: 1999, episodes: 61, title: "East Blue Saga" },
      { n: 2, year: 2001, episodes: 74, title: "Alabasta Saga" },
      { n: 3, year: 2006, episodes: 117, title: "Water 7 / Enies Lobby" },
      { n: 4, year: 2009, episodes: 96, title: "Summit War (Marineford)" },
      { n: 5, year: 2014, episodes: 118, title: "Dressrosa Saga" },
      { n: 6, year: 2019, episodes: 195, title: "Wano Country Saga" }
    ],
    characters: [
      "Monkey D. Luffy", "Roronoa Zoro", "Nami", "Usopp", "Sanji",
      "Tony Tony Chopper", "Nico Robin", "Franky", "Brook", "Jinbe",
      "Shanks", "Trafalgar Law", "Portgas D. Ace", "Buggy"
    ],
    synopsis: "A rubber-bodied optimist sets sail with a ragtag crew to find the world's greatest treasure and become King of the Pirates — across an ocean of islands, marines, warlords, and an empire built on a buried truth.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Eiichiro Oda", publisher: "Shueisha · Weekly Shonen Jump" },
    openingTheme: { song: "We Are!", artist: "Hiroshi Kitadani" },
    streaming: ["Crunchyroll", "Netflix", "Hulu"],
    awards: ["Guinness World Record · Most copies published for the same comic by a single author", "Eisner Award nominee"],
    relatedWorks: ["One Piece Film: Red (2022)", "One Piece: Stampede (2019)", "One Piece (2023 Live-Action)"],
    accent: 42
  },
  {
    id: "solo-leveling",
    title: "Solo Leveling",
    jpTitle: "Ore dake Level Up na Ken",
    creator: "Chugong / DUBU (REDICE Studio)",
    studio: "A-1 Pictures",
    year: 2024,
    endYear: null,
    status: "Airing",
    genres: ["Action", "Fantasy", "Adventure"],
    rating: 8.2,
    seasons: [
      { n: 1, year: 2024, episodes: 12, title: "Season 1" },
      { n: 2, year: 2025, episodes: 13, title: "Arise from the Shadow" }
    ],
    characters: [
      "Sung Jinwoo", "Cha Hae-In", "Go Gun-Hee", "Yoo Jin-Ho",
      "Baek Yoon-Ho", "Igris", "Beru", "Thomas Andre"
    ],
    synopsis: "In a world where gates spill monsters and hunters fight them, the weakest E-rank hunter alive gains a mysterious System that lets him level up without limit — climbing from worthless to the most powerful being on Earth.",
    demographic: "Shonen",
    source: { type: "Web Novel / Manhwa", author: "Chugong", publisher: "D&C Media · KakaoPage" },
    openingTheme: { song: "LEveL", artist: "SawanoHiroyuki[nZk]:TOMORROW X TOGETHER" },
    streaming: ["Crunchyroll"],
    awards: ["Crunchyroll · Best New Series (2025)"],
    relatedWorks: ["Solo Leveling: ReAwakening (2024 Film)"],
    accent: 220,
    collections: []
  },
  {
    id: "oshi-no-ko",
    title: "Oshi no Ko",
    jpTitle: "Oshi no Ko",
    creator: "Aka Akasaka / Mengo Yokoyari",
    studio: "Doga Kobo",
    year: 2023,
    endYear: 2025,
    status: "Finished",
    genres: ["Drama", "Mystery", "Supernatural", "Psychological"],
    rating: 8.4,
    seasons: [
      { n: 1, year: 2023, episodes: 11, title: "Season 1" },
      { n: 2, year: 2024, episodes: 13, title: "Season 2" },
      { n: 3, year: 2025, episodes: 12, title: "Season 3" }
    ],
    characters: [
      "Aqua Hoshino", "Ruby Hoshino", "Ai Hoshino", "Kana Arima",
      "Akane Kurokawa", "Mem-cho", "Gorou Amamiya", "Hikaru Kamiki"
    ],
    synopsis: "A small-town doctor is reborn as the son of his favorite idol — and when tragedy strikes her shining career, he's left chasing the truth behind the glittering, ruthless machine of show business.",
    demographic: "Seinen",
    source: { type: "Manga", author: "Aka Akasaka · Mengo Yokoyari", publisher: "Shueisha · Weekly Young Jump" },
    openingTheme: { song: "Idol", artist: "YOASOBI" },
    streaming: ["HiDive", "Hulu"],
    awards: ["Crunchyroll · Best Drama (2024)", "Tezuka Osamu Cultural Prize nominee"],
    relatedWorks: [],
    accent: 350,
    collections: []
  },
  {
    id: "roshidere",
    title: "Alya Sometimes Hides Her Feelings in Russian",
    jpTitle: "Tokidoki Bosotto Roshia-go de Dereru Tonari no Alya-san",
    creator: "Sunsunsun / Momoco",
    studio: "Doga Kobo",
    year: 2024,
    endYear: null,
    status: "Airing",
    genres: ["Romance", "Comedy", "School"],
    rating: 7.6,
    seasons: [
      { n: 1, year: 2024, episodes: 12, title: "Season 1" }
    ],
    characters: [
      "Alisa Mikhailovna Kujou", "Masachika Kuze", "Yuki Suou",
      "Maria Mikhailovna Kujou", "Ayano Kimishima", "Touya Kenzaki"
    ],
    synopsis: "A gifted but lazy boy sits beside the school's aloof half-Russian beauty — who keeps murmuring sweet, flustered things in Russian, never guessing he understands every word.",
    demographic: "Shonen",
    source: { type: "Light Novel", author: "Sunsunsun", publisher: "Kadokawa · Sneaker Bunko" },
    openingTheme: { song: "Algorithm", artist: "Sumire Uesaka" },
    streaming: ["Crunchyroll"],
    awards: [],
    relatedWorks: [],
    accent: 235,
    collections: ["romance"]
  },
  {
    id: "shiki",
    title: "Shiki",
    jpTitle: "Shiki",
    creator: "Fuyumi Ono / Ryu Fujisaki",
    studio: "Daume",
    year: 2010,
    endYear: 2011,
    status: "Finished",
    genres: ["Horror", "Mystery", "Supernatural", "Thriller"],
    rating: 7.6,
    seasons: [
      { n: 1, year: 2010, episodes: 22, title: "Season 1" },
      { n: 0, year: 2011, episodes: 2, title: "Specials" }
    ],
    characters: [
      "Natsuno Yuuki", "Toshio Ozaki", "Megumi Shimizu", "Sunako Kirishiki",
      "Seishin Muroi", "Tatsumi", "Kaori Tanaka", "Akira Tanaka"
    ],
    synopsis: "A string of mysterious deaths grips a sweltering, isolated mountain village the summer a strange family moves into the old mansion — and the local doctor slowly realizes the dead aren't staying dead.",
    demographic: "Seinen",
    source: { type: "Novel / Manga", author: "Fuyumi Ono", publisher: "Shueisha · Jump SQ" },
    openingTheme: { song: "Kanashimi no Hate", artist: "Buck-Tick" },
    streaming: ["Crunchyroll", "HiDive"],
    awards: [],
    relatedWorks: [],
    accent: 5,
    collections: ["underrated"]
  },
  {
    id: "call-of-the-night",
    title: "Call of the Night",
    jpTitle: "Yofukashi no Uta",
    creator: "Kotoyama",
    studio: "LIDENFILMS",
    year: 2022,
    endYear: null,
    status: "Airing",
    genres: ["Romance", "Supernatural", "Comedy", "Slice of Life"],
    rating: 7.8,
    seasons: [
      { n: 1, year: 2022, episodes: 13, title: "Season 1" },
      { n: 2, year: 2025, episodes: 12, title: "Season 2" }
    ],
    characters: [
      "Ko Yamori", "Nazuna Nanakusa", "Akira Asai", "Seri Kikyo",
      "Hatsuka Suzushiro", "Anko Uguisu", "Kabura Honda"
    ],
    synopsis: "A sleepless middle-schooler who's dropped out of life wanders the night and meets a free-spirited vampire — who offers to turn him, on one condition: he has to fall in love with her first.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Kotoyama", publisher: "Shogakukan · Weekly Shonen Sunday" },
    openingTheme: { song: "Daten", artist: "Creepy Nuts" },
    streaming: ["HiDive", "Hulu"],
    awards: [],
    relatedWorks: [],
    accent: 272,
    collections: ["romance"]
  },
  {
    id: "classroom-elite",
    title: "Classroom of the Elite",
    jpTitle: "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e",
    creator: "Syougo Kinugasa / Tomoseshunsaku",
    studio: "Lerche",
    year: 2017,
    endYear: 2024,
    status: "Finished",
    genres: ["Drama", "Psychological", "School", "Thriller"],
    rating: 7.7,
    seasons: [
      { n: 1, year: 2017, episodes: 12, title: "Year 1" },
      { n: 2, year: 2022, episodes: 13, title: "2nd Season" },
      { n: 3, year: 2024, episodes: 13, title: "3rd Season" }
    ],
    characters: [
      "Kiyotaka Ayanokoji", "Suzune Horikita", "Kikyo Kushida",
      "Arisu Sakayanagi", "Kakeru Ryuen", "Honami Ichinose", "Airi Sakura"
    ],
    synopsis: "At an elite academy where merit is the only currency and classes are ranked against each other, a deliberately unremarkable student hides a calculating mind — quietly steering the brutal social games from behind a mask of indifference.",
    demographic: "Shonen",
    source: { type: "Light Novel", author: "Syougo Kinugasa", publisher: "Media Factory · MF Bunko J" },
    openingTheme: { song: "Caribou", artist: "ZAQ" },
    streaming: ["Crunchyroll", "HiDive"],
    awards: [],
    relatedWorks: [],
    accent: 198,
    collections: []
  },
  {
    id: "darling-franxx",
    title: "Darling in the Franxx",
    jpTitle: "Darling in the Franxx",
    creator: "Code:000 (Trigger × A-1 Pictures)",
    studio: "Trigger / CloverWorks",
    year: 2018,
    endYear: 2018,
    status: "Finished",
    genres: ["Sci-Fi", "Mecha", "Romance", "Drama"],
    rating: 7.2,
    seasons: [
      { n: 1, year: 2018, episodes: 24, title: "Season 1" }
    ],
    characters: [
      "Hiro", "Zero Two", "Ichigo", "Goro", "Miku",
      "Zorome", "Kokoro", "Mitsuru", "Dr. Franxx"
    ],
    synopsis: "In a dying world where children pilot giant mechs in male-female pairs, a washed-out boy is matched with a fearsome horned girl branded a 'partner killer' — and the two cling to each other against a future that wants to erase them.",
    demographic: "Seinen",
    source: { type: "Original", author: "Studio Trigger × A-1 Pictures", publisher: "Aniplex" },
    openingTheme: { song: "Kiss of Death", artist: "Mika Nakashima × Hyde" },
    streaming: ["Crunchyroll", "Hulu"],
    awards: [],
    relatedWorks: [],
    accent: 352,
    collections: ["romance"]
  },
  {
    id: "second-prettiest",
    title: "I Made Friends with the Second Prettiest Girl in My Class",
    jpTitle: "Class de 2-banme ni Kawaii Onna no Ko to Tomodachi ni Natta",
    creator: "Taku Kawamura / Buta Bakku",
    studio: "TBA",
    year: 2026,
    endYear: null,
    status: "Upcoming",
    genres: ["Romance", "Comedy", "School", "Slice of Life"],
    rating: null,
    seasons: [
      { n: 1, year: 2026, episodes: 12, title: "Season 1" }
    ],
    characters: [
      "Tomohiro Maeshima", "Akari Mitsutomi", "Reira Komichi", "Yuzuki"
    ],
    synopsis: "An ordinary boy strikes up an unlikely friendship with the second-prettiest girl in class — the one in the most popular girl's shadow — and their easy, teasing closeness quietly tips toward something more.",
    demographic: "Shonen",
    source: { type: "Light Novel", author: "Taku Kawamura", publisher: "Shogakukan · Gagaga Bunko" },
    openingTheme: null,
    streaming: ["TBA"],
    awards: [],
    relatedWorks: [],
    accent: 318,
    collections: ["romance"]
  },
  {
    id: "oregairu",
    title: "My Teen Romantic Comedy SNAFU",
    jpTitle: "Yahari Ore no Seishun Love Comedy wa Machigatteiru.",
    creator: "Wataru Watari / Ponkan8",
    studio: "Brain's Base / feel.",
    year: 2013,
    endYear: 2020,
    status: "Finished",
    genres: ["Romance", "Comedy", "Drama", "School"],
    rating: 8.0,
    seasons: [
      { n: 1, year: 2013, episodes: 13, title: "Season 1" },
      { n: 2, year: 2015, episodes: 13, title: "Zoku" },
      { n: 3, year: 2020, episodes: 12, title: "Climax!" }
    ],
    characters: [
      "Hachiman Hikigaya", "Yukino Yukinoshita", "Yui Yuigahama",
      "Iroha Isshiki", "Saki Kawasaki", "Hayato Hayama", "Komachi Hikigaya"
    ],
    synopsis: "A cynical loner who's sworn off friendship is sentenced to a 'Service Club' run by the school's most brilliant, prickly girl — where solving other people's problems forces him to confront the genuine thing he can't logic his way out of.",
    demographic: "Shonen",
    source: { type: "Light Novel", author: "Wataru Watari", publisher: "Shogakukan · Gagaga Bunko" },
    openingTheme: { song: "Yukitoki", artist: "Nagi Yanagi" },
    streaming: ["Crunchyroll", "HiDive"],
    awards: [],
    relatedWorks: [],
    accent: 245,
    collections: ["romance", "underrated"]
  },
  {
    id: "odd-taxi",
    title: "Odd Taxi",
    jpTitle: "Oddo Takushī",
    creator: "Kazuya Konomoto / P.I.C.S.",
    studio: "OLM / P.I.C.S.",
    year: 2021,
    endYear: 2021,
    status: "Finished",
    genres: ["Mystery", "Drama", "Psychological"],
    rating: 8.6,
    seasons: [
      { n: 1, year: 2021, episodes: 13, title: "Season 1" }
    ],
    characters: [
      "Hiroshi Odokawa", "Shirakawa", "Eiji Kakihana",
      "Kabasawa", "Dobu", "Yano", "Goriki"
    ],
    synopsis: "A walrus-faced, deadpan taxi driver ferries a city of talking animals through their nightly troubles — until the fares he picks up tangle him in a missing-girl case far darker than his quiet life let on.",
    demographic: "Seinen",
    source: { type: "Original", author: "Kazuya Konomoto", publisher: "P.I.C.S. / OLM" },
    openingTheme: { song: "ODDTAXI", artist: "Skirt × PUNPEE" },
    streaming: ["Crunchyroll", "HiDive"],
    awards: ["Tokyo Anime Award · Best TV Anime (2022)"],
    relatedWorks: ["Odd Taxi: In the Woods (2022 Film)"],
    accent: 40,
    collections: ["underrated"]
  },
  {
    id: "eighty-six",
    title: "86 EIGHTY-SIX",
    jpTitle: "Hachiroku",
    creator: "Asato Asato / Shirabii",
    studio: "A-1 Pictures",
    year: 2021,
    endYear: 2022,
    status: "Finished",
    genres: ["Sci-Fi", "Mecha", "Drama", "Military"],
    rating: 8.3,
    seasons: [
      { n: 1, year: 2021, episodes: 11, title: "Season 1" },
      { n: 2, year: 2021, episodes: 12, title: "2nd Cour" }
    ],
    characters: [
      "Shinei Nouzen", "Vladilena Milizé", "Raiden Shuga", "Theoto Rikka",
      "Anju Emma", "Kurena Kukumila", "Frederica Rosenfort"
    ],
    synopsis: "A nation insists its war is bloodless — fought by unmanned drones. The truth: a persecuted people, declared non-human, die in those machines, commanded by a far-off handler who refuses to look away from their names.",
    demographic: "Shonen",
    source: { type: "Light Novel", author: "Asato Asato", publisher: "ASCII Media Works · Dengeki Bunko" },
    openingTheme: { song: "3-pun 29-byou", artist: "Hitorie" },
    streaming: ["Crunchyroll"],
    awards: [],
    relatedWorks: [],
    accent: 6,
    collections: []
  },
  {
    id: "heavenly-delusion",
    title: "Heavenly Delusion",
    jpTitle: "Tengoku Daimakyō",
    creator: "Masakazu Ishiguro",
    studio: "Production I.G",
    year: 2023,
    endYear: null,
    status: "Airing",
    genres: ["Sci-Fi", "Adventure", "Mystery", "Post-Apocalyptic"],
    rating: 7.9,
    seasons: [
      { n: 1, year: 2023, episodes: 13, title: "Season 1" }
    ],
    characters: [
      "Maru", "Kiruko", "Tokio", "Mimihime", "Kuku", "Dr. Usami", "Shiro"
    ],
    synopsis: "Two drifters cross a ruined Japan searching for a place called 'Heaven,' while behind sealed walls a group of children are raised in an idyllic facility — and the secret binding the two worlds is monstrous.",
    demographic: "Seinen",
    source: { type: "Manga", author: "Masakazu Ishiguro", publisher: "Kodansha · Monthly Afternoon" },
    openingTheme: { song: "Innocent Arrogance", artist: "BiSH" },
    streaming: ["Hulu", "Disney+"],
    awards: ["Eisner Award · Best U.S. Edition of International Material – Asia (2019)"],
    relatedWorks: [],
    accent: 168,
    collections: []
  },
  {
    id: "vinland-saga",
    title: "Vinland Saga",
    jpTitle: "Vinrando Saga",
    creator: "Makoto Yukimura",
    studio: "Wit Studio / MAPPA",
    year: 2019,
    endYear: null,
    status: "Airing",
    genres: ["Action", "Adventure", "Drama", "Historical"],
    rating: 8.8,
    seasons: [
      { n: 1, year: 2019, episodes: 24, title: "Season 1" },
      { n: 2, year: 2023, episodes: 24, title: "Season 2" }
    ],
    characters: [
      "Thorfinn", "Askeladd", "Thorkell", "Canute", "Einar",
      "Thors", "Bjorn", "Snake"
    ],
    synopsis: "A boy who watched his father die at the hands of a mercenary spends his youth chasing vengeance through the brutal Viking world — until slavery and ruin force him to ask whether there's any worth beyond the killing.",
    demographic: "Seinen",
    source: { type: "Manga", author: "Makoto Yukimura", publisher: "Kodansha · Monthly Afternoon" },
    openingTheme: { song: "MUKANJYO", artist: "Survive Said The Prophet" },
    streaming: ["Crunchyroll", "Netflix"],
    awards: ["Kodansha Manga Award · General (2012)"],
    relatedWorks: [],
    accent: 202,
    collections: []
  },
  {
    id: "pokemon",
    title: "Pokémon",
    jpTitle: "Poketto Monsutā",
    creator: "Satoshi Tajiri / Ken Sugimori",
    studio: "OLM",
    year: 1997,
    endYear: null,
    status: "Airing",
    genres: ["Adventure", "Fantasy", "Comedy"],
    rating: 7.4,
    seasons: [
      { n: 1, year: 1997, episodes: 276, title: "Original Series" },
      { n: 2, year: 2002, episodes: 191, title: "Advanced Generation" },
      { n: 3, year: 2006, episodes: 192, title: "Diamond & Pearl" },
      { n: 4, year: 2010, episodes: 142, title: "Best Wishes!" },
      { n: 5, year: 2013, episodes: 140, title: "XY" },
      { n: 6, year: 2016, episodes: 146, title: "Sun & Moon" },
      { n: 7, year: 2019, episodes: 147, title: "Journeys" }
    ],
    characters: [
      "Ash Ketchum", "Pikachu", "Misty", "Brock", "Jessie",
      "James", "Meowth", "Professor Oak", "Gary Oak"
    ],
    synopsis: "A ten-year-old sets out from home with an electric mouse who won't stay in its ball, determined to catch every creature he meets and become the world's greatest Pokémon Master.",
    demographic: "Kodomo",
    source: { type: "Video Game", author: "Based on Nintendo / Game Freak", publisher: "The Pokémon Company" },
    openingTheme: { song: "Mezase Pokémon Master", artist: "Rica Matsumoto" },
    streaming: ["Netflix", "Hulu"],
    awards: ["Guinness World Record · Longest-running animated TV series based on a video game"],
    relatedWorks: ["Pokémon: The First Movie (1998)", "Pokémon Detective Pikachu (2019)"],
    accent: 50,
    collections: ["not-anime"]
  },
  {
    id: "rick-and-morty",
    title: "Rick and Morty",
    jpTitle: "Rikku to Mōti",
    creator: "Justin Roiland / Dan Harmon",
    studio: "Adult Swim / Williams Street",
    year: 2013,
    endYear: null,
    status: "Airing",
    genres: ["Sci-Fi", "Comedy", "Adventure"],
    rating: 8.1,
    seasons: [
      { n: 1, year: 2013, episodes: 11, title: "Season 1" },
      { n: 2, year: 2015, episodes: 10, title: "Season 2" },
      { n: 3, year: 2017, episodes: 10, title: "Season 3" },
      { n: 4, year: 2019, episodes: 10, title: "Season 4" },
      { n: 5, year: 2021, episodes: 10, title: "Season 5" },
      { n: 6, year: 2022, episodes: 10, title: "Season 6" },
      { n: 7, year: 2023, episodes: 10, title: "Season 7" }
    ],
    characters: [
      "Rick Sanchez", "Morty Smith", "Summer Smith", "Beth Smith",
      "Jerry Smith", "Mr. Poopybutthole", "Birdperson"
    ],
    synopsis: "A nihilistic genius scientist drags his anxious grandson across infinite dimensions on increasingly catastrophic adventures — where the real damage is rarely the aliens and almost always the family.",
    demographic: "Western Animation",
    source: { type: "Original", author: "Justin Roiland · Dan Harmon", publisher: "Adult Swim" },
    openingTheme: { song: "Rick and Morty Theme", artist: "Ryan Elder" },
    streaming: ["Max", "Hulu"],
    awards: ["Emmy · Outstanding Animated Program (2018, 2020)"],
    relatedWorks: ["Solar Opposites", "Vindicators (Shorts)"],
    accent: 152,
    collections: ["not-anime"]
  },
  {
    id: "family-guy",
    title: "Family Guy",
    jpTitle: "Famirī Gai",
    creator: "Seth MacFarlane",
    studio: "Fuzzy Door / 20th Television Animation",
    year: 1999,
    endYear: null,
    status: "Airing",
    genres: ["Comedy"],
    rating: 7.0,
    seasons: [
      { n: 1, year: 1999, episodes: 7, title: "Season 1" },
      { n: 2, year: 2000, episodes: 21, title: "Season 2" },
      { n: 3, year: 2001, episodes: 22, title: "Season 3" },
      { n: 4, year: 2005, episodes: 30, title: "Season 4" }
    ],
    characters: [
      "Peter Griffin", "Lois Griffin", "Stewie Griffin", "Brian Griffin",
      "Chris Griffin", "Meg Griffin", "Glenn Quagmire"
    ],
    synopsis: "A bumbling, well-meaning oaf, his long-suffering wife, a martini-sipping talking dog, and a maniacal infant bent on world domination muddle through life in Quahog, Rhode Island — one cutaway gag at a time.",
    demographic: "Western Animation",
    source: { type: "Original", author: "Seth MacFarlane", publisher: "Fox Broadcasting" },
    openingTheme: { song: "Family Guy Theme", artist: "Walter Murphy & Seth MacFarlane" },
    streaming: ["Hulu", "Disney+"],
    awards: ["Emmy · Outstanding Voice-Over Performance"],
    relatedWorks: ["American Dad!", "The Cleveland Show"],
    accent: 212,
    collections: ["not-anime"]
  },
  {
    id: "avatar-tla",
    title: "Avatar: The Last Airbender",
    jpTitle: "Avatā: Densetsu no Shōnen Aang",
    creator: "Michael Dante DiMartino / Bryan Konietzko",
    studio: "Nickelodeon Animation Studio",
    year: 2005,
    endYear: 2008,
    status: "Finished",
    genres: ["Adventure", "Fantasy", "Action", "Drama"],
    rating: 9.2,
    seasons: [
      { n: 1, year: 2005, episodes: 20, title: "Book One: Water" },
      { n: 2, year: 2006, episodes: 20, title: "Book Two: Earth" },
      { n: 3, year: 2007, episodes: 21, title: "Book Three: Fire" }
    ],
    characters: [
      "Aang", "Katara", "Sokka", "Toph Beifong", "Zuko",
      "Iroh", "Azula", "Appa", "Momo"
    ],
    synopsis: "In a world where benders command the four elements, a 12-year-old boy wakes from a century in the ice as the last Avatar — the only one who can master all four and end a war the Fire Nation is winning.",
    demographic: "Western Animation",
    source: { type: "Original", author: "DiMartino · Konietzko", publisher: "Nickelodeon" },
    openingTheme: { song: "Avatar Main Theme", artist: "Jeremy Zuckerman" },
    streaming: ["Netflix", "Paramount+"],
    awards: ["Annie Award · Best Animated Television Production (2007)", "Peabody Award (2008)"],
    relatedWorks: ["The Legend of Korra", "Avatar (2024 Live-Action)"],
    accent: 32,
    collections: ["not-anime"]
  },
  {
    id: "castlevania",
    title: "Castlevania",
    jpTitle: "Kyassuruvania",
    creator: "Warren Ellis (based on Konami)",
    studio: "Powerhouse Animation",
    year: 2017,
    endYear: 2021,
    status: "Finished",
    genres: ["Action", "Dark Fantasy", "Horror"],
    rating: 8.3,
    seasons: [
      { n: 1, year: 2017, episodes: 4, title: "Season 1" },
      { n: 2, year: 2018, episodes: 8, title: "Season 2" },
      { n: 3, year: 2020, episodes: 10, title: "Season 3" },
      { n: 4, year: 2021, episodes: 10, title: "Season 4" }
    ],
    characters: [
      "Trevor Belmont", "Sypha Belnades", "Alucard", "Dracula",
      "Isaac", "Hector", "Carmilla", "Lisa Tepes"
    ],
    synopsis: "When grief turns a heartbroken Dracula into a vengeful god of death, a disgraced monster-hunter, a magic-wielding scholar, and the vampire's own half-human son become the unlikely line between humanity and extinction.",
    demographic: "Western Animation",
    source: { type: "Video Game", author: "Based on Konami's Castlevania", publisher: "Netflix Original" },
    openingTheme: { song: "Castlevania Main Theme", artist: "Trevor Morris" },
    streaming: ["Netflix"],
    awards: [],
    relatedWorks: ["Castlevania: Nocturne (2023)"],
    accent: 348,
    collections: ["not-anime"]
  },
  {
    id: "kurokos-basketball",
    title: "Kuroko's Basketball",
    jpTitle: "Kuroko no Basuke",
    creator: "Tadatoshi Fujimaki",
    studio: "Production I.G",
    year: 2012,
    endYear: 2015,
    status: "Finished",
    genres: ["Sports", "School", "Comedy"],
    rating: 8.0,
    seasons: [
      { n: 1, year: 2012, episodes: 25, title: "Season 1" },
      { n: 2, year: 2013, episodes: 25, title: "Season 2" },
      { n: 3, year: 2015, episodes: 25, title: "Season 3" }
    ],
    characters: [
      "Tetsuya Kuroko", "Taiga Kagami", "Daiki Aomine",
      "Ryota Kise", "Shintaro Midorima", "Atsushi Murasakibara",
      "Seijuro Akashi"
    ],
    synopsis: "A famed middle-school team called the Generation of Miracles had a phantom sixth man no one remembers. Now in high school, that invisible playmaker teams with a fiery returnee to topple his former prodigy teammates one by one.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Tadatoshi Fujimaki", publisher: "Shueisha · Weekly Shonen Jump" },
    openingTheme: { song: "Can Do", artist: "GRANRODEO" },
    streaming: ["Crunchyroll", "Netflix"],
    awards: [],
    relatedWorks: ["Kuroko's Basketball: Last Game (2017 Film)"],
    accent: 200
  },
  {
    id: "seven-deadly-sins",
    title: "The Seven Deadly Sins",
    jpTitle: "Nanatsu no Taizai",
    creator: "Nakaba Suzuki",
    studio: "A-1 Pictures / Studio Deen",
    year: 2014,
    endYear: 2021,
    status: "Finished",
    genres: ["Fantasy", "Adventure", "Action"],
    rating: 7.7,
    seasons: [
      { n: 1, year: 2014, episodes: 24, title: "Season 1" },
      { n: 2, year: 2018, episodes: 24, title: "Revival of the Commandments" },
      { n: 3, year: 2019, episodes: 24, title: "Wrath of the Gods" },
      { n: 4, year: 2021, episodes: 24, title: "Dragon's Judgement" }
    ],
    characters: [
      "Meliodas", "Elizabeth Liones", "Ban", "King",
      "Diane", "Gowther", "Merlin", "Escanor"
    ],
    synopsis: "A princess seeks out a band of legendary knights branded as traitors — the Seven Deadly Sins — to reclaim her kingdom from a corrupt order of Holy Knights, only to learn her tavern-keeping ally is far older and far deadlier than he looks.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Nakaba Suzuki", publisher: "Kodansha · Weekly Shonen Magazine" },
    openingTheme: { song: "Netsujo no Spectrum", artist: "Ikimono-gakari" },
    streaming: ["Netflix"],
    awards: ["Kodansha Manga Award · Shonen (2015)"],
    relatedWorks: ["The Seven Deadly Sins: Four Knights of the Apocalypse"],
    accent: 28
  },
  {
    id: "hajime-no-ippo",
    title: "Hajime no Ippo",
    jpTitle: "Hajime no Ippo: The Fighting!",
    creator: "George Morikawa",
    studio: "Madhouse",
    year: 2000,
    endYear: 2014,
    status: "Finished",
    genres: ["Sports", "Drama", "Comedy"],
    rating: 8.7,
    seasons: [
      { n: 1, year: 2000, episodes: 75, title: "The Fighting!" },
      { n: 2, year: 2009, episodes: 26, title: "New Challenger" },
      { n: 3, year: 2013, episodes: 25, title: "Rising" }
    ],
    characters: [
      "Makunouchi Ippo", "Mamoru Takamura", "Genji Kamogawa",
      "Ichiro Miyata", "Masaru Aoki", "Tatsuya Kimura"
    ],
    synopsis: "A bullied, soft-spoken boy who helps his mother run a fishing boat is taken in by a boxing gym, and discovers a devastating punch and a hunger to find out what it means to be strong.",
    demographic: "Shonen",
    source: { type: "Manga", author: "George Morikawa", publisher: "Kodansha · Weekly Shonen Magazine" },
    openingTheme: { song: "Under Star", artist: "Shocking Lemon" },
    streaming: ["Crunchyroll"],
    awards: ["Kodansha Manga Award · Shonen (1991)"],
    relatedWorks: ["Hajime no Ippo: Champion Road", "Hajime no Ippo: Mashiba vs. Kimura"],
    accent: 14
  },
  {
    id: "devilman-crybaby",
    title: "Devilman Crybaby",
    jpTitle: "Devilman: Crybaby",
    creator: "Go Nagai",
    studio: "Science SARU",
    year: 2018,
    endYear: 2018,
    status: "Finished",
    genres: ["Horror", "Supernatural", "Action"],
    rating: 7.7,
    seasons: [
      { n: 1, year: 2018, episodes: 10, title: "Season 1" }
    ],
    characters: [
      "Akira Fudo", "Ryo Asuka", "Miki Makimura",
      "Miko Kuroda", "Moyuru Koda"
    ],
    synopsis: "To fight the demons resurfacing in the modern world, a gentle teenager fuses with one and becomes Devilman — keeping a human heart inside a monster's body, while his enigmatic friend pushes humanity toward apocalypse.",
    demographic: "Seinen",
    source: { type: "Manga", author: "Go Nagai", publisher: "Kodansha · Original 1972 Manga" },
    openingTheme: { song: "Man Human", artist: "Denki Groove" },
    streaming: ["Netflix"],
    awards: ["Annecy / Crunchyroll Anime Awards nominee (2019)"],
    relatedWorks: ["Devilman (1972)", "Cyborg 009 vs Devilman"],
    accent: 350
  },
  {
    id: "mushoku-tensei",
    title: "Mushoku Tensei: Jobless Reincarnation",
    jpTitle: "Mushoku Tensei: Isekai Ittara Honki Dasu",
    creator: "Rifujin na Magonote",
    studio: "Studio Bind",
    year: 2021,
    endYear: 2024,
    status: "Ongoing",
    genres: ["Isekai", "Fantasy", "Adventure"],
    rating: 8.4,
    seasons: [
      { n: 1, year: 2021, episodes: 23, title: "Season 1" },
      { n: 2, year: 2023, episodes: 25, title: "Season 2" }
    ],
    characters: [
      "Rudeus Greyrat", "Roxy Migurdia", "Sylphiette",
      "Eris Boreas Greyrat", "Ghislaine Dedoldia", "Ruijerd Superdia"
    ],
    synopsis: "A jobless recluse dies and is reborn in a magical world as a baby — keeping all his adult memories. Vowing not to waste a second chance, he masters magic from infancy and tries to live a life without regrets.",
    demographic: "Seinen",
    source: { type: "Light Novel", author: "Rifujin na Magonote", publisher: "Media Factory / MF Books" },
    openingTheme: { song: "Tabibito no Uta", artist: "Yuiko Ohara" },
    streaming: ["Crunchyroll", "Hulu"],
    awards: ["Crunchyroll Anime Award nominee (2022)"],
    relatedWorks: ["Mushoku Tensei: Jobless Reincarnation Season 2"],
    accent: 95
  },
  {
    id: "neon-genesis-evangelion",
    title: "Neon Genesis Evangelion",
    jpTitle: "Shin Seiki Evangelion",
    creator: "Hideaki Anno",
    studio: "Gainax / Tatsunoko Production",
    year: 1995,
    endYear: 1996,
    status: "Finished",
    genres: ["Mecha", "Psychological", "Drama"],
    rating: 8.5,
    seasons: [
      { n: 1, year: 1995, episodes: 26, title: "Season 1" }
    ],
    characters: [
      "Shinji Ikari", "Rei Ayanami", "Asuka Langley Soryu",
      "Gendo Ikari", "Misato Katsuragi", "Kaworu Nagisa", "Ritsuko Akagi"
    ],
    synopsis: "A withdrawn boy is summoned by his estranged father to pilot a colossal bio-machine against monstrous beings called Angels — a war that becomes a harrowing descent into trauma, identity, and the terror of being close to other people.",
    demographic: "Seinen",
    source: { type: "Original", author: "Hideaki Anno / Gainax", publisher: "Original Anime" },
    openingTheme: { song: "A Cruel Angel's Thesis", artist: "Yoko Takahashi" },
    streaming: ["Netflix"],
    awards: ["Animage Anime Grand Prix (1996, 1997)"],
    relatedWorks: ["The End of Evangelion (1997)", "Rebuild of Evangelion (2007–2021)"],
    accent: 275
  },
  {
    id: "suzume",
    title: "Suzume",
    jpTitle: "Suzume no Tojimari",
    creator: "Makoto Shinkai",
    studio: "CoMix Wave Films",
    year: 2022,
    endYear: 2022,
    status: "Finished",
    genres: ["Fantasy", "Adventure", "Drama"],
    rating: 8.3,
    seasons: [
      { n: 0, year: 2022, episodes: 1, title: "The Movie" }
    ],
    characters: [
      "Suzume Iwato", "Souta Munakata", "Daijin",
      "Tamaki Iwato", "Serizawa"
    ],
    synopsis: "A teenage girl encounters a young man hunting for ancient doors that unleash disaster across Japan. When he is cursed into a child's chair, she sets off on a road trip to close the doors — and confront the grief she buried as a child.",
    demographic: "General",
    source: { type: "Original", author: "Makoto Shinkai", publisher: "Original Film" },
    openingTheme: { song: "Suzume", artist: "RADWIMPS feat. Toaka" },
    streaming: ["Crunchyroll"],
    awards: ["Berlinale Competition Selection (2023)"],
    relatedWorks: ["Your Name (2016)", "Weathering with You (2019)"],
    accent: 188
  },
  {
    id: "record-of-ragnarok",
    title: "Record of Ragnarok",
    jpTitle: "Shuumatsu no Valkyrie",
    creator: "Shinya Umemura / Takumi Fukui",
    studio: "Graphinica",
    year: 2021,
    endYear: 2023,
    status: "Ongoing",
    genres: ["Action", "Fantasy", "Mythology"],
    rating: 6.7,
    seasons: [
      { n: 1, year: 2021, episodes: 12, title: "Season 1" },
      { n: 2, year: 2023, episodes: 15, title: "Season 2" }
    ],
    characters: [
      "Brunhilde", "Lü Bu", "Thor", "Adam",
      "Poseidon", "Zeus", "Heracles", "Sasaki Kojiro"
    ],
    synopsis: "When the gods vote to wipe out humankind, a Valkyrie proposes one last chance: thirteen one-on-one duels pitting humanity's greatest champions against the deadliest gods of every pantheon, with the survival of the species on the line.",
    demographic: "Seinen",
    source: { type: "Manga", author: "Shinya Umemura · Takumi Fukui · Ajichika", publisher: "Coamix · Monthly Comic Zenon" },
    openingTheme: { song: "KAMINARI", artist: "Maximum the Hormone" },
    streaming: ["Netflix"],
    awards: [],
    relatedWorks: [],
    accent: 48
  },
  {
    id: "tougen-anki",
    title: "Tougen Anki",
    jpTitle: "Tougen Anki",
    creator: "Yura Urushibara",
    studio: "Hibari / Larx Entertainment",
    year: 2025,
    endYear: 2025,
    status: "Ongoing",
    genres: ["Action", "Supernatural", "Fantasy"],
    rating: 7.4,
    seasons: [
      { n: 1, year: 2025, episodes: 24, title: "Season 1" }
    ],
    characters: [
      "Shiki Ichinose", "Jin Kougasaki", "Ushio Kanzaki",
      "Naito Mure", "Homura Houzukibara"
    ],
    synopsis: "A reckless teenager learns his blood carries the legacy of the demon Shuten-doji — descendant of the Oni who once defied the legendary hero Momotaro. Hunted by the hero's bloodline, he enters a school for fellow Oni to master his cursed power.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Yura Urushibara", publisher: "Shueisha · Weekly Shonen Jump" },
    openingTheme: { song: "Tougen Anki Opening", artist: "TBA" },
    streaming: ["Crunchyroll"],
    awards: [],
    relatedWorks: [],
    accent: 0
  },
  {
    id: "the-summer-hikaru-died",
    title: "The Summer Hikaru Died",
    jpTitle: "Hikaru ga Shinda Natsu",
    creator: "Mokumokuren",
    studio: "CygamesPictures",
    year: 2025,
    endYear: 2025,
    status: "Ongoing",
    genres: ["Horror", "Supernatural", "Mystery"],
    rating: 7.9,
    seasons: [
      { n: 1, year: 2025, episodes: 12, title: "Season 1" }
    ],
    characters: [
      "Yoshiki Tsujinaka", "Hikaru Indo", "Asako Tabata",
      "Kurebayashi", "Rie Kurita"
    ],
    synopsis: "In a remote mountain village, a boy realizes his lifelong best friend Hikaru is no longer human — something else is wearing his face. Unable to let go, he chooses to keep the thing pretending to be Hikaru close, whatever the cost.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Mokumokuren", publisher: "Kadokawa · Young Ace Up" },
    openingTheme: { song: "Saigo no Hanabi", artist: "Vaundy" },
    streaming: ["Netflix"],
    awards: ["Manga Taisho nominee (2023)"],
    relatedWorks: [],
    accent: 158
  },
  {
    id: "baki",
    title: "Baki",
    jpTitle: "Baki the Grappler",
    creator: "Keisuke Itagaki",
    studio: "TMS Entertainment",
    year: 2018,
    endYear: 2020,
    status: "Finished",
    genres: ["Action", "Martial Arts", "Sports"],
    rating: 7.2,
    seasons: [
      { n: 1, year: 2018, episodes: 26, title: "Most Evil Death Row Convicts" },
      { n: 2, year: 2020, episodes: 13, title: "Great Raitai Tournament" }
    ],
    characters: [
      "Baki Hanma", "Yujiro Hanma", "Doppo Orochi",
      "Kaoru Hanayama", "Katsumi Orochi", "Retsu Kaioh"
    ],
    synopsis: "A teenage fighting prodigy trains relentlessly to one day surpass his monstrous father — the strongest creature on earth. When five of the world's deadliest convicts converge on Tokyo seeking defeat, Baki's brutal proving ground begins.",
    demographic: "Seinen",
    source: { type: "Manga", author: "Keisuke Itagaki", publisher: "Akita Shoten · Weekly Shonen Champion" },
    openingTheme: { song: "Beastful", artist: "Granrodeo" },
    streaming: ["Netflix"],
    awards: [],
    relatedWorks: ["Baki Hanma", "Baki the Grappler (2001)"],
    accent: 8
  },
  {
    id: "from-me-to-you",
    title: "From Me to You",
    jpTitle: "Kimi ni Todoke",
    creator: "Karuho Shiina",
    studio: "Production I.G",
    year: 2009,
    endYear: 2011,
    status: "Finished",
    genres: ["Romance", "School", "Drama"],
    rating: 7.8,
    seasons: [
      { n: 1, year: 2009, episodes: 25, title: "Season 1" },
      { n: 2, year: 2011, episodes: 12, title: "Season 2" }
    ],
    characters: [
      "Sawako Kuronuma", "Shota Kazehaya", "Chizuru Yoshida",
      "Ayane Yano", "Ryu Sanada", "Ume Kurumizawa"
    ],
    synopsis: "A gloomy, misunderstood girl nicknamed after a horror-movie ghost slowly steps into the light when the most popular boy in class sees past the rumors — and her first real friendships and first love bloom one shy step at a time.",
    demographic: "Shojo",
    source: { type: "Manga", author: "Karuho Shiina", publisher: "Shueisha · Bessatsu Margaret" },
    openingTheme: { song: "Kimi ni Todoke", artist: "Tanizawa Tomofumi" },
    streaming: ["Netflix", "Crunchyroll"],
    awards: ["Kodansha Manga Award · Shojo (2008)"],
    relatedWorks: ["Kimi ni Todoke: 3D2N (Live-Action Film)"],
    accent: 340
  },
  {
    id: "ranma-one-half",
    title: "Ranma ½",
    jpTitle: "Ranma Nibun-no-Ichi",
    creator: "Rumiko Takahashi",
    studio: "MAPPA",
    year: 2024,
    endYear: 2024,
    status: "Ongoing",
    genres: ["Comedy", "Martial Arts", "Romance"],
    rating: 7.6,
    seasons: [
      { n: 1, year: 2024, episodes: 12, title: "Season 1 (2024 Remake)" }
    ],
    characters: [
      "Ranma Saotome", "Akane Tendo", "Genma Saotome",
      "Soun Tendo", "Shampoo", "Ryoga Hibiki", "Nabiki Tendo"
    ],
    synopsis: "Cursed by a fall into a magic spring, a martial-arts prodigy turns into a girl whenever splashed with cold water — and hot water turns him back. Now engaged to a hot-tempered classmate he never agreed to marry, chaos is the household's natural state.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Rumiko Takahashi", publisher: "Shogakukan · Weekly Shonen Sunday" },
    openingTheme: { song: "Iinazuke Blue", artist: "ano" },
    streaming: ["Netflix"],
    awards: [],
    relatedWorks: ["Ranma ½ (1989 Series)", "Urusei Yatsura", "Inuyasha"],
    accent: 358
  },
  {
    id: "dorohedoro",
    title: "Dorohedoro",
    jpTitle: "Dorohedoro",
    creator: "Q Hayashida",
    studio: "MAPPA",
    year: 2020,
    endYear: 2020,
    status: "Finished",
    genres: ["Dark Fantasy", "Horror", "Comedy"],
    rating: 8.0,
    seasons: [
      { n: 1, year: 2020, episodes: 12, title: "Season 1" }
    ],
    characters: [
      "Caiman", "Nikaido", "Shin", "Noi", "En", "Ebisu"
    ],
    synopsis: "In a grimy, sorcerer-ravaged slum called the Hole, a man with a reptile head and no memory hunts the magic-user who transformed him — chewing through every Sorcerer he meets in search of answers, with a deadpan friend at his side.",
    demographic: "Seinen",
    source: { type: "Manga", author: "Q Hayashida", publisher: "Shogakukan · Monthly Ikki / Hibana" },
    openingTheme: { song: "Welcome to Chaos", artist: "(K)NoW_NAME" },
    streaming: ["Netflix"],
    awards: [],
    relatedWorks: ["Dorohedoro: Ma no Omake (OVA)"],
    accent: 130
  },
  {
    id: "gangsta",
    title: "Gangsta.",
    jpTitle: "Gangsta.",
    creator: "Kohske",
    studio: "Manglobe",
    year: 2015,
    endYear: 2015,
    status: "Finished",
    genres: ["Action", "Crime", "Drama"],
    rating: 7.4,
    seasons: [
      { n: 1, year: 2015, episodes: 12, title: "Season 1" }
    ],
    characters: [
      "Worick Arcangelo", "Nicolas Brown", "Alex Benedetto",
      "Nina", "Marco Adriano", "Loretta Cristiano"
    ],
    synopsis: "In the lawless city of Ergastulum, two 'Handymen' take on the jobs neither the mob nor the police will touch. One is a deaf, sword-wielding superhuman; the other his sharp-tongued partner — both haunted by the brutal pasts that forged them.",
    demographic: "Seinen",
    source: { type: "Manga", author: "Kohske", publisher: "Shinchosha · Monthly Comic @ Bunch" },
    openingTheme: { song: "Renegade", artist: "STEREO DIVE FOUNDATION" },
    streaming: ["Crunchyroll"],
    awards: [],
    relatedWorks: [],
    accent: 18
  },
  {
    id: "case-study-of-vanitas",
    title: "The Case Study of Vanitas",
    jpTitle: "Vanitas no Carte",
    creator: "Jun Mochizuki",
    studio: "Bones",
    year: 2021,
    endYear: 2022,
    status: "Finished",
    genres: ["Fantasy", "Mystery", "Supernatural"],
    rating: 7.9,
    seasons: [
      { n: 1, year: 2021, episodes: 12, title: "Part 1" },
      { n: 2, year: 2022, episodes: 12, title: "Part 2" }
    ],
    characters: [
      "Vanitas", "Noé Archiviste", "Jeanne",
      "Dominique de Sade", "Domi", "Roland Fortis"
    ],
    synopsis: "In a steampunk 19th-century Paris, a human doctor wields a cursed grimoire said to be able to cure — or destroy — vampires. He drags a reluctant young vampire into his crusade to save those driven mad by a malady of their true names.",
    demographic: "Shonen",
    source: { type: "Manga", author: "Jun Mochizuki", publisher: "Square Enix · Monthly Gangan Joker" },
    openingTheme: { song: "Sleepless", artist: "The Oral Cigarettes" },
    streaming: ["Crunchyroll", "Funimation"],
    awards: [],
    relatedWorks: ["Pandora Hearts"],
    accent: 268
  },
  {
    id: "serial-experiments-lain",
    title: "Serial Experiments Lain",
    jpTitle: "Serial Experiments Lain",
    creator: "Yoshitoshi ABe / Chiaki J. Konaka",
    studio: "Triangle Staff",
    year: 1998,
    endYear: 1998,
    status: "Finished",
    genres: ["Psychological", "Sci-Fi", "Mystery"],
    rating: 8.0,
    seasons: [
      { n: 1, year: 1998, episodes: 13, title: "Season 1" }
    ],
    characters: [
      "Lain Iwakura", "Alice Mizuki", "Masami Eiri",
      "Mika Iwakura", "Yasuo Iwakura"
    ],
    synopsis: "A shy schoolgirl receives an email from a classmate who just died. Pulled into 'the Wired' — a vast global network — she watches the line between the virtual and the real dissolve, and begins to question whether she exists at all.",
    demographic: "Seinen",
    source: { type: "Original", author: "Yoshitoshi ABe / Chiaki J. Konaka", publisher: "Original Anime" },
    openingTheme: { song: "Duvet", artist: "Bôa" },
    streaming: ["Funimation"],
    awards: ["Excellence Prize · Japan Media Arts Festival (1998)"],
    relatedWorks: [],
    accent: 300
  },
  {
    id: "perfect-blue",
    title: "Perfect Blue",
    jpTitle: "Pafekuto Buru",
    creator: "Satoshi Kon",
    studio: "Madhouse",
    year: 1997,
    endYear: 1997,
    status: "Finished",
    genres: ["Psychological", "Thriller", "Horror"],
    rating: 8.0,
    seasons: [
      { n: 0, year: 1997, episodes: 1, title: "The Movie" }
    ],
    characters: [
      "Mima Kirigoe", "Rumi", "Mr. Me-Mania", "Tadokoro"
    ],
    synopsis: "A pop idol quits singing to become a serious actress, but a stalker and a website impersonating her begin blurring her grip on reality. As people around her start dying, she can no longer tell which version of herself is real.",
    demographic: "Seinen",
    source: { type: "Original", author: "Satoshi Kon (dir.) · Yoshikazu Takeuchi (novel)", publisher: "Original Film" },
    openingTheme: { song: "Virtua Mima", artist: "Masahiro Ikumi" },
    streaming: ["Not currently streaming"],
    awards: ["Fantasia / Fantasporto Best Film honors"],
    relatedWorks: ["Paprika (2006)", "Millennium Actress (2001)"],
    accent: 210
  },
  {
    id: "paprika",
    title: "Paprika",
    jpTitle: "Papurika",
    creator: "Satoshi Kon",
    studio: "Madhouse",
    year: 2006,
    endYear: 2006,
    status: "Finished",
    genres: ["Psychological", "Sci-Fi", "Thriller"],
    rating: 8.0,
    seasons: [
      { n: 0, year: 2006, episodes: 1, title: "The Movie" }
    ],
    characters: [
      "Atsuko Chiba / Paprika", "Kosaku Tokita", "Toshimi Konakawa",
      "Dr. Torataro Shima", "Dr. Morio Osanai"
    ],
    synopsis: "A device that lets therapists enter their patients' dreams is stolen, letting someone weaponize dreams against the waking world. A researcher and her dream-world alter ego, Paprika, dive in to stop reality and fantasy from collapsing into one.",
    demographic: "Seinen",
    source: { type: "Novel", author: "Satoshi Kon (dir.) · Yasutaka Tsutsui (novel)", publisher: "Original Film" },
    openingTheme: { song: "Mediational Field", artist: "Susumu Hirasawa" },
    streaming: ["Not currently streaming"],
    awards: ["Venice Film Festival Competition (2006)"],
    relatedWorks: ["Perfect Blue (1997)", "Paranoia Agent (2004)"],
    accent: 350
  },
  {
    id: "terror-in-resonance",
    title: "Terror in Resonance",
    jpTitle: "Zankyou no Terror",
    creator: "Shinichiro Watanabe",
    studio: "MAPPA",
    year: 2014,
    endYear: 2014,
    status: "Finished",
    genres: ["Psychological", "Thriller", "Mystery"],
    rating: 7.6,
    seasons: [
      { n: 1, year: 2014, episodes: 11, title: "Season 1" }
    ],
    characters: [
      "Nine (Arata Kokonoe)", "Twelve (Toji Hisami)", "Lisa Mishima",
      "Five", "Kenjiro Shibazaki"
    ],
    synopsis: "Two enigmatic teenagers calling themselves 'Sphinx' bomb Tokyo while leaving cryptic riddles for the police. As a weary detective unravels their puzzles, a buried government atrocity that created the boys begins to surface.",
    demographic: "Seinen",
    source: { type: "Original", author: "Shinichiro Watanabe", publisher: "Original Anime" },
    openingTheme: { song: "Trigger", artist: "Yuki Ozaki (Galileo Galilei)" },
    streaming: ["Crunchyroll", "Funimation"],
    awards: [],
    relatedWorks: ["Cowboy Bebop", "Samurai Champloo"],
    accent: 195
  }
];

// Build set of genres, years, studios for filters
window.ALL_GENRES = [...new Set(window.ANIME_DATA.flatMap(a => a.genres))].sort();
window.ALL_YEARS = [...new Set(window.ANIME_DATA.map(a => a.year))].sort((a, b) => b - a);
window.ALL_STUDIOS = [...new Set(window.ANIME_DATA.map(a => a.studio.split(" / ")[0]))].sort();

// Curated collections — separate from genre, surfaced as their own filter row.
window.COLLECTIONS = [
  { id: "romance",    label: "Romance",     note: "Love stories & slow burns" },
  { id: "underrated", label: "Underrated",  note: "Hidden gems worth your time" },
  { id: "not-anime",  label: "Is It Anime?", note: "Animation that starts the debate" }
];
// Auto-fold every Romance-genre title into the Romance collection.
window.ANIME_DATA.forEach(a => {
  a.collections = a.collections || [];
  if (a.genres.includes("Romance") && !a.collections.includes("romance")) {
    a.collections.push("romance");
  }
});
