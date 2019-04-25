/* import React from 'react';
import axios from 'axios';
class ResourceList extends React.Component {

    state = {resources:[]};

    async componentDidMount() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
        this.setState({resources:response.data});
    }

    async componentDidUpdate(preProps){
        //console.log(preProps);
        //fetch when resource changes.
        if(preProps.resource !== this.props.resource) {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
            this.setState({resources:response.data});
        }
    }
    render() {
        return (
            <div>
                {this.state.resources.length}
            </div>
        );
    }
}

export default ResourceList; */

/**
 * Functinoal Based Hooks system 
 */
import React,{useEffect, useState} from 'react';
import Axios from 'axios';

 const ResourceList = ({resource})=> {
    
    //state
    const [resources, setResources] = useState([]);

    const fetchResource = async (resource) => {
        const response = await Axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data);  
    }

    useEffect(()=>{
        //called for every rendered and update
        fetchResource(resource);
    }, [resource]);
    return <div>{resources.length}</div>

 }

 export default ResourceList;