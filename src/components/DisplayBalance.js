import React from 'react'; 
import {Statistic}from 'semantic-ui-react'
// text color and size changes 

function DisplayBalance({size = 'tiny', numberColor ='black', title, value}) {
    return (
        <Statistic size = {size} color= {numberColor}>
        <Statistic.Label style = {{textAlign: 'left'}}>{title}:</Statistic.Label>
        <Statistic.Value>{value}</Statistic.Value>
      </Statistic>
    ); 

}

export default DisplayBalance; 