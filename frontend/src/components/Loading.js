import React, { useState, useEffect } from 'react';
import '../styles/loading.css';
export default function Loading() {
   
      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection:'column' }}>
            <h2>Loading...</h2>
            
            <h4 style={{display:"inline"}}>Takes time to Load as the backend hosted on Free Tier🫡🫡</h4>
        </div>
        
      );
}
