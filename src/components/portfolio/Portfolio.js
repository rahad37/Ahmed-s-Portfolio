import React, { useEffect, useState } from 'react';
import { node, javascript, react, html_css} from '../../data';
import PortfolioList from '../portfolioList/PortfolioList';
import './Portfolio.scss';


const Portfolio = () => {
    const [selected, setSelected] = useState('js');
    const [data, setData] = useState([]);

    const list = [
        {
            id: 'js',
            title: 'JavaScript'
        },
        {
            id: 'react',
            title: 'React.js'
        },
        {
            id: 'node',
            title: 'Node.js'
        },
        {
            id: 'html',
            title: 'HTML/CSS'
        },
        // {
        //     id: 'content',
        //     title: 'Content'
        // }
    ]

    useEffect(() => {
        switch(selected){
            case 'node':
                setData(node);
                break;
            case 'react':
                setData(react);
                break;
            case 'js':
                setData(javascript);
                break;
            case 'html':
                setData(html_css);
                break;
                default:
                setData(javascript);
        }
    },[selected])
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Projects...</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList key={item.id} title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
                ))}
            </ul>
            
            <div className="container">
                {data.map((d) => (
                    <a href={d.git} target='_blank'>
                        <div className="item" key={d.id}>
                            <img src={d.img} alt="" />
                            <h3>{d.title}</h3>
                        </div>
                    </a>
                ))}
            </div>

        </div>
    );
};

export default Portfolio;