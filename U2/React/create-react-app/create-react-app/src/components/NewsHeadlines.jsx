import React from "react";

const NewsHeadlines = () => {
  const headlines = [
    "AI Revolution Reshaping Global Industries",
    "Stock Markets Show Unexpected Growth Amid Uncertainty",
    "Breakthrough in Renewable Energy Technology",
    "Major Advancements in Space Exploration",
    "Healthcare Sector Sees Innovative Transformations"
  ];

  return (
    <div className="newspaper">
      <header className="masthead">
        <h1>The Daily Tech</h1>
        <p className="edition">May 7, 2026 | Morning Edition</p>
      </header>

      <section className="news-grid">
        {headlines.map((headline, index) => (
          <article key={index} className={`news ${index === 0 ? "main" : ""}`}>
            <h2>{headline}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default NewsHeadlines;