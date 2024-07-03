import React from "react";
import Image from "next/image";

interface IconPaths {
  [key: string]: {
    dark: string;
    light: string;
  };
}

// Object to store icon paths for dark and light modes
const iconPaths: IconPaths = {
  angular: {
    dark: "/assets/img/trendbox/angular_d.svg",
    light: "/assets/img/trendbox/angular_l.svg",
  },
  c: {
    dark: "/assets/img/trendbox/c_d.svg",
    light: "/assets/img/trendbox/c_l.svg",
  },
  django: {
    dark: "/assets/img/trendbox/django_d.svg",
    light: "/assets/img/trendbox/django_l.svg",
  },
  firebase: {
    dark: "/assets/img/trendbox/firebase_d.svg",
    light: "/assets/img/trendbox/firebase_l.svg",
  },
  git: {
    dark: "/assets/img/trendbox/git_d.svg",
    light: "/assets/img/trendbox/git_l.svg",
  },
  javascript: {
    dark: "/assets/img/trendbox/javascript_d.svg",
    light: "/assets/img/trendbox/javascript_l.svg",
  },
  java: {
    dark: "/assets/img/trendbox/java_d.svg",
    light: "/assets/img/trendbox/java_l.svg",
  },
  mongo: {
    dark: "/assets/img/trendbox/mongo_d.svg",
    light: "/assets/img/trendbox/mongo_l.svg",
  },
  node: {
    dark: "/assets/img/trendbox/node_d.svg",
    light: "/assets/img/trendbox/node_l.svg",
  },
  python: {
    dark: "/assets/img/trendbox/python_d.svg",
    light: "/assets/img/trendbox/python_l.svg",
  },
  react: {
    dark: "/assets/img/trendbox/react_d.svg",
    light: "/assets/img/trendbox/react_l.svg",
  },
  scala: {
    dark: "/assets/img/trendbox/scala_d.svg",
    light: "/assets/img/trendbox/scala_l.svg",
  },
  spark: {
    dark: "/assets/img/trendbox/spark_d.svg",
    light: "/assets/img/trendbox/spark_l.svg",
  },
  spring: {
    dark: "/assets/img/trendbox/spring_d.svg",
    light: "/assets/img/trendbox/spring_l.svg",
  },
};

interface TrendCardProps {
  iconName: keyof IconPaths;
  isDarkMode: boolean;
}

const TrendCard: React.FC<TrendCardProps> = ({ iconName, isDarkMode }) => {
  const iconPath = isDarkMode
    ? iconPaths[iconName].dark
    : iconPaths[iconName].light;

  return (
    <div className="logo-card">
      <div
        className="one aos-init "
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-duration="4000"
        data-aos-delay="50"
      ></div>
      <div
        className="two aos-init "
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="200"
        data-aos-duration="4000"
      ></div>
      <img
        className="aos-init"
        data-aos="fade-in"
        data-aos-duration="4000"
        data-aos-delay="500"
        src={iconPath}
        height={100}
        width={100}
        alt={`${iconName} logo`}
      />
    </div>
  );
};

export default TrendCard;
