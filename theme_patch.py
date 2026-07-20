from pathlib import Path

replacements = {
    "src/pages/Blog.js": [
        ("selection:bg-blue-600/30", "selection:bg-orange-500/30"),
        ("bg-blue-600/10", "bg-orange-500/10"),
        ("bg-blue-600/20", "bg-orange-500/20"),
        ("bg-slate-50 text-slate-900 min-h-screen font-sans selection:bg-orange-500/30", "bg-slate-50 text-slate-900 min-h-screen font-sans selection:bg-orange-500/30"),
    ],
    "src/pages/About.js": [
        ("bg-white border-t border-slate-900", "bg-white border-t border-slate-200"),
        ("border-t border-b border-slate-900", "border-t border-b border-slate-200"),
        ("border border-slate-900 rounded-lg overflow-hidden", "border border-slate-200 rounded-lg overflow-hidden"),
    ],
    "src/pages/Internship.js": [
        ("bg-white border-t border-b border-slate-900", "bg-white border-t border-b border-slate-200"),
        ("border border-slate-900 rounded-3xl p-8", "border border-slate-200 rounded-3xl p-8"),
        ("border-slate-900", "border-slate-200"),
    ],
    "src/pages/BacklinkGuide.js": [
        ("bg-gradient-to-r from-emerald-950/20 to-blue-950/20 border border-slate-200 rounded-2xl p-8 mb-12 shadow-md", "bg-gradient-to-r from-orange-100 to-orange-50 border border-slate-200 rounded-2xl p-8 mb-12 shadow-md"),
        ("bg-blue-600 hover:bg-blue-700 text-slate-900 font-semibold rounded-lg transition-colors shadow-md", "bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors shadow-md"),
        ("bg-blue-600 text-slate-900 font-semibold rounded-lg transition-colors shadow-md", "bg-orange-500 text-white font-semibold rounded-lg transition-colors shadow-md"),
        ("bg-gradient-to-r from-emerald-950/20 to-blue-950/20 border border-slate-200 rounded-2xl p-8 mb-12 shadow-md", "bg-gradient-to-r from-orange-100 to-orange-50 border border-slate-200 rounded-2xl p-8 mb-12 shadow-md"),
        ("bg-blue-500 text-slate-900 font-semibold rounded-lg", "bg-orange-500 text-white font-semibold rounded-lg"),
    ],
    "src/pages/DataScienceCourse.js": [
        ("bg-gray-700 rounded-xl", "bg-slate-100 rounded-xl"),
        ("bg-gray-700 rounded-lg border border-gray-600", "bg-slate-100 rounded-lg border border-slate-200"),
        ("bg-gray-700 rounded-xl hover:bg-gray-600 transition", "bg-slate-100 rounded-xl hover:bg-slate-100 transition"),
        ("bg-gray-700 rounded-lg", "bg-slate-100 rounded-lg"),
        ("bg-blue-600 text-slate-900 rounded-lg flex items-center justify-center text-sm font-bold", "bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm font-bold"),
        ("bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-slate-900 shadow-2xl", "bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-center text-slate-900 shadow-2xl"),
    ],
    "src/pages/DigitalMarketingCourse.js": [
        ("bg-gray-700 rounded-xl", "bg-slate-100 rounded-xl"),
        ("bg-gray-700 rounded-lg border border-gray-600", "bg-slate-100 rounded-lg border border-slate-200"),
        ("bg-gray-700 rounded-xl hover:bg-gray-600 transition", "bg-slate-100 rounded-xl hover:bg-slate-100 transition"),
        ("bg-blue-600 rounded-lg flex items-center justify-center text-sm font-bold", "bg-orange-500 rounded-lg flex items-center justify-center text-sm font-bold"),
        ("bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center shadow-2xl", "bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-center shadow-2xl"),
    ],
    "src/pages/FullStackCourse.js": [
        ("bg-gray-700 rounded-xl", "bg-slate-100 rounded-xl"),
        ("bg-gray-700 rounded-lg border border-gray-600", "bg-slate-100 rounded-lg border border-slate-200"),
        ("bg-gray-700 rounded-xl hover:bg-gray-600 transition", "bg-slate-100 rounded-xl hover:bg-slate-100 transition"),
        ("bg-blue-600 rounded-lg flex items-center justify-center text-sm font-bold", "bg-orange-500 rounded-lg flex items-center justify-center text-sm font-bold"),
        ("bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center shadow-2xl", "bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-center shadow-2xl"),
    ],
    "src/pages/JavaCourse.js": [
        ("bg-gray-700 rounded-xl", "bg-slate-100 rounded-xl"),
        ("bg-gray-700 rounded-lg border border-gray-600", "bg-slate-100 rounded-lg border border-slate-200"),
        ("bg-gray-700 rounded-xl hover:bg-gray-600 transition-all duration-300 transform border border-gray-600", "bg-slate-100 rounded-xl hover:bg-slate-100 transition-all duration-300 transform border border-slate-200"),
        ("bg-blue-600 text-slate-900 rounded-lg flex items-center justify-center text-sm font-bold", "bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm font-bold"),
        ("bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center shadow-2xl", "bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-center shadow-2xl"),
    ],
    "src/pages/MobileAppCourse.js": [
        ("bg-gray-700 rounded-xl", "bg-slate-100 rounded-xl"),
        ("bg-gray-700 rounded-lg border border-gray-600", "bg-slate-100 rounded-lg border border-slate-200"),
        ("bg-gray-700 rounded-xl hover:bg-gray-600 transition-all duration-300 transform border border-gray-600", "bg-slate-100 rounded-xl hover:bg-slate-100 transition-all duration-300 transform border border-slate-200"),
        ("bg-blue-600 text-slate-900 rounded-lg flex items-center justify-center text-sm font-bold", "bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm font-bold"),
        ("bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-slate-900 shadow-2xl", "bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-center text-slate-900 shadow-2xl"),
    ],
    "src/pages/PythonCourse.js": [
        ("bg-gray-700 rounded-xl", "bg-slate-100 rounded-xl"),
        ("bg-gray-700 rounded-lg border border-gray-600", "bg-slate-100 rounded-lg border border-slate-200"),
        ("bg-gray-700 rounded-xl hover:bg-gray-600 transition", "bg-slate-100 rounded-xl hover:bg-slate-100 transition"),
        ("bg-blue-600 rounded-lg flex items-center justify-center text-sm font-bold", "bg-orange-500 rounded-lg flex items-center justify-center text-sm font-bold"),
        ("bg-indigo-600 rounded-2xl p-12 text-center text-slate-900 shadow-2xl", "bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-center text-slate-900 shadow-2xl"),
    ],
    "src/pages/UiUxCourse.js": [
        ("bg-gray-700 rounded-xl", "bg-slate-100 rounded-xl"),
        ("bg-gray-700 rounded-lg border border-gray-600", "bg-slate-100 rounded-lg border border-slate-200"),
        ("bg-gray-700 rounded-xl hover:bg-gray-600 transition-all duration-300 transform border border-gray-600", "bg-slate-100 rounded-xl hover:bg-slate-100 transition-all duration-300 transform border border-slate-200"),
        ("bg-blue-600 text-slate-900 rounded-lg flex items-center justify-center text-sm font-bold", "bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm font-bold"),
        ("bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-slate-900 shadow-2xl", "bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-center text-slate-900 shadow-2xl"),
    ],
    "src/components/EnrollmentModal.js": [
        ("className=\"relative w-full max-w-2xl bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden\"", "className=\"relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden\""),
        ("focus:border-blue-500", "focus:border-orange-500"),
        ("className=\"block text-sm font-semibold text-slate-300 mb-2\"", "className=\"block text-sm font-semibold text-slate-900 mb-2\""),
        ("className=\"w-full bg-gray-700 border border-gray-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500\"", "className=\"w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500\""),
        ("className=\"w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold flex justify-center items-center gap-2\"", "className=\"w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold flex justify-center items-center gap-2\""),
        ("text-blue-400", "text-orange-500"),
    ],
    "src/components/InternshipModal.js": [
        ("className=\"relative w-full max-w-lg bg-[#0f172a]/95 rounded-3xl shadow-2xl overflow-hidden animate-scale-in\"", "className=\"relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-scale-in\""),
        ("bg-gradient-to-r from-secondary-600 to-primary-600 p-6 text-white", "bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white"),
        ("className=\"block text-sm font-semibold text-gray-700 mb-2\"", "className=\"block text-sm font-semibold text-slate-900 mb-2\""),
        ("bg-[#0f172a]", "bg-slate-50"),
        ("focus:border-blue-500 focus:ring-2 focus:ring-blue-200", "focus:border-orange-500 focus:ring-2 focus:ring-orange-200"),
        ("text-primary-600", "text-orange-600"),
        ("bg-gradient-to-r from-secondary-600 to-primary-600 text-white font-semibold hover:opacity-90 transition-all flex justify-center items-center gap-2\"", "bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:opacity-90 transition-all flex justify-center items-center gap-2\""),
    ],
    "src/components/ServiceBookingModal.js": [
        ("className=\"relative w-full max-w-2xl bg-[#0f172a]/95 rounded-3xl shadow-2xl overflow-hidden\"", "className=\"relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden\""),
        ("bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-500 p-8 text-white relative overflow-hidden", "bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-white relative overflow-hidden"),
        ("bg-[#0f172a]/10", "bg-orange-500/10"),
        ("className=\"w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all resize-none\"", "className=\"w-full rounded-xl border-2 border-slate-200 px-4 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all resize-none\""),
        ("from-primary-600 to-secondary-500 text-white font-bold text-lg hover:shadow-lg transition-all flex justify-center items-center gap-3 disabled:opacity-50\"", "from-orange-500 to-orange-600 text-white font-bold text-lg hover:shadow-lg transition-all flex justify-center items-center gap-3 disabled:opacity-50\""),
        ("text-primary-600", "text-orange-600"),
        ("bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-100", "bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-100"),
    ],
    "src/components/FloatingEnrollButton.js": [
        ("bg-gradient-to-r from-blue-600 to-blue-700", "bg-gradient-to-r from-orange-500 to-orange-600"),
        ("hover:from-secondary-600 hover:to-primary-600", "hover:from-orange-600 hover:to-orange-700"),
    ],
}

root = Path('.').resolve()

for rel_path, changes in replacements.items():
    path = root / rel_path
    if not path.exists():
        print(f'MISSING FILE {path}')
        continue
    content = path.read_text(encoding='utf-8')
    original = content
    for old, new in changes:
        if old not in content:
            print(f'WARNING: pattern not found in {rel_path}: {old}')
        content = content.replace(old, new)
    if content != original:
        path.write_text(content, encoding='utf-8')
        print(f'UPDATED {rel_path}')
    else:
        print(f'NO CHANGE {rel_path}')
