import React ,{Component} from "react";
import Image from './Image'
class List extends Component{
    render(){
        return(
            <div>
            
        <ol>
            <Image linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" 
            lebar="500"/>
            <li>Nasi Padang</li>
            <Image linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"
            lebar="400"/>
            <li>Sate</li>
            <Image linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
            lebar="300"/>
            <li>Soto Lamongan</li>
        </ol>
        </div>
        )
    }
}
export default List;