import {checkToken} from "../../utilities/users-service";
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import * as electionsAPI from '../../utilities/elections-api';
import { Link } from 'react-router-dom';
import ElectionsList from '../../components/ElectionsList/ElectionsList';

export default function ElectionsPage() {
    const [elections, setElections] = useState([]);
    const [addElection, setaddElection] = useState([]);

    useEffect (function () {
        async function getElections () {
            const elections = await electionsAPI.getAll();
            setElections(elections);
        }
        getElections();
    }, [addElection]);


    async function handleAddElection(formData){
        const election = await electionsAPI.add(formData);
        // setElections([...elections, election]);
      }




    return (
        <>
            <h1>Elections Page</h1>
            <ElectionsList elections={elections} />
            <Link to={`/elections/new`} >
                <button className="form-button">New Election</button>
            </Link>        </>
    );
}