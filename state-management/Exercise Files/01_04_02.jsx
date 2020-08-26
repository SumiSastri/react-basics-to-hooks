class ParentComponent extends Component {
     constructor(props) {
         super(props);
         this.state = {
             books: [],
         }
         this.updateBooks = this.updateBooks.bind(this);
     }

     render() {
         return (
           <ChildComponent>
            <GrandchildComponent 
                updateBooks={this.updateBook} />
           </ChildComponent>  
         );
     }
 }