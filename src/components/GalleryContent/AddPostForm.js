import { Component } from "react";
import css from "./AddPostForm.module.css";

export class AddPostForm extends Component {
    constructor(props){
        super(props);
    }

    state = {
        postTitle: '',
        postDesc: ''
    }

    handlePostTitleChange = (e) =>{

        this.setState({
            postTitle: e.target.value
        })
    }
    handlePostDescChange = (e) =>{
        
        this.setState({
            postDesc: e.target.value
        })
    }
    createPost = (e) => {
        e.preventDefault();
        const post = { // post element
            id: this.props.galleryArr.length + 1,
            title: this.state.postTitle,
            description: this.state.postDesc,
            liked: false
        }
        this.props.addNewGalleryPost(post);
        this.props.hideAddForm();   
    }
    
    
    render() {
        const hideAddForm = this.props.hideAddForm; // Для упрощения
        

        
        return (
            <div className="formBlock">





                <form className={css.addPostform} onSubmit={this.createPost}>
                    <div className={css.close}
                        onClick={hideAddForm}
                    >×</div>
                    <h2>Добавление поста</h2>
                    <div>
                        <input type="text" 
                        name="postTitle" 
                        placeholder="Title" 
                        value={this.state.postTitle} 
                        onChange={this.handlePostTitleChange }
                        required
                        ></input>
                    </div>
                    <div>
                        <textarea value={this.state.postDescription} name="postDescription" 
                        placeholder="Description"
                        onChange={this.handlePostDescChange}
                        required
                        ></textarea>
                    </div>
                    <div>
                        <button className="blackBtn" type="submit">
                            Добавить пост
                        </button>
                    </div>
                </form>
                <div className={css.overlay}
                onClick={hideAddForm}
                ></div>
            </div>
        )
    }
}