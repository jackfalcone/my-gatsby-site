import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import cookingVideo from '../assets/2620043-uhd_3840_2160_25fps.mp4'
import ImageCarousel from '../components/imageCarousel'

const IndexPage = () => {
  return (
    <Layout pageTitle="Startseite">
      <video loop autoPlay className="mt-8 z-10">
        <source src={cookingVideo} type="video/mp4" />
      </video>
      <article className="mt-10 mb-14 font-rubik leading-8 text-lg">
        <p className="my-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          <br />
          Aenean placerat iaculis arcu in rutrum. Nam eu elit enim. Ut nulla odio, lobortis condimentum est in, rhoncus hendrerit urna. 
        </p>
        <p className="my-3">
          Curabitur dapibus tellus vel risus dignissim, ac fermentum mi ultrices. 
          <br />
          Donec porttitor, tortor et dignissim lacinia, ligula ipsum sollicitudin diam, sit amet fermentum quam arcu vestibulum dolor. Etiam vel consectetur est. Duis nec nisi vitae velit pretium accumsan. Aliquam condimentum, nisi in vehicula molestie, quam turpis aliquet lacus, vel ornare ligula massa in mi. 
        </p>
        <p className="my-3">
          Aenean erat nunc, aliquam in ligula a, suscipit ullamcorper dolor. Praesent vitae nisl leo. Vivamus at felis turpis. Donec quis diam mollis, fringilla lacus non, aliquet massa. Proin fringilla feugiat gravida. Vestibulum enim nisi, gravida at risus nec, semper auctor massa.
        </p>
      </article>
      <div className="relative overflow-hidden">
        <StaticImage
          className="object-cover w-full h-full"
          alt="Thailand and Switzerland"
          src="../images/thai_swiss.jpg"
        />
        <p className="absolute w-full py-2.5 bottom-0 inset-x-0 bg-yellow-500 text-white text-lg lg:text-xl text-center leading-5 font-rubik">Wo feurige Thai Küche auf Schweizer Gastfreundschaft trifft</p>
      </div>
      <article className="mt-10 mb-14 font-rubik leading-8 text-lg">
        <p className="my-3">
          Curabitur dapibus tellus vel risus dignissim, ac fermentum mi ultrices. 
          <br />
          Donec porttitor, tortor et dignissim lacinia, ligula ipsum sollicitudin diam, sit amet fermentum quam arcu vestibulum dolor. 
        </p>
        <p className="my-3">
        Etiam vel consectetur est. Duis nec nisi vitae velit pretium accumsan. Aliquam condimentum, nisi in vehicula molestie, quam turpis aliquet lacus, vel ornare ligula massa in mi.
        </p>
      </article>
      <ImageCarousel />
    </Layout>
  )
}

export const Head = () => <title>Gasthof Rosegg</title>

export default IndexPage