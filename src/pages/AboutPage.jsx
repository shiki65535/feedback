import React from 'react';
import Card from '../components/shared/Card';

function AboutPage() {
  return <Card>
   <div className="about">
     <h1>About This Project</h1>
     <p>This is an app for feedback</p>
     <p>version 1.0.0</p>
     <p>
       <a href="/">back to home</a>
     </p>
   </div>
  </Card>;
}

export default AboutPage;
