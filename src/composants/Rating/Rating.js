import React from 'react';

function rating(Nrating) {
    let htmlrating;
    let starfull=<img src='/assets/etoile_pleine.png' alt=''></img>;
    let starempty=<img src='/assets/Vectoretoile_vide.png' alt=''></img>;

    switch(Nrating){
        case 0:
        htmlrating = <div className='rating'>{starempty}{starempty}{starempty}{starempty}{starempty}</div>;
        break;
      case 1:
        htmlrating = <div className='rating'>{starfull}{starempty}{starempty}{starempty}{starempty}</div>;
        break;
      case 2:
        htmlrating = <div className='rating'>{starfull}{starfull}{starempty}{starempty}{starempty}</div>;
         break;
      case 3:
        htmlrating = <div className='rating'>{starfull}{starfull}{starfull}{starempty}{starempty}</div>;
        break;
      case 4:
        htmlrating = <div className='rating'>{starfull}{starfull}{starfull}{starfull}{starempty}</div>;
        break;
      case 5:
        htmlrating = <div className='rating'>{starfull}{starfull}{starfull}{starfull}{starfull}</div>;
        break;
        default:
        }
        

  return htmlrating;
  }
  export default rating;