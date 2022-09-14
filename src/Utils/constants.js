import {
    faHome,
    faHeadphones,
    faGamepad,
    faBasketballBall,
    faShirt,
    faMasksTheater,
    faDumbbell,
    faBitcoinSign,
    faClover,
    faSatelliteDish,
    faClapperboard,
    faUserGraduate,
    faPodcast,
  
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const categories = [
    { name: 'New', icon: <FontAwesomeIcon icon={faHome}/>, },
    { name: 'JS Mastery', icon: <FontAwesomeIcon icon={faUserGraduate}/>, },
    { name: 'Coding', icon: <FontAwesomeIcon icon={faUserGraduate}/>, },
    { name: 'ReactJS', icon: <FontAwesomeIcon icon={faUserGraduate}/>, },
    { name: 'NextJS', icon: <FontAwesomeIcon icon={faUserGraduate}/>, },
    { name: 'Music', icon: <FontAwesomeIcon icon={faHeadphones}/> },
    { name: 'Education', icon: <FontAwesomeIcon icon={faUserGraduate}/>, },
    { name: 'Podcast', icon: <FontAwesomeIcon icon={faPodcast}/>, },
    { name: 'Movie', icon: <FontAwesomeIcon icon={faClapperboard}/>, },
    { name: 'Gaming', icon: <FontAwesomeIcon icon={faGamepad}/>, },
    { name: 'Live', icon: <FontAwesomeIcon icon={faSatelliteDish}/>, },
    { name: 'Sport', icon: <FontAwesomeIcon icon={faBasketballBall}/>, },
    { name: 'Fashion', icon: <FontAwesomeIcon icon={faShirt}/>, },
    { name: 'Beauty', icon: <FontAwesomeIcon icon={faClover}/>, },
    { name: 'Comedy', icon: <FontAwesomeIcon icon={faMasksTheater}/>, },
    { name: 'Gym', icon: <FontAwesomeIcon icon={faDumbbell}/>, },
    { name: 'Crypto', icon: <FontAwesomeIcon icon={faBitcoinSign}/>, },
  ];
  