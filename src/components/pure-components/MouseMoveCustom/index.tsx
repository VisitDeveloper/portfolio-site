import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface MousePosition {
  x: number | string;
  y: number | string;
}

interface MouseMoveProps {
  children: React.ReactElement | JSX.Element | React.ReactNode;
}

const MouseMove = (props: MouseMoveProps) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (e: any) => {
      console.log("e", e);
      setMousePosition({
        x: e.layerX - 16,
        y: e.layerY - 16,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };

  return (
    <>
      <motion.div variants={variants} animate="default" className="cursor-new">
        {props.children}
      </motion.div>
    </>
  );
};
export default MouseMove;
