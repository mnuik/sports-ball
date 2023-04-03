import React, { useEffect } from 'react';
import axios from 'axios';
import './components.css';
import { Dropdown } from 'react-bootstrap';
import LeagueData from './LeagueData';
import Update from './Update';

function Standings() {
    const [league, setLeague] = React.useState();
    const [id, setId] = React.useState('eng.1');
    const [season, setSeason] = React.useState('2022');
    const [tournament, setTournament] = React.useState('Premier League');

    useEffect(() =>{
        axios('https://api-football-standings.azharimm.dev/leagues').then(res => {
            setLeague(res.data.data)
        }).catch(err =>{
            console.log(err)
        })
    },[])

    const year = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];
   
    return (
        <div className='grid' id='Standings'>
            <div className='table-styles'>
                <Dropdown className='drop'>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        Select League
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {league && league.map((league, key) => {
                            return <Dropdown.Item key={key} onClick={() => {
                                setId(league.id)
                                setTournament(league.name)
                                
                            }}>{league.name}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className='drop'>
                    <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
                        Select Season
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {year && year.map((year, key) => {
                            return <Dropdown.Item key={key} onClick={() => {
                                setSeason(year)
                            }}>{year}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
           
            <div className='standings'><LeagueData season={season} id={id} tournament={tournament} /></div>
            <div className='standings-date'> <Update /></div>
         
        </div>
    )
}

export default Standings;