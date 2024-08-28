import React, { useState } from "react";
import Product from "./Product";
import { motion, useScroll } from "framer-motion";

function Products() {
  var products = [
    {
      title: "arquiel",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatem et similique blanditiis sed numquam expedita doloribus.",
      live: true,
      case: false,
    },
    {
      title: "crus",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatem et similique blanditiis sed numquam expedita doloribus.",
      live: false,
      case: true,
    },
    {
      title: "rokefu",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatem et similique blanditiis sed numquam expedita doloribus.",
      live: true,
      case: true,
    },
    {
      title: "hello",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatem etsimilique blanditiis sed numquam expedita doloribus.",
      live: false,
      case: true,
    },
    {
      title: "crus",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatem et similique blanditiis sed numquam expedita doloribus.",
      live: true,
      case: false,
    },
  ];

  const [pos, setpos] = useState(0);

  const mover = (index) => {
    setpos(index * 15);
  };

  return (
    <div className="mt-6 relative">
      {products.map((elem, i) => (
        <Product key={i} value={elem} mover={mover} index={i} />
      ))}
      <div className="pt-5 absolute w-full h-full  top-0 pointer-events-none ">
        <motion.div
          initial={{ y: pos }}
          animate={{ y: pos + `rem` }}
          transition={{ease:[0.76, 0, 0.24, 1], duration:0.5}}
          className=" window w-[22rem] h-[15rem] absolute left-[30%]  overflow-hidden "
        >
          <motion.div    transition={{ease:[0.76, 0, 0.24, 1], duration:0.5}}    animate={{ y: -pos + `rem` }} className="w-full h-full "><img src="https://images.unsplash.com/photo-1520724807848-3ff34d6a3bba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1dHVyaXN0aWN8ZW58MHx8MHx8fDA%3D" alt="" /></motion.div>
          <motion.div    transition={{ease:[0.76, 0, 0.24, 1], duration:0.5}}    animate={{ y: -pos + `rem` }} className="w-full h-full "><img src="https://images.unsplash.com/photo-1521239248915-738394a81876?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZ1dHVyaXN0aWN8ZW58MHx8MHx8fDA%3D" alt="" /></motion.div>
          <motion.div    transition={{ease:[0.76, 0, 0.24, 1], duration:0.5}}    animate={{ y: -pos + `rem` }} className="w-full h-full "><img src="https://images.unsplash.com/photo-1462815888691-055e95a70c97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZ1dHVyaXN0aWN8ZW58MHx8MHx8fDA%3D" alt="" /></motion.div>
          <motion.div    transition={{ease:[0.76, 0, 0.24, 1], duration:0.5}}    animate={{ y: -pos + `rem` }} className="w-full h-full "><img src="https://images.unsplash.com/photo-1573767291321-c0af2eaf5266?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1dHVyaXN0aWN8ZW58MHx8MHx8fDA%3D" alt="" /></motion.div>
          <motion.div    transition={{ease:[0.76, 0, 0.24, 1], duration:0.5}}    animate={{ y: -pos + `rem` }} className="w-full h-full "><img src="https://images.unsplash.com/photo-1485740112426-0c2549fa8c86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1dHVyaXN0aWN8ZW58MH" alt="" /></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
