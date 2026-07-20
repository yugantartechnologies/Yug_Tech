from pathlib import Path
from itertools import product

root = Path(r"c:\Users\Admin\Downloads\38da004a-960a-4885-aa86-ebb40351b4f0\Yuganter_Technologies-main")
files = list(root.glob('src/pages/*.js')) + list(root.glob('src/components/*.js'))
replacements = {
    'className="bg-white rounded-2xl shadow-xl p-12 mb-16 border border-slate-200"': 'className="site-card rounded-2xl p-12 mb-16"',
    'className="bg-white border border-slate-200 p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl hover:border-orange-500/20 transition duration-300 text-slate-900"': 'className="site-card rounded-3xl p-8 text-center text-slate-900"',
    'className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:border-orange-500/20 transition duration-300 flex flex-col h-full"': 'className="site-card rounded-3xl p-8 flex flex-col h-full"',
    'className="bg-white rounded-xl shadow-lg p-6 border border-slate-200 flex flex-col justify-between"': 'className="site-card rounded-xl p-6 flex flex-col justify-between"',
    'className="bg-white border border-slate-200 rounded-lg p-4 mt-auto"': 'className="site-card rounded-lg p-4 mt-auto"',
    'className="bg-white border border-slate-200 rounded-xl shadow-lg p-8 mb-12"': 'className="site-card rounded-xl p-8 mb-12"',
    'className="bg-white border border-slate-200 rounded-lg p-4 mt-auto"': 'className="site-card rounded-lg p-4 mt-auto"',
    'className="bg-white rounded-xl shadow-xl p-12 mb-16 border border-slate-200"': 'className="site-card rounded-xl p-12 mb-16"',
    'className="bg-white border border-slate-200 rounded-xl shadow-lg p-8 mb-12"': 'className="site-card rounded-xl p-8 mb-12"',
    'className="bg-white rounded-2xl shadow-xl p-12 mb-16 border border-slate-200"': 'className="site-card rounded-2xl p-12 mb-16"',
    'className="bg-white border border-slate-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:border-orange-500/20 transition duration-300"': 'className="site-card rounded-2xl p-6"',
    'className="bg-white border border-slate-200 rounded-xl shadow-lg p-8 mb-12"': 'className="site-card rounded-xl p-8 mb-12"',
}

modified = []
for file in files:
    text = file.read_text(encoding='utf-8')
    original = text
    for old, new in replacements.items():
        text = text.replace(old, new)
    if 'bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur opacity-25 group-hover:opacity-60 transition duration-500' in text:
        text = text.replace(
            '              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur opacity-25 group-hover:opacity-60 transition duration-500"></div>\n\n              ',
            ''
        )
    if text != original:
        file.write_text(text, encoding='utf-8')
        modified.append(str(file.relative_to(root)))

print('modified', len(modified))
for f in modified:
    print(f)
