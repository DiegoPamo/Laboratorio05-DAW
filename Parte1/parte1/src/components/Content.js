import Part from './Part';

const content = (props) => {
    return (
    <div>
        {props.content.map((partes,index) => <Part part={partes} key={index}/>)}
    </div>
    );
}
export default content; 