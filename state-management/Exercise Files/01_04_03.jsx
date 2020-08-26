 class ParentComponent extends Component {
     constructor(props) {
         super(props);
         this.state = {
             books: [],
             numBooksCompleted = 1,
         }
         this.updateBooks = this.updateBooks.bind(this);
     }

     render() {
         const numBooksCompletedComponent = 
            <CompletedBooks numBooksCompleted={this.state.numBooksCompleted} />;
         return (
            <ChildComponent>
                <GrandchildComponent completedBooks={numBooksCompletedComponent} />
            </ChildComponent>
         );
     }
 }

 const CompletedBooks = ({numBooksCompleted}) => {
     return <p>{numBooksCompleted} books completed </p>
 };