import React, { useEffect } from 'react';
import axios from 'axios';
import './components.css';
import { Dropdown } from 'bootstrap';


function Tables() {
    const [league, setLeague] = React.useState();
    const [id, setId] = React.useState('eng.1');
    const [season, setseason] = React.useState('2022');
    const [tournament, setTournament] = React.useState('Premier League');

    useEffect(() => {
        axios.get('https://api-football-standings.azharimm.site/leagues').then(res => {
            setLeague(res.data.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className='grid' id='standings'>
            <Dropdown className='drop'>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
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
        </div>
    );
}


export default Tables;