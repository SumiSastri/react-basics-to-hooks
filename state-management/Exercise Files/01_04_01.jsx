 class ParentComponent extends Component {
     constructor(props) {
         super(props);
         this.state = {
             books: [],
         }
         this.updateBooks = this.updateBooks.bind(this);
     }

     render() {
         return <ChildComponent updateBooksFun={this.updateBooks} />
     }
 }

 class ChildComponent extends Component {
     /* ... */
     render() {
         return <GrandchildComponent updateBookFun={this.props.updateBook} />
     }
 }
 
 class GrandchildComponent extends Component {
     /* ... */
     updateBook() {
         this.props.updateBook...
     }
 }