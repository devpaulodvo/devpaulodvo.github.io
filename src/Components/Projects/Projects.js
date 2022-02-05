import React from "react";
import styles from './Projects.module.css';
import {data} from './Data';

const Projects = () => {
    return(
        <div className={`${styles.container} flex`}>
            <div className={`${styles.contentContainer} flex-wrap`}>
            {
                data.map((dat)=>
                    <div className={`${styles.card} `} key={dat.key}>
                        <h2 className={`text-2xl font-semibold font-serif mb-2`}>{dat.title}</h2>
                        <img src={dat.img} alt={dat.alt} className={`${styles.img} mb-2`}/>
                        <p className={`mb-2`}>{dat.disc}</p>
                        <div className={`mb-3 flex flex-wrap`}>
                            {
                                dat.tags.map((tag=>
                                    <p className={`cursor-pointer m-1 p-1 bg-slate-500 text-cyan-50 hover:bg-slate-700`}>
                                        {tag}
                                    </p>
                                    ))
                            }
                        </div>
                        <label onClick={()=>window.open(dat.see)} className={`text-cyan-400 cursor-pointer hover:text-amber-300`}>See code</label>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default Projects;