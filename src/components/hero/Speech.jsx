import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Same substring at the start will only be typed out once, initially",
            1000,
            "Hello! My name is Xavierno Yanura Alexander, and I am a passionate web and game developer. With a strong background in both frontend and backend technologies, I specialize in creating dynamic and user-friendly web applications. In addition to web development, I am also an avid game developer. I create immersive gaming experiences using game engines like Unity and Unreal Engine. I have a solid understanding of game mechanics, AI programming, and graphics rendering, which allows me to build engaging games for both desktop and mobile platforms.
My goal is to combine my technical skills and creativity to build seamless, interactive experiences—whether it’s through websites or games. I’m always excited to learn new technologies and take on challenging projects that push my boundaries as a developer.
If you’re interested in collaborating or discussing a potential project, feel free to reach out! ",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src="/man.png" alt="" />
    </motion.div>
  );
};

export default Speech;
