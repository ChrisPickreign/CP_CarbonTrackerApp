import React from 'react';
import "../index.css";

const Resources = () => {
  return (
    <div className="resources-container">
      {/* Left Column - Description */}
      <div className="resources-description">
        <h1 className="resources-title">🌿 Understanding Your Carbon Footprint</h1>
        <p>
          Reducing your carbon footprint is an essential step toward living more sustainably. Whether
          you are new to the concept or already taking steps to reduce emissions, understanding where
          your footprint comes from helps guide impactful action.
        </p>
        <p>
          Start by identifying high-emission activities in your daily life: transportation, diet,
          home energy use, and purchasing habits. Set measurable goals, track your activities, and
          seek sustainable alternatives. Small changes over time can compound into meaningful impact.
        </p>
        <p>
          This page includes resources to educate, inspire, and empower you to make eco-conscious
          choices. Dive into the articles on the right to learn more about climate-friendly
          practices.
        </p>
      </div>

    {/* Right Column - Articles */}
    <div className="resources-articles">
    <h2 className="articles-heading">🌿 Featured Articles</h2>
    <ul className="article-list">
        <li>
        <a 
            href="https://cotap.org/reduce-carbon-footprint/?gad_source=1&gclid=EAIaIQobChMIhaKr2dChjAMVNjYIBR3Q-xkTEAAYAiAAEgLWB_D_BwE" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            🌱 25+ Ways to Reduce Your Carbon Footprint
        </a>
        </li>
        <li>
        <a 
            href="https://explore.panda.org/climate/how-to-reduce-your-carbon-footprint" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            ♻️ How You Can Reduce Your Carbon Footprint
        </a>
        </li>
        <li>
        <a 
            href="https://sustainabletravel.org/our-work/carbon-offsets/calculate-footprint/" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            ✈️ Calculate Your Travel Carbon Footprint
        </a>
        </li>
        <li>
        <a 
            href="https://www.un.org/en/climatechange/science/climate-issues/food" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            🥗 Food and Climate Change: Healthy Diets for a Healthier Planet
        </a>
        </li>
        <li>
        <a 
            href="https://forterra.org/carbon-calculator-individuals/?gad_source=1&gclid=EAIaIQobChMI0ufxvtGhjAMVQET_AR2KHCtJEAAYASAAEgKJ__D_BwE" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            🌍 Your Footprint on Earth: How Much CO₂ Do You Consume?
        </a>
        </li>
    </ul>
    </div>
    </div>

  );
};

export default Resources;