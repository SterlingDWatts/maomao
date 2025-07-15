import ADTheBeginning from "./assets/ADTheBeginning.jpg";
import AllCreaturesSeason3Episode3 from "./assets/AllCreaturesSeason3Episode3.jpg";
import ChainsawManMovie from "./assets/ChainsawManMovie.jpg";
import FoundationSeason3Episode2 from "./assets/FoundationSeason3Episode2.jpg";
import FoundationAvatar from "./assets/FoundationAvatar.jpg";
import FoundationSeason3 from "./assets/FoundationSeason3.jpg";
import FrierenFrierensParty from "./assets/FrierenFrierensParty.jpg";
import FrierenLogo from "./assets/FrierenLogo.jpg";
import JamesLogo from "./assets/JamesLogo.jpg";
import MaomaoSmall from "./assets/MaomaoSmall.jpg";
import MyHeroFinalSeason from "./assets/MyHeroFinalSeason.jpg";
import MyHeroLogo from "./assets/MyHeroLogo.jpg";
import OnlyMurdersintheBuilding from "./assets/OnlyMurdersintheBuilding.jpg";
import OnlyMurdersLogo from "./assets/OnlyMurdersLogo.png";
import PeacemakerLogo from "./assets/PeacemakerLogo.jpg";
import PeacemakerSeason2 from "./assets/PeacemakerSeason2.jpg";
import Pochita from "./assets/Pochita.jpg";
import SlowHorsesBig from "./assets/SlowHorses.jpg";
import SlowHorsesLogo from "./assets/SlowHorsesLogo.jpg";
import Superman from "./assets/Superman.jpg";
import SupermanLogo from "./assets/SupermanLogo.jpg";
import TheBearLogo from "./assets/TheBearLogo.jpg";
import TheBearSeason4Episode3 from "./assets/TheBearSeason4Episode3.jpg";

export interface TimerCardProps {
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

export const firstUpNext: TimerCardProps[] = [
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
  },
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
    objectPosition: "50% 50%",
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
    objectPosition: "50% 50%",
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
    objectPosition: "50% 50%",
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
    objectPosition: "50% 50%",
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
    objectPosition: "50% 50%",
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
    objectPosition: "50% 50%",
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
  },
];
