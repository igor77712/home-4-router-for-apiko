import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem/ListItem';
import {Route, Switch} from 'react-router-dom'

const ListUl = styled.ul`
    align-self: center;
    padding: 10px;
    margin: 5px;
    list-style: none;
    width: 60%;
`

const List = ({list, newlist, path, ...props}) => {
    return(
        <Switch>
            <Route path = {path} exact render = {() => {
                return (
                    <ListUl>
                        {newlist.map((item) => {
                        return <ListItem
                           path = {props.pathname}
                           list = {list}
                           text = {item.text} 
                           key={item.id} 
                           id = {item.id}
                           onClick = {props.onClick}
                           done = {item.done}/>
                   })}
                  
               </ListUl>
                )
            }}/>

        </Switch>
       
    )
}

export default List