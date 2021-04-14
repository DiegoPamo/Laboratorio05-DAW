import Header from './Header';
import Content from './Content';

const course = (props) => {
    const exercis = props.course.parts
    const suma = exercis.reduce((cont, {exercises}) => cont+exercises,0)
return (
    <div>
        <Header header={props.course.name}/> 
        <Content content={props.course.parts}/>
        <p><b>Suma de los Exercises: {suma}</b></p>
    </div>
    );
}
export default course; 