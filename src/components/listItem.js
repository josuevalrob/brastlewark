import React from 'react'
import { Card, Image, Button, Popup, List } from 'semantic-ui-react'
import Loading from './loading'

import LazyLoad from 'react-lazyload';


const ListItem = (props) => {
  const description = `${props.item.name} is a Gnmo with a height of ${props.item.height} and a weight of ${props.item.wieght}.`
  return (  
    <Card key={props.item.id}>
      <LazyLoad height={350} once placeholder={<Loading />}>
          <Image src={props.item.thumbnail} size='medium' rounded centered fluid />
          {/* <img src={props.item.thumbnail} alt = ''/> */}
      </LazyLoad>
      <Card.Content header={props.item.name} />
      <Card.Content meta={props.item.age}/>
      <Card.Content description={description}/>
      <Card.Content>
        <List celled horizontal>
          {props.item.professions.map((e, i)=> {
            return <List.Item key={i}>{e}</List.Item>
          })}          
        </List>
      </Card.Content>
      <Card.Content extra>
        <Popup 
          trigger={<Button icon='user'  content='Friends'/>} 
          content={Friends(props.item.friends)} />
      </Card.Content>
    </Card>
  )
}
const Friends = (arr) =>{
  return (    
    <React.Fragment>
      {arr.map((e, i)=> {
        return <p key={i}>{e}</p>
      })}
    </React.Fragment>
  )
}

export default ListItem