This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
- npm start <br>
  start a project in development mode.
- npm test <br>
  Some test with jest in the console. 

## What is going on?

Basically this is an app that load a 1335 objects in an array.<br>
Check it [here](https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json). <br>

And the main goal is to show them and load the 1335 images profile... and don't broke the browser. <br>

Also, it require a filter, avoiding to explote the browser... or the world... <br>

## How am I doint this?.

Okey, the problem here, is that I can not control the backend. So, I can't send a pagination parameter <br>
(or at least I don't know how). I tried to create a pagination, something like asking the 1335 objects and just <br>
rendering by 10 to 10, cutting the array, setting a state of the offset or the current page, some crazy shit. <br>
at the end, it gets more and more complex. So, I leave that attempt in another branch.<br>

### Getting the data: 
I have a `<List />` class component with an `onLoad()`method: <br>
```javascript
onLoad = () => {
    fetch(this.props.url)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          data: data.Brastlewark
        })
      })
      .catch(err=>console.error(`Ups, we have a problem, check it: ${err}`))
  }
```
I'm not using axios, cus it is a very simple request, without headers or stranger things. 

### Show or not to show. 
Inside the `<List>` class component, the render method call the `<RenderData>` or the `<Loading/>`component. Depending if the data, which is an state, change. 
```javascript
  render () {
    const { data } = this.state
    return data 
      ? <RenderData data = {data} />
      : <Loading />
  }
```
I'm gonna call the `<Loading />` component in more places. 

### How do I print the data?
The `<RenderData>` receive the data from the api, and pass it to the state. The State is gonna be modify by the <br>
`<SearchBar` component with the `onFormSubmit()` method. Once the `state.data` is modify, the `render()`method is <br>
called one more time, and show just the filtered elements. <br>
```javascript
  onFormSubmit = (value) => {
    if(!value){
      this.setState({
        data: this.props.data //I reset the data with all the values. 
      })
    } else {
      const {data} = this.state
      this.setState({data: data.filter( e => e.name.includes(value))})
    }
  }
```
And for printing it, I am using *[Semantic UI]*(https://react.semantic-ui.com/)
```javascript
render(){
    if (this.state.data && this.state.data.length) {
      return (
        <React.Fragment>
          <Divider />
          <SearchBar onSubmit={this.onFormSubmit}/>
          <Divider />
          <Grid>
            {this.state.data.map((item, i) => (
              <Grid.Column key={i} mobile={16} tablet={8} computer={4}>
                <ListItem item={item} />
              </Grid.Column>
            ))}
          </Grid>
        </React.Fragment>
      );
    } else {
      return <div>No items found</div>
    }
  }
```
Until now, I am not facing the main problem of loading 1335 images at once, read the next section. 

### How do I print 1335 images?
```
npm install --save react-lazyload
```
With `LazyLoad` I was able to render images, or even ask them to the server, just if the user is actually looking at them. I also include a loader, which is the same loader component from the entire page. 
```javascript
  <LazyLoad height={350} once placeholder={<Loading />}>
      <Image src={props.item.thumbnail} rounded centered fluid />
  </LazyLoad>
```

## What can I improve? 
I haven´t touched the css, (I prefer scss), or the responsive, I hope that semantic cover that in a simple way. I have also a problem with the loading of the images, maybe with some css I could fix that. 

There are not tests. Well, I made some of them, but for being honest, I haven´t tested a react app. So what I did was just 
<br> read the documentation of Jest, and try the basic, like check If the header is printed. I felt very frustrated with 
<br> testing the `event prevent default`. or the `onLoad()`method from the list component. <br>

I wish to try some mockup's tests. Maybe for the next time. <br>

Also, the performance. I don't know why React  gets to slow trying to render the 1335 empty element, without images. But, researching, it is basically a bad practice to do that, so, maybe with more control in the backend, I could develop a paginator or an infinite scroll, but for both I need control in the backend. 

## Licence
MIT



