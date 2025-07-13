"use client";

import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import DrawerAppBar from "../components/appBarWithResponsiveMenu";
import TimerCard from "../components/timerCard";

import ADTheBeginning from "../app/assets/ADTheBeginning.jpg";
import AllCreaturesSeason3Episode3 from "../app/assets/AllCreaturesSeason3Episode3.jpg";
import ChainsawManMovie from "../app/assets/ChainsawManMovie.jpg";
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
import Pochita from "../app/assets/Pochita.jpg";
import SlowHorses from "../app/assets/SlowHorsesLogo.jpg";
import SlowHorsesLogo from "../app/assets/SlowHorsesLogo.jpg";
import Superman from "../app/assets/Superman.jpg";
import SupermanLogo from "../app/assets/SupermanLogo.jpg";
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
            avatar={SupermanLogo.src}
            title="Superman"
            subheader=""
            cardMedia={Superman.src}
            cardMediaAlt="Superman"
            releaseDateTime="July 11, 2025 16:00:00"
            synopsis="Superman must reconcile his alien Kryptonian heritage with his human upbringing as reporter Clark Kent. As the embodiment of truth, justice and the human way he soon finds himself in a world that views these as old-fashioned."
            isMovie
          />

          <TimerCard
            avatar={TheBearLogo.src}
            title="The Bear S4 E2"
            subheader="Soubise"
            cardMedia={TheBearS4E2.src}
            cardMediaAlt="The Bear Season 4 Episode 2"
            releaseDateTime="June 25, 2025 21:00:00"
            synopsis="Gears start to turn."
            watchUrl="https://www.hulu.com/series/05eb6a8e-90ed-4947-8c0b-e6536cbddd5f"
          />

          <TimerCard
            avatar={JamesLogo.src}
            title="All Creatures Great And Small S3 E3"
            subheader="Surviving Siegfried"
            cardMedia={AllCreaturesSeason3Episode3.src}
            cardMediaAlt="All Creatures Great And Small Season 3 Episode 3"
            releaseDateTime="January 22, 2023 21:00:00"
            synopsis="Siegfried receives some news and channels his feelings into saving a young racehorse. James struggles to get farmers to agree to his newly adopted TB testing scheme."
            watchUrl="https://play.google.com/store/tv/show?id=gbQjVgRNYkg.P&cdid=tvseason-mjGu8FIpiU4.P&hl=en_US"
          />

          <TimerCard
            avatar={FoundationAvatar.src}
            title="Foundation S3 E2"
            subheader="Shadows in the Math"
            cardMedia={FoundationSeason3Episode2.src}
            cardMediaAlt="Foundation Season 3 Episode 2"
            releaseDateTime="July 18 2025 03:00:00 GMT-0700"
            synopsis="Gaal and Hari advance their plans on Ignis. Empire grapples with an unforeseen prediction. Pritcher enlists help to investigate the Mule."
            watchUrl="https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3"
          />

          <TimerCard
            avatar={MaomaoSmall.src}
            title="The Apothecary Diaries S2 E24"
            subheader="The Beginning"
            cardMedia={ADTheBeginning.src}
            cardMediaAlt="Apothecary Diaries Season 2 Episode 24"
            releaseDateTime="July 18 2025 13:00:00 GMT-0700"
            synopsis="After the war ends, Jinshi faces mounting work duties while Maomao goes back to the pleasure quarter."
            watchUrl="https://www.crunchyroll.com/series/G3KHEVDJ7/the-apothecary-diaries"
          />

          <TimerCard
            avatar={FoundationAvatar.src}
            title="Foundation S3 E3"
            subheader="3.3"
            cardMedia={FoundationSeason3.src}
            cardMediaAlt="Foundation Season 3 Episode 3"
            releaseDateTime="July 25 2025 03:00:00 GMT-0700"
            watchUrl="https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3"
          />

          <TimerCard
            avatar={FoundationAvatar.src}
            title="Foundation S3 E4"
            subheader="3.4"
            cardMedia={FoundationSeason3.src}
            cardMediaAlt="Foundation Season 3 Episode 4"
            releaseDateTime="August 1 2025 03:00:00 GMT-0700"
            watchUrl="https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3"
          />

          <TimerCard
            avatar={OnlyMurdersLogo.src}
            title="Only Murders In The Building S5 E1"
            subheader="5.1"
            cardMedia={OnlyMurdersLogo.src}
            cardMediaAlt="Only Murders In The Building"
            releaseDateTime="August 05, 2025 21:00:00"
            watchUrl="https://www.hulu.com/series/ef31c7e1-cd0f-4e07-848d-1cbfedb50ddf"
            estimate
            estimateDate="[Best Guess] August 2025"
          />

          <TimerCard
            avatar={FoundationAvatar.src}
            title="Foundation S3 E5"
            subheader="3.5"
            cardMedia={FoundationSeason3.src}
            cardMediaAlt="Foundation Season 3 Episode 5"
            releaseDateTime="August 8 2025 03:00:00 GMT-0700"
            watchUrl="https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3"
          />

          <TimerCard
            avatar={FoundationAvatar.src}
            title="Foundation S3 E6"
            subheader="3.6"
            cardMedia={FoundationSeason3.src}
            cardMediaAlt="Foundation Season 3 Episode 6"
            releaseDateTime="August 15 2025 03:00:00 GMT-0700"
            watchUrl="https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3"
          />

          <TimerCard
            avatar={FoundationAvatar.src}
            title="Foundation S3 E7"
            subheader="3.7"
            cardMedia={FoundationSeason3.src}
            cardMediaAlt="Foundation Season 3 Episode 7"
            releaseDateTime="August 22 2025 03:00:00 GMT-0700"
            watchUrl="https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3"
          />

          <TimerCard
            avatar={FoundationAvatar.src}
            title="Foundation S3 E8"
            subheader="3.8"
            cardMedia={FoundationSeason3.src}
            cardMediaAlt="Foundation Season 3 Episode 8"
            releaseDateTime="August 29 2025 03:00:00 GMT-0700"
            watchUrl="https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3"
          />

          <TimerCard
            avatar={FoundationAvatar.src}
            title="Foundation S3 E9"
            subheader="3.9"
            cardMedia={FoundationSeason3.src}
            cardMediaAlt="Foundation Season 3 Episode 9"
            releaseDateTime="September 05 2025 03:00:00 GMT-0700"
            watchUrl="https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3"
          />

          <TimerCard
            avatar={FoundationAvatar.src}
            title="Foundation S3 E10"
            subheader="3.10"
            cardMedia={FoundationSeason3.src}
            cardMediaAlt="Foundation Season 3 Episode 10"
            releaseDateTime="September 12 2025 03:00:00 GMT-0700"
            watchUrl="https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3"
          />

          <TimerCard
            avatar={SlowHorsesLogo.src}
            title="Slow Horses S5 E1"
            subheader="5.1"
            cardMedia={SlowHorses.src}
            cardMediaAlt="Slow Horses"
            releaseDateTime="September 24, 2025 21:00:00"
            watchUrl="https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o"
          />

          <TimerCard
            avatar={SlowHorsesLogo.src}
            title="Slow Horses S5 E2"
            subheader="5.2"
            cardMedia={SlowHorses.src}
            cardMediaAlt="Slow Horses"
            releaseDateTime="September 24, 2025 21:00:00"
            watchUrl="https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o"
          />

          <TimerCard
            avatar={SlowHorsesLogo.src}
            title="Slow Horses S5 E3"
            subheader="5.3"
            cardMedia={SlowHorses.src}
            cardMediaAlt="Slow Horses"
            releaseDateTime="October 01, 2025 21:00:00"
            watchUrl="https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o"
          />

          <TimerCard
            avatar={SlowHorsesLogo.src}
            title="Slow Horses S5 E4"
            subheader="5.4"
            cardMedia={SlowHorses.src}
            cardMediaAlt="Slow Horses"
            releaseDateTime="October 08, 2025 21:00:00"
            watchUrl="https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o"
          />

          <TimerCard
            avatar={SlowHorsesLogo.src}
            title="Slow Horses S5 E5"
            subheader="5.5"
            cardMedia={SlowHorses.src}
            cardMediaAlt="Slow Horses"
            releaseDateTime="October 15, 2025 21:00:00"
            watchUrl="https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o"
          />

          <TimerCard
            avatar={SlowHorsesLogo.src}
            title="Slow Horses S5 E6"
            subheader="5.6"
            cardMedia={SlowHorses.src}
            cardMediaAlt="Slow Horses"
            releaseDateTime="October 22, 2025 21:00:00"
            watchUrl="https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o"
          />

          <TimerCard
            avatar={Pochita.src}
            title="Chainsaw Man - The Movie: Reze Arc"
            subheader=""
            cardMedia={ChainsawManMovie.src}
            cardMediaAlt="Chainsaw Man - The Movie: Reze Arc"
            releaseDateTime="October 29, 2025 16:00:00"
            synopsis="Denji encounters a new romantic interest, Reze, who works at a coffee café."
            isMovie
          />

          <TimerCard
            avatar={MyHeroLogo.src}
            title="My Hero Academia S8 E1"
            subheader="8.1"
            cardMedia={MyHeroFinalSeason.src}
            cardMediaAlt="My Hero Academia Season 8"
            releaseDateTime="October 31, 2025 21:00:00"
            watchUrl="https://www.crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia"
            estimate
            estimateDate="October 2025"
          />

          <TimerCard
            avatar={FrierenLogo.src}
            title="Frieren: Beyond Journey's End S2 E1"
            subheader="2.1"
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
