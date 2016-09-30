// TODO
var App = () => (
  <div>
  	<GroceryList gList={['Milk','Sugar','Bread','Hummus1']}/>
  </div> );
class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			done: false
		};
	}
	onListItemClick() {
	console.log('Item Clicked')
	this.setState({
	  done: !this.state.done
	});
	}
	onMouseEnter() {
	console.log('onMouseEnter');
	this.setState({
	done: true
	});
	}
	onMouseLeave() {
	console.log('onMouseLeave');
	this.setState({
	done: false
	});
	}


	render() {
	var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };
		return ( <li style={style} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>{this.props.groceryItem}</li>);
	}
}
var GroceryList = (props) => (
	<ul>
		{props.gList.map(groceryItem => 
			<GroceryListItem groceryItem={groceryItem} />
		)}
	</ul> 
	);


var CoffeeComponent = () => (
	<li>Cabbage</li>
);
var TeaComponent = () => (
	<li>Milk</li>
)

ReactDOM.render(<App />, document.getElementById("app"));
