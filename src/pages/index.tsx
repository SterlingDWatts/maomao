"use client";

import * as React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

import DrawerAppBar from "../components/appBarWithResponsiveMenu";
import TimerCard from "../components/timerCard";

import ADTheBeginning from "../app/assets/ADTheBeginning.jpg";
import FoundationSeason3Episode1 from "../app/assets/FoundationSeason3Episode1.jpg";
import FoundationSeason3Episode2 from "../app/assets/FoundationSeason3Episode2.jpg";
import FoundationAvatar from "../app/assets/FoundationAvatar.jpg";
import FrierenFrierensParty from "../app/assets/FrierenFrierensParty.jpg";
import FrierenLogo from "../app/assets/FrierenLogo.jpg";
import MaomaoSmall from "../app/assets/MaomaoSmall.jpg";
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
            title="A Song for the End of Everything"
            subheader="Foundation Season 3 Episode 1"
            cardMedia={FoundationSeason3Episode1.src}
            cardMediaAlt="Foundation Season 3 Episode 1"
            releaseDateTime="July 11, 2025 03:00:00"
            synopsis="A mysterious new pirate with terrifying abilities - known as the Mule - catches the attention of the Foundation and Empire."
            watchUrl="https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3"
          />

          <TimerCard
            avatar={TheBearLogo.src}
            title="Soubise"
            subheader="The Bear Season 4 Episode 2"
            cardMedia={TheBearS4E2.src}
            cardMediaAlt="The Bear Season 4 Episode 2"
            releaseDateTime="June 25, 2025 21:00:00"
            synopsis="Gears start to turn."
            watchUrl="https://www.hulu.com/series/05eb6a8e-90ed-4947-8c0b-e6536cbddd5f"
          />

          <TimerCard
            avatar={FoundationAvatar.src}
            title="Shadows in the Math"
            subheader="Foundation Season 3 Episode 2"
            cardMedia={FoundationSeason3Episode2.src}
            cardMediaAlt="Foundation Season 3 Episode 2"
            releaseDateTime="July 18 2025 03:00:00 GMT-0700"
            synopsis="Gaal and Hari advance their plans on Ignis. Empire grapples with an unforeseen prediction. Pritcher enlists help to investigate the Mule."
            watchUrl="https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3"
          />

          <TimerCard
            avatar={MaomaoSmall.src}
            title="The Beginning"
            subheader="The Apothecary Diaries Season 2 Episode 24"
            cardMedia={ADTheBeginning.src}
            cardMediaAlt="Apothecary Diaries Season 2 Episode 24"
            releaseDateTime="July 18 2025 13:00:00 GMT-0700"
            synopsis="After the war ends, Jinshi faces mounting work duties while Maomao goes back to the pleasure quarter."
            watchUrl="https://www.crunchyroll.com/series/G3KHEVDJ7/the-apothecary-diaries"
          />

          <TimerCard
            avatar={OnlyMurdersLogo.src}
            title="TBA"
            subheader="Only Murders In The Building Season 5 Episode 1"
            cardMedia={OnlyMurdersLogo.src}
            cardMediaAlt="Only Murders In The Building"
            releaseDateTime="August 26, 2025 21:00:00"
            watchUrl="https://www.hulu.com/series/ef31c7e1-cd0f-4e07-848d-1cbfedb50ddf"
            estimate
          />

          <TimerCard
            avatar={SlowHorsesLogo.src}
            title="TBA"
            subheader="Slow Horses Season 5 Episode 1"
            cardMedia={SlowHorses.src}
            cardMediaAlt="Slow Horses"
            releaseDateTime="September 24, 2025 21:00:00"
            watchUrl="https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o"
          />

          <TimerCard
            avatar={FrierenLogo.src}
            title="TBA"
            subheader="Frieren: Beyond Journey's End Season 2 Episode 1"
            cardMedia={FrierenFrierensParty.src}
            cardMediaAlt="Frieren's Party"
            releaseDateTime="January 31, 2026 23:00:00"
            watchUrl="https://www.crunchyroll.com/series/GG5H5XQX4/frieren-beyond-journeys-end"
            estimate
          />
        </Stack>
      </Container>
    </React.Fragment>
  );
}
