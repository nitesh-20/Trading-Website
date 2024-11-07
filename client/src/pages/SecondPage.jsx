import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SecondPage = () => {
  // Example items array with trading-related titles and subtitles
  const items = [
    { id: 1, title: 'Stock Market Insights', subtitle: 'Daily updates on market trends' },
    { id: 2, title: 'Forex Trading Tips', subtitle: 'Top strategies for currency trading' },
    { id: 3, title: 'Crypto News', subtitle: 'Latest on Bitcoin and Altcoins' }
  ];

  const [selectedId, setSelectedId] = useState(null);

  return (
    <div>
      {/* Map over the items and create clickable motion divs */}
      {items.map(item => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelectedId(item.id)}
          style={{
            padding: '20px',
            border: '1px solid #ccc',
            margin: '10px 0',
            cursor: 'pointer',
            backgroundColor: '#e0e0e0',  // Grey background color
          }}
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      {/* AnimatePresence for showing the selected item */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            style={{
              padding: '20px',
              border: '2px solid #007bff',
              margin: '20px 0',
              backgroundColor: '#e0e0e0',  // Grey background for the expanded view
            }}
          >
            <motion.h5>{items.find(item => item.id === selectedId).subtitle}</motion.h5>
            <motion.h2>{items.find(item => item.id === selectedId).title}</motion.h2>
            <motion.button
              onClick={() => setSelectedId(null)}
              style={{ marginTop: '10px', padding: '5px 10px', cursor: 'pointer' }}
            >
              Close
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SecondPage;
