export default function Component1(props){
    return(
        <div>
            <button onClick={()=>props.mycallback(1)}>Button 1</button>
            <button onClick={()=>props.mycallback(2)}>Button 2</button>
            <button onClick={()=>props.mycallback(3)}>Button 3</button>
            <button onClick={()=>props.mycallback(4)}>Button 4</button>
            <h1>Current Button is: {props.myValue}</h1>
        </div>
    )
}