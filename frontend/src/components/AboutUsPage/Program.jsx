import { Container, Typography } from "@mui/material";
import React from "react";
import "../styles/program.css";
import ProgramCard from "../AboutUsPage/ProgramCard";
export default function Program() {
  return (
    <div>
      <div className="program">
        <Container>
          <Typography variant="h1" color="black" paddingY={5}>
            PROGRAMS OFFERED
          </Typography>
          <ProgramCard />
        </Container>
      </div>
    </div>
  );
}
