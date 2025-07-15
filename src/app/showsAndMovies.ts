import LargeTimerCard from "@/components/largeTimerCard";
import SmallTimerCard from "@/components/smallTimerCard";

import ADTheBeginning from "./assets/ADTheBeginning.jpg";
import AllCreaturesSeason3Episode3 from "./assets/AllCreaturesSeason3Episode3.jpg";
import Attack from "./assets/Attack.jpg";
import AttackLogo from "./assets/AttackLogo.jpg";
import ChainsawManMovie from "./assets/ChainsawManMovie.jpg";
import Dandadan from "./assets/Dandadan.jpg";
import DandadanLogo from "./assets/DandadanLogo.jpg";
import FoundationSeason3Episode2 from "./assets/FoundationSeason3Episode2.jpg";
import FoundationAvatar from "./assets/FoundationAvatar.jpg";
import FoundationSeason3 from "./assets/FoundationSeason3.jpg";
import FrierenFrierensParty from "./assets/FrierenFrierensParty.jpg";
import FrierenLogo from "./assets/FrierenLogo.jpg";
import JamesLogo from "./assets/JamesLogo.jpg";
import MaomaoSmall from "./assets/MaomaoSmall.jpg";
import Masterchef from "./assets/Masterchef.jpg";
import MasterchefLogo from "./assets/MasterchefLogo.jpg";
import MyHeroFinalSeason from "./assets/MyHeroFinalSeason.jpg";
import MyHeroLogo from "./assets/MyHeroLogo.jpg";
import OnlyMurdersintheBuilding from "./assets/OnlyMurdersintheBuilding.jpg";
import OnlyMurdersLogo from "./assets/OnlyMurdersLogo.png";
import PeacemakerLogo from "./assets/PeacemakerLogo.jpg";
import PeacemakerSeason2 from "./assets/PeacemakerSeason2.jpg";
import Pochita from "./assets/Pochita.jpg";
import SlowHorsesBig from "./assets/SlowHorses.jpg";
import SlowHorsesLogo from "./assets/SlowHorsesLogo.jpg";
import Solo from "./assets/Solo.jpg";
import SoloLogo from "./assets/SoloLogo.jpg";
import Stone from "./assets/Stone.jpg";
import StoneLogo from "./assets/StoneLogo.jpg";
import Superman from "./assets/Superman.jpg";
import SupermanLogo from "./assets/SupermanLogo.jpg";
import TheBearLogo from "./assets/TheBearLogo.jpg";
import TheBearSeason4Episode3 from "./assets/TheBearSeason4Episode3.jpg";
import VinlandLogo from "./assets/VinlandLogo.jpg";
import VinlandSaga from "./assets/VinlandSaga.jpg";

export interface AvailableNowProps {
  avatar: string;
  title: string;
  subheader: string;
  season?: number;
  episode?: number;
  cardMedia: string;
  cardMediaAlt: string;
  releaseDateTime: string;
  synopsis?: string;
  watchUrl: string;
  estimate?: boolean;
  estimateDate?: string;
  isMovie?: boolean;
  objectPosition?: string;
}

export interface UpNextProps extends AvailableNowProps {
  TimerCard: typeof LargeTimerCard | typeof SmallTimerCard;
}

export const availableNow: AvailableNowProps[] = [
  {
    avatar: SupermanLogo.src,
    title: "Superman",
    subheader: "",
    cardMedia: Superman.src,
    cardMediaAlt: "Superman",
    releaseDateTime: "July 11, 2025 16:00:00",
    synopsis:
      "Superman must reconcile his alien Kryptonian heritage with his human upbringing as reporter Clark Kent. As the embodiment of truth, justice and the human way he soon finds himself in a world that views these as old-fashioned.",
    isMovie: true,
    watchUrl: "https://www.fandango.com/superman-2025-230934/movie-overview",
    objectPosition: "50% 40%",
  },
  {
    avatar: JamesLogo.src,
    title: "All Creatures Great And Small",
    subheader: "Surviving Siegfried",
    season: 3,
    episode: 3,
    cardMedia: AllCreaturesSeason3Episode3.src,
    cardMediaAlt: "Siegfried and a racehorse",
    releaseDateTime: "January 22, 2023 21:00:00",
    synopsis:
      "Siegfried receives some news and channels his feelings into saving a young racehorse. James struggles to get farmers to agree to his newly adopted TB testing scheme.",
    watchUrl:
      "https://play.google.com/store/tv/show?id=gbQjVgRNYkg.P&cdid=tvseason-mjGu8FIpiU4.P&hl=en_US",
    objectPosition: "50% 47%",
  },
  {
    avatar: TheBearLogo.src,
    title: "The Bear",
    subheader: "Scallop",
    season: 4,
    episode: 3,
    cardMedia: TheBearSeason4Episode3.src,
    cardMediaAlt: "The Bear Season 4 Episode 3",
    releaseDateTime: "June 25, 2025 21:00:00",
    synopsis: "Opportunity.",
    watchUrl:
      "https://www.hulu.com/series/05eb6a8e-90ed-4947-8c0b-e6536cbddd5f",
    objectPosition: "30% 50%",
  },
  {
    avatar: DandadanLogo.src,
    title: "Dan Da Dan",
    subheader: "Baby and baby are getting older",
    season: 1,
    episode: 3,
    cardMedia: Dandadan.src,
    cardMediaAlt: "Dandadan",
    releaseDateTime: "October 17 2024 03:00:00 GMT-0700",
    synopsis:
      "Okarun transforms from Turbo Granny's curse. He goes berserk unable to control his power, but Momo's grandmother Seiko, saves them in the nick of time. To lift the curse, Momo and Okarun decide to play tag with Turbo Granny.",
    watchUrl: "https://www.crunchyroll.com/series/GG5H5XQ0D/dan-da-dan",
    objectPosition: "50% 50%",
  },
  {
    avatar: VinlandLogo.src,
    title: "Vinland Saga",
    subheader: "Cursed Head",
    season: 2,
    episode: 10,
    cardMedia: VinlandSaga.src,
    cardMediaAlt: "Vinland Saga",
    releaseDateTime: "March 14 2023 03:00:00 GMT-0700",
    synopsis:
      "Finally, after three long years, Einar and Thorfinn chop down the final tree in the forest. At the same time, Canute, who became the conqueror of England, is visiting Jelling, the royal capital of Denmark.",
    watchUrl: "https://www.crunchyroll.com/series/GEXH3WKK0/vinland-saga",
    objectPosition: "50% 50%",
  },
  {
    avatar: AttackLogo.src,
    title: "Attack on Titan",
    subheader: "Soldier",
    season: 2,
    episode: 29,
    cardMedia: Attack.src,
    cardMediaAlt: "Attack on Titan",
    releaseDateTime: "April 22 2017 03:00:00 GMT-0700",
    synopsis:
      "When the Scouts are overwhelmed by the Titan assault on the castle, the unarmed recruits' hope for survival may lie in a promise and secret.",
    watchUrl: "https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan",
    objectPosition: "50% 60%",
  },
  {
    avatar: StoneLogo.src,
    title: "Dr. Stone",
    subheader: "To Modernity",
    season: 1,
    episode: 19,
    cardMedia: Stone.src,
    cardMediaAlt: "Dr. Stone",
    releaseDateTime: "January 18 2020 03:00:00 GMT-0700",
    synopsis:
      "Jinwoo, now more powerful after conquering 19 dungeons, returns to the treacherous S-Rank Demon's Castle. His mission to obtain rare ingredients for the Elixir of Life, a crucial step in his quest to save his ailing mother.",
    watchUrl: "https://www.crunchyroll.com/series/GYEXQKJG6/dr-stone",
    objectPosition: "50% 50%",
  },
  {
    avatar: SoloLogo.src,
    title: "Solo Leveling",
    subheader: "Still a Long Way to Go",
    season: 2,
    episode: 3,
    cardMedia: Solo.src,
    cardMediaAlt: "Solo Leveling",
    releaseDateTime: "January 18 2025 03:00:00 GMT-0700",
    synopsis:
      "Jinwoo, now more powerful after conquering 19 dungeons, returns to the treacherous S-Rank Demon's Castle. His mission to obtain rare ingredients for the Elixir of Life, a crucial step in his quest to save his ailing mother.",
    watchUrl: "https://www.crunchyroll.com/series/GDKHZEJ0K/solo-leveling",
    objectPosition: "50% 50%",
  },
  {
    avatar: MasterchefLogo.src,
    title: "Masterchef",
    subheader: "Dinner Party Dish",
    season: 15,
    episode: 4,
    cardMedia: Masterchef.src,
    cardMediaAlt: "Masterchef",
    releaseDateTime: "June 11 2025 03:00:00 GMT-0700",
    synopsis:
      "Twelve talented cooking pairs compete to create the ultimate dinner party masterpiece, putting their combined culinary skills to the test as they vie for the judges' approval.",
    watchUrl:
      "https://www.hulu.com/series/45d67197-5346-4adb-9d90-6ed2d7b7bd85",
    objectPosition: "50% 30%",
  },
];

export const upNext: UpNextProps[] = [
  {
    avatar: FoundationAvatar.src,
    title: "Foundation",
    subheader: "Shadows in the Math",
    season: 3,
    episode: 2,
    cardMedia: FoundationSeason3Episode2.src,
    cardMediaAlt: "Brother Day in a towel",
    releaseDateTime: "July 18 2025 03:00:00 GMT-0700",
    synopsis:
      "Gaal and Hari advance their plans on Ignis. Empire grapples with an unforeseen prediction. Pritcher enlists help to investigate the Mule.",
    watchUrl:
      "https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3",
    objectPosition: "50% 15%",
    TimerCard: LargeTimerCard,
  },
  {
    avatar: MaomaoSmall.src,
    title: "The Apothecary Diaries",
    subheader: "The Beginning",
    season: 2,
    episode: 24,
    cardMedia: ADTheBeginning.src,
    cardMediaAlt: "Apothecary Diaries Season 2 Episode 24",
    releaseDateTime: "July 18 2025 13:00:00 GMT-0700",
    synopsis:
      "After the war ends, Jinshi faces mounting work duties while Maomao goes back to the pleasure quarter.",
    watchUrl:
      "https://www.crunchyroll.com/series/G3KHEVDJ7/the-apothecary-diaries",
    objectPosition: "50% 35%",
    TimerCard: LargeTimerCard,
  },
  {
    avatar: FoundationAvatar.src,
    title: "Foundation",
    subheader: "",
    season: 3,
    episode: 3,
    cardMedia: FoundationSeason3.src,
    cardMediaAlt: "Foundation Season 3 Episode 3",
    releaseDateTime: "July 25 2025 03:00:00 GMT-0700",
    watchUrl:
      "https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3",
    objectPosition: "100% 40%",
    TimerCard: SmallTimerCard,
  },
  {
    avatar: FoundationAvatar.src,
    title: "Foundation",
    subheader: "",
    season: 3,
    episode: 4,
    cardMedia: FoundationSeason3.src,
    cardMediaAlt: "Foundation Season 3 Episode 4",
    releaseDateTime: "August 1 2025 03:00:00 GMT-0700",
    watchUrl:
      "https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3",
    objectPosition: "100% 40%",
    TimerCard: SmallTimerCard,
  },
  {
    avatar: OnlyMurdersLogo.src,
    title: "Only Murders In The Building",
    subheader: "",
    season: 5,
    episode: 1,
    cardMedia: OnlyMurdersintheBuilding.src,
    cardMediaAlt: "Only Murders In The Building",
    releaseDateTime: "August 05, 2025 21:00:00",
    watchUrl:
      "https://www.hulu.com/series/ef31c7e1-cd0f-4e07-848d-1cbfedb50ddf",
    estimate: true,
    estimateDate: "[Best Guess] August 2025",
    objectPosition: "100% 20%",
    TimerCard: LargeTimerCard,
  },
  {
    avatar: FoundationAvatar.src,
    title: "Foundation",
    subheader: "",
    season: 3,
    episode: 5,
    cardMedia: FoundationSeason3.src,
    cardMediaAlt: "Foundation Season 3 Episode 5",
    releaseDateTime: "August 8 2025 03:00:00 GMT-0700",
    watchUrl:
      "https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3",
    objectPosition: "100% 40%",
    TimerCard: SmallTimerCard,
  },
  {
    avatar: FoundationAvatar.src,
    title: "Foundation",
    subheader: "",
    season: 3,
    episode: 6,
    cardMedia: FoundationSeason3.src,
    cardMediaAlt: "Foundation Season 3 Episode 6",
    releaseDateTime: "August 15 2025 03:00:00 GMT-0700",
    watchUrl:
      "https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3",
    objectPosition: "100% 40%",
    TimerCard: SmallTimerCard,
  },
  {
    avatar: PeacemakerLogo.src,
    title: "Peacemaker",
    subheader: "",
    season: 2,
    episode: 1,
    cardMedia: PeacemakerSeason2.src,
    cardMediaAlt: "Peacemaker Season 2",
    releaseDateTime: "August 21 2025 21:00:00 GMT-0700",
    watchUrl:
      "https://play.hbomax.com/show/a939d96b-7ffb-4481-96f6-472838d104ca",
    objectPosition: "50% 35%",
    TimerCard: LargeTimerCard,
  },
  {
    avatar: FoundationAvatar.src,
    title: "Foundation",
    subheader: "",
    season: 3,
    episode: 7,
    cardMedia: FoundationSeason3.src,
    cardMediaAlt: "Foundation Season 3 Episode 7",
    releaseDateTime: "August 22 2025 03:00:00 GMT-0700",
    watchUrl:
      "https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3",
    objectPosition: "100% 40%",
    TimerCard: SmallTimerCard,
  },
  {
    avatar: PeacemakerLogo.src,
    title: "Peacemaker",
    subheader: "",
    season: 2,
    episode: 2,
    cardMedia: PeacemakerSeason2.src,
    cardMediaAlt: "Peacemaker Season 2",
    releaseDateTime: "August 28 2025 21:00:00 GMT-0700",
    watchUrl:
      "https://play.hbomax.com/show/a939d96b-7ffb-4481-96f6-472838d104ca",
    objectPosition: "50% 35%",
    TimerCard: SmallTimerCard,
  },
  {
    avatar: FoundationAvatar.src,
    title: "Foundation",
    subheader: "",
    season: 3,
    episode: 8,
    cardMedia: FoundationSeason3.src,
    cardMediaAlt: "Foundation Season 3 Episode 8",
    releaseDateTime: "August 29 2025 03:00:00 GMT-0700",
    watchUrl:
      "https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3",
    objectPosition: "100% 40%",
    TimerCard: SmallTimerCard,
  },
  {
    avatar: PeacemakerLogo.src,
    title: "Peacemaker",
    subheader: "",
    season: 2,
    episode: 3,
    cardMedia: PeacemakerSeason2.src,
    cardMediaAlt: "Peacemaker Season 2",
    releaseDateTime: "September 04 2025 21:00:00 GMT-0700",
    watchUrl:
      "https://play.hbomax.com/show/a939d96b-7ffb-4481-96f6-472838d104ca",
    objectPosition: "50% 35%",
    TimerCard: SmallTimerCard,
  },
  {
    avatar: FoundationAvatar.src,
    title: "Foundation",
    subheader: "",
    season: 3,
    episode: 9,
    cardMedia: FoundationSeason3.src,
    cardMediaAlt: "Foundation Season 3 Episode 9",
    releaseDateTime: "September 05 2025 03:00:00 GMT-0700",
    watchUrl:
      "https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3",
    objectPosition: "100% 40%",
    TimerCard: SmallTimerCard,
  },
  {
    avatar: PeacemakerLogo.src,
    title: "Peacemaker",
    subheader: "",
    season: 2,
    episode: 4,
    cardMedia: PeacemakerSeason2.src,
    cardMediaAlt: "Peacemaker Season 2",
    releaseDateTime: "September 11 2025 21:00:00 GMT-0700",
    watchUrl:
      "https://play.hbomax.com/show/a939d96b-7ffb-4481-96f6-472838d104ca",
    objectPosition: "50% 35%",
    TimerCard: SmallTimerCard,
  },
  {
    avatar: FoundationAvatar.src,
    title: "Foundation",
    subheader: "",
    season: 3,
    episode: 10,
    cardMedia: FoundationSeason3.src,
    cardMediaAlt: "Foundation Season 3 Episode 10",
    releaseDateTime: "September 12 2025 03:00:00 GMT-0700",
    watchUrl:
      "https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3",
    objectPosition: "100% 40%",
    TimerCard: SmallTimerCard,
  },
  {
    avatar: PeacemakerLogo.src,
    title: "Peacemaker",
    subheader: "",
    season: 2,
    episode: 5,
    cardMedia: PeacemakerSeason2.src,
    cardMediaAlt: "Peacemaker Season 2",
    releaseDateTime: "September 18 2025 21:00:00 GMT-0700",
    watchUrl:
      "https://play.hbomax.com/show/a939d96b-7ffb-4481-96f6-472838d104ca",
    objectPosition: "50% 35%",
    TimerCard: SmallTimerCard,
  },
  {
    avatar: SlowHorsesLogo.src,
    title: "Slow Horses",
    subheader: "",
    season: 5,
    episode: 1,
    cardMedia: SlowHorsesBig.src,
    cardMediaAlt: "Slow Horses",
    releaseDateTime: "September 24, 2025 21:00:00",
    watchUrl:
      "https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o",
    objectPosition: "50% 30%",
    TimerCard: LargeTimerCard,
  },
  {
    avatar: SlowHorsesLogo.src,
    title: "Slow Horses",
    subheader: "",
    season: 5,
    episode: 2,
    cardMedia: SlowHorsesBig.src,
    cardMediaAlt: "Slow Horses",
    releaseDateTime: "September 24, 2025 21:00:00",
    watchUrl:
      "https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o",
    objectPosition: "50% 30%",
    TimerCard: SmallTimerCard,
  },
  {
    avatar: PeacemakerLogo.src,
    title: "Peacemaker",
    subheader: "",
    season: 2,
    episode: 6,
    cardMedia: PeacemakerSeason2.src,
    cardMediaAlt: "Peacemaker Season 2",
    releaseDateTime: "September 25 2025 21:00:00 GMT-0700",
    watchUrl:
      "https://play.hbomax.com/show/a939d96b-7ffb-4481-96f6-472838d104ca",
    objectPosition: "50% 35%",
    TimerCard: SmallTimerCard,
  },
  {
    avatar: SlowHorsesLogo.src,
    title: "Slow Horses",
    subheader: "",
    season: 5,
    episode: 3,
    cardMedia: SlowHorsesBig.src,
    cardMediaAlt: "Slow Horses",
    releaseDateTime: "October 01, 2025 21:00:00",
    watchUrl:
      "https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o",
    objectPosition: "50% 30%",
    TimerCard: SmallTimerCard,
  },
  {
    avatar: PeacemakerLogo.src,
    title: "Peacemaker",
    subheader: "",
    season: 2,
    episode: 7,
    cardMedia: PeacemakerSeason2.src,
    cardMediaAlt: "Peacemaker Season 2",
    releaseDateTime: "October 02 2025 21:00:00 GMT-0700",
    watchUrl:
      "https://play.hbomax.com/show/a939d96b-7ffb-4481-96f6-472838d104ca",
    objectPosition: "50% 50%",
    TimerCard: SmallTimerCard,
  },
  {
    avatar: SlowHorsesLogo.src,
    title: "Slow Horses",
    subheader: "",
    season: 5,
    episode: 4,
    cardMedia: SlowHorsesBig.src,
    cardMediaAlt: "Slow Horses",
    releaseDateTime: "October 08, 2025 21:00:00",
    watchUrl:
      "https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o",
    objectPosition: "50% 30%",
    TimerCard: SmallTimerCard,
  },
  {
    avatar: PeacemakerLogo.src,
    title: "Peacemaker",
    subheader: "",
    season: 2,
    episode: 8,
    cardMedia: PeacemakerSeason2.src,
    cardMediaAlt: "Peacemaker Season 2",
    releaseDateTime: "October 09 2025 21:00:00 GMT-0700",
    watchUrl:
      "https://play.hbomax.com/show/a939d96b-7ffb-4481-96f6-472838d104ca",
    objectPosition: "50% 50%",
    TimerCard: SmallTimerCard,
  },
  {
    avatar: SlowHorsesLogo.src,
    title: "Slow Horses",
    subheader: "",
    season: 5,
    episode: 5,
    cardMedia: SlowHorsesBig.src,
    cardMediaAlt: "Slow Horses",
    releaseDateTime: "October 15, 2025 21:00:00",
    watchUrl:
      "https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o",
    objectPosition: "50% 30%",
    TimerCard: SmallTimerCard,
  },
  {
    avatar: SlowHorsesLogo.src,
    title: "Slow Horses",
    subheader: "",
    season: 5,
    episode: 6,
    cardMedia: SlowHorsesBig.src,
    cardMediaAlt: "Slow Horses",
    releaseDateTime: "October 22, 2025 21:00:00",
    watchUrl:
      "https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o",
    objectPosition: "50% 30%",
    TimerCard: SmallTimerCard,
  },
  {
    avatar: Pochita.src,
    title: "Chainsaw Man - The Movie: Reze Arc",
    subheader: "",
    cardMedia: ChainsawManMovie.src,
    cardMediaAlt: "Chainsaw Man - The Movie: Reze Arc",
    releaseDateTime: "October 29, 2025 16:00:00",
    synopsis:
      "Denji encounters a new romantic interest, Reze, who works at a coffee café.",
    isMovie: true,
    watchUrl:
      "https://www.fandango.com/chainsaw-man-the-movie-reze-arc-2025-241288/movie-overview",
    objectPosition: "50% 30%",
    TimerCard: LargeTimerCard,
  },
  {
    avatar: MyHeroLogo.src,
    title: "My Hero Academia",
    subheader: "",
    season: 8,
    episode: 1,
    cardMedia: MyHeroFinalSeason.src,
    cardMediaAlt: "My Hero Academia Season 8",
    releaseDateTime: "October 31, 2025 21:00:00",
    watchUrl: "https://www.crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia",
    estimate: true,
    estimateDate: "October 2025",
    objectPosition: "50% 50%",
    TimerCard: LargeTimerCard,
  },
  {
    avatar: FrierenLogo.src,
    title: "Frieren: Beyond Journey's End",
    subheader: "",
    season: 2,
    episode: 1,
    cardMedia: FrierenFrierensParty.src,
    cardMediaAlt: "Frieren's Party",
    releaseDateTime: "January 31, 2026 23:00:00",
    watchUrl:
      "https://www.crunchyroll.com/series/GG5H5XQX4/frieren-beyond-journeys-end",
    estimate: true,
    estimateDate: "January 2026",
    objectPosition: "50% 10%",
    TimerCard: LargeTimerCard,
  },
];
