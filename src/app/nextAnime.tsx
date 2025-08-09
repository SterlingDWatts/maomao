import * as React from "react";

import ApothecaryDiaries from "./assets/ApothecaryDiaries.jpg";
import Arte from "./assets/Arte.jpg";
import Ascendance from "./assets/Ascendance.jpg";
import Assassination from "./assets/Assassination.jpg";
import Attack from "./assets/Attack.jpg";
import Bleach from "./assets/Bleach.jpg";
import ChainsawManMovie from "./assets/ChainsawManMovie.jpg";
import DanDaDan from "./assets/DanDaDan.jpg";
import Delicious from "./assets/Delicious.jpg";
import DrElise from "./assets/DrElise.jpg";
import Evangelion from "./assets/Evangelion.jpg";
import FrierenFrierensParty from "./assets/FrierenFrierensParty.jpg";
import Fruits from "./assets/Fruits.jpg";
import Fullmetal from "./assets/Fullmetal.jpg";
import Gosick from "./assets/Gosick.jpg";
import Gurren from "./assets/Gurren.jpg";
import Hero from "./assets/Hero.jpg";
import Inuyasha from "./assets/Inuyasha.jpg";
import Jujutsu from "./assets/Jujutsu.jpg";
import KaguyaSama from "./assets/KaguyaSama.jpg";
import KaguyaSamaLogo from "./assets/KaguyaSamaLogo.png";
import Kaiju from "./assets/Kaiju.jpg";
import Kamisama from "./assets/Kamisama.jpg";
import Lazarus from "./assets/Lazarus.jpg";
import Mermaid from "./assets/Mermaid.jpg";
import MushiShi from "./assets/MushiShi.jpg";
import MyHappyMarriage from "./assets/MyHappyMarriage.jpg";
import Naruto from "./assets/Naruto.jpg";
import NarutoShippuden from "./assets/NarutoShippuden.jpg";
import NoDoubt from "./assets/NoDoubt.jpg";
import OnePunch from "./assets/OnePunch.jpg";
import placeholder from "./assets/placeholder.jpg";
import PsychicPrincess from "./assets/PsychicPrincess.jpg";
import Raeliana from "./assets/Raeliana.jpg";
import Ranma from "./assets/Ranma.jpg";
import Raven from "./assets/Raven.jpg";
import Saiunkoku from "./assets/Saiunkoku.jpg";
import Samurai from "./assets/Samurai.jpg";
import Seventh from "./assets/Seventh.jpg";
import SpyXFamily from "./assets/SpyXFamily.jpg";
import SnowWhite from "./assets/SnowWhite.jpg";
import Solo from "./assets/Solo.jpg";
import Steins from "./assets/Steins.jpg";
import Stone from "./assets/Stone.jpg";
import TheRose from "./assets/TheRose.jpg";
import Trigun from "./assets/Trigun.jpg";
import VinlandSaga from "./assets/VinlandSaga.jpg";
import Yona from "./assets/Yona.jpg";

export interface Anime {
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
  longDescription?: string | React.ReactNode;
  isMaomaoRecommendation?: boolean;
  hasSterlingSeen?: boolean;
  hasDawnSeen?: boolean;
  objectPosition?: string;
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
    longDescription: (
      <>
        Centuries ago, mankind was slaughtered to near extinction by monstrous
        humanoid creatures called Titans, forcing humans to hide in fear behind
        enormous concentric walls. What makes these giants truly terrifying is
        that their taste for human flesh is not born out of hunger but what
        appears to be out of pleasure. To ensure their survival, the remnants of
        humanity began living within defensive barriers, resulting in one
        hundred years without a single titan encounter. However, that fragile
        calm is soon shattered when a colossal Titan manages to breach the
        supposedly impregnable outer wall, reigniting the fight for survival
        against the man-eating abominations.
        <br />
        <br />
        After witnessing a horrific personal loss at the hands of the invading
        creatures, Eren Yeager dedicates his life to their eradication by
        enlisting into the Survey Corps, an elite military unit that combats the
        merciless humanoids outside the protection of the walls. Eren, his
        adopted sister Mikasa Ackerman, and his childhood friend Armin Arlert
        join the brutal war against the Titans and race to discover a way of
        defeating them before the last walls are breached.
      </>
    ),
    hasDawnSeen: true,
    hasSterlingSeen: true,
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
    longDescription: (
      <>
        After a horrific alchemy experiment goes wrong in the Elric household,
        brothers Edward and Alphonse are left in a catastrophic new reality.
        Ignoring the alchemical principle banning human transmutation, the boys
        attempted to bring their recently deceased mother back to life. Instead,
        they suffered brutal personal loss: Alphonse's body disintegrated while
        Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in
        the physical realm by binding it to a hulking suit of armor.
        <br />
        <br />
        The brothers are rescued by their neighbor Pinako Rockbell and her
        granddaughter Winry. Known as a bio-mechanical engineering prodigy,
        Winry creates prosthetic limbs for Edward by utilizing "automail," a
        tough, versatile metal used in robots and combat armor. After years of
        training, the Elric brothers set off on a quest to restore their bodies
        by locating the Philosopher's Stone—a powerful gem that allows an
        alchemist to defy the traditional laws of Equivalent Exchange.
        <br />
        <br />
        As Edward becomes an infamous alchemist and gains the nickname
        "Fullmetal," the boys' journey embroils them in a growing conspiracy
        that threatens the fate of the world.
      </>
    ),
    hasDawnSeen: true,
    hasSterlingSeen: true,
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
    longDescription: (
      <>
        The seemingly unimpressive Saitama has a rather unique hobby: being a
        hero. In order to pursue his childhood dream, Saitama relentlessly
        trained for three years, losing all of his hair in the process. Now,
        Saitama is so powerful, he can defeat any enemy with just one punch.
        However, having no one capable of matching his strength has led Saitama
        to an unexpected problem—he is no longer able to enjoy the thrill of
        battling and has become quite bored.
        <br />
        <br />
        One day, Saitama catches the attention of 19-year-old cyborg Genos, who
        witnesses his power and wishes to become Saitama's disciple. Genos
        proposes that the two join the Hero Association in order to become
        certified heroes that will be recognized for their positive
        contributions to society. Saitama, who is shocked that no one knows who
        he is, quickly agrees. Meeting new allies and taking on new foes,
        Saitama embarks on a new journey as a member of the Hero Association to
        experience the excitement of battle he once felt.
      </>
    ),

    hasSterlingSeen: true,
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
    longDescription: (
      <>
        The appearance of "quirks," newly discovered super powers, has been
        steadily increasing over the years, with 80 percent of humanity
        possessing various abilities from manipulation of elements to
        shapeshifting. This leaves the remainder of the world completely
        powerless, and Izuku Midoriya is one such individual.
        <br />
        <br />
        Since he was a child, the ambitious middle schooler has wanted nothing
        more than to be a hero. Izuku's unfair fate leaves him admiring heroes
        and taking notes on them whenever he can. But it seems that his
        persistence has borne some fruit: Izuku meets the number one hero and
        his personal idol, All Might. All Might's quirk is a unique ability that
        can be inherited, and he has chosen Izuku to be his successor!
        <br />
        <br />
        Enduring many months of grueling training, Izuku enrolls in UA High, a
        prestigious high school famous for its excellent hero training program,
        and this year's freshmen look especially promising. With his bizarre but
        talented classmates and the looming threat of a villainous organization,
        Izuku will soon learn what it really means to be a hero.
      </>
    ),
    hasDawnSeen: true,
    hasSterlingSeen: true,
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
    longDescription: (
      <>
        Moments before Naruto Uzumaki's birth, a huge demon known as the
        Nine-Tailed Fox attacked Konohagakure, the Hidden Leaf Village, and
        wreaked havoc. In order to put an end to the demon's rampage, the leader
        of the village, the Fourth Hokage, sacrificed his life and sealed the
        monstrous beast inside the newborn Naruto.
        <br />
        <br />
        In the present, Naruto is a hyperactive and knuckle-headed ninja growing
        up within Konohagakure. Shunned because of the demon inside him, Naruto
        struggles to find his place in the village. His one burning desire to
        become the Hokage and be acknowledged by the villagers who despise him.
        However, while his goal leads him to unbreakable bonds with lifelong
        friends, it also lands him in the crosshairs of many deadly foes.
      </>
    ),
    hasDawnSeen: true,
    hasSterlingSeen: true,
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
    longDescription: (
      <>
        Idly indulging in baseless paranormal activities with the Occult Club,
        high schooler Yuuji Itadori spends his days at either the clubroom or
        the hospital, where he visits his bedridden grandfather. However, this
        leisurely lifestyle soon takes a turn for the strange when he
        unknowingly encounters a cursed item. Triggering a chain of supernatural
        occurrences, Yuuji finds himself suddenly thrust into the world of
        Curses—dreadful beings formed from human malice and negativity—after
        swallowing the said item, revealed to be a finger belonging to the demon
        Sukuna Ryoumen, the King of Curses.
        <br />
        <br />
        Yuuji experiences first-hand the threat these Curses pose to society as
        he discovers his own newfound powers. Introduced to the Tokyo
        Prefectural Jujutsu High School, he begins to walk down a path from
        which he cannot return—the path of a Jujutsu sorcerer.
      </>
    ),
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
    longDescription: (
      <>
        Eccentric scientist Rintarou Okabe has a never-ending thirst for
        scientific exploration. Together with his ditzy but well-meaning friend
        Mayuri Shiina and his roommate Itaru Hashida, Okabe founds the Future
        Gadget Laboratory in the hopes of creating technological innovations
        that baffle the human psyche. Despite claims of grandeur, the only
        notable 'gadget' the trio have created is a microwave that has the
        mystifying power to turn bananas into green goo.
        <br />
        <br />
        However, when Okabe attends a conference on time travel, he experiences
        a series of strange events that lead him to believe that there is more
        to the 'Phone Microwave' gadget than meets the eye. Apparently able to
        send text messages into the past using the microwave, Okabe dabbles
        further with the 'time machine,' attracting the ire and attention of the
        mysterious organization SERN.
        <br />
        <br />
        Due to the novel discovery, Okabe and his friends find themselves in an
        ever-present danger. As he works to mitigate the damage his invention
        has caused to the timeline, Okabe fights a battle to not only save his
        loved ones but also to preserve his degrading sanity.
      </>
    ),
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
    longDescription: (
      <>
        It has been two and a half years since Naruto Uzumaki left Konohagakure,
        the Hidden Leaf Village, for intense training following events which
        fueled his desire to be stronger. Now Akatsuki, the mysterious
        organization of elite rogue ninja, is closing in on their grand plan
        which may threaten the safety of the entire shinobi world.
        <br />
        <br />
        Although Naruto is older and sinister events loom on the horizon, he has
        changed little in personality—still rambunctious and childish—though he
        is now far more confident and possesses an even greater determination to
        protect his friends and home. Come whatever may, Naruto will carry on
        with the fight for what is important to him, even at the expense of his
        own body, in the continuation of the saga about the boy who wishes to
        become Hokage.
      </>
    ),
    hasSterlingSeen: true,
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
    longDescription: (
      <>
        Tucked in the mountains near the elite Kunugigaoka Middle School lies a
        small derelict building that houses the delinquents and dropouts of
        Class 3-E. Looked down upon by their peers, the students in this class
        appear to have little hope in advancing their academic careers. That is,
        until the national government tasks them with eliminating the greatest
        threat to their planet: their new teacher.
        <br />
        <br />
        Having already destroyed the moon, the octopus-like professor—dubbed
        "Koro-sensei"—has now threatened to destroy the Earth by March of the
        following year. In light of their mission, the students have found that
        killing him is easier said than done. Not only can Koro-sensei move at
        speeds of up to Mach 20, but he can also resist almost every earthly
        weapon. Ironically, he also proves to be one of the best teachers Class
        3-E has ever had. Training the class to excel in both their studies as
        students and skills as assassins, Koro-sensei is confident that his
        students' ingenuity and indomitable will could return them to the main
        campus.
        <br />
        <br />
        Through trial and error, Nagisa Shiota, as well as the other students of
        Class 3-E, must figure out Koro-sensei's weaknesses—and fast, for the
        very fate of the world depends upon it.
      </>
    ),
    hasDawnSeen: true,
    hasSterlingSeen: true,
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
    longDescription: (
      <>
        Fifteen years after a cataclysmic event known as the Second Impact, the
        world faces a new threat: monstrous celestial beings called Angels
        invade Tokyo-3 one by one. Mankind is unable to defend themselves
        against the Angels despite utilizing their most advanced munitions and
        military tactics. The only hope for human salvation rests in the hands
        of NERV, a mysterious organization led by the cold Gendou Ikari. NERV
        operates giant humanoid robots dubbed "Evangelions" to combat the Angels
        with state-of-the-art advanced weaponry and protective barriers known as
        Absolute Terror Fields.
        <br />
        <br />
        Years after being abandoned by his father, Shinji Ikari, Gendou's
        14-year-old son, returns to Tokyo-3. Shinji undergoes a perpetual
        internal battle against the deeply buried trauma caused by the loss of
        his mother and the emotional neglect he suffered at the hands of his
        father. Terrified to open himself up to another, Shinji's life is
        forever changed upon meeting 29-year-old Misato Katsuragi, a
        high-ranking NERV officer who shows him a free-spirited maternal
        kindness he has never experienced.
        <br />
        <br />A devastating Angel attack forces Shinji into action as Gendou
        reveals his true motive for inviting his son back to Tokyo-3: Shinji is
        the only child capable of efficiently piloting Evangelion Unit-01, a new
        robot that synchronizes with his biometrics. Despite the brutal
        psychological trauma brought about by piloting an Evangelion, Shinji
        defends Tokyo-3 against the angelic threat, oblivious to his father's
        dark machinations.
      </>
    ),
    hasSterlingSeen: true,
  },
  {
    title: "Dr. Stone",
    year: 2019,
    episodes: 70,
    rating: 8.26,
    ratingOutOf: 1131005,
    rank: 332,
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
    longDescription: (
      <>
        After five years of harboring unspoken feelings, high-schooler Taiju
        Ooki is finally ready to confess his love to Yuzuriha Ogawa. Just when
        Taiju begins his confession however, a blinding green light strikes the
        Earth and petrifies mankind around the world—turning every single human
        into stone.
        <br />
        <br />
        Several millennia later, Taiju awakens to find the modern world
        completely nonexistent, as nature has flourished in the years humanity
        stood still. Among a stone world of statues, Taiju encounters one other
        living human: his science-loving friend Senkuu, who has been active for
        a few months. Taiju learns that Senkuu has developed a grand scheme—to
        launch the complete revival of civilization with science. Taiju's brawn
        and Senkuu's brains combine to forge a formidable partnership, and they
        soon uncover a method to revive those petrified.
        <br />
        <br />
        However, Senkuu's master plan is threatened when his ideologies are
        challenged by those who awaken. All the while, the reason for mankind's
        petrification remains unknown.
      </>
    ),
    hasDawnSeen: true,
    hasSterlingSeen: true,
  },
  {
    title: "Chainsaw Man",
    year: 2022,
    episodes: 12,
    rating: 8.45,
    ratingOutOf: 1008347,
    rank: 175,
    popularity: 58,
    picture: ChainsawManMovie.src,
    tags: ["Dark Fantasy", "Shōnen", "Action", "Comedy", "Fantasy"],
    shortDescription:
      "Following a betrayal, a young man left for dead is reborn as a powerful devil-human hybrid after merging with his pet devil and is soon enlisted into an organization dedicated to hunting devils.",
    longDescription: (
      <>
        Denji is robbed of a normal teenage life, left with nothing but his
        deadbeat father's overwhelming debt. His only companion is his pet, the
        chainsaw devil Pochita, with whom he slays devils for money that
        inevitably ends up in the yakuza's pockets. All Denji can do is dream of
        a good, simple life: one with delicious food and a beautiful girlfriend
        by his side. But an act of greedy betrayal by the yakuza leads to
        Denji's brutal, untimely death, crushing all hope of him ever achieving
        happiness.
        <br />
        <br />
        Remarkably, an old contract allows Pochita to merge with the deceased
        Denji and bestow devil powers on him, changing him into a hybrid able to
        transform his body parts into chainsaws. Because Denji's new abilities
        pose a significant risk to society, the Public Safety Bureau's elite
        devil hunter Makima takes him in, letting him live as long as he obeys
        her command. Guided by the promise of a content life alongside an
        attractive woman, Denji devotes everything and fights with all his might
        to make his naive dreams a reality.
      </>
    ),
    hasSterlingSeen: true,
  },
  {
    title: "Spy x Family",
    year: 2022,
    episodes: 38,
    rating: 8.45,
    ratingOutOf: 1086053,
    rank: 180,
    popularity: 60,
    picture: SpyXFamily.src,
    tags: ["Shōnen", "Slice of Life", "Spy", "Action", "Comedy", "Thriller"],
    shortDescription:
      "A spy on an undercover mission gets married and adopts a child as part of his cover. His wife and daughter have secrets of their own, and all three must strive to keep together.",
    longDescription: (
      <>
        Corrupt politicians, frenzied nationalists, and other warmongering
        forces constantly jeopardize the thin veneer of peace between
        neighboring countries Ostania and Westalis. In spite of their plots,
        renowned spy and master of disguise "Twilight" fulfills dangerous
        missions one after another in the hope that no child will have to
        experience the horrors of war.
        <br />
        <br />
        In the bustling Ostanian city of Berlint, Twilight dons the alias of
        "Loid Forger," an esteemed psychiatrist. However, his true intention is
        to gather intelligence on prominent politician Donovan Desmond, who only
        appears rarely in public at his sons' school: the prestigious Eden
        Academy. Enlisting the help of unmarried city hall clerk Yor Briar to
        act as his wife and adopting the curious six-year-old orphan Anya as his
        daughter, Loid enacts his master plan. He will enroll Anya in Eden
        Academy, where Loid hopes she will excel and give him the opportunity to
        meet Donovan without arousing suspicion.
        <br />
        <br />
        Unfortunately for Loid, even a man of his talents has trouble playing
        the figure of a loving father and husband. And just like Loid is hiding
        his true identity, Yor—who is an underground assassin known as "Thorn
        Princess"—and Anya—an esper who can read people's minds—have no plans to
        disclose their own secrets either. Although this picture-perfect family
        is founded on deception, the Forgers gradually come to understand that
        the love they share for one another trumps all else.
      </>
    ),
    isMaomaoRecommendation: true,
  },
  {
    title: "Gurren Lagann",
    year: 2007,
    episodes: 28,
    rating: 8.64,
    ratingOutOf: 945077,
    rank: 82,
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
    longDescription: (
      <>
        Simon and Kamina were born and raised in a deep, underground village,
        hidden from the fabled surface. Kamina is a free-spirited loose cannon
        bent on making a name for himself, while Simon is a timid young boy with
        no real aspirations. One day while excavating the earth, Simon stumbles
        upon a mysterious object that turns out to be the ignition key to an
        ancient artifact of war, which the duo dubs Lagann. Using their new
        weapon, Simon and Kamina fend off a surprise attack from the surface
        with the help of Yoko Littner, a hot-blooded redhead wielding a massive
        gun who wanders the world above.
        <br />
        <br />
        In the aftermath of the battle, the sky is now in plain view, prompting
        Simon and Kamina to set off on a journey alongside Yoko to explore the
        wastelands of the surface. Soon, they join the fight against the
        'Beastmen,' humanoid creatures that terrorize the remnants of humanity
        in powerful robots called 'Gunmen.' Although they face some challenges
        and setbacks, the trio bravely fights these new enemies alongside other
        survivors to reclaim the surface, while slowly unraveling a galaxy-sized
        mystery.
      </>
    ),
    hasSterlingSeen: true,
    hasDawnSeen: true,
  },
  {
    title: "Vinland Saga",
    year: 2019,
    episodes: 48,
    rating: 8.77,
    ratingOutOf: 987208,
    rank: 41,
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
    longDescription: (
      <>
        Young Thorfinn grew up listening to the stories of old sailors that had
        traveled the ocean and reached the place of legend, Vinland. It's said
        to be warm and fertile, a place where there would be no need for
        fighting—not at all like the frozen village in Iceland where he was
        born, and certainly not like his current life as a mercenary. War is his
        home now. Though his father once told him, "You have no enemies, nobody
        does. There is nobody who it's okay to hurt," as he grew, Thorfinn knew
        that nothing was further from the truth.
        <br />
        <br />
        The war between England and the Danes grows worse with each passing
        year. Death has become commonplace, and the viking mercenaries are
        loving every moment of it. Allying with either side will cause a massive
        swing in the balance of power, and the vikings are happy to make names
        for themselves and take any spoils they earn along the way. Among the
        chaos, Thorfinn must take his revenge and kill Askeladd, the man who
        murdered his father. The only paradise for the vikings, it seems, is the
        era of war and death that rages on.
      </>
    ),
    hasDawnSeen: true,
    hasSterlingSeen: true,
  },
  {
    title: "Kaguya-sama: Love is War",
    year: 2019,
    episodes: 43,
    rating: 8.4,
    ratingOutOf: 1167904,
    rank: 209,
    popularity: 51,
    picture: KaguyaSama.src,
    tags: [
      "Romantic Comedy",
      "Seinen",
      "Slice of Life",
      "Teen Romance",
      "Comedy",
      "Romance",
    ],
    shortDescription:
      "The proudly privileged top two students of an elite school each makes it their mission to be the first to extract a confession of love from the other.",
    longDescription: (
      <>
        At the renowned Shuchiin Academy, Miyuki Shirogane and Kaguya Shinomiya
        are the student body's top representatives. Ranked the top student in
        the nation and respected by peers and mentors alike, Miyuki serves as
        the student council president. Alongside him, the vice president
        Kaguya—eldest daughter of the wealthy Shinomiya family—excels in every
        field imaginable. They are the envy of the entire student body, regarded
        as the perfect couple.
        <br />
        <br />
        However, despite both having already developed feelings for the other,
        neither are willing to admit them. The first to confess loses, will be
        looked down upon, and will be considered the lesser. With their honor
        and pride at stake, Miyuki and Kaguya are both equally determined to be
        the one to emerge victorious on the battlefield of love!
      </>
    ),
    isMaomaoRecommendation: true,
  },
  {
    title: "Samurai Champloo",
    year: 2004,
    episodes: 26,
    rating: 8.52,
    ratingOutOf: 667649,
    rank: 137,
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
    shortDescription: `Fuu, a waitress who works in a teahouse, rescues two master swordsmen, Mugen and Jin, from their execution to help her find the "samurai who smells of sunflowers."`,
    longDescription: (
      <>
        Fuu Kasumi is a young and clumsy waitress who spends her days peacefully
        working in a small teahouse. That is, until she accidentally spills a
        drink all over one of her customers! With a group of samurai now
        incessantly harassing her, Fuu desperately calls upon another samurai in
        the shop, Mugen, who quickly defeats them with his wild fighting
        technique, utilizing movements reminiscent to that of breakdancing.
        Unfortunately, Mugen decides to pick a fight with the unwilling ronin
        Jin, who wields a more precise and traditional style of swordfighting,
        and the latter proves to be a formidable opponent. The only problem is,
        they end up destroying the entire shop as well as accidentally killing
        the local magistrate's son.
        <br />
        <br />
        For their crime, the two samurai are captured and set to be executed.
        However, they are rescued by Fuu, who hires the duo as her bodyguards.
        Though she no longer has a place to return to, the former waitress
        wishes to find a certain samurai who smells of sunflowers and enlists
        the help of the now exonerated pair to do so. Despite initially
        disapproving of this idea, the two eventually agree to assist the girl
        in her quest; thus, the trio embark upon an adventure to find this
        mysterious warrior—that is, if Fuu can keep Mugen and Jin from killing
        each other.
        <br />
        <br />
        Set in an alternate Edo Period of Japan, Samurai Champloo follows the
        journey of these three eccentric individuals in an epic quest full of
        action, comedy, and dynamic sword fighting, all set to the beat of a
        unique hip-hop infused soundtrack.
      </>
    ),
    hasDawnSeen: true,
    hasSterlingSeen: true,
  },
  {
    title: "Frieren: Beyond Journey's End",
    year: 2023,
    episodes: 29,
    rating: 9.3,
    ratingOutOf: 697140,
    rank: 1,
    popularity: 137,
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
    shortDescription:
      "Elf mage Frieren and her fellow adventurers have defeated the Demon King and brought peace to the land. But Frieren will long outlive the rest of her former party. How will she come to understand what life means to the people around her?",
    longDescription: (
      <>
        During their decade-long quest to defeat the Demon King, the members of
        the hero's party—Himmel himself, the priest Heiter, the dwarf warrior
        Eisen, and the elven mage Frieren—forge bonds through adventures and
        battles, creating unforgettable precious memories for most of them.
        <br />
        <br />
        However, the time that Frieren spends with her comrades is equivalent to
        merely a fraction of her life, which has lasted over a thousand years.
        When the party disbands after their victory, Frieren casually returns to
        her "usual" routine of collecting spells across the continent. Due to
        her different sense of time, she seemingly holds no strong feelings
        toward the experiences she went through.
        <br />
        <br />
        As the years pass, Frieren gradually realizes how her days in the hero's
        party truly impacted her. Witnessing the deaths of two of her former
        companions, Frieren begins to regret having taken their presence for
        granted; she vows to better understand humans and create real personal
        connections. Although the story of that once memorable journey has long
        ended, a new tale is about to begin.
      </>
    ),
    hasDawnSeen: true,
    hasSterlingSeen: true,
  },
  {
    title: "Solo Leveling",
    year: 2024,
    episodes: 26,
    rating: 8.25,
    ratingOutOf: 605804,
    rank: 345,
    popularity: 178,
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
    shortDescription:
      "Follows the adventures of Sung Jinwoo in a world that is constantly threatened by monsters and evil forces. In his battles Sung transforms himself from the weakest hunter of all mankind to one of the strongest hunters in existence.",
    longDescription: (
      <>
        Humanity was caught at a precipice a decade ago when the first
        gates—portals linked with other dimensions that harbor monsters immune
        to conventional weaponry—emerged around the world. Alongside the
        appearance of the gates, various humans were transformed into hunters
        and bestowed superhuman abilities. Responsible for entering the gates
        and clearing the dungeons within, many hunters chose to form guilds to
        secure their livelihoods.
        <br />
        <br />
        Sung Jin-Woo is an E-rank hunter dubbed as the weakest hunter of all
        mankind. While exploring a supposedly safe dungeon, he and his party
        encounter an unusual tunnel leading to a deeper area. Enticed by the
        prospect of treasure, the group presses forward, only to be confronted
        with horrors beyond their imagination. Miraculously, Jin-Woo survives
        the incident and soon finds that he now has access to an interface
        visible only to him. This mysterious system promises him the power he
        has long dreamed of—but everything comes at a price.
      </>
    ),
    hasDawnSeen: true,
    hasSterlingSeen: true,
  },
  {
    title: "Kaiju No. 8",
    year: 2024,
    episodes: 17,
    rating: 8.27,
    ratingOutOf: 359515,
    rank: 330,
    popularity: 376,
    picture: Kaiju.src,
    tags: [
      "Kaiju",
      "Shōnen",
      "Superhero",
      "Urban Adventure",
      "Action",
      "Adventure",
      "Sci-Fi",
    ],
    shortDescription:
      "A man working a job far removed from his childhood dreams gets wrapped up in an unexpected situation - becoming a monster, he aims once again to fulfill his lifelong dream.",
    longDescription: (
      <>
        After the destruction of their hometown, childhood friends Kafka Hibino
        and Mina Ashiro make a pact to become officers in the Defense Force—a
        militarized organization tasked with protecting Japan from colossal
        monsters known as "kaijuu." Decades later, the 32-year-old Kafka has all
        but given up on his dreams of heroism. Instead, he cleans up the remains
        of the slaughtered kaijuu after they are defeated by valiant
        soldiers—including Mina, who has successfully achieved their shared
        goal. <br />
        <br />
        Upon meeting his new coworker, Reno Ichikawa, Kafka faces a mirror of
        his past self: an ambitious young man whose one desire is to fight as a
        member of the Defense Force. Unfortunately, the two are soon involved in
        a freak encounter with a rogue kaijuu. Though Kafka demonstrates his
        innate heroic nature and rescues Reno from certain doom, he is left
        gravely injured. <br />
        <br />
        While both men recover in a hospital, Kafka is seemingly attacked by
        another one of the beasts. As a result, he gains the ability to
        transform into a humanoid kaijuu with the strength and powers of the
        massive monsters menacing Japan. Dubbed "Kaijuu No. 8" by the military,
        Kafka resolves to use his newfound gifts for the greater good. Tied
        together by mutual respect, Kafka and Reno set out to join warriors like
        Mina at the forefront of the Defense Force.
      </>
    ),
    objectPosition: "30% 50%",
  },
  {
    title: "Yona of the Dawn",
    year: 2014,
    episodes: 24,
    rating: 8.03,
    ratingOutOf: 439539,
    rank: 638,
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
    shortDescription:
      "Princess Yona makes a new life after fleeing the palace when the man she loves kills her father.",
    longDescription: (
      <>
        The kingdom of Kouka is blessed with a beautiful princess whose
        childlike innocence charms all who come across her. Named Yona, she has
        grown up sheltered in the royal palace, shielded from any danger that
        may befall her. However, all good things must come to an end.
        <br />
        <br />
        Yona's perfect world comes crashing down when a heinous act of treason
        threatens to erase all that she holds dear, including her birthright as
        the princess of Kouka. Left with no one to trust but her childhood
        friend and loyal bodyguard Son Hak, she is forced to flee the palace.
        Faced with the perils of surviving in the wild with a target on her
        back, Yona realizes that her kingdom is no longer the safe haven it once
        was.
        <br />
        <br />
        Free from the shackles of naivety, Yona vows to do everything in her
        power to become strong enough to crush her enemies. With Hak by her
        side, she must piece together the remains of an ancient legend that
        might be the key to reclaiming her kingdom from those who conspired to
        steal it from her.
      </>
    ),
    hasDawnSeen: true,
    hasSterlingSeen: true,
    isMaomaoRecommendation: true,
  },
  {
    title: "Fruits Basket",
    year: 2019,
    episodes: 63,
    rating: 8.21,
    ratingOutOf: 431195,
    rank: 391,
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
    longDescription: (
      <>
        Tooru Honda has always been fascinated by the story of the Chinese
        zodiac that her beloved mother told her as a child. However, a sudden
        family tragedy changes her life, and subsequent circumstances leave her
        all alone. Tooru is now forced to live in a tent, but little does she
        know that her temporary home resides on the private property of the
        esteemed Souma family. Stumbling upon their home one day, she encounters
        Shigure, an older Souma cousin, and Yuki, the "prince" of her school.
        Tooru explains that she lives nearby, but the Soumas eventually discover
        her well-kept secret of being homeless when they see her walking back to
        her tent one night.
        <br />
        <br />
        Things start to look up for Tooru as they kindly offer to take her in
        after hearing about her situation. But soon after, she is caught up in a
        fight between Yuki and his hot-tempered cousin, Kyou. While trying to
        stop them, she learns that the Souma family has a well-kept secret of
        their own: whenever they are hugged by a member of the opposite sex,
        they transform into the animals of the Chinese zodiac.
        <br />
        <br />
        With this new revelation, Tooru will find that living with the Soumas is
        an unexpected adventure filled with laughter and romance.
      </>
    ),
    isMaomaoRecommendation: true,
    hasDawnSeen: true,
    hasSterlingSeen: true,
  },
  {
    title: "Mushi-Shi",
    year: 2005,
    episodes: 27,
    rating: 8.65,
    ratingOutOf: 291067,
    rank: 78,
    popularity: 225,
    picture: MushiShi.src,
    tags: [
      "Iyashikei",
      "Seinen",
      "Supernatural Fantasy",
      "Tragedy",
      "Drama",
      "Fantasy",
      "Horror",
    ],
    shortDescription:
      "Mushi Master Ginko travels from place to place investigating occurrences that could be tied to supernatural creatures called Mushi.",
    longDescription: (
      <>
        "Mushi": the most basic forms of life in the world. They exist without
        any goals or purposes aside from simply "being." They are beyond the
        shackles of the words "good" and "evil." Mushi can exist in countless
        forms and are capable of mimicking things from the natural world such as
        plants, diseases, and even phenomena like rainbows.
        <br />
        <br />
        This is, however, just a vague definition of these entities that inhabit
        the vibrant world of Mushishi, as to even call them a form of life would
        be an oversimplification. Detailed information on Mushi is scarce
        because the majority of humans are unaware of their existence.
        <br />
        <br />
        So what are Mushi and why do they exist? This is the question that a
        "Mushishi," Ginko, ponders constantly. Mushishi are those who research
        Mushi in hopes of understanding their place in the world's hierarchy of
        life.
        <br />
        <br />
        Ginko chases rumors of occurrences that could be tied to Mushi, all for
        the sake of finding an answer.
        <br />
        <br />
        It could, after all, lead to the meaning of life itself.
      </>
    ),
    isMaomaoRecommendation: true,
  },
  {
    title: "Inuyasha",
    year: 2000,
    episodes: 167,
    rating: 7.87,
    ratingOutOf: 407291,
    rank: 906,
    popularity: 247,
    picture: Inuyasha.src,
    tags: [
      "Shōnen",
      "Supernatural Fantasy",
      "Teen Fantasy",
      "Teen Romance",
      "Action",
      "Adventure",
      "Comedy",
    ],
    shortDescription:
      "A teenage girl periodically travels back in time to feudal Japan to help a young half-demon recover the shards of a jewel of great power.",
    longDescription: (
      <>
        Kagome Higurashi's 15th birthday takes a sudden turn when she is
        forcefully pulled by a demon into the old well of her family's shrine.
        Brought to the past, when demons were a common sight in feudal Japan,
        Kagome finds herself persistently hunted by these vile creatures, all
        yearning for an item she unknowingly carries: the Shikon Jewel, a small
        sphere holding extraordinary power.
        <br />
        <br />
        Amid such a predicament, Kagome encounters a half-demon boy named
        Inuyasha who mistakes her for Kikyou, a shrine maiden he seems to
        resent. Because of her resemblance to Kikyou, Inuyasha takes a violent
        dislike to Kagome. However, after realizing the dire circumstances they
        are both in, he sets aside his hostility and lends her a hand.
        <br />
        <br />
        Unfortunately, during a fight for the Shikon Jewel, the miraculous
        object ends up shattered into pieces and scattered across the land.
        Fearing the disastrous consequences of this accident, Kagome and
        Inuyasha set out on a challenging quest to recover the shards before
        they fall into the wrong hands.
      </>
    ),
    hasSterlingSeen: true,
  },
  {
    title: "Trigun",
    year: 1998,
    episodes: 26,
    rating: 8.22,
    ratingOutOf: 390294,
    rank: 379,
    popularity: 261,
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
    longDescription: (
      <>
        Vash the Stampede is the man with a $$60,000,000,000 bounty on his head.
        The reason: he's a merciless villain who lays waste to all those that
        oppose him and flattens entire cities for fun, garnering him the title
        "The Humanoid Typhoon." He leaves a trail of death and destruction
        wherever he goes, and anyone can count themselves dead if they so much
        as make eye contact—or so the rumors say. In actuality, Vash is a huge
        softie who claims to have never taken a life and avoids violence at all
        costs.
        <br />
        <br />
        With his crazy doughnut obsession and buffoonish attitude in tow, Vash
        traverses the wasteland of the planet Gunsmoke, all the while followed
        by two insurance agents, Meryl Stryfe and Milly Thompson, who attempt to
        minimize his impact on the public. But soon, their misadventures evolve
        into life-or-death situations as a group of legendary assassins are
        summoned to bring about suffering to the trio. Vash's agonizing past
        will be unraveled and his morality and principles pushed to the breaking
        point.
      </>
    ),
    hasSterlingSeen: true,
  },
  {
    title: "Dandadan",
    year: 2024,
    episodes: 24,
    rating: 8.49,
    ratingOutOf: 457350,
    rank: 152,
    popularity: 277,
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
    shortDescription:
      "When Momo and Okarun's beliefs clash, they're thrown into a world of ghosts, aliens and awakened powers. ",
    longDescription: (
      <>
        Reeling from her recent breakup, Momo Ayase, a popular high schooler,
        shows kindness to her socially awkward schoolmate, Ken Takakura, by
        standing up to his bullies. Ken misunderstands her intentions, believing
        he has made a new friend who shares his obsession with aliens and UFOs.
        However, Momo's own eccentric occult beliefs lie in the supernatural
        realm; she thinks aliens do not exist. A rivalry quickly brews as each
        becomes determined to prove the other wrong.
        <br />
        <br />
        Despite their initial clash over their opposing beliefs, Momo and Ken
        form an unexpected but intimate friendship, a bond forged in a series of
        supernatural battles and bizarre encounters with urban legends and
        paranormal entities. As both develop unique superhuman abilities, they
        learn to supplement each other's weaknesses, leading them to wonder if
        their newfound partnership may be about more than just survival.
      </>
    ),
    hasDawnSeen: true,
    hasSterlingSeen: true,
  },
  {
    title: "Snow White with the Red Hair",
    year: 2015,
    episodes: 25,
    rating: 7.76,
    ratingOutOf: 350971,
    rank: 1158,
    popularity: 309,
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
    longDescription: (
      <>
        Although her name means "snow white," Shirayuki is a cheerful,
        red-haired girl living in the country of Tanbarun who works diligently
        as an apothecary at her herbal shop. Her life changes drastically when
        she is noticed by the silly prince of Tanbarun, Prince Raji, who then
        tries to force her to become his concubine. Unwilling to give up her
        freedom, Shirayuki cuts her long red hair and escapes into the forest,
        where she is rescued from Raji by Zen Wistalia, the second prince of a
        neighboring country, and his two aides. Hoping to repay her debt to the
        trio someday, Shirayuki sets her sights on pursuing a career as the
        court herbalist in Zen's country, Clarines.
        <br />
        <br />
        Akagami no Shirayuki-hime depicts Shirayuki's journey toward a new life
        at the royal palace of Clarines, as well as Zen's endeavor to become a
        prince worthy of his title. As loyal friendships are forged and deadly
        enemies formed, Shirayuki and Zen slowly learn to support each other as
        they walk their own paths.
      </>
    ),
    isMaomaoRecommendation: true,
  },
  {
    title: "Kamisama Kiss",
    year: 2012,
    episodes: 31,
    rating: 8.12,
    ratingOutOf: 360286,
    rank: 516,
    popularity: 321,
    picture: Kamisama.src,
    tags: ["Shōjo", "Comedy", "Fantasy", "Romance"],
    shortDescription:
      "Nanami is left homeless after her father runs away due to debts. When she saves a man named Mikage from dogs, he gives her his house which turns out to be a shrine and she becomes the new deity.",
    longDescription: (
      <>
        High schooler Nanami Momozono has quite a few problems of late,
        beginning with her absentee father being in such extreme debt that they
        lose everything. Downtrodden and homeless, she runs into a man being
        harassed by a dog. After helping him, she explains her situation, and to
        her surprise, he offers her his home in gratitude. But when she
        discovers that said home is a rundown shrine, she tries to leave;
        however, she is caught by two shrine spirits and a fox familiar named
        Tomoe. They mistake her for the man Nanami rescued—the land god of the
        shrine, Mikage. Realizing that Mikage must have sent her there as a
        replacement god, Tomoe leaves abruptly, refusing to serve a human.
        <br />
        <br />
        Rather than going back to being homeless, Nanami immerses herself in her
        divine duties. But if she must keep things running smoothly, she will
        need the help of a certain hot-headed fox. In her fumbling attempt to
        seek out Tomoe, she lands in trouble and ends up sealing a contract with
        him. Now the two must traverse the path of godhood together as god and
        familiar; but it will not be easy, for new threats arise in the form of
        a youkai who wants to devour the girl, a snake that wants to marry her,
        and Nanami's own unexpected feelings for her new familiar.
      </>
    ),
    isMaomaoRecommendation: true,
  },
  {
    title: "The Apothecary Diaries",
    year: 2023,
    episodes: 48,
    rating: 8.87,
    ratingOutOf: 371659,
    rank: 26,
    popularity: 337,
    picture: ApothecaryDiaries.src,
    tags: [
      "Medical Drama",
      "Slice of Life",
      "Drama",
      "History",
      "Mystery",
      "Romance",
    ],
    shortDescription:
      "A young maiden is kidnapped and sold into servitude at the emperor's palace, where she secretly employs her pharmacist skills with the help of the head eunuch to unravel medical mysteries in the inner court.",
    longDescription: (
      <>
        Maomao, an apothecary's daughter, has been plucked from her peaceful
        life and sold to the lowest echelons of the imperial court. Now merely a
        maid, Maomao settles into her new mundane life and hides her extensive
        knowledge of medicine in order to avoid any unwanted attention.
        <br />
        <br />
        Not long after Maomao's arrival, the emperor's infant children
        inexplicably begin to experience grave symptoms—almost as if a curse has
        been cast. The curious Maomao easily solves the mystery and, to remain
        out of the limelight, attempts to leave an anonymous tip. Unfortunately,
        the dashing and perceptive eunuch Jinshi sees through it and manages to
        single her out.
        <br />
        <br />
        In recognition of her talent, Maomao is promoted to lady-in-waiting for
        the emperor's favorite concubine, Gyokuyou. As Maomao continues to
        remedy the numerous ailments afflicting the imperial court, her
        pharmaceutical expertise quickly proves indispensable.
      </>
    ),
    hasDawnSeen: true,
    hasSterlingSeen: true,
    isMaomaoRecommendation: true,
  },
  {
    title: "Bleach: Thousand-Year Blood War",
    year: 2022,
    episodes: 41,
    rating: 8.99,
    ratingOutOf: 345172,
    rank: 12,
    popularity: 362,
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
    longDescription: (
      <>
        Substitute Soul Reaper Ichigo Kurosaki spends his days fighting against
        Hollows, dangerous evil spirits that threaten Karakura Town. Ichigo
        carries out his quest with his closest allies: Orihime Inoue, his
        childhood friend with a talent for healing; Yasutora Sado, his high
        school classmate with superhuman strength; and Uryuu Ishida, Ichigo's
        Quincy rival.
        <br />
        <br />
        Ichigo's vigilante routine is disrupted by the sudden appearance of
        Asguiaro Ebern, a dangerous Arrancar who heralds the return of Yhwach,
        an ancient Quincy king. Yhwach seeks to reignite the historic blood feud
        between Soul Reaper and Quincy, and he sets his sights on erasing both
        the human world and the Soul Society for good.
        <br />
        <br />
        Yhwach launches a two-pronged invasion into both the Soul Society and
        Hueco Mundo, the home of Hollows and Arrancar. In retaliation, Ichigo
        and his friends must fight alongside old allies and enemies alike to end
        Yhwach's campaign of carnage before the world itself comes to an end.
      </>
    ),
  },
  {
    title: "Gosick",
    year: 2011,
    episodes: 24,
    rating: 8.04,
    ratingOutOf: 241769,
    rank: 637,
    popularity: 411,
    picture: Gosick.src,
    tags: ["Comedy", "Crime", "Drama", "Mystery", "Romance"],
    shortDescription:
      "A brilliant Japanese student teams up with an enigmatic young female prodigy to unravel mysteries across 1920s Europe, with their sleuthing adventures leading them through a web of intrigue and suspense.",
    longDescription: (
      <>
        Kazuya Kujou is a foreign student at Saint Marguerite Academy, a
        luxurious boarding school in the Southern European country of Sauville.
        Originally from Japan, his jet-black hair and dark brown eyes cause his
        peers to shun him and give him the nickname "Black Reaper," based on a
        popular urban legend about the traveler who brings death in the spring.
        <br />
        <br />
        On a day like any other, Kujou visits the school's extravagant library
        in search of ghost stories. However, his focus soon changes as he
        becomes curious about a golden strand of hair on the stairs. The steps
        lead him to a large garden and a beautiful doll-like girl known as
        Victorique de Blois, whose complex and imaginative foresight allows her
        to predict their futures, now intertwined.
        <br />
        <br />
        With more mysteries quickly developing—including the appearance of a
        ghost ship and an alchemist with the power of transmutation—Victorique
        and Kujou, bound by fate and their unique skills, have no choice but to
        rely on each other.
      </>
    ),
    isMaomaoRecommendation: true,
  },
  {
    title: "Delicious in Dungeon",
    year: 2024,
    episodes: 24,
    rating: 8.6,
    ratingOutOf: 251581,
    rank: 101,
    popularity: 487,
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
    longDescription: (
      <>
        Adventuring knight Laios Touden leads a small party through a seemingly
        endless dungeon, a subterranean maze full of dangerous monsters and
        precarious traps. Through the use of advanced magic, an explorer can
        sometimes be resurrected, allowing them to learn from past mistakes and
        give traversing the dungeon another go. However, when a powerful dragon
        eats Falin, Laios' spellcasting sister, she sends her brother and his
        companions back to the beginning to save them from permanent ends.
        <br />
        <br />
        Though strapped for cash and equipment, Laios resolves to fight his way
        through the dungeon and rescue Falin before she can be digested by the
        dragon. Despite some of Laios' allies abandoning him, two remain by his
        side: elven mage Marcille Donato and halfling locksmith Chilchuck Tims.
        Due to their lack of funds, the party faces the daunting prospect of
        starving before being able to complete their quest. However, they find
        salvation in Senshi, a dwarven warrior with a penchant for cooking and
        safely eating defeated monsters.
        <br />
        <br />
        With Senshi's culinary expertise, Laios and his companions struggle
        through the dungeon while learning about gourmet dining—and each
        other—along the way.
      </>
    ),
  },
  {
    title: "My Happy Marriage",
    year: 2023,
    episodes: 26,
    rating: 7.71,
    ratingOutOf: 178722,
    rank: 1299,
    popularity: 740,
    picture: MyHappyMarriage.src,
    tags: ["Slice of Life", "Drama", "Fantasy", "History", "Romance"],
    shortDescription:
      "An unhappy young woman from an abusive family is married off to a fearsome and chilly army commander. But the two learn more about each other, love may have a chance.",
    longDescription: (
      <>
        Misery seems everlasting in Miyo Saimori's life. Born from an arranged
        marriage, she was quickly discarded after her mother's tragic death. Her
        father remarried, and her younger half-sister Kaya received all the
        affection, while Miyo was degraded to a lowly servant. Lacking the
        strength to fight against her family's abuse, Miyo loses hope that her
        luck will ever turn.
        <br />
        <br />
        Unexpectedly, Miyo's father summons her to deliver surprising news: she
        is to marry Kiyoka Kudou, the head of the distinguished Kudou family.
        Despite his noble background, Kiyoka is known to be a callous man who
        has thus far dismissed all of his former fiancées.
        <br />
        <br />
        Upon arriving at the Kudou household, Miyo expects coarse treatment and
        to be tossed aside. However, contrary to her assumptions, Kiyoka shows
        her the kindness and love that she has desperately needed. Marrying
        Kiyoka may be Miyo's one chance to break free from her neglectful family
        and embrace a life of happiness.
      </>
    ),
    isMaomaoRecommendation: true,
  },
  {
    title: "Ascendance of a Bookworm",
    year: 2019,
    episodes: 37,
    rating: 7.97,
    ratingOutOf: 178391,
    rank: 724,
    popularity: 756,
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
    longDescription: (
      <>
        Urano Motosu loves books and has an endless desire to read literature,
        no matter the subject. She almost fulfills her dream job of becoming a
        librarian before her life is ended in an accident. As she draws her last
        breath, she wishes to be able to read more books in her next life.
        <br />
        <br />
        As if fate was listening to her prayer, she wakes up reincarnated as
        Myne—a frail five-year-old girl living in a medieval era. What
        immediately comes to her mind is her passion. She tries to find
        something to read, only to become frustrated by the lack of books at her
        disposal.
        <br />
        <br />
        Without the printing press, books have to be written and copied by hand,
        making them very expensive; as such, only a few nobles can afford
        them—but this won't stop Myne. She will prove that her will to read is
        unbreakable, and if there are no books around, she will make them
        herself!
      </>
    ),
    isMaomaoRecommendation: true,
  },
  {
    title: "Lazarus",
    year: 2025,
    episodes: 13,
    rating: 7.18,
    ratingOutOf: 49891,
    rank: 3537,
    popularity: 1274,
    picture: Lazarus.src,
    tags: ["Gun Fu", "Action", "Adventure", "Sci-Fi", "Thriller"],
    shortDescription:
      "In 2052, an emergency task force is assembled when a miracle cure is hijacked for purging populations.",
    longDescription: (
      <>
        In the year 2048, Dr. Deniz Skinner, a scientific genius dubbed second
        only to Einstein, developed the revolutionary painkiller Hapna. Being
        cheap with no reported side effects, the drug gained widespread
        acceptance, even though Skinner himself silently vanished one year after
        launching the drug. Everyone revelled in the heaven of relief and
        ecstasy provided by Hapna, but they would suddenly come crashing down to
        Earth. It is now 2052, and Skinner reappears, giving the shocking
        announcement that Hapna was designed to mutate into a lethal toxin,
        killing anyone who had consumed it. While he claims to have a cure, he
        will only hand it over if he is physically found within 30 days.
        <br />
        <br />
        Axel Gilberto, a maverick youngster serving a sentence of 888 years in a
        high-security prison, is unwillingly recruited by a group calling
        themselves Lazarus. Composed of eccentric misfits, the group has only
        one task—to find Skinner. With no means to escape and their lives on the
        line, Lazarus begins the hunt to find Skinner before the countdown to
        the end of humanity ends.
      </>
    ),
    hasDawnSeen: true,
    hasSterlingSeen: true,
  },
  {
    title:
      "7th Time Loop: The Villainess Enjoys a Carefree Life Married to Her Worst Enemy",
    year: 2024,
    episodes: 12,
    rating: 7.52,
    ratingOutOf: 104969,
    rank: 1958,
    popularity: 1282,
    picture: Seventh.src,
    tags: ["Isekai", "Fantasy", "Romance"],
    shortDescription:
      "Rishe is already on her seventh time around being reborn and has had all kinds of excitement in her previous lives. But to savor the high life, she first has to marry the handsome prince, the same one who happens to be her murderer.",
    longDescription: (
      <>
        Rishe Irmgard Weitzner finds herself in a familiar situation: her fiancé
        is publicly breaking off their engagement, and her ducal family is about
        to disown her in shame. However, Rishe is not distraught; she has
        already had six chances to rebuild her life and chase a different
        passion each time. But she would always get swept up in a war and die,
        so now she wishes for her seventh reincarnation to be easygoing and
        uneventful.
        <br />
        <br />
        What Rishe does not take into account is the presence of Arnold Hein,
        the crown prince of the Galkhein Kingdom. He is destined to usurp the
        throne and become a tyrant who starts a large-scale invasion of
        neighboring countries. To make their encounter worse, Arnold is the one
        who killed Rishe in her previous life. That is why it is all the more
        shocking when he proposes to Rishe on the spot. In pursuit of her
        desired life, Rishe must consider accepting Arnold's proposal and
        discover the reasons behind his brutal actions to stop the war from ever
        happening.
      </>
    ),
    isMaomaoRecommendation: true,
  },
  {
    title: "Why Raeliana Ended up at the Duke's Mansion",
    year: 2023,
    episodes: 12,
    rating: 7.53,
    ratingOutOf: 82853,
    rank: 1900,
    popularity: 1447,
    picture: Raeliana.src,
    tags: [
      "Fairy Tale",
      "Isekai",
      "Sword & Sorcery",
      "Drama",
      "Fantasy",
      "Romance",
    ],
    shortDescription:
      "Living in a fairy tale may seem like a dream, but for this young heroine it is more like a nightmare.",
    longDescription: (
      <>
        When, after her sudden death, Rinko Hanasaki is reborn as Raeliana
        McMillan, she is not sure whether to curse her luck. Raeliana was a
        minor character in a novel Rinko read, and as the eldest daughter of a
        nouveau-riche baron, she led a carefree life until her unfortunate
        demise at the hands of her fiancé, Lord Francis Brooks. To avoid her
        destined fate, Raeliana is determined to end her engagement with
        Francis.
        <br />
        <br />
        However, when Francis refuses to break things off, Raeliana decides to
        seek help from someone of higher standing and approaches Duke Noah
        Wynknight—the novel's male protagonist. Using her knowledge of the plot,
        Raeliana captures the duke's interest by proposing a deal: she will not
        expose his secrets if Noah agrees to act as her fiancé. Little does she
        know that getting involved with a duke who only shows his true colors
        around her may lead to more than she bargained for..
      </>
    ),
    isMaomaoRecommendation: true,
  },
  {
    title: "Arte",
    year: 2020,
    episodes: 12,
    rating: 7.2,
    ratingOutOf: 60897,
    rank: 3453,
    popularity: 1776,
    picture: Arte.src,
    tags: ["Drama", "Romance"],
    shortDescription:
      "Arte was born into an aristocratic family in Florence during the 16th century Renaissance era. Being female, it was unheard of for one to become an artist. She is willing to cast aside her aristocratic lifestyle to become an artist.",
    longDescription: (
      <>
        In the 16th century, the city of Florence booms with cultural and
        creative revival in celebration of the Renaissance. Arte, a delightful
        young lady from an aristocratic family, dreams of being an artist and
        contributing to the renewal of civilization. However, with her father's
        death, she ends up losing the only person who believed in her passion
        for art. Now she is expected to marry a nobleman and live as a refined
        housewife without disgracing her family name. Reluctant to accept her
        fate, the headstrong Arte steps into the streets in search of a master
        artisan to take her on as an apprentice.
        <br />
        <br />
        In her quest for a mentor, Arte has to face harsh reality when she is
        completely shunned for being a female artist. No one believes that women
        are capable of fine craftsmanship, and therefore none are willing to
        accept her. Luckily, a renowned artisan by the name of Leo is persuaded
        to take her as his disciple since he has none anyway. And thus, Arte's
        new life begins, far from the comfort of her noble upbringing. As an
        apprentice, she must earn her keep while tackling various challenges
        along the difficult path to becoming a full-fledged, master artisan.
      </>
    ),
    isMaomaoRecommendation: true,
  },
  {
    title: "Ranma ½",
    year: 2024,
    episodes: 12,
    rating: 8.01,
    ratingOutOf: 67367,
    rank: 680,
    popularity: 1787,
    picture: Ranma.src,
    tags: [
      "Body Swap Comedy",
      "Kung Fu",
      "Martial Arts",
      "Romantic Comedy",
      "Shōnen",
      "Slapstick",
      "Teen Comedy",
      "Teen Fantasy",
    ],
    shortDescription:
      "Akane Tendo meets her new fiancé, Ranma Saotome, a martial arts prodigy with a twist: he magically transforms into a girl upon touching cold water.",
    longDescription: (
      <>
        During their martial arts training expedition in China, Ranma Saotome
        and his father Genma suffered an accident, which in turn, afflicted them
        with a curse—whenever they are doused with cold water, Ranma transforms
        into a girl, while his father turns into a panda! Only hot water can
        reverse these changes, but any further contact with cold water opens the
        can of worms once more.
        <br />
        <br />
        Unfortunately, the trouble does not end there, as Ranma finds out about
        his betrothal to one of the daughters of Soun Tendou, his father's
        closest friend. During the families' first meeting, it is decided that
        Ranma is to be married to Akane, the youngest daughter, a decision that
        is met with vehement protests from both sides. The two are simply not
        compatible, yet they are forced to live under one roof. Ranma's status
        quo further adds to the chaos, leading him to a series of comedic
        situations and misunderstandings that, in the grand scheme of things,
        may just be what he needs to work with Akane.
      </>
    ),
  },
  {
    title: "Raven of the Inner Palace",
    year: 2022,
    episodes: 13,
    rating: 7.54,
    ratingOutOf: 41182,
    rank: 1852,
    popularity: 2098,
    picture: Raven.src,
    tags: ["Josei", "Supernatural Fantasy", "Fantasy", "History", "Mystery"],
    shortDescription:
      "The Raven Consort is a special consort living deep in the inner palace; Shouxue has the ability to use mysterious arts and will accept any favor asked of her, whether it is to find something lost or to curse someone to death.",
    longDescription: (
      <>
        Among the royal court, there is an individual feared as much as revered:
        the Raven Consort Ryuu Jusetsu. Residing in her jet-black palace and
        isolated from the emperor, she is the subject of countless rumors.
        Claimed to possess mystic abilities, she is said to take on any
        request—from finding lost items to inflicting curses. While some call
        her an immortal sage, others believe her to be a terrifying revenant.
        But such comments fail to faze Jusetsu, who prefers to spend her days in
        quiet solitude. That is, until the emperor, Ka Koushun, barges into her
        court and asks for her assistance with a mysterious case.
        <br />
        <br />
        The young emperor's request requires Jusetsu to step out of her palace
        for the first time. Despite Ka Koushun's frequent visits annoying her to
        no end, she cannot bring herself to turn him away. Her predecessor's
        teachings echo in her ears: the Raven Consort is destined to remain
        forever alone and never desire anything. Yet Jusetsu finds herself
        making the first of several bonds when she asks Jiujiu, an innocently
        inquisitive court girl, to be her sole attendant.
        <br />
        <br />
        Together, they begin fulfilling requests from the people of the palace.
        However, unknown perils lurk in the outside world, and drawing attention
        to herself may bring Jusetsu face-to-face with a past that is better
        left undisturbed.
      </>
    ),
    isMaomaoRecommendation: true,
  },
  {
    title: "The Rose of Versailles",
    year: 1979,
    episodes: 41,
    rating: 8.35,
    ratingOutOf: 32795,
    rank: 256,
    popularity: 2157,
    picture: TheRose.src,
    tags: ["Shōjo", "Action", "Drama", "History", "Romance"],
    shortDescription:
      "The story of Lady Oscar, a female military commander who served during the time of the French Revolution.",
    longDescription: (
      <>
        n a time of class stratification and rising tensions amongst the
        impoverished population, the Austrian Empire sends Princess Marie
        Antoinette to France to be wed to Crown Prince Louis XVI. The political
        marriage is arranged to strengthen the alliance between both countries,
        but the future queen is deeply unsatisfied with her fate being decided
        for her. Upon arrival in the country, Marie Antoinette is acquainted
        with Oscar Fançois de Jarjayes—Commander of the Royal Guard.
        <br />
        <br />
        Due to her father's desire for a son, Oscar is raised as a boy with an
        expectation to inherit his title as The Commander. Though she is revered
        by both men and women alike, Oscar cannot help but desire to live life
        as a woman instead of masquerading as a man. As Oscar reluctantly serves
        the young, spoiled queen, the growing resentment and suffering of the
        poor become harder for her to ignore—especially when Marie Antoinette
        frivolously spends her wealth.
      </>
    ),
    isMaomaoRecommendation: true,
    objectPosition: "20% 50%",
  },
  {
    title: "Doctor Elise: The Royal Lady with the Lamp",
    year: 2024,
    episodes: 12,
    rating: 7.26,
    ratingOutOf: 48966,
    rank: 3134,
    popularity: 2194,
    picture: DrElise.src,
    tags: [
      "Isekai",
      "Medical Drama",
      "Supernatural Fantasy",
      "Fantasy",
      "Romance",
    ],
    shortDescription:
      "A mean princess who lost everything to her foolish behaviour and to an epidemic gets thrown back in time to before it happened. Now she wishes to become a better person and a doctor to protect her family and kingdom.",
    longDescription: (
      <>
        In her first life, the renowned and genius surgeon Dr. Aoi Takamoto was
        Elise de Clorance, a villainess of noble descent. Elise's selfishness,
        insolence, and obsessive love for her fiancé—Prince Linden de
        Romanoff—led to the deaths of her family members and, eventually,
        herself. Only after being reborn did Elise realize the error of her ways
        and decide that, instead of ruining lives, she would devote herself to
        saving them. But a tragic airplane crash robs her of her dreams too
        soon.
        <br />
        <br />
        By a miracle, Elise wakes up in her original body before her official
        engagement to Linden. Recognizing the chance to cherish her loving
        family and free Linden from an unwanted marriage, Elise wishes to use
        her advanced medical knowledge to continue down the path of saving
        lives. In a deal with the emperor, Elise is given only six months to
        prove that her true place is not on the throne, but rather with the
        wounded and ailing who desperately need her help.
      </>
    ),
    isMaomaoRecommendation: true,
  },
  {
    title: "Psychic Princess",
    year: 2018,
    episodes: 16,
    rating: 7.62,
    ratingOutOf: 23349,
    rank: 1549,
    popularity: 3281,
    picture: PsychicPrincess.src,
    tags: ["Action", "Comedy", "Drama", "Romance"],
    shortDescription: `Qian Yunxi, a young girl sent to live in the mountains at the age of eight for possessing "strange abilities". Her noble family marries her off to an enemy prince, Ye Youming, to restore peace and harmony, instead of her younger sister.`,
    longDescription: (
      <>
        When Qian Yunshang's marriage to Ye Youming is arranged by the emperor,
        she is terrified that the bad blood between their families will lead to
        her being treated miserably in the Ye household. Torn between duty and
        concern for his daughter, Qian Aotian devises a reckless plan. He
        summons his firstborn daughter—her existence unknown to all but his own
        family—to be the stand-in for her younger sister.
        <br />
        <br />
        Due to her unusual powers, Qian Yun Xi was exiled by her family when she
        was a child. Deprived of filial affection, she made a life of her own
        amid the wilderness on Mt. Ling Yun. However, everything begins to
        change when she marries Ye Youming in her sister's stead.
        <br />
        <br />
        Harboring immense contempt for the family of Qian, Ye Youming refuses to
        acknowledge Qian Yun Xi as his wife and treats her coldly, going so far
        as to banish her from his palace grounds. But he can only resist her
        childlike charm and boldness for so long...
      </>
    ),
    isMaomaoRecommendation: true,
  },
  {
    title: "Mermaid Forest",
    year: 2003,
    episodes: 13,
    rating: 7.01,
    ratingOutOf: 10122,
    rank: 4439,
    popularity: 4440,
    picture: Mermaid.src,
    tags: ["Adventure", "Drama", "Fantasy", "Horror"],
    shortDescription:
      "A young man unknowingly eats a piece of mermaid's flesh and becomes immortal. For a long time he searches for other mermaids hoping they'll grant him mortality. Finally, he finds them, but they're about to eat a girl and he can't let that happen.",
    longDescription: (
      <>
        According to an ancient legend, mermaid's flesh can grant immortality if
        eaten. 500 years ago, Yuta unknowingly ate a piece of mermaid's flesh.
        For centuries, he travels across Japan, hoping to find a mermaid,
        thinking she may be able to make him a normal human again. When he
        finally finds one, he discovers that she and her companions have been
        raising a girl to be their food so they can eat her and take on her
        youthful looks. That is how mermaids stay young. Yuta kills the mermaids
        and rescues her, but she has already eaten some of the mermaid's flesh.
        Although he had to kill the mermaids, Yuta isn't too disappointed.
        Yuta's once lonely existence is now over, as he has found a companion in
        Mana. And Mana, who had been trapped in a small hut her whole life,
        finds delight in even the simplest of things. Together, Yuta and Mana
        attempt to seek out more mermaids, trying to become normal humans again.
      </>
    ),
    isMaomaoRecommendation: true,
  },
  {
    title: "No Doubt In Us",
    year: 2021,
    episodes: 48,
    rating: 7.76,
    ratingOutOf: 4647,
    rank: 1179,
    popularity: 6176,
    picture: NoDoubt.src,
    tags: [
      "Body Swap Comedy",
      "Martial Arts",
      "Romantic Comedy",
      "Supernatural Fantasy",
      "Comedy",
      "Fantasy",
      "Romance",
    ],
    shortDescription:
      "When an emperor accidentally switches bodies with his empress, the two must deal with the awkward fallouts as they learn to accept each other.",
    longDescription: (
      <>
        Within the Chinese imperial court, stern-faced Emperor Xiao Jinyun and
        spirited Empress Xu Yu are at constant odds with one another. But the
        universe has an interesting way to solve their issues: an accident
        causes the two to switch bodies, forcing them to put themselves in the
        other's shoes—literally. Now responsible for unfamiliar duties and court
        dynamics, the emperor and empress must navigate the maintenance of their
        identities, unruly concubines, and the nation itself. In doing so, Xiao
        Jinyun and Xu Yu's personal qualities and unconventional skills find new
        purpose, and a sense of understanding and compassion grows between the
        two.
        <br />
        <br />
        However, great threats loom within and outside the court. If the
        imperial astrologer cannot discover the key to switching them back in
        time, then internal strife and suspicion may lead to the duo's untimely
        demise.
      </>
    ),
    isMaomaoRecommendation: true,
  },
  {
    title: "The Story of Saiunkoku",
    year: 2006,
    episodes: 79,
    rating: 7.87,
    ratingOutOf: 36525,
    rank: 916,
    popularity: 2250,
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
    longDescription: (
      <>
        Shuurei Kou, the daughter of a noble yet impoverished family, is a
        clever young lady who dreams of becoming a government official and
        contributing toward her country. However, her dream is out of her reach
        as such a position is forbidden to women. While her father works a low
        wage job as an archivist at the palace, Shuurei has to juggle odd jobs
        to make ends meet. Then, one day, an unexpected visit changes her life.
        <br />
        <br />
        Shuurei is called to assist Ryuuki Shi, the new emperor who is known for
        slacking on his duties and preferring the company of men. Tempted by the
        generous compensation, she readily accepts the chance to become the
        young emperor's consort for six months. Luckily, she is not alone as
        Seiran Shi, her trusty friend, joins her as Ryuuki's bodyguard. While
        tasked with transforming the new emperor into a responsible ruler, court
        life and politics prove troublesome as Shuurei faces the challenges of
        her new life.
        <br />
        <br />
        Set in a fictional country, Saiunkoku Monogatari centers on the idea of
        meaningful leadership, its adversities and the rewards that come
        alongside a prospering nation.
      </>
    ),
    isMaomaoRecommendation: true,
  },
];
