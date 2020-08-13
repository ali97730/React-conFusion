import React,{Component} from 'react' ;
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap';



class DishDetail extends Component{

        renderDish(dish){
            console.log(dish)
            if(dish != null){
            return (
               <Card>
                <CardImg width="100%" src ={dish.image} alt ={dish.name}/> 
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
               </CardBody>
            </Card>
            )}
            else{
                return(
                    <div>

                    </div>
                )
            }
        }
        renderComments(dish){
        
            if(dish != null){
                const comments = dish.comments.map((c)=> <li key={c.id}>{c.comment}<br/>
                                                                        {'--' + c.author}{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}</li>)
                  console.log(comments)
                return(
                    <div className="container">
                    <div>
                    <h4>Comments</h4>
                    <ul className="list-styled">
                    {comments}
                    </ul>
                    </div>
                    </div>
                )
                
                
            }
            else{
                return <div> </div>
            }

        }
  


    render(){
        
        return(
             <div className="container"> 
            <div className ="row">
                <div className="col-12 col-md-5 m-1"> 
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1"> 
                   {this.renderComments(this.props.dish)}
                
                </div>
            </div>
            </div>
           
            
        )
    }
    
}

export default DishDetail;