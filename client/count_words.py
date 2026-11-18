import re

home_components = [
    'client/src/components/home/Hero.jsx',
    'client/src/components/home/Ticker.jsx',
    'client/src/components/home/ProductShowcase.jsx',
    'client/src/components/home/ProSpecsSection.jsx',
    'client/src/components/home/MyTraining.jsx',
    'client/src/components/home/GoalkeeperGlovesSection.jsx',
    'client/src/components/home/ClothingSection.jsx',
    'client/src/components/home/SustainabilitySection.jsx',
    'client/src/components/home/FootballHistorySlider.jsx',
    'client/src/components/home/BlogSection.jsx',
    'client/src/components/home/FAQSection.jsx'
]

total_words = 0
for fpath in home_components:
    try:
        with open(fpath, 'r', encoding='utf-8') as f:
            code = f.read()
        
        # Strip imports, attributes, classes
        text = re.sub(r'import\s+.*?;', '', code)
        text = re.sub(r'className="[^"]*"', '', text)
        text = re.sub(r'style={{[^}]*}}', '', text)
        text = re.sub(r'<[^>]+>', ' ', text)
        text = re.sub(r'[{}]', ' ', text)
        words = [w for w in text.split() if len(w) > 1 and not w.startswith('http')]
        print(f"{fpath.split('/')[-1]}: {len(words)} words")
        total_words += len(words)
    except Exception as e:
        print(fpath, e)

print(f"\nTOTAL HOMEPAGE WORDS: {total_words}")
