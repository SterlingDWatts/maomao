"use client";

import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import DrawerAppBar from "../components/appBarWithResponsiveMenu";
import TimerCard from "../components/timerCard";

import ADTheBeginning from "../app/assets/ADTheBeginning.jpg";
import AllCreaturesSeason3Episode3 from "../app/assets/AllCreaturesSeason3Episode3.jpg";
import FoundationSeason3Episode1 from "../app/assets/FoundationSeason3Episode1.jpg";
import FoundationSeason3Episode2 from "../app/assets/FoundationSeason3Episode2.jpg";
import FoundationAvatar from "../app/assets/FoundationAvatar.jpg";
import FoundationSeason3 from "../app/assets/FoundationSeason3.jpg";
import FrierenFrierensParty from "../app/assets/FrierenFrierensParty.jpg";
import FrierenLogo from "../app/assets/FrierenLogo.jpg";
import JamesLogo from "../app/assets/JamesLogo.jpg";
import MaomaoSmall from "../app/assets/MaomaoSmall.jpg";
import MyHeroFinalSeason from "../app/assets/MyHeroFinalSeason.jpg";
import MyHeroLogo from "../app/assets/MyHeroLogo.jpg";
import OnlyMurdersLogo from "../app/assets/OnlyMurdersLogo.png";
import SlowHorses from "../app/assets/SlowHorsesLogo.jpg";
import SlowHorsesLogo from "../app/assets/SlowHorsesLogo.jpg";
import TheBearLogo from "../app/assets/TheBearLogo.jpg";
import TheBearS4E2 from "../app/assets/TheBearS4E2.jpg";

export default function Page() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="lg"
        sx={{
          paddingTop: { xs: "56px", sm: "64px" },
          paddingLeft: { xs: 0, sm: 3 },
          paddingRight: { xs: 0, sm: 3 },
        }}
      >
        <DrawerAppBar />
        <Stack spacing={2} sx={{ marginTop: 2 }}>
          <TimerCard
            avatar={FoundationAvatar.src}
            subheader="A Song for the End of Everything"
            title="Foundation S3 E1"
            cardMedia={FoundationSeason3Episode1.src}
            cardMediaAlt="Foundation Season 3 Episode 1"
            releaseDateTime="July 11, 2025 03:00:00"
            synopsis="A mysterious new pirate with terrifying abilities - known as the Mule - catches the attention of the Foundation and Empire."
            watchUrl="https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3"
          />

          <TimerCard
            avatar={TheBearLogo.src}
            subheader="Soubise"
            title="The Bear S4 E2"
            cardMedia={TheBearS4E2.src}
            cardMediaAlt="The Bear Season 4 Episode 2"
            releaseDateTime="June 25, 2025 21:00:00"
            synopsis="Gears start to turn."
            watchUrl="https://www.hulu.com/series/05eb6a8e-90ed-4947-8c0b-e6536cbddd5f"
          />

          <TimerCard
            avatar={JamesLogo.src}
            subheader="Surviving Siegfried"
            title="All Creatures Great And Small S3 E3"
            cardMedia={AllCreaturesSeason3Episode3.src}
            cardMediaAlt="All Creatures Great And Small Season 3 Episode 3"
            releaseDateTime="January 22, 2023 21:00:00"
            synopsis="Siegfried receives some news and channels his feelings into saving a young racehorse. James struggles to get farmers to agree to his newly adopted TB testing scheme."
            watchUrl="https://play.google.com/store/tv/show?id=gbQjVgRNYkg.P&cdid=tvseason-mjGu8FIpiU4.P&hl=en_US"
          />

          <TimerCard
            avatar={FoundationAvatar.src}
            subheader="Shadows in the Math"
            title="Foundation S3 E2"
            cardMedia={FoundationSeason3Episode2.src}
            cardMediaAlt="Foundation Season 3 Episode 2"
            releaseDateTime="July 18 2025 03:00:00 GMT-0700"
            synopsis="Gaal and Hari advance their plans on Ignis. Empire grapples with an unforeseen prediction. Pritcher enlists help to investigate the Mule."
            watchUrl="https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3"
          />

          <TimerCard
            avatar={MaomaoSmall.src}
            subheader="The Beginning"
            title="The Apothecary Diaries S2 E24"
            cardMedia={ADTheBeginning.src}
            cardMediaAlt="Apothecary Diaries Season 2 Episode 24"
            releaseDateTime="July 18 2025 13:00:00 GMT-0700"
            synopsis="After the war ends, Jinshi faces mounting work duties while Maomao goes back to the pleasure quarter."
            watchUrl="https://www.crunchyroll.com/series/G3KHEVDJ7/the-apothecary-diaries"
          />

          <TimerCard
            avatar={FoundationAvatar.src}
            subheader="3.3"
            title="Foundation S3 E3"
            cardMedia={FoundationSeason3.src}
            cardMediaAlt="Foundation Season 3 Episode 3"
            releaseDateTime="July 25 2025 03:00:00 GMT-0700"
            watchUrl="https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3"
          />

          <TimerCard
            avatar={FoundationAvatar.src}
            subheader="3.4"
            title="Foundation S3 E4"
            cardMedia={FoundationSeason3.src}
            cardMediaAlt="Foundation Season 3 Episode 4"
            releaseDateTime="August 1 2025 03:00:00 GMT-0700"
            watchUrl="https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3"
          />

          <TimerCard
            avatar={OnlyMurdersLogo.src}
            subheader="5.1"
            title="Only Murders In The Building S5 E1"
            cardMedia={OnlyMurdersLogo.src}
            cardMediaAlt="Only Murders In The Building"
            releaseDateTime="August 05, 2025 21:00:00"
            watchUrl="https://www.hulu.com/series/ef31c7e1-cd0f-4e07-848d-1cbfedb50ddf"
            estimate
            estimateDate="[Best Guess] August 2025"
          />

          <TimerCard
            avatar={FoundationAvatar.src}
            subheader="3.5"
            title="Foundation S3 E5"
            cardMedia={FoundationSeason3.src}
            cardMediaAlt="Foundation Season 3 Episode 5"
            releaseDateTime="August 8 2025 03:00:00 GMT-0700"
            watchUrl="https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3"
          />

          <TimerCard
            avatar={FoundationAvatar.src}
            subheader="3.6"
            title="Foundation S3 E6"
            cardMedia={FoundationSeason3.src}
            cardMediaAlt="Foundation Season 3 Episode 6"
            releaseDateTime="August 15 2025 03:00:00 GMT-0700"
            watchUrl="https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3"
          />

          <TimerCard
            avatar={FoundationAvatar.src}
            subheader="3.7"
            title="Foundation S3 E7"
            cardMedia={FoundationSeason3.src}
            cardMediaAlt="Foundation Season 3 Episode 7"
            releaseDateTime="August 22 2025 03:00:00 GMT-0700"
            watchUrl="https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3"
          />

          <TimerCard
            avatar={FoundationAvatar.src}
            subheader="3.8"
            title="Foundation S3 E8"
            cardMedia={FoundationSeason3.src}
            cardMediaAlt="Foundation Season 3 Episode 8"
            releaseDateTime="August 29 2025 03:00:00 GMT-0700"
            watchUrl="https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3"
          />

          <TimerCard
            avatar={FoundationAvatar.src}
            subheader="3.9"
            title="Foundation S3 E9"
            cardMedia={FoundationSeason3.src}
            cardMediaAlt="Foundation Season 3 Episode 9"
            releaseDateTime="September 05 2025 03:00:00 GMT-0700"
            watchUrl="https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3"
          />

          <TimerCard
            avatar={FoundationAvatar.src}
            subheader="3.10"
            title="Foundation S3 E10"
            cardMedia={FoundationSeason3.src}
            cardMediaAlt="Foundation Season 3 Episode 10"
            releaseDateTime="September 12 2025 03:00:00 GMT-0700"
            watchUrl="https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3"
          />

          <TimerCard
            avatar={SlowHorsesLogo.src}
            subheader="5.1"
            title="Slow Horses S5 E1"
            cardMedia={SlowHorses.src}
            cardMediaAlt="Slow Horses"
            releaseDateTime="September 24, 2025 21:00:00"
            watchUrl="https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o"
          />

          <TimerCard
            avatar={SlowHorsesLogo.src}
            subheader="5.2"
            title="Slow Horses S5 E2"
            cardMedia={SlowHorses.src}
            cardMediaAlt="Slow Horses"
            releaseDateTime="September 24, 2025 21:00:00"
            watchUrl="https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o"
          />

          <TimerCard
            avatar={SlowHorsesLogo.src}
            subheader="5.3"
            title="Slow Horses S5 E3"
            cardMedia={SlowHorses.src}
            cardMediaAlt="Slow Horses"
            releaseDateTime="October 01, 2025 21:00:00"
            watchUrl="https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o"
          />

          <TimerCard
            avatar={SlowHorsesLogo.src}
            subheader="5.4"
            title="Slow Horses S5 E4"
            cardMedia={SlowHorses.src}
            cardMediaAlt="Slow Horses"
            releaseDateTime="October 08, 2025 21:00:00"
            watchUrl="https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o"
          />

          <TimerCard
            avatar={SlowHorsesLogo.src}
            subheader="5.5"
            title="Slow Horses S5 E5"
            cardMedia={SlowHorses.src}
            cardMediaAlt="Slow Horses"
            releaseDateTime="October 15, 2025 21:00:00"
            watchUrl="https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o"
          />

          <TimerCard
            avatar={SlowHorsesLogo.src}
            subheader="5.6"
            title="Slow Horses S5 E6"
            cardMedia={SlowHorses.src}
            cardMediaAlt="Slow Horses"
            releaseDateTime="October 22, 2025 21:00:00"
            watchUrl="https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o"
          />

          <TimerCard
            avatar={MyHeroLogo.src}
            subheader="8.1"
            title="My Hero Academia S8 E1"
            cardMedia={MyHeroFinalSeason.src}
            cardMediaAlt="My Hero Academia Season 8"
            releaseDateTime="October 31, 2025 21:00:00"
            watchUrl="https://www.crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia"
            estimate
            estimateDate="October 2025"
          />

          <TimerCard
            avatar={FrierenLogo.src}
            subheader="2.1"
            title="Frieren: Beyond Journey's End S2 E1"
            cardMedia={FrierenFrierensParty.src}
            cardMediaAlt="Frieren's Party"
            releaseDateTime="January 31, 2026 23:00:00"
            watchUrl="https://www.crunchyroll.com/series/GG5H5XQX4/frieren-beyond-journeys-end"
            estimate
            estimateDate="January 2026"
          />
        </Stack>
      </Container>
    </React.Fragment>
  );
}
