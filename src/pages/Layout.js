import Wooden from '../components/Wooden/Wooden'

const Title = props => (
  <center><h6 className="title">{props.text}</h6></center>
);

// Doesn't have to be ES6 if you don't want
function Copy() {
  return <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum pharetra eros at euismod. Etiam hendrerit, urna quis placerat aliquam, metus velit dapibus justo, ac mollis ex enim eget augue. Ut blandit luctus metus a aliquet. Aliquam euismod imperdiet ipsum vel viverra. Donec at erat finibus, euismod urna sit amet, hendrerit erat. Aliquam id dolor ac est pretium maximus. Duis nec justo mollis, lacinia ligula vitae, aliquam libero. Suspendisse aliquam sem eget mauris hendrerit, nec blandit purus pellentesque. Proin luctus ut lacus sed interdum. Donec in sapien ut turpis finibus egestas. Aliquam sed est velit. Morbi hendrerit massa lorem, in laoreet ipsum viverra tincidunt. Duis congue felis nec interdum pellentesque. In ultricies enim felis, eget pharetra justo cursus sed.</p>;
}

// They don't necessarily need to take props
// This one also has an explicit return
const App = () => {
  return(
<div>
      <Title text="THE UNTITLED COLLEGE BASKETBALL PROJECT" />
      <Copy />
      <br />
      <div className="grid-container">
      <div className="col-sm">
            <div className="row">
              <div className="col-sm">
             <center><Wooden /></center>
      </div>
              </div>
              </div>
              </div>
              </div>
              
  );
}


export default App;