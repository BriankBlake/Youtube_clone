import Comment from "../Comment/Comment";

const DisplayComments = (props) => {
    return (
    
        <div>
            {props.parentEntries.map ((comment, _index) =>{
                return (
                <div key={_index}>
                    <div>
                        <p id='name'>{comment.name}</p>
                        <p id='Comment'>{comment.Comment}</p>
                        <Post />
                    </div>
                </div>
                );
            })}

        </div>
    );
};

export default DisplayComments;