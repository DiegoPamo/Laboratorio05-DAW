import Header from './Header';
import Content from './Content';

const course = (props) => {
return (
    <div>
        <Header header={props.course.name}/>
        <Content content={props.course.parts}/>
    </div>
    );
}
export default course; 