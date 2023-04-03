import React, { useEffect } from 'react';
import axios from 'axios';
import './components.css';
import { Dropdown } from 'react-bootstrap';
import LeagueData from './LeagueData';


function Tables() {
    const [league, setLeague] = React.useState();
    const [id, setId] = React.useState('eng.1');
    const [season, setSeason] = React.useState('2022-2023');
    const [tournament, setTournament] = React.useState('Premier League');

    const options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
        headers: {
          'X-RapidAPI-Key': 'e98a94efbamshc8e8072e90d09d0p14aefbjsne248c682f327',
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      };
    useEffect(() => {
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
  
    })

    const year = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];

    return (
        <div className='grid' id='tables'>
            <div className='table-styles'>
                <Dropdown className='drop'>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Select League
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {league && league.map((league, key) => {
                            return <Dropdown.Item key={key} onClick={() => {
                                setId(league.id)
                                setTournament(league.name)
                                setLeague(league.name)
                            }}>{league.name}</Dropdown.Item>
                        })}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown className='drop'>
                    <Dropdown.Toggle variant='primary' id='dropdown-basic'>
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
            <div className='tables'>
                <LeagueData season={season} id={id} tournament={tournament} />
            </div>
        </div>
    )
}


export default Tables;