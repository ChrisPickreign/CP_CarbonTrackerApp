import React from "react";
import "../index.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-box">
        <h1 className="landing-title">🌍 Welcome to the Carbon Tracker App</h1>
        <p className="landing-description">
          The <strong>Carbon Tracker App</strong> is a modern <strong>Vite + React</strong> application designed to help users monitor and reduce their <strong>carbon footprint</strong>. Using an engaging and personalized interface, users can <strong>track emission activities, view their progress over time,</strong> and learn how to make eco-friendly lifestyle changes.
        </p>

        <ul className="landing-features">
          <li><strong>📝 Activity Logging:</strong> Input activities that automatically sync with a <em>visual dashboard</em> to track your carbon footprint over time.</li>
          <li><strong>📊 Summary Views:</strong> View a <em>visual dashboard</em> with interactive <em>charts and graphs</em> to track your carbon footprint over time.</li>
          <li><strong>💾 Local Storage:</strong> Your data is <em>saved in the browser</em>, ensuring <em>privacy and offline access</em>.</li>
          <li><strong>📈 Data Visualization:</strong> View an <em>interactive chart</em> to visualize your carbon footprint and identify areas for improvement.</li>
          <li><strong>🌿 Resource Library:</strong> View practical tips and resources for sustainable living, encouraging users to adopt eco-friendly habits.</li>
          <li><strong>Click on the activity logging tab to get started tracking!</strong></li>
        </ul>
      </div>
    </div>
  );
};

export default LandingPage;

