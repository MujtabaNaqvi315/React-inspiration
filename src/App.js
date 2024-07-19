import FancyText from './FancyText';
import InspirationGenerator from './InspirationGenerator';
import Copyright from './Copyright';
import CommentBtn from './CommentBtn';

function App() {
  return (
    <>
      <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>

      <CommentBtn message='Nice Quote'>
        Give comment
      </CommentBtn>
    </>
  );
}


export default App;
