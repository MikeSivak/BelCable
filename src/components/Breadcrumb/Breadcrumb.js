import {BrowserRouter as Router } from "react-router-dom";
import { Link } from 'react-router-dom';
import routes from "../../routes";
import Display from "./Display";


export default function Breadcrumb(){
    return(
        <Router>
            <Display>
                {routes.map(({ path, name }) => (
                    <Link key={path} to={path}>
                        {name + '>'} 
                    </Link>
                ))}
            </Display>
        </Router>
    )
}