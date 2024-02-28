import { Div, MainCard, Projects } from "components/_index";
import { Edit } from "iconsax-react";

function ProjectsPage() {
  return (
    <div>
      <MainCard
        headerTitle={"My Projects"}
        icon={<Edit className="dark:text-textgreen text-lightTextColor" />}
      >
        <Div className="dark:text-textDark text-textLight text-justify mt-4">
          Welcome to my portfolio! As a dedicated web developer, I've had the
          privilege of working on a diverse range of projects that showcase my
          passion for creating dynamic and engaging online experiences. From
          crafting sleek and intuitive user interfaces to implementing robust
          backend functionalities, each project reflects my commitment to
          excellence and innovation in web development. Whether it's building
          responsive websites, developing custom web applications, or optimizing
          performance for seamless user experiences, I approach every project
          with creativity, technical expertise, and attention to detail. Take a
          journey through my portfolio, and discover the unique solutions I've
          crafted to meet the diverse needs of clients and users alike. Thank
          you for visiting, and I look forward to the opportunity to collaborate
          with you on your next web development endeavor!
        </Div>
      </MainCard>
      <Projects noButton={true} />
    </div>
  );
}
export default ProjectsPage;
