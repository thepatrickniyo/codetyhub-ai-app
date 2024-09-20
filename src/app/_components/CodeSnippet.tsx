const CodeSnippet = () => {
return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto mt-16">
      <div className="flex items-center space-x-2 bg-gray-700 px-4 py-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <div className="text-gray-400 text-sm ml-2">example.js</div>
      </div>
      <pre className="p-4 text-green-400 font-mono text-sm">
        <code>{`function learnCoding() {
    const skills = ['JavaScript', 'React', 'Node.js'];
    const you = new Developer();
    
    skills.forEach(skill => {
      you.learn(skill);
    });
    
    return "You're now a pro developer!";
  }
  
  learnCoding();`}</code>
      </pre>
    </div>
  );
}

export default CodeSnippet;