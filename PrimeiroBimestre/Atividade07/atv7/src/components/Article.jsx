export default function Article(props) {
  return (
    <main>
      <article>
        <h2>{props.titulo}</h2>
        <time dateTime={props.dataISO}>{props.dataLegivel}</time>
        <p>{props.paragrafo1}</p>
        <figure>
          <img src={props.img1Src} alt={props.img1Alt} />
          <figcaption>{props.img1Legenda}</figcaption>
        </figure>
        <p>{props.paragrafo2}</p>
        <figure>
          <img src={props.img2Src} alt={props.img2Alt} />
          <figcaption>{props.img2Legenda}</figcaption>
        </figure>
      </article>
    </main>
  );
}