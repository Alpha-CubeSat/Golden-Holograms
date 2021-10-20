import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <head>
        <meta charset="utf-8"/>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>Golden Holograms</title>


        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11"></script>
        <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@2.4.21/dist/js/splide.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-video@0.4.6/dist/js/splide-extension-video.min.js"></script>
        <script src="https://kit.fontawesome.com/f7ec263f57.js" crossorigin="anonymous"></script>



        <script src="./js/scroll.js"></script>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">



        <link rel="stylesheet" href="./styles/css.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@2.4.21/dist/css/splide.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide-extension-video@0.4.6/dist/css/splide-extension-video.min.css">


        <link rel="shortcut icon" href="TemplateData/favicon.ico">
        <link rel="stylesheet" href="TemplateData/style.css">
        <script src="TemplateData/UnityProgress.js"></script>
        <script src="Build/UnityLoader.js"></script>
        <script>
          var unityInstance = {UnityLoader.instantiate("unityContainer", "Build/WebGLBuilds.json", {onProgress: UnityProgress});
        </script>
      </head>

    </div>
  )
}
