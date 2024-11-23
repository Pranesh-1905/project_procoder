import React from 'react';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
const WelcomePage = ({ onNavigate }) => {
  const features = [
    { icon: '💻', title: 'Coding Cheatsheets', description: 'Quick references for various programming languages' },
    { icon: '📚', title: 'Interactive Tutorials', description: 'Learn coding concepts with hands-on examples' },
    { icon: '📊', title: 'Progress Tracking', description: 'Monitor your learning journey' },
  ];

  const cardStyle = {
    backgroundColor: '#1F2937',
    borderRadius: '0.5rem',
    padding: '2rem',
    color: 'white',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    fontWeight: 'bold',
    transition: 'all 300ms',
    cursor: 'pointer',
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#111827', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div style={cardStyle}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#A78BFA', marginBottom: '0.5rem' }}>Welcome to ProCoder</h1>
          <p style={{ fontSize: '1.25rem', color: '#9CA3AF' }}>Your Ultimate Coding Cheatsheet Platform</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {features.map((feature, index) => (
            <div key={index} style={{ backgroundColor: '#374151', borderRadius: '0.5rem', padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'semibold', marginBottom: '0.5rem', color: '#F3F4F6' }}>{feature.title}</h3>
              <p style={{ fontSize: '0.875rem', color: '#D1D5DB' }}>{feature.description}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button
            onClick={() => onNavigate('')}
            style={{ ...buttonStyle, backgroundColor: '#7C3AED', color: 'white' }}
          >
            Login
          </button>
          <button
            onClick={() => onNavigate('register')}
            style={{ ...buttonStyle, backgroundColor: '#4F46E5', color: 'white' }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;