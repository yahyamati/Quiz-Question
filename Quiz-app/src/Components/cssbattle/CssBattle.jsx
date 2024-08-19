import React, { useState } from 'react';
import CodeEditor from './CodeEditor';
import Output from './Output';
import Comparison from './Comparison';
const CSSBattle = () => {
  const [combinedCode, setCombinedCode] = useState('');

  const targetImage = '/src/content/3.png'; // Replace with your target image path

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">CSS Battle</h2>
      <div className="flex flex-wrap justify-between">
        <div className="w-full sm:w-[500px] p-2">
          <CodeEditor onChange={setCombinedCode} />
        </div>
        <div className="w-[435px] p-2">
          <Output combinedCode={combinedCode} targetImage={targetImage} />
        </div>
        <div>
          <Comparison targetImage={targetImage}></Comparison>
        </div>
      </div>
    </div>
  );
};

export default CSSBattle;