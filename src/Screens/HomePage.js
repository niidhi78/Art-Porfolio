import React from 'react';
import styles from './HomePage.module.css';
import { useNavigate  } from 'react-router-dom';

function HomePage(props) {
    const navigate = useNavigate();
    var categoriesArray = [{
        categoryName: 'Drawings',
        id: 'drawings',
        categoryImage: 'https://as1.ftcdn.net/v2/jpg/07/06/36/30/1000_F_706363080_OH7YrNxy2V7zC2qYogIYEOlqJvju1dRj.jpg'
    },
    {
        categoryName: 'Paintings',
        id: 'paintings',
        categoryImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ5C-uPb97J9FwyPUvSccYlI6rYo6FcXw5qvRRBNJkSH2kk0o5y4_OkEegdWq0QeYflo4&usqp=CAU'
    },
    {
        categoryName: 'Digital Arts',
        id: 'digital',
        categoryImage: 'https://www.clipstudio.net/wp-content/uploads/2022/04/0159_000.jpg'
    }];
    return (
        <div className='container'>
            {/* categories */}
            <h3 className={`${styles.homeHeader} text-center mb-5`}>Portfolio Categories</h3>
            <div className='mainHomepage row'>
                {categoriesArray.map((category) => (
                    <div className='col-md-4' onClick={() => navigate(`/portfolio/${category.id}`)}>
                    <div className={`card ${styles.cardHome}`}>
                        <p className='text-center card-title pt-2'>{category.categoryName}</p>
                        <div className="card-body">
                        <img src={category.categoryImage} className={`card-img-top ${styles.homeImage}`} alt="..." />
                            {/* <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
                ))}
                <div className='col-md-4'></div>
                <div className='col-md-4'></div>
            </div>
        </div>
    );
}

export default HomePage;