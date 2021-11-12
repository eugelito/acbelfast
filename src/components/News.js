import "./News.scss";

function News() {
  return (
    <section class="section__container">
      <div class="card__container card__container--news--columnOne">
        <h2>News</h2>
        <div class="card">
          {" "}
          { /** Loop through news data from Google Sheets API */}
          <h3>Heading</h3>
          <p class="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <hr className="card__news--divider"></hr>
          <h3>Heading</h3>
          <p class="card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          { /** Loop through news data from Google Sheets API */}
        </div>
      </div>
    </section>
  );
}

export default News;
