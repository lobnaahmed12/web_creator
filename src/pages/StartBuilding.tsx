import React from 'react';
import { ArrowLeft, Code, Database, Globe, Layout, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

function StartBuilding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation */}
        <Link
          to="/"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Start Your Development Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive collection of development resources and tools
            to begin building your next great project.
          </p>
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Development */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Layout className="h-8 w-8 text-indigo-600" />
              <h3 className="text-xl font-semibold ml-3">Frontend Development</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Master modern frontend frameworks and libraries to create stunning user interfaces.
            </p>
            <ul className="space-y-2 text-gray-500">
              <li>• React & TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• Responsive Design</li>
            </ul>
          </div>

          {/* Backend Development */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Database className="h-8 w-8 text-indigo-600" />
              <h3 className="text-xl font-semibold ml-3">Backend Development</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Build robust and scalable server-side applications with modern technologies.
            </p>
            <ul className="space-y-2 text-gray-500">
              <li>• Node.js & Express</li>
              <li>• Database Design</li>
              <li>• API Development</li>
            </ul>
          </div>

          {/* Full Stack Development */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Code className="h-8 w-8 text-indigo-600" />
              <h3 className="text-xl font-semibold ml-3">Full Stack Development</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Learn to build complete web applications from front to back.
            </p>
            <ul className="space-y-2 text-gray-500">
              <li>• Modern Stack Integration</li>
              <li>• State Management</li>
              <li>• Authentication & Security</li>
            </ul>
          </div>

          {/* DevOps */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Terminal className="h-8 w-8 text-indigo-600" />
              <h3 className="text-xl font-semibold ml-3">DevOps</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Learn deployment, CI/CD, and infrastructure management.
            </p>
            <ul className="space-y-2 text-gray-500">
              <li>• Cloud Deployment</li>
              <li>• Docker & Containers</li>
              <li>• CI/CD Pipelines</li>
            </ul>
          </div>

          {/* Web Performance */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Globe className="h-8 w-8 text-indigo-600" />
              <h3 className="text-xl font-semibold ml-3">Web Performance</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Optimize your applications for speed and efficiency.
            </p>
            <ul className="space-y-2 text-gray-500">
              <li>• Load Time Optimization</li>
              <li>• Code Splitting</li>
              <li>• Performance Monitoring</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartBuilding;