import { Div, MainCard, Projects } from "components/_index";
import { Edit } from "iconsax-react";

function ProjectsPage() {
  return (
    <div>
      <MainCard
        headerTitle="My Project"
        icon={<Edit className="dark:text-textgreen text-lightTextColor" />}
      >
        <Div className="my-4 mx-2 dark:text-textDark text-textLight text-justify">
          Welcome to my Project Page! Here, amidst the digital realm, I am
          Amirali, a frontend developer fueled by a passion for creating
          extraordinary digital experiences that captivate and inspire. As you
          embark on this journey through my work, you'll witness the culmination
          of meticulous craftsmanship and boundless creativity.
        </Div>

        <Div className="my-4 mx-2 dark:text-textDark text-textLight text-justify">
          Each project is a canvas where I meticulously weave together the
          intricate threads of responsive design and intuitive user interfaces.
          It's not just about lines of code; it's about breathing life into
          pixels, transforming them into immersive environments where users are
          effortlessly drawn in.
        </Div>

        <Div className="my-4 mx-2 dark:text-textDark text-textLight text-justify">
          As you explore my portfolio, you'll discover a fusion of artistry and
          functionality, where every pixel serves a purpose, and every
          interaction tells a story. Whether it's a sleek website, an engaging
          web application, or a captivating mobile experience, each creation is
          a testament to my unwavering commitment to excellence.
        </Div>

        <Div className="my-4 mx-2 dark:text-textDark text-textLight text-justify">
          But this journey is not just about showcasing my work; it's an
          invitation to collaborate, to join me in crafting digital narratives
          that resonate with audiences far and wide. Together, let's push the
          boundaries of what's possible, let's innovate, let's inspire, and
          let's weave digital stories that leave a lasting impression.
        </Div>

        <Div className="my-4 mx-2 dark:text-textDark text-textLight text-justify">
          So, welcome, explorer, to my digital realm. Take a moment to immerse
          yourself in the wonders that await, and let's embark on this journey
          together a journey where creativity knows no bounds, and the
          possibilities are endless.
        </Div>
      </MainCard>

      {/* <MainCard
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
      </MainCard> */}
      <Projects noButton={true} />
    </div>
  );
}
export default ProjectsPage;
