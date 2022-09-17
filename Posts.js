import React from "react"
import "./posts.css";

const Post = () => {
    return(
        <div className="post">
            <form>
                <label for = "title">Title</label><br/>
                <input type = "text" name = "title" id="title"/> <br/>
                <label for = "location">Location</label><br/>
                <input type = "text" name = "location" id = "location"/> <br/>
                <br/>
                <textarea name = "description" rows="5" cols="30">
                    write description here....
                </textarea><br/>
                <button type = "submit" className='createpost'>Create Post</button>
            </form>
        
        
        </div>
    )
}
export default Posts;