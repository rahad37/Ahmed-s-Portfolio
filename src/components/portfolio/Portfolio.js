import React, { useEffect, useState } from 'react';
import { contentPortfolio, designPortfolio, featuredPortfolio, mobilePortfolio, webPortfolio } from '../../data';
import PortfolioList from '../portfolioList/PortfolioList';
import './Portfolio.scss';


const Portfolio = () => {
    const [selected, setSelected] = useState('node');
    const [data, setData] = useState([]);

    const list = [
        {
            id: 'node',
            title: 'Node.js'
        },
        {
            id: 'react',
            title: 'React.js'
        },
        {
            id: 'js',
            title: 'JavaScript'
        },
        {
            id: 'html',
            title: 'HTML/CSS'
        },
        {
            id: 'content',
            title: 'Content'
        }
    ]

    useEffect(() => {
        switch(selected){
            case 'node':
                setData(featuredPortfolio);
                break;
            case 'react':
                setData(webPortfolio);
                break;
            case 'js':
                setData(mobilePortfolio);
                break;
            case 'html':
                setData(designPortfolio);
                break;
            case 'content':
                setData(contentPortfolio);
                break;
                default:
                setData(featuredPortfolio);
        }
    },[selected])
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio...</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList key={item.id} title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
                ))}
            </ul>
            
            <div className="container">
                {data.map((d) => (
                <div className="item" key={d.id}>
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                </div>
                ))}
            </div>

        </div>
    );
};

export default Portfolio;