import image from '../../public/img/about.jpg'
import styles from '~/styles/about.css'

export function meta(){
  return{
    title: 'GuitarSpot | About Us',
    description: 'Guitar store, blog and more'
  }
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel:'preload',
      href: image,
      as: 'image'
    }
  ]
}

function About(){

  return(
    <main className="container about-us">
      <h2 className="heading">About Us</h2>
      <div className="content">
        <img src={image} alt="about us image"/>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aut incidunt quaerat laudantium quos neque, dolorem accusamus vel totam dolores assumenda commodi distinctio. Esse sed quasi, ab distinctio exercitationem earum?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aut incidunt quaerat laudantium quos neque, dolorem accusamus vel totam dolores assumenda commodi distinctio. Esse sed quasi, ab distinctio exercitationem earum?</p>
        </div>
      </div>
    </main>
  )
}

export default About