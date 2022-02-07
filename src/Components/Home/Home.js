import React from "react";
import styles from './Home.module.css';
import me from './img/me.jpg';
import pin from './img/pin.png';
import email from './img/email.png';
import git from './img/github.png';
import nine from './img/99.png';
import quote from './img/quote.png';
import suitcase from './img/suitcase.png';
import code from './img/code.png';
import mortarboard from './img/mortarboard.png';

const Home = () => {
    return(
        <div className={ `${styles.container}`}>
            <div className={`${styles.contentContainer}`}>
                <img src={me} alt="me" className={`${styles.img} w-60`}/>
                <div className={`self-center`}>
                    <div className={`${styles.maintext} font-serif font-semibold text-6xl`}>Hi, I am Paulo</div>
                    <div className={`${styles.subtext}`}>Software Developer, Graphics Designer</div>
                    <div className={`${styles.list} flex mt-3 pb-2`}>
                        <img className={`w-6  mr-1`} src={pin}/>
                        <label>Philippines</label>
                    </div>
                    <div className={`${styles.list} flex pb-2`}>
                        <img className={`w-6  mr-1`} src={mortarboard}/>
                        <label className={`md: truncate`}>Bachelor of Science in Information and Technology</label>
                    </div>
                    <div className={`${styles.list} flex pb-2`}>
                        <img className={`w-6  mr-1`} src={email}/>
                        <label>devpaulodvo@gmail.com</label>
                    </div>
                    <div className={`${styles.list} flex pb-2`}>
                        <img className={`w-6  mr-1`} src={git}/>
                        <label className="cursor-pointer duration-500 hover:text-orange-500" onClick={()=>window.open("https://github.com/devpaulodvo")}>https://github.com/devpaulodvo</label>
                    </div>
                    <div className={`${styles.list} flex pb-1`}>
                        <img className={`w-6  mr-1`} src={nine}/>
                        <label className="cursor-pointer duration-500 hover:text-orange-500" onClick={()=>window.open("https://99designs.com/profiles/waki")}>https://99designs.com/profiles/waki</label>
                    </div>
                </div>
            </div>
            <div className={`flex-row ${styles.about}`}>
                <div className="font-mono text-5xl mb-4"> About Me</div>
                <div className="flex items-center">
                    <img src={quote} className="w-1/6"/>
                    <p className="p-5">"Desire is the key to motivation, 
                        but it's determination and commitment to an unrelenting pursuit of your goal - a commitment to excellence - 
                        that will enable you to attain the success you seek."  - Mario Andretti
                    </p>
                </div>
                <div className="flex items-center">
                    <p className="p-5">
                        <br></br>
                        During my spare time, I love to test myself by creating useful applications. I constantly engage with people who are experienced in building modern applications.
                        I can develop web and mobile applications using React JS and React Native framework. I always keep myself updated to the trends in software development.
                    </p>
                    <img src={code} className="w-1/6"/>
                </div>
                <div className="flex items-center">
                    <img src={suitcase} className="w-1/6"/>
                    <p className="p-5">
                        <br></br>
                        Been in academe for 6 years. I taught computer science in a prestigious Science High School in the Philippines. The subjects I taught are basic programming (C++, Java, Python), Game Development (Unity), Basic Data Structures and Database basics.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;