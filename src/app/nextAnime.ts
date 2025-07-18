import placeholder from "./assets/placeholder.jpg";

import ApothecaryDiaries from "./assets/ApothecaryDiaries.jpg";
import Ascendance from "./assets/Ascendance.jpg";
import Assassination from "./assets/Assassination.jpg";
import Attack from "./assets/Attack.jpg";
import Bleach from "./assets/Bleach.jpg";
import ChainsawManMovie from "./assets/ChainsawManMovie.jpg";
import DanDaDan from "./assets/DanDaDan.jpg";
import Delicious from "./assets/Delicious.jpg";
import Evangelion from "./assets/Evangelion.jpg";
import FrierenFrierensParty from "./assets/FrierenFrierensParty.jpg";
import Fruits from "./assets/Fruits.jpg";
import Fullmetal from "./assets/Fullmetal.jpg";
import Gosick from "./assets/Gosick.jpg";
import Gurren from "./assets/Gurren.jpg";
import Hero from "./assets/Hero.jpg";
import Jujutsu from "./assets/Jujutsu.jpg";
import Lazarus from "./assets/Lazarus.jpg";
import Naruto from "./assets/Naruto.jpg";
import NarutoShippuden from "./assets/NarutoShippuden.jpg";
import OnePunch from "./assets/OnePunch.jpg";
import Raven from "./assets/Raven.jpg";
import Saiunkoku from "./assets/Saiunkoku.jpg";
import Samurai from "./assets/Samurai.jpg";
import SnowWhite from "./assets/SnowWhite.jpg";
import Solo from "./assets/Solo.jpg";
import Steins from "./assets/Steins.jpg";
import Stone from "./assets/Stone.jpg";
import Trigun from "./assets/Trigun.jpg";
import VinlandSaga from "./assets/VinlandSaga.jpg";
import Yona from "./assets/Yona.jpg";

interface Anime {
  title: string;
  year: number;
  episodes: number;
  rating: number;
  ratingOutOf: number;
  rank: number;
  popularity: number;
  picture: string;
  tags: string[];
  shortDescription?: string;
  longDescription?: string;
  maomaoRecommendation?: boolean;
}

export const animeList: Anime[] = [
  {
    title: "Attack on Titan",
    year: 2013,
    episodes: 98,
    rating: 8.56,
    ratingOutOf: 2955846,
    rank: 112,
    popularity: 1,
    picture: Attack.src,
    tags: [
      "Action Epic",
      "Monster Horror",
      "Shōnen",
      "Survival",
      "Tragedy",
      "Action",
      "Adventure",
    ],
    shortDescription:
      "After his hometown is destroyed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
    longDescription: `Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called Titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal Titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations. After witnessing a horrific personal loss at the hands of the invading creatures, Eren Yeager dedicates his life to their eradication by enlisting into the Survey Corps, an elite military unit that combats the merciless humanoids outside the protection of the walls. Eren, his adopted sister Mikasa Ackerman, and his childhood friend Armin Arlert join the brutal war against the Titans and race to discover a way of defeating them before the last walls are breached.`,
  },
  {
    title: "Fullmetal Alchemist Brotherhood",
    year: 2009,
    episodes: 68,
    rating: 9.1,
    ratingOutOf: 2232110,
    rank: 2,
    popularity: 3,
    picture: Fullmetal.src,
    tags: [
      "Shōnen",
      "Steampunk",
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
      "Sci-Fi",
    ],
    shortDescription:
      "Two brothers search for a Philosopher's Stone after an attempt to revive their deceased mother goes awry and leaves them in damaged physical forms.",
    longDescription: `After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor. The brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing "automail," a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange. As Edward becomes an infamous alchemist and gains the nickname "Fullmetal," the boys' journey embroils them in a growing conspiracy that threatens the fate of the world.`,
  },
  {
    title: "One Punch Man",
    year: 2015,
    episodes: 31,
    rating: 8.48,
    ratingOutOf: 2349475,
    rank: 155,
    popularity: 4,
    picture: OnePunch.src,
    tags: ["Superhero", "Action", "Comedy", "Family", "Fantasy", "Sci-Fi"],
    shortDescription:
      "The story of Saitama, a hero that does it just for fun & can defeat his enemies with a single punch.",
    longDescription:
      "The seemingly unimpressive Saitama has a rather unique hobby: being a hero. In order to pursue his childhood dream, Saitama relentlessly trained for three years, losing all of his hair in the process. Now, Saitama is so powerful, he can defeat any enemy with just one punch. However, having no one capable of matching his strength has led Saitama to an unexpected problem—he is no longer able to enjoy the thrill of battling and has become quite bored. One day, Saitama catches the attention of 19-year-old cyborg Genos, who witnesses his power and wishes to become Saitama's disciple. Genos proposes that the two join the Hero Association in order to become certified heroes that will be recognized for their positive contributions to society. Saitama, who is shocked that no one knows who he is, quickly agrees. Meeting new allies and taking on new foes, Saitama embarks on a new journey as a member of the Hero Association to experience the excitement of battle he once felt.",
  },
  {
    title: "My Hero Academia",
    year: 2016,
    episodes: 167,
    rating: 7.84,
    ratingOutOf: 2167207,
    rank: 987,
    popularity: 7,
    picture: Hero.src,
    tags: ["Shōnen", "Superhero", "Action", "Adventure", "Fantasy", "Sci-Fi"],
    shortDescription:
      "A superhero-admiring boy enrolls in a prestigious hero academy and learns what it really means to be a hero, after the strongest superhero grants him his own powers.",
    longDescription: `The appearance of "quirks," newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting. This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual. Since he was a child, the ambitious middle schooler has wanted nothing more than to be a hero. Izuku's unfair fate leaves him admiring heroes and taking notes on them whenever he can. But it seems that his persistence has borne some fruit: Izuku meets the number one hero and his personal idol, All Might. All Might's quirk is a unique ability that can be inherited, and he has chosen Izuku to be his successor! Enduring many months of grueling training, Izuku enrolls in UA High, a prestigious high school famous for its excellent hero training program, and this year's freshmen look especially promising. With his bizarre but talented classmates and the looming threat of a villainous organization, Izuku will soon learn what it really means to be a hero.`,
  },
  {
    title: "Naruto",
    year: 2002,
    episodes: 220,
    rating: 8.01,
    ratingOutOf: 2073355,
    rank: 676,
    popularity: 9,
    picture: Naruto.src,
    tags: [
      "Martial Arts",
      "Shōnen",
      "Teen Comedy",
      "Teen Fantasy",
      "Action",
      "Adventure",
      "Comedy",
      "Fantasy",
    ],
    shortDescription:
      "Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja.",
    longDescription: `Moments before Naruto Uzumaki's birth, a huge demon known as the Nine-Tailed Fox attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the demon's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto. In the present, Naruto is a hyperactive and knuckle-headed ninja growing up within Konohagakure. Shunned because of the demon inside him, Naruto struggles to find his place in the village. His one burning desire to become the Hokage and be acknowledged by the villagers who despise him. However, while his goal leads him to unbreakable bonds with lifelong friends, it also lands him in the crosshairs of many deadly foes.`,
  },
  {
    title: "Jujutsu Kaisen",
    year: 2020,
    episodes: 48,
    rating: 8.54,
    ratingOutOf: 1867105,
    rank: 129,
    popularity: 13,
    picture: Jujutsu.src,
    tags: [
      "Dark Fantasy",
      "Psychological Drama",
      "Shōnen",
      "Supernatural Fantasy",
      "Urban Adventure",
      "Action",
      "Adventure",
    ],
    shortDescription:
      "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.",
    longDescription:
      "Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the King of Curses. Yuuji experiences first-hand the threat these Curses pose to society as he discovers his own newfound powers. Introduced to the Tokyo Prefectural Jujutsu High School, he begins to walk down a path from which he cannot return—the path of a Jujutsu sorcerer.",
  },
  {
    title: "Steins;Gate",
    year: 2011,
    episodes: 26,
    rating: 9.07,
    ratingOutOf: 1472740,
    rank: 3,
    popularity: 14,
    picture: Steins.src,
    tags: [
      "Time Travel",
      "Comedy",
      "Drama",
      "Mystery",
      "Romance",
      "Sci-Fi",
      "Thriller",
    ],
    shortDescription:
      "After discovering time travel, a university student and his colleagues must use their knowledge of it to stop an evil organization and their diabolical plans.",
    longDescription:
      "Eccentric scientist Rintarou Okabe has a never-ending thirst for scientific exploration. Together with his ditzy but well-meaning friend Mayuri Shiina and his roommate Itaru Hashida, Okabe founds the Future Gadget Laboratory in the hopes of creating technological innovations that baffle the human psyche. Despite claims of grandeur, the only notable 'gadget' the trio have created is a microwave that has the mystifying power to turn bananas into green goo. However, when Okabe attends a conference on time travel, he experiences a series of strange events that lead him to believe that there is more to the 'Phone Microwave' gadget than meets the eye. Apparently able to send text messages into the past using the microwave, Okabe dabbles further with the 'time machine,' attracting the ire and attention of the mysterious organization SERN. Due to the novel discovery, Okabe and his friends find themselves in an ever-present danger. As he works to mitigate the damage his invention has caused to the timeline, Okabe fights a battle to not only save his loved ones but also to preserve his degrading sanity.",
  },
  {
    title: "Naruto: Shippuden",
    year: 2007,
    episodes: 501,
    rating: 8.28,
    ratingOutOf: 1757874,
    rank: 315,
    popularity: 16,
    picture: NarutoShippuden.src,
    tags: [
      "Martial Arts",
      "Shōnen",
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
    ],
    shortDescription:
      "Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.",
    longDescription:
      "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world. Although Naruto is older and sinister events loom on the horizon, he has changed little in personality—still rambunctious and childish—though he is now far more confident and possesses an even greater determination to protect his friends and home. Come whatever may, Naruto will carry on with the fight for what is important to him, even at the expense of his own body, in the continuation of the saga about the boy who wishes to become Hokage.",
  },
  {
    title: "Assassination Classroom",
    year: 2015,
    episodes: 49,
    rating: 8.07,
    ratingOutOf: 1261869,
    rank: 577,
    popularity: 34,
    picture: Assassination.src,
    tags: [
      "Shōnen",
      "Teen Comedy",
      "Action",
      "Comedy",
      "Family",
      "Fantasy",
      "Sci-Fi",
    ],
    shortDescription:
      "A powerful creature claims that within a year, Earth will be destroyed by him, but he offers mankind a chance by becoming a homeroom teacher where he teaches his students about how to kill him. An assassination classroom begins.",
    longDescription: `Tucked in the mountains near the elite Kunugigaoka Middle School lies a small derelict building that houses the delinquents and dropouts of Class 3-E. Looked down upon by their peers, the students in this class appear to have little hope in advancing their academic careers. That is, until the national government tasks them with eliminating the greatest threat to their planet: their new teacher. Having already destroyed the moon, the octopus-like professor—dubbed "Koro-sensei"—has now threatened to destroy the Earth by March of the following year. In light of their mission, the students have found that killing him is easier said than done. Not only can Koro-sensei move at speeds of up to Mach 20, but he can also resist almost every earthly weapon. Ironically, he also proves to be one of the best teachers Class 3-E has ever had. Training the class to excel in both their studies as students and skills as assassins, Koro-sensei is confident that his students' ingenuity and indomitable will could return them to the main campus. Through trial and error, Nagisa Shiota, as well as the other students of Class 3-E, must figure out Koro-sensei's weaknesses—and fast, for the very fate of the world depends upon it.`,
  },
  {
    title: "Neon Genesis Evangelion",
    year: 1995,
    episodes: 26,
    rating: 8.36,
    ratingOutOf: 1161907,
    rank: 242,
    popularity: 45,
    picture: Evangelion.src,
    tags: [
      "Action Epic",
      "Alien Invasion",
      "Coming-of-Age",
      "Cyberpunk",
      "Dystopian Sci-Fi",
      "Epic",
      "Kaiju",
    ],
    shortDescription:
      "A teenage boy finds himself recruited as a member of an elite team of pilots by his father.",
    longDescription: `Fifteen years after a cataclysmic event known as the Second Impact, the world faces a new threat: monstrous celestial beings called Angels invade Tokyo-3 one by one. Mankind is unable to defend themselves against the Angels despite utilizing their most advanced munitions and military tactics. The only hope for human salvation rests in the hands of NERV, a mysterious organization led by the cold Gendou Ikari. NERV operates giant humanoid robots dubbed "Evangelions" to combat the Angels with state-of-the-art advanced weaponry and protective barriers known as Absolute Terror Fields. Years after being abandoned by his father, Shinji Ikari, Gendou's 14-year-old son, returns to Tokyo-3. Shinji undergoes a perpetual internal battle against the deeply buried trauma caused by the loss of his mother and the emotional neglect he suffered at the hands of his father. Terrified to open himself up to another, Shinji's life is forever changed upon meeting 29-year-old Misato Katsuragi, a high-ranking NERV officer who shows him a free-spirited maternal kindness he has never experienced. A devastating Angel attack forces Shinji into action as Gendou reveals his true motive for inviting his son back to Tokyo-3: Shinji is the only child capable of efficiently piloting Evangelion Unit-01, a new robot that synchronizes with his biometrics. Despite the brutal psychological trauma brought about by piloting an Evangelion, Shinji defends Tokyo-3 against the angelic threat, oblivious to his father's dark machinations.`,
  },
  {
    title: "Dr. Stone",
    year: 2019,
    episodes: 70,
    rating: 8.26,
    ratingOutOf: 1130785,
    rank: 337,
    popularity: 49,
    picture: Stone.src,
    tags: [
      "Shōnen",
      "Survival",
      "Teen Adventure",
      "Action",
      "Adventure",
      "Sci-Fi",
    ],
    shortDescription:
      "High schooler Taiju awakens from petrification millennia after a blinding light turned humanity to stone. He finds his scientific genius friend Senku working on a plan to rebuild civilization using science.",
    longDescription: `After five years of harboring unspoken feelings, high-schooler Taiju Ooki is finally ready to confess his love to Yuzuriha Ogawa. Just when Taiju begins his confession however, a blinding green light strikes the Earth and petrifies mankind around the world—turning every single human into stone. Several millennia later, Taiju awakens to find the modern world completely nonexistent, as nature has flourished in the years humanity stood still. Among a stone world of statues, Taiju encounters one other living human: his science-loving friend Senkuu, who has been active for a few months. Taiju learns that Senkuu has developed a grand scheme—to launch the complete revival of civilization with science. Taiju's brawn and Senkuu's brains combine to forge a formidable partnership, and they soon uncover a method to revive those petrified. However, Senkuu's master plan is threatened when his ideologies are challenged by those who awaken. All the while, the reason for mankind's petrification remains unknown.`,
  },
  {
    title: "Chainsaw Man",
    year: 2022,
    episodes: 12,
    rating: 8.45,
    ratingOutOf: 1008054,
    rank: 175,
    popularity: 58,
    picture: ChainsawManMovie.src,
    tags: ["Dark Fantasy", "Shōnen", "Action", "Comedy", "Fantasy"],
    shortDescription:
      "Following a betrayal, a young man left for dead is reborn as a powerful devil-human hybrid after merging with his pet devil and is soon enlisted into an organization dedicated to hunting devils.",
    longDescription:
      "Denji is robbed of a normal teenage life, left with nothing but his deadbeat father's overwhelming debt. His only companion is his pet, the chainsaw devil Pochita, with whom he slays devils for money that inevitably ends up in the yakuza's pockets. All Denji can do is dream of a good, simple life: one with delicious food and a beautiful girlfriend by his side. But an act of greedy betrayal by the yakuza leads to Denji's brutal, untimely death, crushing all hope of him ever achieving happiness. Remarkably, an old contract allows Pochita to merge with the deceased Denji and bestow devil powers on him, changing him into a hybrid able to transform his body parts into chainsaws. Because Denji's new abilities pose a significant risk to society, the Public Safety Bureau's elite devil hunter Makima takes him in, letting him live as long as he obeys her command. Guided by the promise of a content life alongside an attractive woman, Denji devotes everything and fights with all his might to make his naive dreams a reality.",
  },
  {
    title: "Gurren Lagann",
    year: 2007,
    episodes: 28,
    rating: 8.64,
    ratingOutOf: 944958,
    rank: 81,
    popularity: 67,
    picture: Gurren.src,
    tags: [
      "Dystopian Sci-Fi",
      "Mecha",
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Sci-Fi",
    ],
    shortDescription:
      "Two friends, Simon and Kamina, become the symbols of rebellion against the powerful Spiral King, who forced mankind into subterranean villages.",
    longDescription:
      "Simon and Kamina were born and raised in a deep, underground village, hidden from the fabled surface. Kamina is a free-spirited loose cannon bent on making a name for himself, while Simon is a timid young boy with no real aspirations. One day while excavating the earth, Simon stumbles upon a mysterious object that turns out to be the ignition key to an ancient artifact of war, which the duo dubs Lagann. Using their new weapon, Simon and Kamina fend off a surprise attack from the surface with the help of Yoko Littner, a hot-blooded redhead wielding a massive gun who wanders the world above. In the aftermath of the battle, the sky is now in plain view, prompting Simon and Kamina to set off on a journey alongside Yoko to explore the wastelands of the surface. Soon, they join the fight against the 'Beastmen,' humanoid creatures that terrorize the remnants of humanity in powerful robots called 'Gunmen.' Although they face some challenges and setbacks, the trio bravely fights these new enemies alongside other survivors to reclaim the surface, while slowly unraveling a galaxy-sized mystery.",
  },
  {
    title: "Vinland Saga",
    year: 2019,
    episodes: 48,
    rating: 8.77,
    ratingOutOf: 987002,
    rank: 42,
    popularity: 69,
    picture: VinlandSaga.src,
    tags: [
      "Historical Epic",
      "One-Person Army Action",
      "Period Drama",
      "Seinen",
      "Tragedy",
      "Action",
      "Adventure",
    ],
    shortDescription:
      "Following a tragedy, Thorfinn embarks on a journey with the man responsible for it to take his life in a duel as a true and honorable warrior to pay homage.",
    longDescription: `Young Thorfinn grew up listening to the stories of old sailors that had traveled the ocean and reached the place of legend, Vinland. It's said to be warm and fertile, a place where there would be no need for fighting—not at all like the frozen village in Iceland where he was born, and certainly not like his current life as a mercenary. War is his home now. Though his father once told him, "You have no enemies, nobody does. There is nobody who it's okay to hurt," as he grew, Thorfinn knew that nothing was further from the truth. The war between England and the Danes grows worse with each passing year. Death has become commonplace, and the viking mercenaries are loving every moment of it. Allying with either side will cause a massive swing in the balance of power, and the vikings are happy to make names for themselves and take any spoils they earn along the way. Among the chaos, Thorfinn must take his revenge and kill Askeladd, the man who murdered his father. The only paradise for the vikings, it seems, is the era of war and death that rages on.`,
  },
  {
    title: "Samurai Champloo",
    year: 2004,
    episodes: 26,
    rating: 8.52,
    ratingOutOf: 667549,
    rank: 136,
    popularity: 108,
    picture: Samurai.src,
    tags: [
      "Martial Arts",
      "Samurai",
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
      "Thriller",
    ],
  },
  {
    title: "Frieren: Beyond Journey's End",
    year: 2023,
    episodes: 29,
    rating: 9.3,
    ratingOutOf: 696386,
    rank: 1,
    popularity: 139,
    picture: FrierenFrierensParty.src,
    tags: [
      "Fantasy Epic",
      "Iyashikei",
      "Shōnen",
      "Sword and Sorcery",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
    ],
  },
  {
    title: "Solo Leveling",
    year: 2024,
    episodes: 26,
    rating: 8.26,
    ratingOutOf: 605189,
    rank: 324,
    popularity: 186,
    picture: Solo.src,
    tags: [
      "Action Epic",
      "Dark Fantasy",
      "One-Person Army Action",
      "Supernatural Fantasy",
      "Survival",
      "Action",
      "Adventure",
      "Fantasy",
    ],
  },
  {
    title: "Yona of the Dawn",
    year: 2014,
    episodes: 24,
    rating: 8.03,
    ratingOutOf: 439481,
    rank: 631,
    popularity: 212,
    picture: Yona.src,
    tags: [
      "Coming-of-Age",
      "Fantasy Epic",
      "Quest",
      "Shōjo",
      "Swashbuckler",
      "Action",
      "Adventure",
      "Comedy",
    ],
  },
  {
    title: "Fruits Basket",
    year: 2019,
    episodes: 63,
    rating: 8.21,
    ratingOutOf: 431084,
    rank: 390,
    popularity: 213,
    picture: Fruits.src,
    tags: [
      "Shōjo",
      "Supernatural Fantasy",
      "Teen Comedy",
      "Teen Drama",
      "Teen Fantasy",
      "Teen Romance",
      "Comedy",
      "Drama",
    ],
    shortDescription:
      "After Tohru is taken in by the Soma family, she learns that twelve family members transform involuntarily into animals of the Chinese zodiac and helps them deal with the emotional pain caused by the transformations.",
    longDescription:
      'Tooru Honda has always been fascinated by the story of the Chinese zodiac that her beloved mother told her as a child. However, a sudden family tragedy changes her life, and subsequent circumstances leave her all alone. Tooru is now forced to live in a tent, but little does she know that her temporary home resides on the private property of the esteemed Souma family. Stumbling upon their home one day, she encounters Shigure, an older Souma cousin, and Yuki, the "prince" of her school. Tooru explains that she lives nearby, but the Soumas eventually discover her well-kept secret of being homeless when they see her walking back to her tent one night. Things start to look up for Tooru as they kindly offer to take her in after hearing about her situation. But soon after, she is caught up in a fight between Yuki and his hot-tempered cousin, Kyou. While trying to stop them, she learns that the Souma family has a well-kept secret of their own: whenever they are hugged by a member of the opposite sex, they transform into the animals of the Chinese zodiac. With this new revelation, Tooru will find that living with the Soumas is an unexpected adventure filled with laughter and romance.',
    maomaoRecommendation: true,
  },
  {
    title: "Trigun",
    year: 1998,
    episodes: 26,
    rating: 8.22,
    ratingOutOf: 390266,
    rank: 371,
    popularity: 260,
    picture: Trigun.src,
    tags: [
      "Desert Adventure",
      "Shōnen",
      "Steampunk",
      "Action",
      "Adventure",
      "Comedy",
      "Drama",
    ],
    shortDescription:
      "Vash the Stampede is the most infamous outlaw on the planet Gunsmoke and with a 60 billion double dollar price on his head the most sought after.",
    longDescription:
      "Vash the Stampede is the man with a $$60,000,000,000 bounty on his head. The reason: he's a merciless villain who lays waste to all those that oppose him and flattens entire cities for fun, garnering him the title \"The Humanoid Typhoon.\" He leaves a trail of death and destruction wherever he goes, and anyone can count themselves dead if they so much as make eye contact—or so the rumors say. In actuality, Vash is a huge softie who claims to have never taken a life and avoids violence at all costs. With his crazy doughnut obsession and buffoonish attitude in tow, Vash traverses the wasteland of the planet Gunsmoke, all the while followed by two insurance agents, Meryl Stryfe and Milly Thompson, who attempt to minimize his impact on the public. But soon, their misadventures evolve into life-or-death situations as a group of legendary assassins are summoned to bring about suffering to the trio. Vash's agonizing past will be unraveled and his morality and principles pushed to the breaking point.",
  },
  {
    title: "Dandadan",
    year: 2024,
    episodes: 24,
    rating: 8.5,
    ratingOutOf: 456352,
    rank: 142,
    popularity: 293,
    picture: DanDaDan.src,
    tags: [
      "Alien Invasion",
      "Romantic Comedy",
      "Shōnen",
      "Supernatural Fantasy",
      "Teen Comedy",
      "Teen Fantasy",
      "Urban Adventure",
      "Action",
      "Adventure",
    ],
  },
  {
    title: "Snow White with the Red Hair",
    year: 2015,
    episodes: 25,
    rating: 7.76,
    ratingOutOf: 360626,
    rank: 1158,
    popularity: 306,
    picture: SnowWhite.src,
    tags: [
      "Adventure Epic",
      "Fantasy Epic",
      "Medical Drama",
      "Shōjo",
      "Teen Fantasy",
      "Drama",
      "Fantasy",
      "Romance",
    ],
    shortDescription:
      "Although her name means 'white as snow', Shirayuki is a cheerful red-haired girl who lives in the town of Tanbarun and works diligently as an apothecary in her herbal shop.",
    longDescription:
      "Although her name means \"snow white,\" Shirayuki is a cheerful, red-haired girl living in the country of Tanbarun who works diligently as an apothecary at her herbal shop. Her life changes drastically when she is noticed by the silly prince of Tanbarun, Prince Raji, who then tries to force her to become his concubine. Unwilling to give up her freedom, Shirayuki cuts her long red hair and escapes into the forest, where she is rescued from Raji by Zen Wistalia, the second prince of a neighboring country, and his two aides. Hoping to repay her debt to the trio someday, Shirayuki sets her sights on pursuing a career as the court herbalist in Zen's country, Clarines. Akagami no Shirayuki-hime depicts Shirayuki's journey toward a new life at the royal palace of Clarines, as well as Zen's endeavor to become a prince worthy of his title. As loyal friendships are forged and deadly enemies formed, Shirayuki and Zen slowly learn to support each other as they walk their own paths.",
    maomaoRecommendation: true,
  },
  {
    title: "The Apothecary Diaries",
    year: 2023,
    episodes: 48,
    rating: 8.87,
    ratingOutOf: 370974,
    rank: 25,
    popularity: 353,
    picture: ApothecaryDiaries.src,
    tags: [
      "Medical Drama",
      "Slice of Life",
      "Drama",
      "History",
      "Mystery",
      "Romance",
    ],
  },
  {
    title: "Bleach: Thousand-Year Blood War",
    year: 2022,
    episodes: 41,
    rating: 8.99,
    ratingOutOf: 345035,
    rank: 12,
    popularity: 366,
    picture: Bleach.src,
    tags: [
      "Shōnen",
      "Supernatural Fantasy",
      "Urban Adventure",
      "Action",
      "Adventure",
      "Animation",
      "Fantasy",
    ],
    shortDescription:
      "The peace is suddenly broken when warning sirens blare through the Soul Society. Residents are disappearing without a trace and nobody knows who's behind it. Meanwhile, a darkness is approaching Ichigo and his friends in Karakura Town.",
    longDescription:
      "Substitute Soul Reaper Ichigo Kurosaki spends his days fighting against Hollows, dangerous evil spirits that threaten Karakura Town. Ichigo carries out his quest with his closest allies: Orihime Inoue, his childhood friend with a talent for healing; Yasutora Sado, his high school classmate with superhuman strength; and Uryuu Ishida, Ichigo's Quincy rival. Ichigo's vigilante routine is disrupted by the sudden appearance of Asguiaro Ebern, a dangerous Arrancar who heralds the return of Yhwach, an ancient Quincy king. Yhwach seeks to reignite the historic blood feud between Soul Reaper and Quincy, and he sets his sights on erasing both the human world and the Soul Society for good. Yhwach launches a two-pronged invasion into both the Soul Society and Hueco Mundo, the home of Hollows and Arrancar. In retaliation, Ichigo and his friends must fight alongside old allies and enemies alike to end Yhwach's campaign of carnage before the world itself comes to an end.",
  },
  {
    title: "Gosick",
    year: 2011,
    episodes: 24,
    rating: 8.04,
    ratingOutOf: 241735,
    rank: 619,
    popularity: 411,
    picture: Gosick.src,
    tags: ["Comedy", "Crime", "Drama", "Mystery", "Romance"],
    shortDescription:
      "A brilliant Japanese student teams up with an enigmatic young female prodigy to unravel mysteries across 1920s Europe, with their sleuthing adventures leading them through a web of intrigue and suspense.",
    longDescription:
      'Kazuya Kujou is a foreign student at Saint Marguerite Academy, a luxurious boarding school in the Southern European country of Sauville. Originally from Japan, his jet-black hair and dark brown eyes cause his peers to shun him and give him the nickname "Black Reaper," based on a popular urban legend about the traveler who brings death in the spring. On a day like any other, Kujou visits the school\'s extravagant library in search of ghost stories. However, his focus soon changes as he becomes curious about a golden strand of hair on the stairs. The steps lead him to a large garden and a beautiful doll-like girl known as Victorique de Blois, whose complex and imaginative foresight allows her to predict their futures, now intertwined. With more mysteries quickly developing—including the appearance of a ghost ship and an alchemist with the power of transmutation—Victorique and Kujou, bound by fate and their unique skills, have no choice but to rely on each other.',
  },
  {
    title: "Delicious in Dungeon",
    year: 2024,
    episodes: 24,
    rating: 8.6,
    ratingOutOf: 251298,
    rank: 101,
    popularity: 488,
    picture: Delicious.src,
    tags: [
      "Adventure Epic",
      "Quest",
      "Seinen",
      "Sword & Sorcery",
      "Adventure",
      "Comedy",
      "Fantasy",
    ],
    shortDescription:
      "Can sisters be reincarnated from dragon poop? Laios and his friends Marcille and Chilchuck delve into an endless dungeon in search of his fallen sister, fighting monsters, starvation, and corruption.",
    longDescription:
      "Adventuring knight Laios Touden leads a small party through a seemingly endless dungeon, a subterranean maze full of dangerous monsters and precarious traps. Through the use of advanced magic, an explorer can sometimes be resurrected, allowing them to learn from past mistakes and give traversing the dungeon another go. However, when a powerful dragon eats Falin, Laios' spellcasting sister, she sends her brother and his companions back to the beginning to save them from permanent ends. Though strapped for cash and equipment, Laios resolves to fight his way through the dungeon and rescue Falin before she can be digested by the dragon. Despite some of Laios' allies abandoning him, two remain by his side: elven mage Marcille Donato and halfling locksmith Chilchuck Tims. Due to their lack of funds, the party faces the daunting prospect of starving before being able to complete their quest. However, they find salvation in Senshi, a dwarven warrior with a penchant for cooking and safely eating defeated monsters. With Senshi's culinary expertise, Laios and his companions struggle through the dungeon while learning about gourmet dining—and each other—along the way.",
  },
  {
    title: "Ascendance of a Bookworm",
    year: 2019,
    episodes: 37,
    rating: 7.97,
    ratingOutOf: 178361,
    rank: 714,
    popularity: 757,
    picture: Ascendance.src,
    tags: [
      "Isekai",
      "Slice of Life",
      "Sword & Sorcery",
      "Adventure",
      "Comedy",
      "Drama",
      "Fantasy",
    ],
    shortDescription:
      "Urano, a young Japanese soon-to-be librarian, dies in an earthquake. She is reincarnated in another world as a young girl named Mayne, but learns books are scarce and only provided to prestigious elites.",
    longDescription:
      "Urano Motosu loves books and has an endless desire to read literature, no matter the subject. She almost fulfills her dream job of becoming a librarian before her life is ended in an accident. As she draws her last breath, she wishes to be able to read more books in her next life. As if fate was listening to her prayer, she wakes up reincarnated as Myne—a frail five-year-old girl living in a medieval era. What immediately comes to her mind is her passion. She tries to find something to read, only to become frustrated by the lack of books at her disposal. Without the printing press, books have to be written and copied by hand, making them very expensive; as such, only a few nobles can afford them—but this won't stop Myne. She will prove that her will to read is unbreakable, and if there are no books around, she will make them herself!",
    maomaoRecommendation: true,
  },
  {
    title: "Lazarus",
    year: 2025,
    episodes: 13,
    rating: 7.18,
    ratingOutOf: 49340,
    rank: 3546,
    popularity: 1277,
    picture: Lazarus.src,
    tags: ["Gun Fu", "Action", "Adventure", "Sci-Fi", "Thriller"],
  },
  {
    title: "Raven of the Inner Palace",
    year: 2022,
    episodes: 13,
    rating: 7.54,
    ratingOutOf: 41155,
    rank: 1837,
    popularity: 2097,
    picture: Raven.src,
    tags: ["Josei", "Supernatural Fantasy", "Fantasy", "History", "Mystery"],
    shortDescription:
      "The Raven Consort is a special consort living deep in the inner palace; Shouxue has the ability to use mysterious arts and will accept any favor asked of her, whether it is to find something lost or to curse someone to death.",
    longDescription:
      "Among the royal court, there is an individual feared as much as revered: the Raven Consort Ryuu Jusetsu. Residing in her jet-black palace and isolated from the emperor, she is the subject of countless rumors. Claimed to possess mystic abilities, she is said to take on any request—from finding lost items to inflicting curses. While some call her an immortal sage, others believe her to be a terrifying revenant. But such comments fail to faze Jusetsu, who prefers to spend her days in quiet solitude. That is, until the emperor, Ka Koushun, barges into her court and asks for her assistance with a mysterious case. The young emperor's request requires Jusetsu to step out of her palace for the first time. Despite Ka Koushun's frequent visits annoying her to no end, she cannot bring herself to turn him away. Her predecessor's teachings echo in her ears: the Raven Consort is destined to remain forever alone and never desire anything. Yet Jusetsu finds herself making the first of several bonds when she asks Jiujiu, an innocently inquisitive court girl, to be her sole attendant. Together, they begin fulfilling requests from the people of the palace. However, unknown perils lurk in the outside world, and drawing attention to herself may bring Jusetsu face-to-face with a past that is better left undisturbed.",
    maomaoRecommendation: true,
  },
  {
    title: "The Story of Saiunkoku",
    year: 2006,
    episodes: 79,
    rating: 7.87,
    ratingOutOf: 36522,
    rank: 900,
    popularity: 2238,
    picture: Saiunkoku.src,
    tags: [
      "Coming-of-Age",
      "Martial Arts",
      "Shōjo",
      "Adventure",
      "Animation",
      "Comedy",
      "Drama",
      "Fantasy",
      "Romance",
    ],
    shortDescription:
      "A girl called Sho Ruurei is offered 500 gold coins to become the King's consort. She carelessly accepts the offer and has to tutor the King. The King falls in love with her however his brother is in love with her too.",
    longDescription:
      "Shuurei Kou, the daughter of a noble yet impoverished family, is a clever young lady who dreams of becoming a government official and contributing toward her country. However, her dream is out of her reach as such a position is forbidden to women. While her father works a low wage job as an archivist at the palace, Shuurei has to juggle odd jobs to make ends meet. Then, one day, an unexpected visit changes her life. Shuurei is called to assist Ryuuki Shi, the new emperor who is known for slacking on his duties and preferring the company of men. Tempted by the generous compensation, she readily accepts the chance to become the young emperor's consort for six months. Luckily, she is not alone as Seiran Shi, her trusty friend, joins her as Ryuuki's bodyguard. While tasked with transforming the new emperor into a responsible ruler, court life and politics prove troublesome as Shuurei faces the challenges of her new life. Set in a fictional country, Saiunkoku Monogatari centers on the idea of meaningful leadership, its adversities and the rewards that come alongside a prospering nation.",
    maomaoRecommendation: true,
  },
];
