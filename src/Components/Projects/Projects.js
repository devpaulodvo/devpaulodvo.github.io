import React from "react";
import styles from './Projects.module.css';
import {data} from './Data';

const Projects = () => {
    return(
        <div className={`${styles.container} flex`}>
            <div className={`${styles.wrapper}`}/>
            <div className={`${styles.contentContainer} flex-wrap drop-shadow-md`}>
            {
                data.map((dat)=>
                    <div className={`${styles.card} `} key={dat.key}>
                        <h2 className={`text-2xl font-semibold font-serif mb-2`}>{dat.title}</h2>
                        <img src={dat.img} alt={dat.alt} className={`${styles.img} mb-2`}/>
                        <p className={`mb-2`}>{dat.disc}</p>
                        <div className={`mb-1 flex flex-wrap`}>
                            {
                                dat.tags.map((tag=>
                                    <p className={`cursor-pointer mr-1 mb-1 p-1 text-cyan-50 duration-500 bg-slate-700 opacity-60 hover:opacity-100`}>
                                        {tag}
                                    </p>
                                    ))
                            }
                        </div>
                        <div className={``}>
                            <p onClick={()=>window.open(dat.see)} className={`px-2 py-1 w-24 float-right rounded-lg text-white cursor-pointer duration-500 hover:text-amber-300 text-center bg-orange-500`}>See code</p>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default Projects;