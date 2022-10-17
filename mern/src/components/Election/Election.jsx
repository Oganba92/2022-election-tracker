
import { useParams } from "react-router-dom";
import * as electionsAPI from '../../utilities/elections-api';
import { useNavigate } from 'react-router-dom';

export default function Election ({election, index}) {
    // console.log(key);
    const navigate = useNavigate();

    function handleDelete() {
        try {
            electionsAPI.deleteElection();
            navigate('/');
        } catch {
            console.log('delete elections failed');
        }
    };
return (
    <>
        <br/>
        <a>Candidate 1: {election.candidate1}</a> 
        <br/>
        <a>Candidate 2: {election.candidate2}</a> 
        <br/>
        <a>Location: {election.location}</a> 
        <br/>
        <a>Type: {election.level}</a> 
        <br/>
        <a>Latest Opinion Poll: {election.forecast}</a> 
        <br/>
        <button className="delete-button" onClick={evt => {evt.preventDefault(); handleDelete()}} >Delete Deck</button>
        <br/>
    </>
)
}