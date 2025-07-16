import LargeTimerCard from "../components/largeTimerCard";
import SmallTimerCard from "../components/smallTimerCard";
import {
  AppleLogo,
  CrunchyrollLogo,
  FandangoLogo,
  GooglePlayMoviesLogo,
  HBOLogo,
  HuluLogo,
  NetflixLogo,
} from "./svgs/svgLogos";

import ADTheBeginning from "./assets/ADTheBeginning.jpg";
import ApothecaryDiaries from "./assets/ApothecaryDiaries.jpg";
import AllCreaturesSeason3Episode3 from "./assets/AllCreaturesSeason3Episode3.jpg";
import Attack from "./assets/Attack.jpg";
import AttackLogo from "./assets/AttackLogo.jpg";
import ChainsawManMovie from "./assets/ChainsawManMovie.jpg";
import DanDaDan from "./assets/DanDaDan.jpg";
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
import Nyaight from "./assets/Nyaight.jpg";
import NyaightLogo from "./assets/NyaightLogo.jpg";
import OnlyMurdersintheBuilding from "./assets/OnlyMurdersintheBuilding.jpg";
import OnlyMurdersLogo from "./assets/OnlyMurdersLogo.jpg";
import PeacemakerLogo from "./assets/PeacemakerLogo.jpg";
import PeacemakerSeason2 from "./assets/PeacemakerSeason2.jpg";
import Pochita from "./assets/Pochita.jpg";
import SlowHorsesBig from "./assets/SlowHorses.jpg";
import SlowHorsesLogo from "./assets/SlowHorsesLogo.jpg";
import SoloLeveling from "./assets/SoloLeveling.jpg";
import SoloLogo from "./assets/SoloLogo.jpg";
import Stone from "./assets/Stone.jpg";
import StoneLogo from "./assets/StoneLogo.jpg";
import StrangerLogo from "./assets/StrangerLogo.jpg";
import StrangerThings from "./assets/StrangerThings.jpg";
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
  addContrastToTimer?: boolean;
  objectPosition?: string;
  finale?: boolean;
  SiteLogo:
    | typeof AppleLogo
    | typeof CrunchyrollLogo
    | typeof FandangoLogo
    | typeof HBOLogo
    | typeof HuluLogo
    | typeof NetflixLogo;
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
    objectPosition: "50% 50%",
    SiteLogo: FandangoLogo,
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
    SiteLogo: GooglePlayMoviesLogo,
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
    SiteLogo: HuluLogo,
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
    objectPosition: "50% 34%",
    SiteLogo: CrunchyrollLogo,
  },
  {
    avatar: SoloLogo.src,
    title: "Solo Leveling",
    subheader: "Still a Long Way to Go",
    season: 2,
    episode: 3,
    cardMedia: SoloLeveling.src,
    cardMediaAlt: "Solo Leveling",
    releaseDateTime: "January 18 2025 03:00:00 GMT-0700",
    synopsis:
      "Jinwoo, now more powerful after conquering 19 dungeons, returns to the treacherous S-Rank Demon's Castle. His mission to obtain rare ingredients for the Elixir of Life, a crucial step in his quest to save his ailing mother.",
    watchUrl: "https://www.crunchyroll.com/series/GDKHZEJ0K/solo-leveling",
    objectPosition: "10% 50%",
    SiteLogo: CrunchyrollLogo,
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
    SiteLogo: HuluLogo,
  },
  {
    avatar: DandadanLogo.src,
    title: "Dan Da Dan",
    subheader: "Kicking Turbo Granny's Ass",
    season: 1,
    episode: 4,
    cardMedia: DanDaDan.src,
    cardMediaAlt: "Dandadan",
    releaseDateTime: "October 24 2024 03:00:00 GMT-0700",
    synopsis:
      "To settle the score with Turbo Granny, Momo and Okarun show up at the promised tunnel. They start the game of tag to pull the location-bound spirit away, and they managed to capture Turbo Granny using Momo's psychic powers.",
    watchUrl: "https://www.crunchyroll.com/series/GG5H5XQ0D/dan-da-dan",
    objectPosition: "50% 50%",
    SiteLogo: CrunchyrollLogo,
  },
  {
    avatar: AttackLogo.src,
    title: "Attack on Titan",
    subheader: "Historia",
    season: 2,
    episode: 5,
    cardMedia: Attack.src,
    cardMediaAlt: "Attack on Titan",
    releaseDateTime: "April 29 2017 03:00:00 GMT-0700",
    synopsis:
      "Utgard Castle comes crumbling down as Ymir desperately battles the Titans. Now, Christa must fulfill the promise they made long ago during winter training.",
    watchUrl: "https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan",
    objectPosition: "15% 50%",
    SiteLogo: CrunchyrollLogo,
  },
  {
    avatar: StoneLogo.src,
    title: "Dr. Stone",
    subheader: "The Age of Energy",
    season: 1,
    episode: 20,
    cardMedia: Stone.src,
    cardMediaAlt: "Dr. Stone",
    releaseDateTime: "January 25 2020 03:00:00 GMT-0700",
    synopsis: `Work begins on creating the components for Senku's cell phone, but spinning gold wire is proving to be quite the task! Luckily, Chrome and Kaseki "invent" the water wheel and drastically improve the process!`,
    watchUrl: "https://www.crunchyroll.com/series/GYEXQKJG6/dr-stone",
    objectPosition: "50% 50%",
    SiteLogo: CrunchyrollLogo,
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
    SiteLogo: AppleLogo,
  },
  {
    avatar: MaomaoSmall.src,
    title: "The Apothecary Diaries",
    subheader: "The Beginning",
    season: 2,
    episode: 24,
    cardMedia: ApothecaryDiaries.src,
    cardMediaAlt: "Apothecary Diaries Season 2 Episode 24",
    releaseDateTime: "July 18 2025 13:00:00 GMT-0700",
    synopsis:
      "After the war ends, Jinshi faces mounting work duties while Maomao goes back to the pleasure quarter.",
    watchUrl:
      "https://www.crunchyroll.com/series/G3KHEVDJ7/the-apothecary-diaries",
    objectPosition: "50% 27%",
    TimerCard: LargeTimerCard,
    SiteLogo: CrunchyrollLogo,
    finale: true,
  },
  {
    avatar: NyaightLogo.src,
    title: "Nyaight of the Living Cat",
    subheader: "",
    season: 1,
    episode: 3,
    cardMedia: Nyaight.src,
    cardMediaAlt: "Nyaight of the Living Cat",
    releaseDateTime: "July 20 2025 07:15:00 GMT-0700",
    synopsis: "",
    watchUrl:
      "https://www.crunchyroll.com/series/GKEH2G0DN/nyaight-of-the-living-cat",
    objectPosition: "50% 20%",
    TimerCard: LargeTimerCard,
    SiteLogo: CrunchyrollLogo,
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
    SiteLogo: AppleLogo,
  },

  {
    avatar: NyaightLogo.src,
    title: "Nyaight of the Living Cat",
    subheader: "",
    season: 1,
    episode: 4,
    cardMedia: Nyaight.src,
    cardMediaAlt: "Nyaight of the Living Cat",
    releaseDateTime: "July 27 2025 07:15:00 GMT-0700",
    synopsis: "",
    watchUrl:
      "https://www.crunchyroll.com/series/GKEH2G0DN/nyaight-of-the-living-cat",
    objectPosition: "50% 20%",
    TimerCard: SmallTimerCard,
    SiteLogo: CrunchyrollLogo,
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
    SiteLogo: AppleLogo,
  },
  {
    avatar: NyaightLogo.src,
    title: "Nyaight of the Living Cat",
    subheader: "",
    season: 1,
    episode: 5,
    cardMedia: Nyaight.src,
    cardMediaAlt: "Nyaight of the Living Cat",
    releaseDateTime: "August 03 2025 07:15:00 GMT-0700",
    synopsis: "",
    watchUrl:
      "https://www.crunchyroll.com/series/GKEH2G0DN/nyaight-of-the-living-cat",
    objectPosition: "50% 20%",
    TimerCard: SmallTimerCard,
    SiteLogo: CrunchyrollLogo,
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
    SiteLogo: HuluLogo,
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
    SiteLogo: AppleLogo,
  },
  {
    avatar: NyaightLogo.src,
    title: "Nyaight of the Living Cat",
    subheader: "",
    season: 1,
    episode: 6,
    cardMedia: Nyaight.src,
    cardMediaAlt: "Nyaight of the Living Cat",
    releaseDateTime: "August 10 2025 07:15:00 GMT-0700",
    synopsis: "",
    watchUrl:
      "https://www.crunchyroll.com/series/GKEH2G0DN/nyaight-of-the-living-cat",
    objectPosition: "50% 20%",
    TimerCard: SmallTimerCard,
    SiteLogo: CrunchyrollLogo,
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
    SiteLogo: AppleLogo,
  },
  {
    avatar: NyaightLogo.src,
    title: "Nyaight of the Living Cat",
    subheader: "",
    season: 1,
    episode: 7,
    cardMedia: Nyaight.src,
    cardMediaAlt: "Nyaight of the Living Cat",
    releaseDateTime: "August 17 2025 07:15:00 GMT-0700",
    synopsis: "",
    watchUrl:
      "https://www.crunchyroll.com/series/GKEH2G0DN/nyaight-of-the-living-cat",
    objectPosition: "50% 20%",
    TimerCard: SmallTimerCard,
    SiteLogo: CrunchyrollLogo,
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
    SiteLogo: HBOLogo,
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
    SiteLogo: AppleLogo,
  },

  {
    avatar: NyaightLogo.src,
    title: "Nyaight of the Living Cat",
    subheader: "",
    season: 1,
    episode: 8,
    cardMedia: Nyaight.src,
    cardMediaAlt: "Nyaight of the Living Cat",
    releaseDateTime: "August 24 2025 07:15:00 GMT-0700",
    synopsis: "",
    watchUrl:
      "https://www.crunchyroll.com/series/GKEH2G0DN/nyaight-of-the-living-cat",
    objectPosition: "50% 20%",
    TimerCard: SmallTimerCard,
    SiteLogo: CrunchyrollLogo,
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
    SiteLogo: HBOLogo,
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
    SiteLogo: AppleLogo,
  },

  {
    avatar: NyaightLogo.src,
    title: "Nyaight of the Living Cat",
    subheader: "",
    season: 1,
    episode: 9,
    cardMedia: Nyaight.src,
    cardMediaAlt: "Nyaight of the Living Cat",
    releaseDateTime: "August 31 2025 07:15:00 GMT-0700",
    synopsis: "",
    watchUrl:
      "https://www.crunchyroll.com/series/GKEH2G0DN/nyaight-of-the-living-cat",
    objectPosition: "50% 20%",
    TimerCard: SmallTimerCard,
    SiteLogo: CrunchyrollLogo,
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
    SiteLogo: HBOLogo,
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
    SiteLogo: AppleLogo,
  },
  {
    avatar: NyaightLogo.src,
    title: "Nyaight of the Living Cat",
    subheader: "",
    season: 1,
    episode: 10,
    cardMedia: Nyaight.src,
    cardMediaAlt: "Nyaight of the Living Cat",
    releaseDateTime: "September 07 2025 07:15:00 GMT-0700",
    synopsis: "",
    watchUrl:
      "https://www.crunchyroll.com/series/GKEH2G0DN/nyaight-of-the-living-cat",
    objectPosition: "50% 20%",
    TimerCard: SmallTimerCard,
    SiteLogo: CrunchyrollLogo,
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
    SiteLogo: HBOLogo,
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
    SiteLogo: AppleLogo,
    finale: true,
  },
  {
    avatar: NyaightLogo.src,
    title: "Nyaight of the Living Cat",
    subheader: "",
    season: 1,
    episode: 11,
    cardMedia: Nyaight.src,
    cardMediaAlt: "Nyaight of the Living Cat",
    releaseDateTime: "September 14 2025 07:15:00 GMT-0700",
    synopsis: "",
    watchUrl:
      "https://www.crunchyroll.com/series/GKEH2G0DN/nyaight-of-the-living-cat",
    objectPosition: "50% 20%",
    TimerCard: SmallTimerCard,
    SiteLogo: CrunchyrollLogo,
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
    SiteLogo: HBOLogo,
  },
  {
    avatar: NyaightLogo.src,
    title: "Nyaight of the Living Cat",
    subheader: "",
    season: 1,
    episode: 12,
    cardMedia: Nyaight.src,
    cardMediaAlt: "Nyaight of the Living Cat",
    releaseDateTime: "September 21 2025 07:15:00 GMT-0700",
    synopsis: "",
    watchUrl:
      "https://www.crunchyroll.com/series/GKEH2G0DN/nyaight-of-the-living-cat",
    objectPosition: "50% 20%",
    TimerCard: SmallTimerCard,
    SiteLogo: CrunchyrollLogo,
    finale: true,
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
    SiteLogo: AppleLogo,
    addContrastToTimer: true,
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
    SiteLogo: AppleLogo,
    addContrastToTimer: true,
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
    SiteLogo: HBOLogo,
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
    SiteLogo: AppleLogo,
    addContrastToTimer: true,
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
    SiteLogo: HBOLogo,
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
    SiteLogo: AppleLogo,
    addContrastToTimer: true,
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
    SiteLogo: HBOLogo,
    finale: true,
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
    SiteLogo: AppleLogo,
    addContrastToTimer: true,
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
    SiteLogo: AppleLogo,
    addContrastToTimer: true,
    finale: true,
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
    objectPosition: "50% 25%",
    TimerCard: LargeTimerCard,
    SiteLogo: FandangoLogo,
    addContrastToTimer: true,
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
    SiteLogo: CrunchyrollLogo,
    addContrastToTimer: true,
  },
  {
    avatar: StrangerLogo.src,
    title: "Stranger Things",
    subheader: "Chapter One: The Crawl",
    season: 5,
    episode: 1,
    cardMedia: StrangerThings.src,
    cardMediaAlt: "Stranger Things Season 5",
    releaseDateTime: "November 26, 2025 21:00:00",
    watchUrl: "https://www.netflix.com/us/title/80057281",
    objectPosition: "50% 30%",
    TimerCard: LargeTimerCard,
    SiteLogo: NetflixLogo,
  },
  {
    avatar: StrangerLogo.src,
    title: "Stranger Things",
    subheader: "Chapter Two: The Vanishing of",
    season: 5,
    episode: 2,
    cardMedia: StrangerThings.src,
    cardMediaAlt: "Stranger Things Season 5",
    releaseDateTime: "November 26, 2025 21:00:00",
    watchUrl: "https://www.netflix.com/us/title/80057281",
    objectPosition: "50% 30%",
    TimerCard: SmallTimerCard,
    SiteLogo: NetflixLogo,
  },
  {
    avatar: StrangerLogo.src,
    title: "Stranger Things",
    subheader: "Chapter Three: The Turnbow Trap",
    season: 5,
    episode: 3,
    cardMedia: StrangerThings.src,
    cardMediaAlt: "Stranger Things Season 5",
    releaseDateTime: "November 26, 2025 21:00:00",
    watchUrl: "https://www.netflix.com/us/title/80057281",
    objectPosition: "50% 30%",
    TimerCard: SmallTimerCard,
    SiteLogo: NetflixLogo,
  },
  {
    avatar: StrangerLogo.src,
    title: "Stranger Things",
    subheader: "Chapter Four: Sorcerer",
    season: 5,
    episode: 4,
    cardMedia: StrangerThings.src,
    cardMediaAlt: "Stranger Things Season 5",
    releaseDateTime: "November 26, 2025 21:00:00",
    watchUrl: "https://www.netflix.com/us/title/80057281",
    objectPosition: "50% 30%",
    TimerCard: SmallTimerCard,
    SiteLogo: NetflixLogo,
  },
  {
    avatar: StrangerLogo.src,
    title: "Stranger Things",
    subheader: "Chapter Five: Shock Jock",
    season: 5,
    episode: 5,
    cardMedia: StrangerThings.src,
    cardMediaAlt: "Stranger Things Season 5",
    releaseDateTime: "December 25, 2025 21:00:00",
    watchUrl: "https://www.netflix.com/us/title/80057281",
    objectPosition: "50% 30%",
    TimerCard: SmallTimerCard,
    SiteLogo: NetflixLogo,
  },
  {
    avatar: StrangerLogo.src,
    title: "Stranger Things",
    subheader: "Chapter Six: Escape from Camazotz",
    season: 5,
    episode: 6,
    cardMedia: StrangerThings.src,
    cardMediaAlt: "Stranger Things Season 5",
    releaseDateTime: "December 25, 2025 21:00:00",
    watchUrl: "https://www.netflix.com/us/title/80057281",
    objectPosition: "50% 30%",
    TimerCard: SmallTimerCard,
    SiteLogo: NetflixLogo,
  },
  {
    avatar: StrangerLogo.src,
    title: "Stranger Things",
    subheader: "Chapter Seven: The Bridge",
    season: 5,
    episode: 7,
    cardMedia: StrangerThings.src,
    cardMediaAlt: "Stranger Things Season 5",
    releaseDateTime: "December 25, 2025 21:00:00",
    watchUrl: "https://www.netflix.com/us/title/80057281",
    objectPosition: "50% 30%",
    TimerCard: SmallTimerCard,
    SiteLogo: NetflixLogo,
  },
  {
    avatar: StrangerLogo.src,
    title: "Stranger Things",
    subheader: "Chapter Eight: The Rightside Up",
    season: 5,
    episode: 8,
    cardMedia: StrangerThings.src,
    cardMediaAlt: "Stranger Things Season 5",
    releaseDateTime: "December 31, 2025 21:00:00",
    watchUrl: "https://www.netflix.com/us/title/80057281",
    objectPosition: "50% 30%",
    TimerCard: SmallTimerCard,
    SiteLogo: NetflixLogo,
    finale: true,
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
    objectPosition: "50% 28%",
    TimerCard: LargeTimerCard,
    SiteLogo: CrunchyrollLogo,
    addContrastToTimer: true,
  },
];
