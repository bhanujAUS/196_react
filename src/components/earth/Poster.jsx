import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const poster = {
    id: 'poster',
    imgUrl: '/poster.png',
    title: 'CLICK HERE TO CLAIM',
};

export default function Poster() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <AnimatePresence>
        {isModalOpen && (
          <div>
            <motion.button
              onClick={() => setIsModalOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: 0.15 }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1}}
              exit={{ opacity: 0 }}
              transition={{ opacity: 0.2 }}
              style={{ position: "fixed", top: "0px"}}
            >
              <img href="#" src={poster.imgUrl} alt={poster.id} style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <button className="button" onClick={() => setIsModalOpen(!isModalOpen)}>
        Translate
      </button>
    </div>
  );
}
