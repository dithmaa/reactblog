import React, { Component } from 'react';
import css from './GalleryContent.module.css';
import GalleryCard from './GalleryCard/GalleryCard';
import { AddPostForm } from './AddPostForm';
import axios from 'axios';
import {posts} from './../../shared/projectData';

class GalleryContent extends React.Component {

    state = {
        isShowAddForm: false,
        galleryArr:  JSON.parse(localStorage.getItem('galleryPosts')) || posts 

    }

    // Posts Logic
    likePost = (pos) => {
        const temp = [...this.state.galleryArr]; //делаем копию
        temp[pos].liked = !temp[pos].liked // меняем состояние лайка у опр-го поста 

        this.setState({
            galleryArr: temp // меняем локальный state 
        });

        localStorage.setItem('galleryPosts', JSON.stringify(temp)); // сохраняем данные в cookie

    }

    deletePost = pos => {
        if (window.confirm(`Удалить ${this.state.galleryArr[pos].title} ?`)) {


            const temp = [...this.state.galleryArr];
            temp.splice(pos, 1);
            this.setState({
                galleryArr: temp
            });



            localStorage.setItem('galleryPosts', JSON.stringify(temp))
        }

    }

    
    addNewGalleryPost = (newGalleryArr) => { // add post

        this.setState((state) => {
            let posts = [...state.galleryArr];
            posts.push(newGalleryArr);


            localStorage.setItem('galleryPosts', JSON.stringify(posts));
            return {
                galleryArr: posts
            }
        })
    }

    // hide/show form logic

    showAddForm = () => {
        this.setState({
            isShowAddForm: true
        })
    }
    hideAddForm = () => {
        this.setState({
            isShowAddForm: false
        })
    }
    hideAddFormOnEsc = (e) => { //side effect
        if (e.key === 'Escape' && this.state.isShowAddForm) {
            this.hideAddForm()
        }
    }






    componentDidMount() {
        window.addEventListener('keyup', this.hideAddFormOnEsc);
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.hideAddFormOnEsc);
    }
    render() {
        const blogPosts = this.state.galleryArr.map((item, pos) => <GalleryCard
            title={item.title}
            description={item.description}
            key={item.id}
            liked={item.liked}
            likePost={() => this.likePost(pos)}
            deletePost={() => this.deletePost(pos)}
        />);
        if(this.state.galleryArr.length === 0){
            return <h1>Загружаю данные</h1>
        }
        return (
            <>


                <div className={css.blogPage}>
                    {
                        this.state.isShowAddForm && <AddPostForm
                            hideAddForm={this.hideAddForm}
                            galleryArr={this.state.galleryArr}
                            addNewGalleryPost={this.addNewGalleryPost}
                        /> 
                    }

                    <h1>Блог про React JS</h1>
                    <div className={css.addNewPost}>
                        <button className='blackBtn' onClick={this.showAddForm}>Добавить новый пост</button>
                    </div>



                    <div className={css.posts}>
                        {blogPosts}
                    </div>
                </div>




            </>
        )
    }
}
export default GalleryContent;