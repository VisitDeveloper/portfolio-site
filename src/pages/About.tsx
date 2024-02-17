import {
  EducationCard,
  LetsTalk,
  Summary,
  ExperienceCard,
  Skills,
  Freelance
} from "components/_index";

function About() {
  return (
    <>
      <Summary />
      <Skills/>
      <EducationCard />
      <ExperienceCard />
      <Freelance/>
      <LetsTalk />
    </>
  );
}
export default About;
