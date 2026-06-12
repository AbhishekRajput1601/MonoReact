import React, { useState, useRef } from 'react';
import { X } from 'lucide-react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    course: 'Web Development',
    bio: '',
    skills: [],
    isActive: true,
  });

  const [skillInput, setSkillInput] = useState('');
  const skillInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddSkill = () => {
    if (skillInput.trim() && formData.skills.length < 10) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, skillInput.trim()],
      }));
      setSkillInput('');
      skillInputRef.current?.focus();
    }
  };

  const handleRemoveSkill = (index) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Registration submitted successfully!');
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const stateSnapshot = {
    name: formData.fullName || 'John Doe',
    email: formData.email || 'user@example.com',
    course: formData.course || 'Web Development',
    bio: formData.bio || 'Bio text here...',
    skills: formData.skills.length > 0 ? formData.skills : ['React'],
  };

  const bioLength = formData.bio.length;
  const maxBioLength = 150;

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-blue-100 py-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-6 mx-8">
  
          <div className="bg-white rounded-2xl shadow-2xl p-5 border-2 border-slate-200 hover:border-slate-300 transition ml-4 mr-2">
            <h2 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
              <div className="w-8 h-8 bg-linear-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">📝</span>
              </div>
              Registration form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">
         
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Aarya Sharma"
                  className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition hover:border-slate-300 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="9876543210"
                  className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition hover:border-slate-300 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition hover:border-slate-300 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Course
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition bg-white hover:border-slate-300 text-sm"
                >
                  <option>Web Development</option>
                  <option>Mobile Development</option>
                  <option>Data Science</option>
                  <option>UI/UX Design</option>
                  <option>DevOps</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Bio
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  placeholder="Final year CS student passionate about building web apps and exploring full-stack development."
                  maxLength={maxBioLength}
                  rows="3"
                  className="w-full px-3 py-2 border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition resize-none hover:border-slate-300 text-sm"
                />
                <div className="text-xs text-slate-500 mt-2 text-right">
                  {bioLength} / {maxBioLength}
                </div>
              </div>

          
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Skills
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    ref={skillInputRef}
                    type="text"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type a skill, press Enter or Add"
                    className="flex-1 px-3 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition hover:border-slate-300 text-xs"
                  />
                  <button
                    type="button"
                    onClick={handleAddSkill}
                    className="px-3 py-1.5 bg-linear-to-br from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition font-semibold flex items-center gap-1 shadow-lg hover:shadow-xl border border-indigo-700 text-xs"
                  >
                    + Add
                  </button>
                </div>

           
                <div className="flex flex-wrap gap-2">
                  {formData.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-linear-to-br from-indigo-50 to-purple-50 text-slate-700 px-2 py-2 rounded-full text-xs flex items-center gap-1 hover:from-indigo-100 hover:to-purple-100 transition border-2 border-indigo-200 hover:border-indigo-400"
                    >
                      <span>{skill}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveSkill(index)}
                        className="text-slate-400 hover:text-slate-600 transition"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

          
              <button
                type="submit"
                className=" mt-4 w-full bg-linear-to-br from-indigo-600 to-purple-600 text-white py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition font-semibold text-sm shadow-xl hover:shadow-2xl border-2 border-indigo-700 hover:border-indigo-800"
              >
                ▶ Submit registration
              </button>
            </form>
          </div>

       
          <div className="bg-white rounded-2xl shadow-2xl p-5 border-2 border-slate-200 hover:border-slate-300 transition ml-2 mr-4">
            <h2 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
              <span className="text-2xl">👁️</span>
              Live preview
            </h2>

            <div className="bg-linear-to-br from-white via-indigo-50 to-blue-50 rounded-2xl p-5 mb-4 border-2 border-slate-100 shadow-2xl hover:shadow-2xl transition">
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-start gap-3">
                  <div className="w-16 h-16 bg-linear-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white hover:shadow-xl transition">
                    {getInitials(formData.fullName) || '?'}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {formData.fullName || 'Your Name'}
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {formData.email || 'your.email@example.com'}
                    </p>
                  </div>
                </div>
                {formData.isActive && (
                  <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border-2 border-emerald-300 shadow-md">
                    ✓ Active
                  </span>
                )}
              </div>

            
              <div className="mb-5">
                <span className="inline-block bg-linear-to-br from-blue-100 to-indigo-100 text-indigo-900 text-xs font-bold px-4 py-1.5 rounded-full border-2 border-indigo-300 shadow-md hover:shadow-lg transition">
                  💻 {formData.course}
                </span>
              </div>

       
              <p className="text-xs text-slate-700 leading-relaxed mb-5 font-medium">
                {formData.bio || 'Add your bio to see it here...'}
              </p>

              
              {formData.skills.length > 0 && (
                <div className="mb-5">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">
                    🎯 Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {formData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-white text-slate-700 text-xs font-semibold px-3 py-1 rounded-full border-2 border-indigo-300 hover:border-indigo-500 transition shadow-sm hover:shadow-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              
              <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-xl p-3 border-2 border-blue-300 shadow-lg hover:shadow-xl transition">
                <h4 className="text-xs font-bold text-blue-900 uppercase tracking-widest mb-2">
                  📊 State Snapshot (useState)
                </h4>
                <pre className="text-xs text-blue-900 overflow-auto p-2 rounded-lg bg-white border-2 border-blue-200 font-mono leading-relaxed">
{`{
  name: "${stateSnapshot.name}",
  email: "${stateSnapshot.email}",
  course: "${stateSnapshot.course}",
  bio: "${stateSnapshot.bio.substring(0, 30)}${stateSnapshot.bio.length > 30 ? '...' : ''}",
  skills: ${JSON.stringify(stateSnapshot.skills)},
  isActive: ${formData.isActive}
}`}
                </pre>
              </div>
            </div>

    
            <div className="bg-linear-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-3 text-xs text-blue-900 shadow-lg hover:shadow-xl transition">
              <p className="font-bold mb-1">✨ Real-time Sync</p>
              <p>
                All form inputs connected with <code className="bg-white px-2.5 py-1 rounded-lg font-mono text-xs border-2 border-blue-300 font-semibold">useState</code>  <code className="bg-white px-2.5 py-1 rounded-lg font-mono text-xs border-2 border-blue-300 font-semibold">useRef</code> hooks. Preview updates instantly!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}