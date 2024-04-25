import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './PortfolioPage.module.css'

function PortfolioPage(props) {
    const allArtDetails = [{
        id: Math.random(),
        Artcategory: "Drawings",
        ArtImage: "https://i0.wp.com/inesepogagallery.com/wp-content/uploads/I12-MG_6974-2-draw-buildings.jpg?w=1562&ssl=1",
        name: '1'
    },
    {
        id: Math.random(),
        Artcategory: "Drawings",
        ArtImage: "https://i.pinimg.com/236x/9f/9b/64/9f9b64ef9a91c9afde047199283508be.jpg",
        name: '2'
    },
    {
        id: Math.random(),
        Artcategory: "Drawings",
        ArtImage: "https://i.ytimg.com/vi/jQ6yJZdwgyk/maxresdefault.jpg",
        name: '3'
    },
    {
        id: Math.random(),
        Artcategory: "Drawings",
        ArtImage: "https://i.pinimg.com/236x/a2/92/3d/a2923d959f80c85771ba94d8c35f01fe.jpg",
        name: '4'
    },
    {
        id: Math.random(),
        Artcategory: "Drawings",
        ArtImage: "https://i.pinimg.com/736x/d4/65/08/d46508a6793287f57104c324be2d1c2e.jpg",
        name: '5'
    },
    {
        id: Math.random(),
        Artcategory: "Drawings",
        ArtImage: "https://i.pinimg.com/originals/7c/0f/b0/7c0fb0edf98ed04bb748d289b4a3aa49.jpg",
        name: '6'
    },
    {
        id: Math.random(),
        Artcategory: "Drawings",
        ArtImage: "https://i.ytimg.com/vi/g_X8WmtOn1A/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB--46HhtXk8vVIO2eGj0qMzvELUg",
        name: '7'
    },
    {
        id: Math.random(),
        Artcategory: "Paintings",
        ArtImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbxumzm32SIqz_2-EXhO6ZjrlEJJjz03gLdYKFGiWz_g&s",
        name: '1'
    },
    {
        id: Math.random(),
        Artcategory: "Paintings",
        ArtImage: "https://5.imimg.com/data5/SELLER/Default/2022/6/CV/SR/VR/105150937/af1-6-a.jpg",
        name: '2'
    },
    {
        id: Math.random(),
        Artcategory: "Paintings",
        ArtImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRl6vzl_X_kM1hw0DZ3QX7V0E-ovt-DnuVqjA4uQmVKg&s",
        name: '3'
    },
    {
        id: Math.random(),
        Artcategory: "Paintings",
        ArtImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPgZ4AE9ZWGtBzRUrb_02tFEjeuTzVp8c8zaGnH-jsEA&s",
        name: '4'
    },
    {
        id: Math.random(),
        Artcategory: "Paintings",
        ArtImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaTpdyJKScpfhmuEbE3fez3mei139IIdjJMxA94UONtQ&s",
        name: '5'
    },
    {
        id: Math.random(),
        Artcategory: "Paintings",
        ArtImage: "https://5.imimg.com/data5/SELLER/Default/2022/6/CV/SR/VR/105150937/af1-6-a.jpg",
        name: '2'
    },
    {
        id: Math.random(),
        Artcategory: "Paintings",
        ArtImage: "https://5.imimg.com/data5/SELLER/Default/2022/6/CV/SR/VR/105150937/af1-6-a.jpg",
        name: '2'
    },
    {
        id: Math.random(),
        Artcategory: "Paintings",
        ArtImage: "https://5.imimg.com/data5/SELLER/Default/2022/6/CV/SR/VR/105150937/af1-6-a.jpg",
        name: '2'
    },
    {
        id: Math.random(),
        Artcategory: "Paintings",
        ArtImage: "https://5.imimg.com/data5/SELLER/Default/2022/6/CV/SR/VR/105150937/af1-6-a.jpg",
        name: '2'
    },
    {
        id: Math.random(),
        Artcategory: "Paintings",
        ArtImage: "https://5.imimg.com/data5/SELLER/Default/2022/6/CV/SR/VR/105150937/af1-6-a.jpg",
        name: '2'
    },
    {
        id: Math.random(),
        Artcategory: "Paintings",
        ArtImage: "https://5.imimg.com/data5/SELLER/Default/2022/6/CV/SR/VR/105150937/af1-6-a.jpg",
        name: '2'
    },
    {
        id: Math.random(),
        Artcategory: "Paintings",
        ArtImage: "https://5.imimg.com/data5/SELLER/Default/2022/6/CV/SR/VR/105150937/af1-6-a.jpg",
        name: '2'
    },
    {
        id: Math.random(),
        Artcategory: "Paintings",
        ArtImage: "https://5.imimg.com/data5/SELLER/Default/2022/6/CV/SR/VR/105150937/af1-6-a.jpg",
        name: '2'
    },
    {
        id: Math.random(),
        Artcategory: "Paintings",
        ArtImage: "https://5.imimg.com/data5/SELLER/Default/2022/6/CV/SR/VR/105150937/af1-6-a.jpg",
        name: '2'
    },
    {
        id: Math.random(),
        Artcategory: "Paintings",
        ArtImage: "https://5.imimg.com/data5/SELLER/Default/2022/6/CV/SR/VR/105150937/af1-6-a.jpg",
        name: '2'
    },
    {
        id: Math.random(),
        Artcategory: "Paintings",
        ArtImage: "https://5.imimg.com/data5/SELLER/Default/2022/6/CV/SR/VR/105150937/af1-6-a.jpg",
        name: '2'
    },
    {
        id: Math.random(),
        Artcategory: "Paintings",
        ArtImage: "https://5.imimg.com/data5/SELLER/Default/2022/6/CV/SR/VR/105150937/af1-6-a.jpg",
        name: '2'
    },

    {
        id: Math.random(),
        Artcategory: "Drawings",
        ArtImage: "https://i.pinimg.com/236x/22/3a/ea/223aea79b0909c377409b22e0e0f252e.jpg",
        name: '8'
    },
    {
        id: Math.random(),
        Artcategory: "digital",
        ArtImage: "https://as1.ftcdn.net/v2/jpg/07/06/36/30/1000_F_706363080_OH7YrNxy2V7zC2qYogIYEOlqJvju1dRj.jpg",
        name: '5'
    },
    {
        id: Math.random(),
        Artcategory: "Paintings",
        ArtImage: "https://as1.ftcdn.net/v2/jpg/07/06/36/30/1000_F_706363080_OH7YrNxy2V7zC2qYogIYEOlqJvju1dRj.jpg",
        name: '6'
    },
    {
        id: Math.random(),
        Artcategory: "digital",
        ArtImage: "https://as1.ftcdn.net/v2/jpg/07/06/36/30/1000_F_706363080_OH7YrNxy2V7zC2qYogIYEOlqJvju1dRj.jpg",
        name: '7'
    },
    {
        id: Math.random(),
        Artcategory: "digital",
        ArtImage: "https://as1.ftcdn.net/v2/jpg/07/06/36/30/1000_F_706363080_OH7YrNxy2V7zC2qYogIYEOlqJvju1dRj.jpg",
        name: '5'
    },
    {
        id: Math.random(),
        Artcategory: "digital",
        ArtImage: "https://as1.ftcdn.net/v2/jpg/07/06/36/30/1000_F_706363080_OH7YrNxy2V7zC2qYogIYEOlqJvju1dRj.jpg",
        name: '5'
    },
    {
        id: Math.random(),
        Artcategory: "digital",
        ArtImage: "https://as1.ftcdn.net/v2/jpg/07/06/36/30/1000_F_706363080_OH7YrNxy2V7zC2qYogIYEOlqJvju1dRj.jpg",
        name: '5'
    },
    {
        id: Math.random(),
        Artcategory: "digital",
        ArtImage: "https://as1.ftcdn.net/v2/jpg/07/06/36/30/1000_F_706363080_OH7YrNxy2V7zC2qYogIYEOlqJvju1dRj.jpg",
        name: '5'
    },
    {
        id: Math.random(),
        Artcategory: "digital",
        ArtImage: "https://as1.ftcdn.net/v2/jpg/07/06/36/30/1000_F_706363080_OH7YrNxy2V7zC2qYogIYEOlqJvju1dRj.jpg",
        name: '5'
    },
    {
        id: Math.random(),
        Artcategory: "digital",
        ArtImage: "https://as1.ftcdn.net/v2/jpg/07/06/36/30/1000_F_706363080_OH7YrNxy2V7zC2qYogIYEOlqJvju1dRj.jpg",
        name: '5'
    },
    {
        id: Math.random(),
        Artcategory: "digital",
        ArtImage: "https://as1.ftcdn.net/v2/jpg/07/06/36/30/1000_F_706363080_OH7YrNxy2V7zC2qYogIYEOlqJvju1dRj.jpg",
        name: '5'
    },
    {
        id: Math.random(),
        Artcategory: "digital",
        ArtImage: "https://as1.ftcdn.net/v2/jpg/07/06/36/30/1000_F_706363080_OH7YrNxy2V7zC2qYogIYEOlqJvju1dRj.jpg",
        name: '5'
    },
    {
        id: Math.random(),
        Artcategory: "digital",
        ArtImage: "https://as1.ftcdn.net/v2/jpg/07/06/36/30/1000_F_706363080_OH7YrNxy2V7zC2qYogIYEOlqJvju1dRj.jpg",
        name: '5'
    },
    {
        id: Math.random(),
        Artcategory: "digital",
        ArtImage: "https://as1.ftcdn.net/v2/jpg/07/06/36/30/1000_F_706363080_OH7YrNxy2V7zC2qYogIYEOlqJvju1dRj.jpg",
        name: '5'
    },
    {
        id: Math.random(),
        Artcategory: "digital",
        ArtImage: "https://as1.ftcdn.net/v2/jpg/07/06/36/30/1000_F_706363080_OH7YrNxy2V7zC2qYogIYEOlqJvju1dRj.jpg",
        name: '5'
    },
];
    var filteredData = [];
    const params = useParams();
    console.log(params);
    if (params.category) {
        filteredData = allArtDetails.filter((art) => art.Artcategory.toLowerCase() === params.category);
    }
    return (
        <div className='container'>
            <h3 className={`${styles.homeHeader} text-center mb-5`}>Portfolio</h3>
            <div className='row'>
                {filteredData && filteredData.map((art) => (
                    <div className='col-md-4'>
                    <div className={`card ${styles.cardHome}`}>
                        {/* <p className='text-center card-title pt-2'>{art.categoryName}</p> */}
                        <div className="card-body">
                        <img src={art.ArtImage} className={`card-img-top ${styles.homeImage}`} alt="..." />
                            {/* <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PortfolioPage;